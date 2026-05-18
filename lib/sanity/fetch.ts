import type { PortableTextBlock } from "@portabletext/types";
import { blogFallbackPosts } from "@/data/blog-fallback-posts";
import { isSanityConfigured } from "@/sanity/env";
import { sanityClient } from "@/lib/sanity/client";
import { postBySlugQuery, postSlugsQuery, postsQuery } from "@/lib/sanity/queries";
import type { BlogCategory, BlogPost, PostFeaturedImage } from "@/lib/sanity/types";
import { estimateReadingMinutes } from "@/lib/sanity/reading-time";

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
  if (!isSanityConfigured) {
    return process.env.NODE_ENV === "development" ? blogFallbackPosts : [];
  }

  try {
    const rows = await sanityClient.fetch<SanityPostRow[]>(
      postsQuery,
      {},
      { next: { tags: ["blog-posts"], revalidate: 60 } },
    );
    return rows.map((row) => mapPost(row));
  } catch (error) {
    console.error("[blog] Failed to fetch posts:", error);
    return process.env.NODE_ENV === "development" ? blogFallbackPosts : [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!isSanityConfigured) {
    const fallback = blogFallbackPosts.find((p) => p.slug === slug);
    return fallback ?? null;
  }

  try {
    const row = await sanityClient.fetch<SanityPostRow | null>(
      postBySlugQuery,
      { slug },
      { next: { tags: [`blog-post-${slug}`], revalidate: 60 } },
    );
    if (!row) {
      if (process.env.NODE_ENV === "development") {
        return blogFallbackPosts.find((p) => p.slug === slug) ?? null;
      }
      return null;
    }
    return mapPost(row, true);
  } catch (error) {
    console.error(`[blog] Failed to fetch post "${slug}":`, error);
    return process.env.NODE_ENV === "development"
      ? (blogFallbackPosts.find((p) => p.slug === slug) ?? null)
      : null;
  }
}

export async function getPublishedPostSlugs(): Promise<string[]> {
  if (!isSanityConfigured) {
    return process.env.NODE_ENV === "development"
      ? blogFallbackPosts.map((p) => p.slug)
      : [];
  }

  try {
    return await sanityClient.fetch<string[]>(
      postSlugsQuery,
      {},
      { next: { tags: ["blog-slugs"], revalidate: 60 } },
    );
  } catch (error) {
    console.error("[blog] Failed to fetch slugs:", error);
    return [];
  }
}
