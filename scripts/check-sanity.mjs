/**
 * Quick Sanity connectivity check. Run: node scripts/check-sanity.mjs
 * Loads .env.local via Node 20+ --env-file or manual read.
 */
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

function loadEnvLocal() {
  const path = resolve(process.cwd(), ".env.local");
  if (!existsSync(path)) return;
  for (const line of readFileSync(path, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
}

loadEnvLocal();

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01";

if (!projectId) {
  console.error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local");
  process.exit(1);
}

const query = encodeURIComponent(
  `*[_type == "post"]{ _id, title, published, "slug": slug.current }`,
);
const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${query}`;

const res = await fetch(url);
const json = await res.json();

if (!res.ok) {
  console.error("Sanity query failed:", json);
  process.exit(1);
}

console.log("Sanity connection OK");
console.log(`Project: ${projectId} | Dataset: ${dataset}`);
console.log(`Posts found: ${json.result?.length ?? 0}`);
if (json.result?.length) {
  console.log(JSON.stringify(json.result, null, 2));
}
