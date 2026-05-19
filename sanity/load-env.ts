import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

function parseEnvFile(root: string, filename: string) {
  const path = resolve(root, filename);
  if (!existsSync(path)) return;
  const raw = readFileSync(path, "utf8").replace(/^\uFEFF/, "");
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    process.env[key] = value;
  }
}

/** Load `.env` / `.env.local` for Sanity CLI (Node only). */
export function loadSanityEnv() {
  const root = process.cwd();
  parseEnvFile(root, ".env");
  parseEnvFile(root, ".env.local");

  if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && !process.env.SANITY_STUDIO_PROJECT_ID) {
    process.env.SANITY_STUDIO_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  }
  if (process.env.NEXT_PUBLIC_SANITY_DATASET && !process.env.SANITY_STUDIO_DATASET) {
    process.env.SANITY_STUDIO_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET;
  }
}
