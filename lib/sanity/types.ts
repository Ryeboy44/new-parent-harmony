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

export type PostFeaturedImage = {
  alt?: string;
  asset?: SanityImageAsset;
};

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
