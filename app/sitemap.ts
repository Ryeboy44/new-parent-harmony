import type { MetadataRoute } from "next";
import { siteBaseUrl } from "@/data/site-url";
import { getPublishedPostSlugs } from "@/lib/sanity/fetch";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const paths = [
    "/",
    "/about",
    "/services",
    "/testimonials",
    "/blog",
    "/faq",
    "/contact",
  ] as const;

  const staticEntries = paths.map((path) => ({
    url: `${siteBaseUrl}${path === "/" ? "" : path}`,
    lastModified: now,
  }));

  const slugs = await getPublishedPostSlugs();
  const blogEntries = slugs.map((slug) => ({
    url: `${siteBaseUrl}/blog/${slug}`,
    lastModified: now,
  }));

  return [...staticEntries, ...blogEntries];
}
