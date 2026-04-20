/**
 * Upgrade page copy and structure. Checkout uses Stripe (see `/api/checkout`).
 */

export const UPGRADE_HEADER = {
  eyebrow: "Support",
  title: "Choose the kind of help that fits this week",
  subheading:
    "Some seasons need information. Some need a steady voice. Some need a real human in the loop. This page lays out calm options—digital, live, and bundled—so you can match support to how depleted you feel, not how “productive” you think you should be.",
} as const;

export const UPGRADE_VALUE_SUMMARY = {
  title: "What digital membership is for",
  body: "The free side of the app is intentionally real: short reads, checklists embedded in Topics, and a resource library you can search when your brain is fried. Premium digital membership is for when you want more depth unlocked in one quiet place—extra planners, longer guidance, and fewer closed doors when you are trying to make a decision at midnight. It is okay to stay free. It is also okay to upgrade because you are tired of piecing it together alone.",
} as const;

/** Inviting checkout labels (monthly vs annual). Pricing unchanged in UPGRADE_PLANS. */
export const UPGRADE_SUBSCRIBE_LABELS = {
  monthly: "Get support for the weeks ahead",
  annual: "Continue with support",
} as const;

export const UPGRADE_PRICING_INTRO =
  "You will finish checkout on Stripe’s secure page, then land back here. Take your time—this page will be here when this feels like the right week.";

export const UPGRADE_PLANS = {
  monthly: {
    id: "monthly" as const,
    name: "Monthly",
    price: "$9.99",
    period: "per month",
    note: "Flexible if you are not sure how long you will need the library.",
  },
  annual: {
    id: "annual" as const,
    name: "Annual",
    price: "$79",
    period: "per year",
    note: "Best value — less than $7/month when you commit for the year.",
    bestValue: true,
  },
} as const;

export const UPGRADE_PREMIUM_INCLUDES = [
  "More library depth unlocked—still written to be scanned, not studied",
  "Extra planners and worksheets for the boring-but-heavy stuff (boundaries, pump prep, household load)",
  "Clearer language for the “what if this happens” moments—especially feeding, sleep safety, and recovery pacing",
  "A steadier digital companion between visits if you are also working with Gemma in real life",
] as const;

export type UpgradeComparisonRow = {
  label: string;
  free: string;
  premium: string;
};

export const UPGRADE_COMPARISON_INTRO =
  "Honest differences—no stacked “features,” just what you can expect.";

export const UPGRADE_COMPARISON: UpgradeComparisonRow[] = [
  {
    label: "Navigation",
    free: "Topics-first browsing + search",
    premium: "Same calm layout, more unlocked depth inside Topics + library",
  },
  {
    label: "Feeding & sleep",
    free: "Foundations that keep you oriented and safe",
    premium: "More “what if” scenarios and extra planners when you want more backup",
  },
  {
    label: "Recovery & mood",
    free: "Essentials and when to worry",
    premium: "More pacing, language for hard days, and scripts for asking for help",
  },
  {
    label: "Tools & checklists",
    free: "Core bag, birth plan, safe sleep, route, nursery (embedded in Topics)",
    premium: "Extra worksheets—boundaries, pump prep, duties, pediatric questions, and more",
  },
  {
    label: "Library depth",
    free: "Curated free articles",
    premium: "Everything unlocked, including longer reads when you want them",
  },
  {
    label: "Live doula/consult time",
    free: "Not included in digital membership",
    premium: "Not included—choose a live package below if you want Gemma in the loop",
  },
];

export type UpgradeFaqItem = { question: string; answer: string };

export const UPGRADE_FAQ: UpgradeFaqItem[] = [
  {
    question: "Can I cancel anytime?",
    answer:
      "Yep. Once you are on premium, you can handle billing in Stripe’s customer portal from your Account page—cancel before the next renewal if you are done. Renewal dates show up clearly; you are not locked into guessing.",
  },
  {
    question: "Is free still enough?",
    answer:
      "For a lot of people, yes—and we meant it that way. Free is real Topics pages, real checklists, and a searchable resource library. Premium is only if you want more unlocked depth in one quiet place—not because the basics are hidden behind a paywall.",
  },
  {
    question: "Who is premium really for?",
    answer:
      "Anyone who wishes they had one gentle place to open when it is late and things feel loud—feeding, sleep, your own healing, the visitors text thread. If piecing it together from ten blogs sounds exhausting, premium is built for that tired version of you.",
  },
  {
    question: "Does digital membership include live support?",
    answer:
      "Digital membership unlocks content. Live support (calls, consults, doula time) is booked separately—start with a free 15-minute chat if you are not sure what fits.",
  },
];

export const UPGRADE_CTA = {
  title: "Rather talk to a human first?",
  body: "Book a free 15-minute chat or peek at 1:1 services on the main site—zero obligation to buy premium. We will meet you where you are.",
} as const;

export type UpgradeOffering = {
  id: "free-chat" | "premium-digital" | "premium-plus" | "sleep-package";
  title: string;
  price: string;
  cadence: string;
  blurb: string;
  bullets: string[];
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export const UPGRADE_OFFERINGS: UpgradeOffering[] = [
  {
    id: "free-chat",
    title: "Free 15-minute chat",
    price: "Free",
    cadence: "one conversation",
    blurb:
      "A low-pressure way to say the hard sentence out loud and hear what support could look like for your family.",
    bullets: [
      "Bring whatever feels messy—feeding, sleep, recovery, visitors, or “everything at once.”",
      "Leave with a clearer next step (even if that next step is simply rest).",
    ],
    primaryHref: "/discovery-call",
    primaryLabel: "Book a chat",
    secondaryHref: "/contact",
    secondaryLabel: "Contact",
  },
  {
    id: "premium-digital",
    title: "Premium digital membership",
    price: "See plans",
    cadence: "monthly or annual",
    blurb:
      "All digital content unlocked: deeper library reads, extra planners, and fewer closed doors when you are deciding at midnight.",
    bullets: [
      "Built for late-night scrolling—short sections, calm tone, practical framing.",
      "Pairs well with occasional live support if you want both.",
    ],
    primaryHref: "#digital-membership",
    primaryLabel: "View membership options",
  },
  {
    id: "premium-plus",
    title: "Premium Plus Support",
    price: "$59.99",
    cadence: "per month",
    blurb:
      "All digital content, plus two 1-hour virtual sessions monthly with a professional doula—help translating worry into a doable plan.",
    bullets: [
      "For seasons when you want both information and a steady human check-in.",
      "Especially helpful when feeding questions, sleep safety, recovery pacing, and household load stack up together.",
    ],
    primaryHref: "/services",
    primaryLabel: "Ask about Premium Plus",
    secondaryHref: "/discovery-call",
    secondaryLabel: "Start with a chat",
  },
  {
    id: "sleep-package",
    title: "Sleep training package",
    price: "$600",
    cadence: "package",
    blurb:
      "A written sleep plan tailored to your baby and your values, plus two weeks of virtual support while you implement—without shame-based pressure tactics.",
    bullets: [
      "Supportive troubleshooting as nights shift (because they always do).",
      "A better fit when sleep feels like the main drain on your nervous system.",
    ],
    primaryHref: "/services",
    primaryLabel: "Ask about sleep support",
    secondaryHref: "/discovery-call",
    secondaryLabel: "Book a chat",
  },
];
