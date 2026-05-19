/** Sanity API version — see https://www.sanity.io/docs/api-versioning */
export function getSanityApiVersion(): string {
  return (
    process.env.NEXT_PUBLIC_SANITY_API_VERSION ||
    process.env.SANITY_STUDIO_API_VERSION ||
    "2025-01-01"
  );
}

/** Project ID — reads env at call time (not a frozen import-time constant). */
export function getSanityProjectId(): string {
  return (
    process.env.SANITY_STUDIO_PROJECT_ID ||
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
    ""
  );
}

/** Dataset — reads env at call time. */
export function getSanityDataset(): string {
  return (
    process.env.SANITY_STUDIO_DATASET ||
    process.env.NEXT_PUBLIC_SANITY_DATASET ||
    "production"
  );
}

/** Public read access; set in Vercel for production builds that fetch at build time. */
export const readToken = process.env.SANITY_API_READ_TOKEN;

export function isSanityConfigured(): boolean {
  return Boolean(getSanityProjectId() && getSanityDataset());
}
