import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";

/**
 * Standalone Studio (`npm run sanity`): preload-env.mjs loads .env.local and
 * mirrors NEXT_PUBLIC_* → SANITY_STUDIO_* for Vite. Use both prefixes here.
 * Embedded Studio (`/studio`): Next.js inlines NEXT_PUBLIC_* at build time.
 */
const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
  process.env.SANITY_STUDIO_PROJECT_ID ||
  "";

const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ||
  process.env.SANITY_STUDIO_DATASET ||
  "production";

const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ||
  process.env.SANITY_STUDIO_API_VERSION ||
  "2025-01-01";

const siteBaseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.newparentharmony.com"
).replace(/\/$/, "");

if (!projectId) {
  console.warn(
    "[sanity] Missing project ID. Add NEXT_PUBLIC_SANITY_PROJECT_ID to .env.local and run `npm run sanity` (not `npx sanity dev`).",
  );
}

export default defineConfig({
  name: "new-parent-harmony",
  title: "New Parent Harmony",
  projectId,
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
      const d = doc as { slug?: { current?: string } } | undefined;
      if (!d || !d.slug || !d.slug.current) {
        return undefined;
      }
      return `${siteBaseUrl}/blog/${d.slug.current}`;
    },
  },
});
