import type { PortableTextBlock } from "@portabletext/types";

export type BlogCategory =
  | "postpartum-support"
  | "lactation-feeding"
  | "sleep-support"
  | "preparing-for-baby"
  | "parenting-community";

export type SanityImageAsset = {
  _id: string;
  url: string;
  metadata?: { dimensions?: { width: number; height: number } };
};

/** An image field with authored alt text, as projected by the GROQ queries. */
export type SanityImageWithAlt = {
  alt?: string;
  asset?: SanityImageAsset;
};

export type PostFeaturedImage = SanityImageWithAlt;

export type BlogPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: BlogCategory;
  publishDate: string;
  featuredImage?: PostFeaturedImage | null;
  body?: PortableTextBlock[];
  author?: string;
  seoTitle?: string;
  seoDescription?: string;
  readingMinutes: number;
  isPlaceholder?: boolean;
};

export type CommunityEventFormat = "in-person" | "virtual" | "hybrid";

export type CommunityEventStatus = "upcoming" | "past" | "cancelled";

export type CommunityEvent = {
  _id: string;
  title: string;
  slug: string;
  shortDescription: string;
  /** Date-only string (YYYY-MM-DD) from the Sanity `date` field. */
  eventDate: string;
  startTime?: string;
  endTime?: string;
  format: CommunityEventFormat;
  location?: string;
  registrationUrl?: string;
  featuredImage?: SanityImageWithAlt | null;
  featured: boolean;
  status: CommunityEventStatus;
};

export type CollectiveApplicationsStatus = "open" | "paused";

export type ReducedRateCapacity = "available" | "limited" | "unavailable";

export type CommunityCollectiveSettings = {
  applicationsStatus: CollectiveApplicationsStatus;
  supporterInquiriesStatus: CollectiveApplicationsStatus;
  inPersonAvailable: boolean;
  virtualAvailable: boolean;
  reducedRateCapacity: ReducedRateCapacity;
  statusMessage?: string;
  impactYear?: string;
  familiesSupported?: number;
  careHours?: number;
  programsProvided?: number;
  communityEventsCount?: number;
  communityPartnersCount?: number;
    valueOfSupport?: number;
  impactMessage?: string;
  impactStory?: string;
  impactImage?: SanityImageWithAlt | null;
};

export type CollectiveSupporterType =
  | "individual_family"
  | "business_sponsor"
  | "community_partner"
  | "event_sponsor";

export type CollectiveRecognitionLevel =
  | "supporter"
  | "featured"
  | "champion"
  | "lead";

/** Public supporter card data. Financial and administrative tracking is not stored or returned. */
export type CollectiveSupporter = {
  _id: string;
  name: string;
  logo?: SanityImageWithAlt | null;
  websiteUrl?: string;
  description?: string;
  recognitionLevel: CollectiveRecognitionLevel;
  featured: boolean;
  displayOrder: number;
};
