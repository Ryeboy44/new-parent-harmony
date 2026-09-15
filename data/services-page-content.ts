import { COLLECTIVE_HREF, COLLECTIVE_REQUEST_HREF } from "@/data/community-collective-content";
import { PRIMARY_CTA_HREF } from "@/data/site-cta";

export type ServiceDetail = {
  id: string;
  title: string;
  introParagraphs: string[];
  supportItems: string[];
  closingParagraphs: string[];
  whyItMatters: string[];
  pricing: { headline: string; details: string[] };
  ctaLabel: string;
  ctaHref: string;
};

export const servicesHero = {
  eyebrow: "Services",
  title:
    "Support for the early years of parenting — with care that fits your family.",
  description:
    "Whether you are preparing for postpartum, working through feeding challenges, struggling with sleep, or simply feeling overwhelmed, New Parent Harmony offers practical, compassionate support for families welcoming a baby.",
  primaryCta: { label: "Book a Free Discovery Call", href: PRIMARY_CTA_HREF },
  secondaryCta: { label: "Explore Services", href: "#services-list" },
} as const;

export const approachSection = {
  title: "A Whole-Family Approach to Support",
  paragraphs: [
    "At New Parent Harmony, support is shaped around your baby, your recovery, and the way your household actually works. My role is to provide calm, practical, evidence-informed support that helps families feel less overwhelmed during one of the biggest transitions of life.",
    "As a certified postpartum doula, certified lactation counselor, and pediatric sleep consultant with over 20 years of experience supporting families, I look at the full picture — because feeding, sleep, emotional wellbeing, recovery, and confidence are all deeply connected.",
  ],
  credentials: [
    { label: "Postpartum Doula", description: "Certified care for recovery and early weeks" },
    { label: "Lactation Counselor", description: "Feeding support without judgment" },
    { label: "Pediatric Sleep Consultant", description: "Gentle, family-centered sleep guidance" },
    { label: "20+ Years Experience", description: "Supporting families through real-life transitions" },
  ],
} as const;

export const serviceDetails: ServiceDetail[] = [
  {
    id: "postpartum-doula-care",
    title: "Postpartum Doula Care",
    introParagraphs: [
      "The early days with a baby can feel beautiful, emotional, exhausting, and overwhelming all at once. My role as your postpartum doula is to step into that season with calm, practical, non-judgmental support so the days feel more manageable.",
      "As a certified postpartum doula, certified lactation counselor, and pediatric sleep consultant with over 20 years of experience supporting families, I look at the full picture — not just the baby, but the wellbeing of the entire family.",
    ],
    closingParagraphs: [
      "One of the biggest benefits of working with someone trained in postpartum recovery, lactation, and infant sleep is that these areas are deeply connected. Feeding struggles can affect sleep. Sleep deprivation can affect mental health. Recovery can affect confidence. Rather than looking at one challenge in isolation, I help families gently connect the pieces together in a way that feels realistic and supportive.",
    ],
    supportItems: [
      "newborn care guidance",
      "feeding support",
      "emotional support and reassurance",
      "helping families find rhythm and routine",
      "sibling adjustment",
      "light household support",
      "meal prep and organization",
      "infant soothing and sleep shaping",
      "confidence-building for parents",
    ],
    whyItMatters: [
      "Postpartum doula support in Montgomery County, MD and surrounding areas helps families feel steadier during recovery — with guidance that honors your values and your pace.",
    ],
    pricing: {
      headline: "$60/hour",
      details: [
        "Daytime in-home support throughout Montgomery County, MD and surrounding areas.",
        "Virtual support available worldwide.",
      ],
    },
    ctaLabel: "Schedule a Discovery Call",
    ctaHref: PRIMARY_CTA_HREF,
  },
  {
    id: "lactation-support",
    title: "Feeding/Lactation Support",
    introParagraphs: [
      "Feeding a baby is not always as instinctive or straightforward as many parents expect, and struggling does not mean you are failing.",
      "Whether you are breastfeeding, combination feeding, pumping, bottle feeding, or still figuring out what works best for your family, my goal is to offer support without pressure or judgment.",
    ],
    closingParagraphs: [
      "What makes this support different is that I also bring postpartum and pediatric sleep knowledge into the conversation. Feeding challenges often affect sleep, stress levels, recovery, and family wellbeing. Together we create a realistic plan that supports both baby and parents.",
    ],
    supportItems: [
      "painful latch",
      "milk supply concerns",
      "pumping and flange fitting",
      "bottle transitions",
      "reflux and feeding discomfort",
      "paced feeding",
      "returning to work",
      "feeding schedules and routines",
      "combination feeding support",
    ],
    whyItMatters: [
      "Lactation counseling in Maryland — in-home in Bethesda, Rockville, and surrounding areas, or virtual — so feeding support fits your real life, not a textbook ideal.",
    ],
    pricing: {
      headline: "Lactation Consults: $150",
      details: ["In-home and virtual support available."],
    },
    ctaLabel: "Book Lactation Support",
    ctaHref: PRIMARY_CTA_HREF,
  },
  {
    id: "sleep-support",
    title: "Infant Sleep Support",
    introParagraphs: [
      "Sleep deprivation affects every part of parenting — mental health, relationships, recovery, patience, confidence, and daily functioning. Many parents are not looking for perfection. They simply want more rest and more predictability for their family.",
    ],
    closingParagraphs: [
      "As a pediatric sleep consultant with additional training in lactation and postpartum support, I understand that sleep challenges are rarely isolated. Feeding, temperament, development, parental exhaustion, and postpartum wellbeing all play a role. Some families need structured sleep support, while others simply need guidance, reassurance, and a plan.",
      "I support both gentle parent-present approaches and more structured sleep methods depending on each family’s comfort level and goals.",
    ],
    supportItems: [
      "bedtime struggles",
      "frequent night waking",
      "nap challenges",
      "sleep regressions",
      "schedule guidance",
      "transitioning away from contact sleep",
      "moving away from rocking or feeding to sleep",
      "toddler sleep support",
      "independent sleep skills",
    ],
    whyItMatters: [
      "Sleep consultant support in Montgomery County and beyond — newborn support near you or online — with plans that respect feeding, development, and how exhausted you actually feel.",
    ],
    pricing: {
      headline: "Comprehensive Sleep Plans: $550",
      details: [
        "Includes a personalized written sleep plan, two weeks of virtual support, and a wrap-up call.",
      ],
    },
    ctaLabel: "Get Sleep Support",
    ctaHref: PRIMARY_CTA_HREF,
  },
  {
    id: "sleep-feed-reset",
    title: "Sleep & Feed Reset",
    introParagraphs: [
      "Sometimes families do not need ongoing support — they simply need someone to come in, look at the full picture, and help them reset.",
      "The Sleep & Feed Reset is designed for parents who feel stuck, exhausted, overwhelmed, or unsure where to begin.",
    ],
    closingParagraphs: [
      "This session combines postpartum, lactation, and pediatric sleep expertise into one practical, supportive reset plan designed specifically for your family.",
    ],
    supportItems: [
      "feeding and sleep rhythm guidance",
      "wake window support",
      "bedtime struggles",
      "reflux-related feeding/sleep concerns",
      "soothing support",
      "routine guidance",
      "gentle transitions toward healthier sleep habits",
      "realistic family-centered planning",
    ],
    whyItMatters: [
      "A focused starting point when postpartum support, feeding, and sleep all feel tangled — especially helpful for families in Montgomery County, MD preparing for or already in the thick of newborn life.",
    ],
    pricing: {
      headline: "Sleep & Feed Reset: $275",
      details: [
        "Includes a 90-minute consultation and personalized written recommendations.",
      ],
    },
    ctaLabel: "Book a Reset Session",
    ctaHref: PRIMARY_CTA_HREF,
  },
];

export const notSureSection = {
  title: "Not Sure What Support You Need?",
  paragraphs: [
    "Many families reach out feeling unsure whether their challenges are related to feeding, sleep, postpartum recovery, or simply the overwhelm of adjusting to life with a baby.",
    "That is exactly why I offer a free discovery chat.",
    "Together we can talk through what is going on and decide what type of support would feel most helpful for your family — without pressure or obligation.",
  ],
  ctaLabel: "Book Your Free Discovery Call",
  ctaHref: PRIMARY_CTA_HREF,
} as const;

export const communitySupportPath = {
  title: "Need support, but cost is a barrier?",
  description:
    "The New Parent Harmony Community Collective helps make postpartum and family support more accessible when funding and availability allow.",
  primaryCta: { label: "Explore Community Support", href: COLLECTIVE_HREF },
  secondaryCta: { label: "Request Support", href: COLLECTIVE_REQUEST_HREF },
} as const;
