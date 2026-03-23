import type { ZodError } from "zod";

/** First message per field from a Zod error (for forms + server action). */
export function zodFieldErrors(error: ZodError): Record<string, string> {
  const flat = error.flatten();
  const out: Record<string, string> = {};
  for (const [key, msgs] of Object.entries(flat.fieldErrors)) {
    const first = Array.isArray(msgs) ? msgs[0] : undefined;
    if (typeof first === "string") out[key] = first;
  }
  return out;
}
