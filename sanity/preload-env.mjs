/**
 * Loads .env.local / .env before `sanity dev`.
 * Mirrors NEXT_PUBLIC_SANITY_* → SANITY_STUDIO_* so Vite exposes them to the Studio UI.
 */
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();

function parseEnvFile(filename) {
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

parseEnvFile(".env");
parseEnvFile(".env.local");

/** Vite-based Studio only inlines SANITY_STUDIO_* into the browser bundle. */
if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && !process.env.SANITY_STUDIO_PROJECT_ID) {
  process.env.SANITY_STUDIO_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
}
if (process.env.NEXT_PUBLIC_SANITY_DATASET && !process.env.SANITY_STUDIO_DATASET) {
  process.env.SANITY_STUDIO_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET;
}
