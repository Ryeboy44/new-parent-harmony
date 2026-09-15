import {
  COLLECTIVE_SUPPORT_HREF,
} from "@/data/community-collective-content";

type ContributionOptions = {
  interest?: string;
  example?: string;
};

/**
 * Destination for contribution and sponsorship CTAs.
 * Swap this implementation when an online payment option is added.
 */
export function contributionHref(options: ContributionOptions = {}): string {
  const params = new URLSearchParams();
  params.set("interest", options.interest ?? "individual");
  if (options.example) params.set("example", options.example);
  return `${COLLECTIVE_SUPPORT_HREF}?${params.toString()}#supporter-form`;
}
