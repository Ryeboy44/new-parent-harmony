import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { siteBaseUrl } from "./data/site-url";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schemaTypes";

if (!projectId) {
  console.warn(
    "[sanity] Missing NEXT_PUBLIC_SANITY_PROJECT_ID — Studio and blog fetching will not work until it is set in .env.local or Vercel.",
  );
}

export default defineConfig({
  name: "new-parent-harmony",
  title: "New Parent Harmony",
  projectId: projectId || "missing-project-id",
  dataset,
  basePath: "/studio",
  apiVersion,
  plugins: [structureTool(), visionTool()],
  schema,
  document: {
    productionUrl: async (doc) => {
      const slug = (doc as { slug?: { current?: string } }).slug?.current;
      if (!slug) return undefined;
      return `${siteBaseUrl}/blog/${slug}`;
    },
  },
});
