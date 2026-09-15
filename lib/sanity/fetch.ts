import type { PortableTextBlock } from "@portabletext/types";
import { isSanityConfigured } from "@/sanity/env";
import { getSanityClient } from "@/lib/sanity/client";
import {
  activeCollectiveSupportersQuery,
  communityCollectiveSettingsQuery,
  postBySlugQuery,
  postSlugsQuery,
  postsQuery,
  publishedTestimonialsQuery,
  upcomingCommunityEventsQuery,
} from "@/lib/sanity/queries";
import type {
  BlogCategory,
  BlogPost,
  CollectiveRecognitionLevel,
  CollectiveSupporter,
  CommunityCollectiveSettings,
  CommunityEvent,
  PostFeaturedImage,
  SanityImageWithAlt,
} from "@/lib/sanity/types";
import {
  ANONYMOUS_SUPPORTER_LABEL,
} from "@/lib/community-collective/supporter-display";
import { estimateReadingMinutes } from "@/lib/sanity/reading-time";
import {
  categoryLabelFor,
  testimonials,
  type Testimonial,
  type TestimonialCategory,
} from "@/data/testimonials";

const fetchOptions = { next: { tags: ["blog-posts"], revalidate: 60 } };
const slugFetchOptions = (slug: string) => ({
  next: { tags: [`blog-post-${slug}`, "blog-posts"], revalidate: 60 },
});

type SanityPostRow = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: BlogCategory;
  publishDate: string;
  featuredImage?: PostFeaturedImage | null;
  body?: PortableTextBlock[];
  bodyText?: string;
  author?: string;
  seoTitle?: string;
  seoDescription?: string;
};

function mapPost(row: SanityPostRow, includeBody = false): BlogPost {
  const body = includeBody ? row.body : undefined;
  const readingMinutes = row.bodyText
    ? Math.max(1, Math.ceil(row.bodyText.split(/\s+/).filter(Boolean).length / 200))
    : estimateReadingMinutes(row.excerpt, body);

  return {
    _id: row._id,
    title: row.title,
    slug: row.slug,
    excerpt: row.excerpt,
    category: row.category,
    publishDate: row.publishDate,
    featuredImage: row.featuredImage,
    body,
    author: row.author || "Gemma Cawley",
    seoTitle: row.seoTitle,
    seoDescription: row.seoDescription,
    readingMinutes,
  };
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  if (!isSanityConfigured()) return [];

  try {
    const rows = await getSanityClient().fetch<SanityPostRow[]>(postsQuery, {}, fetchOptions);
    return rows.map((row) => mapPost(row));
  } catch (error) {
    console.error("[blog] Failed to fetch posts:", error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!isSanityConfigured()) return null;

  try {
    const row = await getSanityClient().fetch<SanityPostRow | null>(
      postBySlugQuery,
      { slug },
      slugFetchOptions(slug),
    );
    return row ? mapPost(row, true) : null;
  } catch (error) {
    console.error(`[blog] Failed to fetch post "${slug}":`, error);
    return null;
  }
}

export async function getPublishedPostSlugs(): Promise<string[]> {
  if (!isSanityConfigured()) return [];

  try {
    return await getSanityClient().fetch<string[]>(
      postSlugsQuery,
      {},
      { next: { tags: ["blog-slugs", "blog-posts"], revalidate: 60 } },
    );
  } catch (error) {
    console.error("[blog] Failed to fetch slugs:", error);
    return [];
  }
}

/** Cache tags for Community Collective content — also used by /api/revalidate. */
export const COMMUNITY_EVENTS_TAG = "community-events";
export const COLLECTIVE_SETTINGS_TAG = "collective-settings";
export const COLLECTIVE_SUPPORTERS_TAG = "collective-supporters";

/**
 * Used when Sanity has no settings document yet (or isn't configured), so the page
 * works out of the box: applications open, both support formats available.
 */
export const defaultCollectiveSettings: CommunityCollectiveSettings = {
  applicationsStatus: "open",
  supporterInquiriesStatus: "open",
  inPersonAvailable: true,
  virtualAvailable: true,
  reducedRateCapacity: "available",
};

type SanityCollectiveSettingsRow = Partial<CommunityCollectiveSettings> | null;

function trimmed(value: string | undefined): string | undefined {
  const next = value?.trim();
  return next ? next : undefined;
}

/** Numbers are only shown when they represent real, non-zero impact. */
function positiveNumber(value: number | undefined): number | undefined {
  return typeof value === "number" && Number.isFinite(value) && value > 0
    ? value
    : undefined;
}

export async function getCommunityCollectiveSettings(): Promise<CommunityCollectiveSettings> {
  if (!isSanityConfigured()) return defaultCollectiveSettings;

  try {
    const row = await getSanityClient().fetch<SanityCollectiveSettingsRow>(
      communityCollectiveSettingsQuery,
      {},
      { next: { tags: [COLLECTIVE_SETTINGS_TAG], revalidate: 60 } },
    );

    if (!row) return defaultCollectiveSettings;

    return {
      applicationsStatus:
        row.applicationsStatus === "paused" ? "paused" : "open",
      supporterInquiriesStatus:
        row.supporterInquiriesStatus === "paused" ? "paused" : "open",
      inPersonAvailable: row.inPersonAvailable !== false,
      virtualAvailable: row.virtualAvailable !== false,
      reducedRateCapacity: row.reducedRateCapacity ?? "available",
      statusMessage: trimmed(row.statusMessage),
      impactYear: trimmed(row.impactYear),
      familiesSupported: positiveNumber(row.familiesSupported),
      careHours: positiveNumber(row.careHours),
      programsProvided: positiveNumber(row.programsProvided),
      communityEventsCount: positiveNumber(row.communityEventsCount),
      communityPartnersCount: positiveNumber(row.communityPartnersCount),
      valueOfSupport: positiveNumber(row.valueOfSupport),
      impactMessage: trimmed(row.impactMessage),
      impactStory: trimmed(row.impactStory),
      impactImage: row.impactImage?.asset ? row.impactImage : undefined,
    };
  } catch (error) {
    console.error("[collective] Failed to fetch settings:", error);
    return defaultCollectiveSettings;
  }
}

/** Today's date (YYYY-MM-DD) where the practice operates, so events expire locally. */
function localToday(): string {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const part = (type: string) =>
    parts.find((entry) => entry.type === type)?.value ?? "";
  return `${part("year")}-${part("month")}-${part("day")}`;
}

export async function getUpcomingCommunityEvents(): Promise<CommunityEvent[]> {
  if (!isSanityConfigured()) return [];

  try {
    return await getSanityClient().fetch<CommunityEvent[]>(
      upcomingCommunityEventsQuery,
      { today: localToday() },
      { next: { tags: [COMMUNITY_EVENTS_TAG], revalidate: 60 } },
    );
  } catch (error) {
    console.error("[collective] Failed to fetch community events:", error);
    return [];
  }
}

type SanitySupporterRow = {
  _id: string;
  name?: string;
  websiteUrl?: string;
  description?: string;
  recognitionLevel?: string;
  displayAnonymously?: boolean;
  featured?: boolean;
  displayOrder?: number;
  logo?: SanityImageWithAlt | null;
};

function toRecognitionLevel(
  value: string | undefined,
): CollectiveRecognitionLevel {
  if (value === "featured") return "featured";
  if (value === "champion") return "champion";
  if (value === "lead") return "lead";
  return "supporter";
}

/**
 * Maps CMS rows to public cards.
 * Identifying details are stripped when the supporter is anonymous.
 * Financial and administrative fields are never queried.
 */
function toPublicSupporter(row: SanitySupporterRow): CollectiveSupporter {
  const anonymous = row.displayAnonymously === true;

  return {
    _id: row._id,
    name: anonymous
      ? ANONYMOUS_SUPPORTER_LABEL
      : row.name?.trim() || "Supporter",
    logo: anonymous ? null : row.logo,
    websiteUrl: anonymous ? undefined : trimmed(row.websiteUrl),
    description: anonymous ? undefined : trimmed(row.description),
    recognitionLevel: toRecognitionLevel(row.recognitionLevel),
    featured: row.featured === true,
    displayOrder: typeof row.displayOrder === "number" ? row.displayOrder : 0,
  };
}

export async function getActiveCollectiveSupporters(): Promise<CollectiveSupporter[]> {
  if (!isSanityConfigured()) return [];

  try {
    const rows = await getSanityClient().fetch<SanitySupporterRow[]>(
      activeCollectiveSupportersQuery,
      {},
      { next: { tags: [COLLECTIVE_SUPPORTERS_TAG], revalidate: 60 } },
    );
    return rows.map(toPublicSupporter);
  } catch (error) {
    console.error("[collective] Failed to fetch supporters:", error);
    return [];
  }
}

export const TESTIMONIALS_TAG = "testimonials";

const TESTIMONIAL_CATEGORIES: TestimonialCategory[] = [
  "postpartum-doula",
  "feeding-lactation",
  "infant-sleep",
  "sleep-support",
  "postpartum-lactation",
  "other",
];

type SanityTestimonialRow = {
  _id: string;
  name?: string;
  fullQuote?: string;
  shortQuote?: string;
  category?: string;
  contextLine?: string;
  locationLine?: string;
  year?: string;
  displayOrder?: number;
  featured?: boolean;
};

function toTestimonialCategory(value: string | undefined): TestimonialCategory {
  if (value && TESTIMONIAL_CATEGORIES.includes(value as TestimonialCategory)) {
    return value as TestimonialCategory;
  }
  return "other";
}

function toPublicTestimonial(row: SanityTestimonialRow): Testimonial | null {
  const name = row.name?.trim();
  const fullQuote = row.fullQuote;
  if (!name || !fullQuote) return null;

  const category = toTestimonialCategory(row.category);
  const categoryLabel = categoryLabelFor(category);
  const shortQuote = row.shortQuote?.trim() || fullQuote.trim();

  return {
    id: row._id,
    name,
    fullQuote,
    shortQuote,
    category,
    categoryLabel,
    contextLine: row.contextLine?.trim() || categoryLabel,
    locationLine: row.locationLine?.trim() || "",
    featured: row.featured === true,
    year: trimmed(row.year),
    displayOrder: typeof row.displayOrder === "number" ? row.displayOrder : 0,
  };
}

/**
 * Published testimonials for the public Testimonials page.
 * Falls back to the local seed if Sanity is unavailable so the page does not crash.
 */
export async function getPublishedTestimonials(): Promise<Testimonial[]> {
  if (!isSanityConfigured()) return testimonials;

  try {
    const rows = await getSanityClient().fetch<SanityTestimonialRow[]>(
      publishedTestimonialsQuery,
      {},
      { next: { tags: [TESTIMONIALS_TAG], revalidate: 60 } },
    );
    const published = rows
      .map(toPublicTestimonial)
      .filter((item): item is Testimonial => item !== null);
    return published.length > 0 ? published : testimonials;
  } catch (error) {
    console.error("[testimonials] Failed to fetch testimonials:", error);
    return testimonials;
  }
}

/** Featured testimonials for the existing homepage preview. */
export async function getFeaturedTestimonials(): Promise<Testimonial[]> {
  const published = await getPublishedTestimonials();
  return published.filter((item) => item.featured);
}
