"use server";

import {
  supporterInquirySchema,
  type SupporterInquiryInput,
} from "@/lib/community-collective/supporter-schema";
import { sendSupporterInquiry } from "@/lib/community-collective/send-supporter";
import { getCommunityCollectiveSettings } from "@/lib/sanity/fetch";
import { zodFieldErrors } from "@/lib/discovery-call/zod-field-errors";
import { supporterPage } from "@/data/community-collective-content";

export type SupporterInquiryActionResult =
  | { status: "success" }
  | {
      status: "error";
      message: string;
      fieldErrors?: Record<string, string>;
    };

export async function submitSupporterInquiry(
  raw: unknown,
): Promise<SupporterInquiryActionResult> {
  const settings = await getCommunityCollectiveSettings();
  if (settings.supporterInquiriesStatus === "paused") {
    return { status: "error", message: supporterPage.paused.title };
  }

  const parsed = supporterInquirySchema.safeParse(raw);
  if (!parsed.success) {
    return {
      status: "error",
      message: "Please check the form and try again.",
      fieldErrors: zodFieldErrors(parsed.error),
    };
  }

  const data: SupporterInquiryInput = parsed.data;
  const send = await sendSupporterInquiry(data);
  if (!send.ok) {
    return { status: "error", message: send.message };
  }

  return { status: "success" };
}
