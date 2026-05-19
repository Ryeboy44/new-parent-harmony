import { createClient, type ClientConfig } from "next-sanity";
import {
  getSanityApiVersion,
  getSanityDataset,
  getSanityProjectId,
  isSanityConfigured,
  readToken,
} from "@/sanity/env";

function buildClient() {
  const projectId = getSanityProjectId();
  const dataset = getSanityDataset();
  const apiVersion = getSanityApiVersion();

  const baseConfig: ClientConfig = {
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
    perspective: "published",
    token: readToken,
    stega: { enabled: false },
  };

  return createClient(baseConfig);
}

/** Sanity client for published blog content. Only use when `isSanityConfigured()` is true. */
export const sanityClient = isSanityConfigured() ? buildClient() : null;

export function getSanityClient() {
  if (!sanityClient) {
    throw new Error(
      "Sanity is not configured. Set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET in .env.local.",
    );
  }
  return sanityClient;
}
