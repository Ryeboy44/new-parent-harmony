"use server";

import { COLLECTIVE_PAUSED_MESSAGE } from "@/data/community-collective-content";
import {
  requestSupportSchema,
  type RequestSupportInput,
} from "@/lib/community-collective/schema";
import { sendRequestSupportSubmission } from "@/lib/community-collective/send-request";
import { getCommunityCollectiveSettings } from "@/lib/sanity/fetch";
import { zodFieldErrors } from "@/lib/discovery-call/zod-field-errors";

export type RequestSupportActionResult =
  | { status: "success" }
  | {
      status: "error";
      message: string;
      fieldErrors?: Record<string, string>;
    };

export async function submitRequestSupport(
  raw: unknown,
): Promise<RequestSupportActionResult> {
  const settings = await getCommunityCollectiveSettings();
  if (settings.applicationsStatus === "paused") {
    return { status: "error", message: COLLECTIVE_PAUSED_MESSAGE };
  }

  const parsed = requestSupportSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      status: "error",
      message: "Please check the form and try again.",
      fieldErrors: zodFieldErrors(parsed.error),
    };
  }

  const data: RequestSupportInput = parsed.data;
  const send = await sendRequestSupportSubmission(data);
  if (!send.ok) {
    return { status: "error", message: send.message };
  }

  return { status: "success" };
}
