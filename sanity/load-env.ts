import { loadEnvConfig } from "@next/env";

/** Load `.env.local` / `.env` for Sanity CLI and config (Next.js build already loads these). */
export function loadSanityEnv() {
  loadEnvConfig(process.cwd());
}
