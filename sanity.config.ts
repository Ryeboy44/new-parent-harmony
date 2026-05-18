import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";

const siteBaseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.newparentharmony.com"
).replace(/\/$/, "");

if (!projectId) {
  console.warn(
    "[sanity] Missing NEXT_PUBLIC_SANITY_PROJECT_ID. Add it to .env.local, then restart Studio (npm run sanity).",
  );
}

export default defineConfig({
  name: "new-parent-harmony",
  title: "New Parent Harmony",
  projectId: projectId || "missing-project-id",
  dataset,
  basePath: "/studio",
  apiVersion,
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  schema: {
    types: schemaTypes,
  },
  document: {
    productionUrl: async (doc) => {
      const slug = (doc as { slug?: { current?: string } }).slug?.current;
      if (!slug) return undefined;
      return `${siteBaseUrl}/blog/${slug}`;
    },
  },
});
