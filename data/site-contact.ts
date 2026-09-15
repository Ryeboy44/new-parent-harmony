/** Primary contact route — visitors use the form; no public email is displayed. */
export const CONTACT_FORM_HREF = "/discovery-call" as const;

/** Shared public copy when directing visitors to the contact form. */
export const CONTACT_FORM_OUTREACH_MESSAGE =
  "Please reach out through the contact form and I'll get back to you as soon as I can." as const;

/** Compact note on the contact page — Collective requests use a different form. */
export const contactCollectivePath = {
  title: "Looking for Community Collective support?",
  description:
    "If you’re looking for reduced-cost or community-supported care through the New Parent Harmony Community Collective, please use our dedicated support request form.",
  primaryCta: {
    label: "Request Community Support",
    href: "/community-collective/request-support",
  },
  secondaryCta: {
    label: "Learn About the Community Collective",
    href: "/community-collective",
  },
} as const;
