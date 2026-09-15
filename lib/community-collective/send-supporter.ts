import { Resend } from "resend";
import {
  describeConfigIssue,
  getDiscoveryEmailConfig,
} from "@/lib/discovery-call/email-config";
import {
  labelForSupporterInterest,
  type SupporterInquiryInput,
} from "@/lib/community-collective/supporter-schema";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function paragraph(label: string, value: string): string {
  return `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</p>`;
}

function multiline(label: string, value: string | undefined): string {
  if (!value) return "";
  return `<p><strong>${escapeHtml(label)}:</strong></p><p>${escapeHtml(value).replace(/\n/g, "<br/>")}</p>`;
}

function buildHtml(data: SupporterInquiryInput): string {
  return `
    <h2>Community Collective — Supporter Inquiry</h2>
    ${paragraph("Name", data.name)}
    ${data.organization ? paragraph("Organization / business", data.organization) : ""}
    ${paragraph("Email", data.email)}
    ${data.phone ? paragraph("Phone", data.phone) : ""}
    ${paragraph("Inquiring as", labelForSupporterInterest(data.interest))}
    ${multiline("Message", data.message)}
    ${paragraph(
      "Collective updates",
      data.updates ? "Yes — would like occasional updates" : "No",
    )}
  `;
}

export type SendResult = { ok: true } | { ok: false; message: string };

export async function sendSupporterInquiry(
  data: SupporterInquiryInput,
): Promise<SendResult> {
  const config = getDiscoveryEmailConfig();
  const configError = describeConfigIssue(config);

  console.info("[collective-supporter] email config loaded", {
    to: config.to,
    from: config.from,
    logOnly: config.logOnly,
    hasApiKey: Boolean(config.resendApiKey),
  });

  if (config.logOnly) {
    console.info("[collective-supporter] DISCOVERY_CALL_LOG_ONLY — inquiry:", {
      ...data,
    });
    return { ok: true };
  }

  if (configError) {
    console.error("[collective-supporter] config error", {
      message: configError,
      to: config.to || "(empty)",
      from: config.from || "(empty)",
      logOnly: config.logOnly,
      hasApiKey: Boolean(config.resendApiKey),
    });
    return {
      ok: false,
      message:
        "We couldn’t send your message right now. Please try again in a few minutes.",
    };
  }

  try {
    const resend = new Resend(config.resendApiKey);
    const { error } = await resend.emails.send({
      from: config.from,
      to: config.to,
      replyTo: data.email,
      subject: `Community Collective — Supporter Inquiry: ${data.name}`,
      html: buildHtml(data),
    });

    if (error) {
      console.error("[collective-supporter] Resend error", error);
      return {
        ok: false,
        message:
          "Something went wrong while sending. Please try again in a moment.",
      };
    }

    return { ok: true };
  } catch (error) {
    console.error("[collective-supporter] unexpected send failure", error);
    return {
      ok: false,
      message:
        "Something went wrong while sending. Please try again in a moment.",
    };
  }
}
