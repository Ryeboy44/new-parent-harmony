"use server";

import { discoveryCallSchema } from "@/lib/discovery-call/schema";
import type { DiscoveryCallInput } from "@/lib/discovery-call/schema";
import { sendDiscoverySubmission } from "@/lib/discovery-call/send-submission";
import { zodFieldErrors } from "@/lib/discovery-call/zod-field-errors";

export type DiscoveryCallActionResult =
  | { status: "success" }
  | {
      status: "error";
      message: string;
      fieldErrors?: Record<string, string>;
    };

/** Accepts a plain JSON object from the client form (serializable). */
export async function submitDiscoveryCall(
  raw: unknown,
): Promise<DiscoveryCallActionResult> {
  const parsed = discoveryCallSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      status: "error",
      message: "Please check the form and try again.",
      fieldErrors: zodFieldErrors(parsed.error),
    };
  }

  const data: DiscoveryCallInput = parsed.data;
  const send = await sendDiscoverySubmission(data);
  if (!send.ok) {
    return { status: "error", message: send.message };
  }

  return { status: "success" };
}
