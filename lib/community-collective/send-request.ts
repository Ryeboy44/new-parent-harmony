import { Resend } from "resend";
import {
  describeConfigIssue,
  getDiscoveryEmailConfig,
} from "@/lib/discovery-call/email-config";
import {
  isLikelyMontgomeryCountyZip,
  labelForAssistance,
  labelForBabyStatus,
  labelForFormat,
  labelForSupportNeed,
  labelForTiming,
  type RequestSupportInput,
} from "@/lib/community-collective/schema";

function escapeHtml(s: string): string {
  return s
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

function buildHtml(data: RequestSupportInput): string {
  const needs = data.supportNeeds
    .map((id) => `<li>${escapeHtml(labelForSupportNeed(id))}</li>`)
    .join("");
  const inPersonOutsideArea =
    data.supportFormat === "in_person" &&
    !isLikelyMontgomeryCountyZip(data.zipCode);

  return `
    <h2>Community Collective — Request Support</h2>
    ${paragraph("Name", `${data.firstName} ${data.lastName}`)}
    ${paragraph("Email", data.email)}
    ${paragraph("Phone", data.phone)}
    ${paragraph("ZIP code", data.zipCode)}
    ${paragraph("Baby", labelForBabyStatus(data.babyStatus))}
    ${paragraph(
      data.babyStatus === "expected" ? "Due date" : "Date of birth",
      data.babyDate,
    )}
    <p><strong>Support looking for:</strong></p>
    <ul>${needs}</ul>
    <p><strong>Type of assistance:</strong></p>
    <ul>${data.assistanceTypes
      .map((id) => `<li>${escapeHtml(labelForAssistance(id))}</li>`)
      .join("")}</ul>
    ${multiline("What’s making support hard to access", data.barrier)}
    ${multiline("Optional financial context", data.financialContext)}
    ${multiline("What would help most", data.biggestDifference)}
    ${paragraph("Hoping to receive support", labelForTiming(data.timing))}
    ${multiline("Preferred days or times", data.scheduleNotes)}
    ${paragraph("In person or virtual", labelForFormat(data.supportFormat))}
    ${
      inPersonOutsideArea
        ? "<p><strong>Note:</strong> ZIP code may be outside Montgomery County, MD. Family still requested in-person support.</p>"
        : ""
    }
    <p><strong>Self-attestation:</strong> Confirmed — regular cost would currently create a financial barrier.</p>
    <p><strong>Acknowledgement:</strong> Confirmed — submission does not guarantee funded or reduced-cost services.</p>
  `;
}

export type SendResult = { ok: true } | { ok: false; message: string };

export async function sendRequestSupportSubmission(
  data: RequestSupportInput,
): Promise<SendResult> {
  const config = getDiscoveryEmailConfig();
  const configError = describeConfigIssue(config);

  console.info("[collective-request] email config loaded", {
    to: config.to,
    from: config.from,
    logOnly: config.logOnly,
    hasApiKey: Boolean(config.resendApiKey),
  });

  if (config.logOnly) {
    console.info("[collective-request] DISCOVERY_CALL_LOG_ONLY — submission:", {
      ...data,
    });
    return { ok: true };
  }

  if (configError) {
    console.error("[collective-request] config error", {
      message: configError,
      to: config.to || "(empty)",
      from: config.from || "(empty)",
      logOnly: config.logOnly,
      hasApiKey: Boolean(config.resendApiKey),
    });
    return {
      ok: false,
      message:
        "We couldn’t send your request right now. Please try again in a few minutes.",
    };
  }

  try {
    const resend = new Resend(config.resendApiKey);
    const { error } = await resend.emails.send({
      from: config.from,
      to: config.to,
      replyTo: data.email,
      subject: `Community Collective — Request Support: ${data.firstName} ${data.lastName}`,
      html: buildHtml(data),
    });

    if (error) {
      console.error("[collective-request] Resend error", error);
      return {
        ok: false,
        message:
          "Something went wrong while sending. Please try again in a moment.",
      };
    }

    return { ok: true };
  } catch (e) {
    console.error("[collective-request] unexpected send failure", e);
    return {
      ok: false,
      message:
        "Something went wrong while sending. Please try again in a moment.",
    };
  }
}
