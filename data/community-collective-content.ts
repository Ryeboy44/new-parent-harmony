import { CONTACT_FORM_HREF } from "@/data/site-contact";

/** Collective pathways — routes live under /community-collective. */
export const COLLECTIVE_REQUEST_HREF = "/community-collective/request-support" as const;
export const COLLECTIVE_REQUEST_LABEL = "Request Support" as const;
export const COLLECTIVE_PARTNER_HREF = "/community-collective/partner" as const;
export const COLLECTIVE_PARTNER_LABEL = "Partner With Us" as const;
export const COLLECTIVE_SUPPORT_HREF = "/community-collective/support" as const;
export const COLLECTIVE_SUPPORT_LABEL = "Support the Collective" as const;
export const COLLECTIVE_HREF = "/community-collective" as const;

/** Shown in place of the Request Support CTA when applications are paused in Sanity. */
export const COLLECTIVE_PAUSED_MESSAGE =
  "Collective requests are temporarily paused." as const;

export const collectiveHero = {
  eyebrow: "Community Collective",
  title: "New Parent Harmony Community Collective",
  tagline: "Support should be within reach.",
  paragraphs: [
    "The New Parent Harmony Community Collective helps make postpartum, feeding and sleep support, community events, and educational workshops more accessible to families who may otherwise face financial barriers.",
    "Through grants, sponsorships, partnerships and community funding, the Collective helps subsidize professional support, provides reduced-cost or free educational opportunities, and creates ways for families to connect and feel supported.",
  ],
} as const;

export const collectiveModel = {
  eyebrow: "The model",
  title: "How the Collective Comes Together",
  steps: [
    {
      title: "Community support, grants, sponsorships and partnerships",
      description:
        "Local businesses, organizations, grant funders and neighbors invest in family wellbeing.",
    },
    {
      title: "The Community Collective",
      description:
        "New Parent Harmony uses those resources to offer professional postpartum and parent support.",
    },
    {
      title: "More accessible support for families",
      description:
        "Education, connection and care become easier to reach as funding and availability allow.",
    },
  ],
} as const;

export const serviceAreaSection = {
  places: [
    {
      label: "In-person support",
      detail: "Montgomery County, Maryland and surrounding areas",
    },
    {
      label: "Virtual support",
      detail: "Available nationwide",
    },
  ],
  qualifier:
    "Support through the Collective is based on individual need, available funding and provider availability.",
} as const;

export type CollectiveHelpIcon =
  | "postpartum"
  | "feeding"
  | "education"
  | "connection";

export const howWeHelpSection = {
  title: "How We Help",
  cards: [
    {
      icon: "postpartum" as CollectiveHelpIcon,
      title: "Postpartum Support",
      description:
        "Practical, nurturing daytime postpartum support to help families recover, rest and adjust to life with a new baby.",
    },
    {
      icon: "feeding" as CollectiveHelpIcon,
      title: "Feeding Support",
      description:
        "Individualized feeding and lactation education to help families feel informed, supported and confident.",
    },
    {
      icon: "education" as CollectiveHelpIcon,
      title: "Education & Virtual Support",
      description:
        "Virtual postpartum guidance, sleep support, parent education and workshops.",
    },
    {
      icon: "connection" as CollectiveHelpIcon,
      title: "Connection & Community",
      description:
        "Support groups, educational events, community programs and connections to trusted resources during the postpartum period.",
    },
  ],
} as const;

export const howItWorksSection = {
  title: "How Collective Support Works",
  steps: [
    {
      title: "Tell us what you need",
      description:
        "Complete a short Request Support form and tell us a little about your family and the type of support that would help.",
    },
    {
      title: "We review what’s available",
      description:
        "Requests are reviewed in the order received, based on current Collective funding and New Parent Harmony’s availability.",
    },
    {
      title: "We find an option that works",
      description:
        "Support may be fully funded, partially funded, offered at a temporary reduced rate, or provided through free or reduced-cost community programming.",
    },
    {
      title: "Support begins",
      description:
        "If we’re able to help, we’ll talk with you about what’s available and create a plan for your family.",
    },
  ],
  callout: {
    title:
      "No complicated paperwork. No competition over who needs help most.",
    paragraphs: [
      "The process is designed to be straightforward. You can tell us when the regular cost of services creates a barrier, and financial documentation generally isn’t required unless a specific grant or funding program requires it.",
      "What we can offer depends on available funding, resources and provider availability.",
    ],
  },
} as const;

export const programmingSection = {
  title: "More Than Individual Care",
  paragraphs: [
    "The Community Collective isn’t only about reducing the cost of private services.",
    "As it grows, we hope to create more opportunities for families to connect through free and reduced-cost workshops, postpartum education, support groups, community events and local partnerships.",
    "The aim is stronger families and a stronger postpartum community — built over time, with community support.",
  ],
} as const;

export const eventsSection = {
  title: "Community Events & Programs",
  description:
    "Workshops, groups and community gatherings hosted or supported by the Collective.",
  emptyHeadline: "More community events are coming soon.",
  emptyBody:
    "We’re building out workshops, groups and community gatherings for local and virtual families. Check back soon, or reach out if there’s something your family would find helpful.",
} as const;

export type CollectivePartnerIcon = "sponsor" | "fund" | "partner";

export const partnerSection = {
  title: "Help Expand Access",
  paragraphs: [
    "Businesses, organizations and neighbors can take part in a few ways.",
  ],
  cards: [
    {
      icon: "sponsor" as CollectivePartnerIcon,
      title: "Sponsor Care",
      description:
        "Help fund professional support for families experiencing barriers to accessing services.",
    },
    {
      icon: "fund" as CollectivePartnerIcon,
      title: "Fund Education",
      description:
        "Support workshops, groups and educational programs that can reach multiple families at once.",
    },
    {
      icon: "partner" as CollectivePartnerIcon,
      title: "Become a Community Partner",
      description:
        "Businesses, healthcare professionals and community organizations can collaborate with the Collective through sponsorships, referrals, education and community programming.",
    },
  ],
} as const;

export const impactSection = {
  title: "Our Impact Is Just Beginning",
  paragraphs: [
    "As the Collective grows, we’ll share the families supported, care hours funded, workshops offered and community programs created.",
  ],
  /** Shown instead of metrics until real numbers are entered in Sanity. */
  emptyHeadline: "Our impact is just beginning.",
} as const;

export const collectiveFinalCta = {
  title: "It Takes a Village. Let’s Build One.",
  description:
    "Whether you’re looking for support for your family, a local business, a healthcare professional, a grant funder, or someone who wants to help expand access, there’s a place for you in the Community Collective.",
  pathways: [
    {
      title: "I Need Support",
      description:
        "Tell us what would help your family and we’ll explore what options may be available.",
      ctaLabel: COLLECTIVE_REQUEST_LABEL,
      ctaHref: COLLECTIVE_REQUEST_HREF,
    },
    {
      title: "I Want to Help",
      description:
        "Help us expand access to postpartum care, education and community support.",
      ctaLabel: COLLECTIVE_SUPPORT_LABEL,
      ctaHref: COLLECTIVE_SUPPORT_HREF,
    },
  ],
  smallPrint:
    "Collective services and financial assistance are subject to provider availability, available funding and program resources. Submitting a request does not guarantee services or financial assistance.",
} as const;

export const requestSupportPage = {
  eyebrow: "Community Collective",
  title: "Request Support",
  tagline: "Let’s see how we can help.",
  paragraphs: [
    "We know every family’s circumstances are different. If the regular cost of postpartum support is creating a barrier for your family, tell us a little about what you need.",
    "Depending on current funding, resources and New Parent Harmony’s availability, support may include fully funded services, partially funded services, temporary reduced-rate care, or free and reduced-cost community programs.",
    "You don’t need to prove that your circumstances are harder than someone else’s. We simply want to understand what support would make a difference for your family.",
  ],
  calloutTitle: "No complicated financial paperwork.",
  calloutBody:
    "Requests are considered individually and with respect for each family’s circumstances.",
  serviceArea: {
    places: [
      { label: "In-person support", detail: "Montgomery County, Maryland" },
      { label: "Virtual support", detail: "May be available nationwide" },
    ],
    qualifier:
      "All services are subject to provider availability, available resources and the type of support requested.",
  },
  paused: {
    title: "Collective requests are temporarily paused.",
    body: "We occasionally need to pause new requests when our current capacity or available resources are full. Please check back soon for updates and upcoming Community Collective programs.",
  },
  confirmation: {
    title: "Thank you for reaching out.",
    paragraphs: [
      "Your request has been received. We’ll review what you’ve shared along with current Collective resources and New Parent Harmony’s availability, and we’ll be in touch to talk about what support may be possible.",
      "Please remember that submitting a request does not guarantee funded or reduced-cost services.",
    ],
    ctaLabel: "Return to Community Collective",
  },
  privacy:
    "Your information will be used only to review your Community Collective request and communicate with you about available support.",
  inPersonAreaNote:
    "In-person Collective support is currently limited to Montgomery County, Maryland. You’re still welcome to submit this request — we may be able to offer virtual support or another option that fits.",
  learnMoreLabel: "Learn more about the Community Collective",
} as const;

export const supporterPage = {
  eyebrow: "Community Collective",
  title: "Support the Community Collective",
  tagline: "When a community invests in families during the postpartum season, those families are stronger.",
  paragraphs: [
    "New Parent Harmony provides professional postpartum and parent support. The Community Collective is being built as a way for community funding, grants, sponsorships and partnerships to help expand access for families who may otherwise be unable to afford that support.",
    "Funding may help provide fully or partially funded care, reduced-cost care, educational workshops, support groups, community programming and resources for postpartum families — depending on what is available at the time.",
  ],
  primaryCtaLabel: "Help Expand Access",
  primaryCtaHref: `${COLLECTIVE_SUPPORT_HREF}#supporter-form`,
  secondaryCtaLabel: "Learn more about the Collective",
  secondaryCtaHref: COLLECTIVE_HREF,
  whereSupportGoes: {
    eyebrow: "Where support goes",
    title: "Where Support Goes",
    intro:
      "Community Collective funding may be used to help provide postpartum care, education and community programming. What we can offer at any given time depends on available resources and New Parent Harmony’s availability.",
    items: [
      "Fully or partially funded postpartum care, when funding allows",
      "Reduced-cost professional support",
      "Lactation and feeding support",
      "Pediatric sleep education",
      "Free or reduced-cost workshops",
      "Support groups and community gatherings",
      "Practical resources for postpartum families",
      "Community outreach and programming",
    ],
    qualifier:
      "Funded and reduced-cost services depend on Community Collective resources and New Parent Harmony’s availability. Support does not purchase a guaranteed amount of service.",
  },
  waysToSupport: {
    eyebrow: "Ways to help",
    title: "Ways to Support",
    note: "Every level of financial support can help expand access. We’ll talk through what feels right — there is no online donation checkout yet, and support is arranged personally.",
    pathways: [
      {
        id: "family",
        title: "Sponsor a Family or Hours of Care",
        description:
          "Funding can help offset the cost of professional postpartum, feeding or sleep support for a family.",
        ctaLabel: "Talk With Us About Sponsorship",
        interest: "individual",
      },
      {
        id: "program",
        title: "Support a Community Program",
        description:
          "Help make workshops, support groups or educational events free or lower-cost.",
        ctaLabel: "Support a Program",
        interest: "business",
      },
      {
        id: "partner",
        title: "Become a Community Partner",
        description:
          "Businesses and organizations may support through sponsorship, collaboration, resources, venue support or community outreach.",
        ctaLabel: "Become a Community Partner",
        interest: "organization",
      },
      {
        id: "grant",
        title: "Grants and Community Funding",
        description:
          "Grant funding can help expand the number and type of services the Collective is able to offer as it grows.",
        ctaLabel: "Talk About Grant Funding",
        interest: "grant",
      },
      {
        id: "individual",
        title: "Individual Community Support",
        description:
          "If you’d like to contribute or get involved as a neighbor, we’d be glad to talk through a way that fits.",
        ctaLabel: "Get Involved",
        interest: "individual",
      },
    ],
  },
  recognition: {
    eyebrow: "Recognition",
    title: "Sponsor Recognition",
    paragraphs: [
      "We’re proud to recognize the businesses and community partners helping make the Community Collective possible.",
      "Recognition may include our website, community events, social media, workshops, campaigns and partner spotlights, depending on the type of partnership.",
    ],
  },
  impact: {
    eyebrow: "Community impact",
    title: "Community Impact",
    paragraphs: [
      "As the Collective grows, we’ll share the difference this community makes together.",
      "Numbers appear here only when there is a real result to report.",
    ],
    emptyHeadline: "Our impact is just beginning.",
  },
  form: {
    eyebrow: "Get in touch",
    title: "Connect With the Collective",
    intro:
      "Tell us a little about who you are and how you’d like to help. We’ll follow up to talk through sponsorship, partnership or contribution options that fit. There is no online payment checkout yet.",
    identityLegend: "I am inquiring as",
    privacy:
      "Your information will be used only to review your supporter inquiry and communicate with you about the Community Collective.",
    submitLabel: "Connect With the Collective",
  },
  paused: {
    title: "Supporter inquiries are temporarily paused.",
    body: "We’re currently focused on existing partnerships and Collective programs. Please check back soon if you’d like to support the Community Collective.",
  },
  confirmation: {
    title: "Thank you for reaching out.",
    paragraphs: [
      "Your message has been received. We’ll be in touch to talk about how you can support the Community Collective.",
    ],
    ctaLabel: "Return to Community Collective",
  },
} as const;

export const partnerPlaceholder = {
  eyebrow: "Community Collective",
  title: "Partner With the Collective",
  paragraphs: [
    "The partnership and sponsorship pages are being finalized. In the meantime, businesses, healthcare professionals and community organizations can reach out through the New Parent Harmony contact form and mention the Community Collective.",
    "We’re glad to talk through sponsorships, grants, referrals, education and community programming.",
  ],
  ctaHref: CONTACT_FORM_HREF,
  ctaLabel: "Reach out through the contact form",
} as const;
