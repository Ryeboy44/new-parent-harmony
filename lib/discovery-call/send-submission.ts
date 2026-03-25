import { Resend } from "resend";
import type { DiscoveryCallInput } from "@/lib/discovery-call/schema";
import { labelForServiceId } from "@/lib/discovery-call/schema";
import {
  describeConfigIssue,
  getDiscoveryEmailConfig,
} from "@/lib/discovery-call/email-config";
import { SITE_EMAIL } from "@/data/site-contact";

function buildHtml(data: DiscoveryCallInput): string {
  const servicesList = data.services
    .map((id) => `<li>${labelForServiceId(id)}</li>`)
    .join("");
  const contactLabel =
    data.contactMethod === "email"
      ? "Email"
      : data.contactMethod === "phone"
        ? "Phone"
        : "Email or phone";
  return `
    <h2>New free 15-minute chat request</h2>
    <p><strong>Name:</strong> ${escapeHtml(data.fullName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Phone:</strong> ${data.phone ? escapeHtml(data.phone) : "—"}</p>
    <p><strong>Preferred contact:</strong> ${contactLabel}</p>
    <p><strong>Services interested in:</strong></p>
    <ul>${servicesList}</ul>
    <p><strong>Newsletter:</strong> ${data.newsletter ? "Yes" : "No"}</p>
    ${
      data.details
        ? `<p><strong>Additional details:</strong></p><p>${escapeHtml(data.details).replace(/\n/g, "<br/>")}</p>`
        : ""
    }
  `;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export type SendResult =
  | { ok: true }
  | { ok: false; message: string };

export async function sendDiscoverySubmission(
  data: DiscoveryCallInput,
): Promise<SendResult> {
  const config = getDiscoveryEmailConfig();
  const configError = describeConfigIssue(config);
  // Temporary diagnostic log: confirms env config is loaded without exposing secrets.
  console.info("[discovery-call] email config loaded", {
    to: config.to,
    from: config.from,
    logOnly: config.logOnly,
    hasApiKey: Boolean(config.resendApiKey),
  });

  if (config.logOnly) {
    console.info("[discovery-call] DISCOVERY_CALL_LOG_ONLY — submission:", {
      ...data,
    });
    return { ok: true };
  }

  if (configError) {
    console.error("[discovery-call] config error", {
      message: configError,
      to: config.to || "(empty)",
      from: config.from || "(empty)",
      logOnly: config.logOnly,
      hasApiKey: Boolean(config.resendApiKey),
    });
    return {
      ok: false,
      message: `We couldn’t send your message right now. Please try again later or email ${SITE_EMAIL} directly.`,
    };
  }

  try {
    const resend = new Resend(config.resendApiKey);
    const { error } = await resend.emails.send({
      from: config.from,
      to: config.to,
      replyTo: data.email,
      subject: `Free 15-min chat: ${data.fullName}`,
      html: buildHtml(data),
    });

    if (error) {
      console.error("[discovery-call] Resend error", {
        error,
        to: config.to,
        from: config.from,
        replyTo: data.email,
      });
      return {
        ok: false,
        message:
          "Something went wrong while sending. Please try again in a moment.",
      };
    }

    return { ok: true };
  } catch (e) {
    console.error("[discovery-call] unexpected send failure", {
      error: e,
      to: config.to,
      from: config.from,
      replyTo: data.email,
    });
    return {
      ok: false,
      message:
        "Something went wrong while sending. Please try again in a moment.",
    };
  }
}
