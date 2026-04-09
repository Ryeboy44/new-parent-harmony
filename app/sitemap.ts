import type { MetadataRoute } from "next";
import { siteBaseUrl } from "@/data/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = ["/", "/about", "/services", "/contact"] as const;

  return paths.map((path) => ({
    url: `${siteBaseUrl}${path === "/" ? "" : path}`,
    lastModified: now,
  }));
}
