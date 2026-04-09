/** Canonical site origin (no trailing slash). Used for metadata, sitemap, and robots. */
export const siteBaseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.newparentharmony.com"
).replace(/\/$/, "");
