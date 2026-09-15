/** Inbox for every on-site form submission (not shown on the public site). */
export const FORM_SUBMISSION_INBOX = "gemma@newparentharmony.com";

/**
 * Private form email delivery (discovery call, Community Collective Request Support, and supporter inquiries).
 * Configure in `.env.local` (see `.env.example`) and Vercel.
 *
 * Required for real delivery (Resend):
 *   RESEND_API_KEY          — API key from https://resend.com
 *   DISCOVERY_CALL_FROM     — Verified sender in Resend, e.g. "New Parent Harmony <hello@yourdomain.com>"
 *
 * Optional:
 *   DISCOVERY_CALL_TO       — Override inbox (defaults to FORM_SUBMISSION_INBOX)
 *   DISCOVERY_CALL_LOG_ONLY=true  — Log payload to server console instead of sending (handy for local dev)
 */
export type EmailDeliveryConfig = {
  /** Where submissions are delivered */
  to: string;
  /** Must use a domain verified in Resend */
  from: string;
  resendApiKey: string;
  /** When true, skips Resend and logs the submission (dev only) */
  logOnly: boolean;
};

export function getDiscoveryEmailConfig(): EmailDeliveryConfig {
  return {
    to: process.env.DISCOVERY_CALL_TO?.trim() || FORM_SUBMISSION_INBOX,
    from: process.env.DISCOVERY_CALL_FROM?.trim() ?? "",
    resendApiKey: process.env.RESEND_API_KEY?.trim() ?? "",
    logOnly: process.env.DISCOVERY_CALL_LOG_ONLY === "true",
  };
}

export function describeConfigIssue(config: EmailDeliveryConfig): string | null {
  if (config.logOnly) return null;
  if (!config.resendApiKey) {
    return "Email delivery is not configured yet (missing RESEND_API_KEY).";
  }
  if (!config.to) {
    return "Email delivery is not configured yet (missing DISCOVERY_CALL_TO).";
  }
  if (!config.from) {
    return "Email delivery is not configured yet (missing DISCOVERY_CALL_FROM).";
  }
  return null;
}
