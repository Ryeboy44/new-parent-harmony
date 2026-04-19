/**
 * Upgrade page copy and structure. Wire `data-stripe-plan` on checkout buttons to Stripe later.
 */

export const UPGRADE_HEADER = {
  eyebrow: "Member app",
  title: "Upgrade Your Support",
  subheading:
    "Premium is for when you want deeper, calmer guidance—through pregnancy, postpartum, feeding, sleep, and recovery—without wading through noise. Everything stays grounded in the same gentle, evidence-informed approach you already trust here.",
} as const;

export const UPGRADE_VALUE_SUMMARY = {
  title: "Free stays generous. Premium goes further.",
  body: "The free experience gives you solid foundations—helpful articles, essential checklists, and a calm place to start. Premium adds rhythm: week-by-week pathways, richer feeding and sleep context, and tools that grow with you. There is no pressure—many families happily stay on free, and that is by design.",
} as const;

export const UPGRADE_PLANS = {
  monthly: {
    id: "monthly" as const,
    name: "Monthly",
    price: "$9.99",
    period: "per month",
    /** Placeholder — replace with Stripe Price ID when integrating */
    stripeDataAttr: "monthly",
    note: "Flexible if you are not sure how long you will need the library.",
  },
  annual: {
    id: "annual" as const,
    name: "Annual",
    price: "$79",
    period: "per year",
    stripeDataAttr: "annual",
    note: "Best value — less than $7/month when you commit for the year.",
    bestValue: true,
  },
} as const;

export const UPGRADE_PREMIUM_INCLUDES = [
  "Week-by-week pregnancy and postpartum guidance you can follow without overwhelm",
  "Deeper feeding and sleep support—context, scripts, and what to try next when things shift",
  "Recovery and emotional wellbeing resources written for tired, tender brains",
  "Premium tools and checklists you can save, print, or revisit between visits",
  "Full expert library access—including longer guides and partner-ready summaries",
] as const;

export type UpgradeComparisonRow = {
  label: string;
  free: string;
  premium: string;
};

export const UPGRADE_COMPARISON: UpgradeComparisonRow[] = [
  {
    label: "Guides & pathways",
    free: "Core articles and starting points",
    premium: "Full week-by-week pathways + deep dives",
  },
  {
    label: "Feeding & sleep",
    free: "Foundations and safety-first basics",
    premium: "Layered strategies, troubleshooting flows, and printable plans",
  },
  {
    label: "Recovery & mood",
    free: "Key education and red-flag awareness",
    premium: "Expanded coping tools, partner prompts, and pacing ideas",
  },
  {
    label: "Tools & checklists",
    free: "Essential free toolkit",
    premium: "Premium planners, trackers, and home-prep bundles",
  },
  {
    label: "Library depth",
    free: "Curated free catalog",
    premium: "Entire expert library, updated over time",
  },
  {
    label: "1:1 doula or consult time",
    free: "Not included",
    premium: "Not included — book separately anytime",
  },
];

export type UpgradeFaqItem = { question: string; answer: string };

export const UPGRADE_FAQ: UpgradeFaqItem[] = [
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. When Stripe billing is connected, you will manage your subscription from your account and can cancel before the next renewal. We will always show renewal dates clearly before you pay.",
  },
  {
    question: "Is the free version still useful?",
    answer:
      "Absolutely. Free is not a teaser that leaves you stranded—it is real support. Premium is simply there when you want more depth, structure, and time-saving tools in one place.",
  },
  {
    question: "Who is premium best for?",
    answer:
      "Families who like having a steady companion in their pocket—especially through late pregnancy, the first months home, or any season where feeding, sleep, or recovery feel especially loud.",
  },
  {
    question: "Does premium include 1:1 support?",
    answer:
      "Premium is digital guidance and resources. In-person or virtual 1:1 care with Gemma is booked separately through the main site—many members use both: the app for rhythm between visits, and sessions when they want hands-on or live help.",
  },
];

export const UPGRADE_CTA = {
  title: "Craving something even more tailored?",
  body: "If you want a human beside you—not just an app—you can book a free 15-minute chat or explore 1:1 services. There is never pressure to choose premium or paid care; we will meet you where you are.",
} as const;
