import type { SanityImageAsset } from "@/lib/sanity/types";

/** Build a Sanity CDN URL with sizing params from an expanded asset reference. */
export function buildSanityCdnUrl(
  asset: SanityImageAsset | undefined,
  options: { width: number; height?: number },
): string | null {
  if (!asset?.url) return null;
  const url = new URL(asset.url);
  url.searchParams.set("w", String(options.width));
  url.searchParams.set("auto", "format");
  if (options.height) {
    url.searchParams.set("h", String(options.height));
    url.searchParams.set("fit", "crop");
  }
  return url.toString();
}
