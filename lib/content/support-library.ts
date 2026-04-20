/**
 * Support Library — structured catalog mapped from `docs/preparing-for-baby-guide.md`.
 * Categories are mobile-friendly filters; copy stays concise and skimmable.
 */

export const SUPPORT_LIBRARY_HEADER = {
  eyebrow: "Member resources",
  title: "Resource library",
  subheading:
    "Trusted, gentle guidance organized for scanning—short reads, checklists, and next-step links without overwhelm.",
} as const;

export const SUPPORT_LIBRARY_SEARCH_PLACEHOLDER =
  "Search birth prep, feeding, recovery, boundaries...";

export type SupportLibraryCategoryId =
  | "birth-prep"
  | "home-baby"
  | "feeding-equipment"
  | "support-recovery"
  | "family-boundaries"
  | "celebration-registry";

export const SUPPORT_LIBRARY_CATEGORIES: {
  id: SupportLibraryCategoryId;
  label: string;
}[] = [
  { id: "birth-prep", label: "Birth Preparation" },
  { id: "home-baby", label: "Home & Baby Setup" },
  { id: "feeding-equipment", label: "Feeding & Equipment" },
  { id: "support-recovery", label: "Support & Recovery" },
  { id: "family-boundaries", label: "Family & Boundaries" },
  { id: "celebration-registry", label: "Celebration & Registry" },
];

export type LibraryTier = "free" | "premium";

export type SupportLibraryResource = {
  id: string;
  title: string;
  summary: string;
  categoryId: SupportLibraryCategoryId;
  /** Topic-first navigation bucket (maps to `MEMBER_TOPICS`). */
  topicId:
    | "feeding"
    | "sleep"
    | "recovery"
    | "getting-ready"
    | "home-setup"
    | "support-boundaries"
    | "mental-emotional";
  tier: LibraryTier;
  featured: boolean;
};

export const SUPPORT_LIBRARY_RESOURCES: SupportLibraryResource[] = [
  {
    id: "birth-plan-values",
    title: "Birth Plan as Values, Not a Script",
    summary:
      "Clarify what matters most—comfort, communication, consent—so your team can support you when paths change.",
    categoryId: "birth-prep",
    topicId: "getting-ready",
    tier: "free",
    featured: true,
  },
  {
    id: "hospital-tour-questions",
    title: "Hospital or Birth Center Tour",
    summary:
      "What to notice, who to meet, and questions that turn a walk-through into real orientation.",
    categoryId: "birth-prep",
    topicId: "getting-ready",
    tier: "free",
    featured: true,
  },
  {
    id: "childbirth-class-fit",
    title: "Choosing a Childbirth Class",
    summary:
      "Group vs. private, online vs. in person, and how to spot a balanced curriculum—not fear or fluff alone.",
    categoryId: "birth-prep",
    topicId: "getting-ready",
    tier: "free",
    featured: true,
  },
  {
    id: "pain-options-overview",
    title: "Pain Management: Natural & Medical",
    summary:
      "Breathing, movement, water, epidurals, nitrous—an overview so options feel familiar, not foreign.",
    categoryId: "birth-prep",
    topicId: "getting-ready",
    tier: "premium",
    featured: true,
  },
  {
    id: "stages-of-labor",
    title: "Stages of Labor (Quick Map)",
    summary:
      "Early vs. active labor, pushing, and delivering the placenta—plain language for tired brains.",
    categoryId: "birth-prep",
    topicId: "getting-ready",
    tier: "premium",
    featured: false,
  },
  {
    id: "route-to-hospital",
    title: "Mapping Your Route to Care",
    summary:
      "Primary and backup routes, parking, weather, and who texts whom when you are on the way.",
    categoryId: "birth-prep",
    topicId: "getting-ready",
    tier: "free",
    featured: false,
  },
  {
    id: "nursery-safe-sleep",
    title: "Nursery & Safe Sleep Basics",
    summary:
      "Firm flat surface, alone, on the back—plus what to skip so the room feels calm, not cluttered.",
    categoryId: "home-baby",
    topicId: "sleep",
    tier: "free",
    featured: true,
  },
  {
    id: "kitchen-prep",
    title: "Kitchen & Easy Meals Before Baby",
    summary:
      "Stock staples, one-handed snacks, and freezer ideas that respect low energy—not gourmet expectations.",
    categoryId: "home-baby",
    topicId: "home-setup",
    tier: "free",
    featured: true,
  },
  {
    id: "car-seat-basics",
    title: "Car Seat Installation Basics",
    summary:
      "Why install early, where to find CPST help, and why the manual is your best friend.",
    categoryId: "home-baby",
    topicId: "getting-ready",
    tier: "free",
    featured: false,
  },
  {
    id: "gear-calm",
    title: "Baby Gear Without the Noise",
    summary:
      "What often helps, what can wait, and how to avoid shopping from anxiety.",
    categoryId: "home-baby",
    topicId: "home-setup",
    tier: "premium",
    featured: false,
  },
  {
    id: "feeding-station",
    title: "Feeding & Diaper Station",
    summary:
      "One reachable zone for water, snacks, burp cloths, and supplies—for bleary 3 a.m. wakeups.",
    categoryId: "feeding-equipment",
    topicId: "feeding",
    tier: "free",
    featured: true,
  },
  {
    id: "bottles-diapers",
    title: "Choosing Bottles & Diapers",
    summary:
      "Starter strategies without buying every brand—simple beats perfect.",
    categoryId: "feeding-equipment",
    topicId: "feeding",
    tier: "free",
    featured: false,
  },
  {
    id: "pump-selection",
    title: "Pump Selection & Insurance",
    summary:
      "When a pump helps, questions for DME suppliers, and keeping expectations humane.",
    categoryId: "feeding-equipment",
    topicId: "feeding",
    tier: "premium",
    featured: false,
  },
  {
    id: "enlist-help",
    title: "Finding Help You Can Actually Use",
    summary:
      "What a postpartum doula, IBCLC, night nurse, or cleaner each does—and how to say “yes, we need that” without shrinking.",
    categoryId: "support-recovery",
    topicId: "recovery",
    tier: "premium",
    featured: true,
  },
  {
    id: "postpartum-meals",
    title: "Meals & Groceries When You’re Running on Empty",
    summary:
      "Meal trains, delivery apps, and snacks you can eat one-handed—fuel without another decision to make.",
    categoryId: "support-recovery",
    topicId: "recovery",
    tier: "premium",
    featured: false,
  },
  {
    id: "bleeding-lochia",
    title: "Bleeding & Lochia: What’s Normal, What’s Not",
    summary:
      "What lochia tends to do day by day, what to watch for, and when to call—plain words for a tired brain.",
    categoryId: "support-recovery",
    topicId: "recovery",
    tier: "free",
    featured: false,
  },
  {
    id: "household-duties",
    title: "Dividing Duties at Home",
    summary:
      "Fair splits, visible task lists, and naming mental load—not just dishes.",
    categoryId: "family-boundaries",
    topicId: "support-boundaries",
    tier: "premium",
    featured: true,
  },
  {
    id: "visitor-boundaries",
    title: "Visitors & Messaging Boundaries",
    summary:
      "Scripts for short visits, delayed meet-and-greets, and protecting your nest kindly.",
    categoryId: "family-boundaries",
    topicId: "support-boundaries",
    tier: "premium",
    featured: true,
  },
  {
    id: "nursing-in-public-family",
    title: "Feeding Around Family & in Public",
    summary:
      "Values, privacy, and phrases that protect your choices without debate in the nursery.",
    categoryId: "family-boundaries",
    topicId: "support-boundaries",
    tier: "premium",
    featured: false,
  },
  {
    id: "discipline-alignment",
    title: "Big-Picture Parenting Alignment",
    summary:
      "How you might approach discipline, screen time later, and consistency—conversation starters, not verdicts.",
    categoryId: "family-boundaries",
    topicId: "support-boundaries",
    tier: "premium",
    featured: false,
  },
  {
    id: "baby-shower-registry",
    title: "Baby Shower & Registry Sanity",
    summary:
      "Useful registries, group gifts, and permission to skip what does not fit your space or values.",
    categoryId: "celebration-registry",
    topicId: "home-setup",
    tier: "free",
    featured: true,
  },
  {
    id: "medical-financial-prep",
    title: "Medical & Financial Pre-Birth Prep",
    summary:
      "Insurance checks, FSA/HSA, leave paperwork, and pediatric choice—chunked so it feels doable.",
    categoryId: "celebration-registry",
    topicId: "getting-ready",
    tier: "premium",
    featured: true,
  },
  {
    id: "pets-siblings",
    title: "Pets & Siblings Before Baby",
    summary:
      "Gradual introductions, routines, and emotional prep for older kids—gentle transitions.",
    categoryId: "home-baby",
    topicId: "home-setup",
    tier: "premium",
    featured: false,
  },
];

export function categoryLabel(id: SupportLibraryCategoryId): string {
  return SUPPORT_LIBRARY_CATEGORIES.find((c) => c.id === id)?.label ?? id;
}

export function supportLibraryHref(opts: { q?: string; cat?: string }) {
  const p = new URLSearchParams();
  const q = opts.q?.trim();
  if (q) p.set("q", q);
  if (opts.cat && opts.cat !== "all") p.set("cat", opts.cat);
  const s = p.toString();
  return s ? `/app/support?${s}` : "/app/support";
}

export function resourceLibraryHref(opts: { q?: string; cat?: string; topic?: string }) {
  const p = new URLSearchParams();
  const q = opts.q?.trim();
  if (q) p.set("q", q);
  if (opts.cat && opts.cat !== "all") p.set("cat", opts.cat);
  if (opts.topic && opts.topic !== "all") p.set("topic", opts.topic);
  const s = p.toString();
  return s ? `/app/support?${s}` : "/app/support";
}

export function matchesSupportLibraryFilters(
  resource: SupportLibraryResource,
  opts: { q: string; cat: string; topic?: string },
): boolean {
  const q = opts.q.trim().toLowerCase();
  const cat = opts.cat || "all";
  const topic = opts.topic || "all";

  if (cat !== "all" && resource.categoryId !== cat) return false;
  if (topic !== "all" && resource.topicId !== topic) return false;

  if (!q) return true;

  const hay = [
    resource.title,
    resource.summary,
    categoryLabel(resource.categoryId),
    resource.topicId,
  ]
    .join(" ")
    .toLowerCase();

  return hay.includes(q);
}
