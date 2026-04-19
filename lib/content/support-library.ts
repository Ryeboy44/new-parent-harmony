/**
 * Support Library — placeholder catalog. Expand or replace with CMS / DB later.
 */

export const SUPPORT_LIBRARY_HEADER = {
  eyebrow: "Member resources",
  title: "Support Library",
  subheading:
    "Trusted, gentle guidance for pregnancy, postpartum, feeding, sleep, and early parenthood—organized so you can find what you need without overwhelm.",
} as const;

export const SUPPORT_LIBRARY_SEARCH_PLACEHOLDER =
  "Search feeding, sleep, recovery, newborn care...";

export type SupportLibraryCategoryId =
  | "preparing"
  | "labor"
  | "feeding"
  | "sleep"
  | "recovery"
  | "emotional"
  | "newborn"
  | "home"
  | "support";

export const SUPPORT_LIBRARY_CATEGORIES: {
  id: SupportLibraryCategoryId;
  label: string;
}[] = [
  { id: "preparing", label: "Preparing for Baby" },
  { id: "labor", label: "Labor & Birth Prep" },
  { id: "feeding", label: "Feeding" },
  { id: "sleep", label: "Sleep" },
  { id: "recovery", label: "Postpartum Recovery" },
  { id: "emotional", label: "Emotional Wellbeing" },
  { id: "newborn", label: "Newborn Care" },
  { id: "home", label: "Practical Home Prep" },
  { id: "support", label: "Getting Support" },
];

export type LibraryTier = "free" | "premium";

export type SupportLibraryResource = {
  id: string;
  title: string;
  summary: string;
  categoryId: SupportLibraryCategoryId;
  tier: LibraryTier;
  /** Shown in the featured strip when true */
  featured: boolean;
};

export const SUPPORT_LIBRARY_RESOURCES: SupportLibraryResource[] = [
  {
    id: "birth-plan",
    title: "Choosing a Birth Plan",
    summary:
      "Clarify your values and preferences so your care team can support you—not a rigid script, just a clear compass.",
    categoryId: "labor",
    tier: "free",
    featured: true,
  },
  {
    id: "hospital-tour",
    title: "Touring the Hospital or Birthing Center",
    summary:
      "What to notice, who to meet, and how to feel more oriented before the big day.",
    categoryId: "preparing",
    tier: "free",
    featured: true,
  },
  {
    id: "pain-options",
    title: "Pain Management Options",
    summary:
      "An overview of medical and non-medical comfort measures—so you can ask better questions without fear.",
    categoryId: "labor",
    tier: "premium",
    featured: true,
  },
  {
    id: "safe-sleep-space",
    title: "Setting Up a Safe Sleep Space",
    summary:
      "Simple, evidence-aligned steps for a bassinet or crib that feels calm—not clinical.",
    categoryId: "sleep",
    tier: "free",
    featured: true,
  },
  {
    id: "feeding-station",
    title: "Creating a Feeding & Diaper Station",
    summary:
      "One cozy corner with everything within reach for those bleary 3 a.m. wakeups.",
    categoryId: "feeding",
    tier: "free",
    featured: true,
  },
  {
    id: "enlist-help",
    title: "Enlisting Help After Baby Arrives",
    summary:
      "How to name what you need, delegate without guilt, and protect your recovery window.",
    categoryId: "support",
    tier: "free",
    featured: true,
  },
  {
    id: "third-trimester-checklist",
    title: "Third Trimester Calm Checklist",
    summary:
      "Small, doable tasks spread across weeks so nothing piles up at the end.",
    categoryId: "preparing",
    tier: "free",
    featured: false,
  },
  {
    id: "partner-labor-role",
    title: "Your Partner’s Role in Labor",
    summary:
      "Concrete ways to offer steady presence—hands, voice, advocacy—without guessing.",
    categoryId: "labor",
    tier: "premium",
    featured: false,
  },
  {
    id: "latch-basics",
    title: "Latch & Positioning Basics",
    summary:
      "Photos-free cues for comfort for you and baby in the first days together.",
    categoryId: "feeding",
    tier: "free",
    featured: false,
  },
  {
    id: "pumping-intro",
    title: "Pumping When You Need a Bridge",
    summary:
      "When a pump might help, how to protect supply, and how to keep expectations humane.",
    categoryId: "feeding",
    tier: "premium",
    featured: false,
  },
  {
    id: "day-night-rhythm",
    title: "Gentle Day–Night Rhythm",
    summary:
      "Light, activity, and feeds—soft patterns without strict schedules in week one.",
    categoryId: "sleep",
    tier: "free",
    featured: false,
  },
  {
    id: "night-wakes",
    title: "Understanding Night Wakes",
    summary:
      "What is typical, when to check in with a clinician, and language for tired brains.",
    categoryId: "sleep",
    tier: "premium",
    featured: false,
  },
  {
    id: "bleeding-lochia",
    title: "Bleeding & Lochia: What’s Normal",
    summary:
      "Ranges, red flags, and how to track without spiraling—written with postpartum brains in mind.",
    categoryId: "recovery",
    tier: "free",
    featured: false,
  },
  {
    id: "cesarean-recovery",
    title: "Cesarean Recovery at Home",
    summary:
      "Movement, rest, incision care basics, and pacing that respects healing.",
    categoryId: "recovery",
    tier: "premium",
    featured: false,
  },
  {
    id: "baby-blues",
    title: "Baby Blues vs. Something More",
    summary:
      "Normalize the rollercoaster while naming when extra support matters.",
    categoryId: "emotional",
    tier: "free",
    featured: false,
  },
  {
    id: "anxiety-spirals",
    title: "When Worry Shows Up in Loops",
    summary:
      "Grounding prompts and scripts for partners—premium deep-dive with examples.",
    categoryId: "emotional",
    tier: "premium",
    featured: false,
  },
  {
    id: "diapering-101",
    title: "Diapering 101",
    summary:
      "Wipes, rash watch, and changing in the dark without losing your mind.",
    categoryId: "newborn",
    tier: "free",
    featured: false,
  },
  {
    id: "bathing-newborn",
    title: "First Baths Without the Stress",
    summary:
      "Warmth, safety, and keeping it short—plus when to skip a day guilt-free.",
    categoryId: "newborn",
    tier: "premium",
    featured: false,
  },
  {
    id: "freezer-meals",
    title: "Freezer & Snack Prep",
    summary:
      "One-handed fuel ideas that are kind to postpartum hunger and low energy.",
    categoryId: "home",
    tier: "free",
    featured: false,
  },
  {
    id: "visitor-boundaries",
    title: "Visitor Boundaries That Feel Kind",
    summary:
      "Scripts and timing ideas so your nest feels protected, not rude.",
    categoryId: "home",
    tier: "premium",
    featured: false,
  },
  {
    id: "lactation-visit",
    title: "When to Book a Lactation Visit",
    summary:
      "Signals that one-to-one help could save weeks of worry—and how to prepare.",
    categoryId: "support",
    tier: "premium",
    featured: false,
  },
];

export function categoryLabel(
  id: SupportLibraryCategoryId,
): string {
  return SUPPORT_LIBRARY_CATEGORIES.find((c) => c.id === id)?.label ?? id;
}

/** Build `/app/support-library` URL with optional filters */
export function supportLibraryHref(opts: { q?: string; cat?: string }) {
  const p = new URLSearchParams();
  const q = opts.q?.trim();
  if (q) p.set("q", q);
  if (opts.cat && opts.cat !== "all") p.set("cat", opts.cat);
  const s = p.toString();
  return s ? `/app/support-library?${s}` : "/app/support-library";
}

export function matchesSupportLibraryFilters(
  resource: SupportLibraryResource,
  opts: { q: string; cat: string },
): boolean {
  const q = opts.q.trim().toLowerCase();
  const cat = opts.cat || "all";

  if (cat !== "all" && resource.categoryId !== cat) return false;

  if (!q) return true;

  const hay = [
    resource.title,
    resource.summary,
    categoryLabel(resource.categoryId),
  ]
    .join(" ")
    .toLowerCase();

  return hay.includes(q);
}
