import type { MetadataRoute } from "next";
import { siteBaseUrl } from "@/data/site-url";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/studio", "/studio/"],
    },
    sitemap: `${siteBaseUrl}/sitemap.xml`,
  };
}
