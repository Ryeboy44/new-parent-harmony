/**
 * Upgrade page copy and structure. Checkout uses Stripe (see `/api/checkout`).
 */

export const UPGRADE_HEADER = {
  eyebrow: "Member app",
  title: "When you’re ready, more of the path opens up",
  subheading:
    "Late nights, loud feeds, a body that is still healing—you should not have to stitch it all together from random corners of the internet. Premium keeps the same calm voice you already trust here, with more weeks, more depth, and a place to land when your brain is tired but your questions are not.",
} as const;

export const UPGRADE_VALUE_SUMMARY = {
  title: "What premium is actually for",
  body: "Free already gives you something real: trustworthy reads, practical checklists, and Week One postpartum so you are not starting from zero. Premium is for when you want the rest of the story in one steady place—the weeks after Week One, the trickier feeding and sleep stretches, recovery and mood when they get loud, and tools for boundaries and home life when you are too tired to invent a system. You are not paying for hype; you are paying for less guesswork on the hard days. Stay on free as long as it feels like enough. If it does not, we are here.",
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
  "Fewer 3 a.m. spirals—clearer guidance for the weeks when nights and feeds feel personal, not theoretical",
  "A sense of what might come next, so surprise feels a little less like failure",
  "Words you can actually use with a partner or family when you need backup, not just more tabs to read",
  "Checklists and planners for the boring-but-heavy stuff (bags, boundaries, pump prep) so your tired brain does not have to invent them",
  "The full library when you want to go deeper—still in short, gentle chunks, not a wall of jargon",
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
    label: "Guides & pathways",
    free: "A strong start, including Week One postpartum",
    premium: "The rest of the weekly path—trimester prep through early months",
  },
  {
    label: "Feeding & sleep",
    free: "Foundations that keep you oriented and safe",
    premium: "Later weeks and messier nights—more “what if this happens”",
  },
  {
    label: "Recovery & mood",
    free: "Essentials and when to worry",
    premium: "More pacing, language for hard days, and room for your partner too",
  },
  {
    label: "Tools & checklists",
    free: "Core bag, birth plan, safe sleep, route, nursery",
    premium: "Extra worksheets—boundaries, pump prep, duties, pediatric questions, and more",
  },
  {
    label: "Library depth",
    free: "Curated free articles",
    premium: "Everything unlocked, including longer reads when you want them",
  },
  {
    label: "1:1 doula or consult time",
    free: "Not included",
    premium: "Not included—book separately anytime if you want hands-on care",
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
      "For a lot of people, yes—and we meant it that way. Free is real articles, real checklists, real Week One. Premium is only if you want the longer runway and the fuller library in one quiet app, not because we hid the basics behind a paywall.",
  },
  {
    question: "Who is premium really for?",
    answer:
      "Anyone who wishes they had one gentle place to open when it is late and things feel loud—feeding, sleep, your own healing, the visitors text thread. If piecing it together from ten blogs sounds exhausting, premium is built for that tired version of you.",
  },
  {
    question: "Does this include time with Gemma?",
    answer:
      "Premium is the digital side—guides, tools, library. If you want Gemma’s eyes and hands on your situation, that is booked through the main site. Plenty of families use both: the app between visits, Gemma when they need a person in the room (or on a screen).",
  },
];

export const UPGRADE_CTA = {
  title: "Rather talk to a human first?",
  body: "Book a free 15-minute chat or peek at 1:1 services on the main site—zero obligation to buy premium. We will meet you where you are.",
} as const;
