import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, readToken } from "@/sanity/env";

export const sanityClient = createClient({
  projectId: projectId || "placeholder",
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published",
  token: readToken,
  stega: {
    enabled: false,
  },
});
