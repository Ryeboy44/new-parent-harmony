import type { PortableTextBlock } from "@portabletext/types";
import { isSanityConfigured } from "@/sanity/env";
import { getSanityClient } from "@/lib/sanity/client";
import { postBySlugQuery, postSlugsQuery, postsQuery } from "@/lib/sanity/queries";
import type { BlogCategory, BlogPost, PostFeaturedImage } from "@/lib/sanity/types";
import { estimateReadingMinutes } from "@/lib/sanity/reading-time";

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
  if (!isSanityConfigured) return [];

  try {
    const rows = await getSanityClient().fetch<SanityPostRow[]>(postsQuery, {}, fetchOptions);
    return rows.map((row) => mapPost(row));
  } catch (error) {
    console.error("[blog] Failed to fetch posts:", error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!isSanityConfigured) return null;

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
  if (!isSanityConfigured) return [];

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
