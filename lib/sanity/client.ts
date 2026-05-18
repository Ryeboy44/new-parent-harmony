import { createClient, type ClientConfig } from "next-sanity";
import { apiVersion, dataset, isSanityConfigured, projectId, readToken } from "@/sanity/env";

const baseConfig: ClientConfig = {
  projectId: projectId!,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published",
  token: readToken,
  stega: { enabled: false },
};

/** Sanity client for published blog content. Only use when `isSanityConfigured` is true. */
export const sanityClient = isSanityConfigured
  ? createClient(baseConfig)
  : null;

export function getSanityClient() {
  if (!sanityClient) {
    throw new Error(
      "Sanity is not configured. Set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET.",
    );
  }
  return sanityClient;
}
