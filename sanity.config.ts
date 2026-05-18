import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schemaTypes";

const title = "New Parent Harmony";

export default defineConfig({
  name: "new-parent-harmony",
  title,
  projectId: projectId || "placeholder",
  dataset,
  basePath: "/studio",
  apiVersion,
  plugins: [structureTool(), visionTool()],
  schema,
});
