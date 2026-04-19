/**
 * Printable-style tools — distilled from `docs/preparing-for-baby-guide.md`.
 * Tier: practical setup & trust-building = free; deeper systems = premium.
 */

export const MEMBER_TOOLS_HEADER = {
  eyebrow: "Member app",
  title: "Tools & checklists",
  subheading:
    "Short, skimmable worksheets you can use on your phone or jot down at home—no perfection required.",
} as const;

export type MemberToolTier = "free" | "premium";

export type MemberTool = {
  id: string;
  title: string;
  summary: string;
  tier: MemberToolTier;
  /** Skimmable prompts / bullets */
  items: string[];
};

export const MEMBER_TOOLS: MemberTool[] = [
  {
    id: "hospital-bag",
    title: "Hospital Bag Checklist",
    summary: "Comfort, paperwork, and baby’s ride home—without overpacking.",
    tier: "free",
    items: [
      "ID, insurance card, birth preferences copy",
      "Phone, long charger, lip balm, hair ties",
      "Loose labor layers + warm socks or slippers",
      "Nursing bra or soft bra, giant underwear if you like",
      "Snacks + water bottle for you; partner snacks too",
      "Going-home outfit for baby + installed rear-facing seat",
    ],
  },
  {
    id: "birth-plan",
    title: "Birth Plan Worksheet",
    summary: "Values and preferences your team can scan in a hurry.",
    tier: "free",
    items: [
      "Top 3 priorities (e.g. informed consent, skin-to-skin, quiet room)",
      "Pain: open to epidural / prefer nitrous first / natural tools",
      "Monitoring: preferences if low-risk (ask what your setting allows)",
      "Pushing positions you want to try",
      "If cesarean: who stays with you, screen down for skin-to-skin if safe",
      "Immediate newborn: delayed cord, vitamin K / eye ointment questions for your provider",
    ],
  },
  {
    id: "hospital-tour",
    title: "Hospital Tour Questions",
    summary: "Turn a walk-through into real answers.",
    tier: "free",
    items: [
      "Where do we check in after hours?",
      "Partner / doula presence rules—any COVID or visitor limits?",
      "Tubs, balls, peanut balls—what’s available?",
      "Lactation support: how do we page someone?",
      "NICU: where is it, how do updates work?",
      "Postpartum: rooming-in, nursery policy, discharge timing ballpark",
    ],
  },
  {
    id: "pediatrician-interview",
    title: "Pediatrician Interview Questions",
    summary: "Fit matters as much as credentials.",
    tier: "premium",
    items: [
      "After-hours: nurse line? weekend sick visits?",
      "Same-day sick: how hard is it to get in?",
      "Breast/chestfeeding & bottle support—who do you refer to?",
      "Vaccine schedule approach & how you discuss concerns",
      "How growth is tracked; when you worry about percentiles",
      "Telehealth options; hospital affiliations if baby is admitted",
    ],
  },
  {
    id: "route-hospital",
    title: "Route-to-Hospital Checklist",
    summary: "Less adrenaline, fewer wrong turns.",
    tier: "free",
    items: [
      "Primary + backup route saved in maps; screenshot if needed",
      "Parking deck / ER vs L&D entrance—where is birth admission?",
      "Gas level or EV charge the week of due date",
      "Emergency contacts in favorites + on paper in bag",
      "Childcare / pet coverage confirmed with backup name",
    ],
  },
  {
    id: "nursery-essentials",
    title: "Nursery Essentials Checklist",
    summary: "Safe sleep first; decor can wait.",
    tier: "free",
    items: [
      "Firm mattress, tight sheet, empty crib or bassinet",
      "Sleepsack or swaddle per safe guidelines",
      "Changing zone with diapers, wipes, rash cream",
      "Dim night light for feeds; sound machine if you like",
      "Hamper + spare crib sheets",
      "Skip loose bumpers, pillows, positioners",
    ],
  },
  {
    id: "feeding-station",
    title: "Feeding Station Checklist",
    summary: "One cozy corner for marathon sessions.",
    tier: "premium",
    items: [
      "Water bottle + one-handed snacks",
      "Burp cloths, nipple cream if chestfeeding, pump parts if pumping",
      "Phone charger, remote, book, or show queued",
      "Basket for clean vs dirty pump parts",
      "Basketball water bottle or straw—easier one-handed",
      "Timer or app only if it helps—not if it fuels anxiety",
    ],
  },
  {
    id: "safe-sleep",
    title: "Safe Sleep Checklist",
    summary: "Evidence-aligned basics you can repeat tired.",
    tier: "free",
    items: [
      "Alone, on back, firm flat surface in your room or nursery per guidance",
      "No loose blankets—sleepsack instead",
      "Room temperature comfortable for a light layer",
      "No inclined sleepers or unsupervised loungers for sleep",
      "When exhausted, ask someone to hold baby—sofas and recliners are riskier than a planned shift",
    ],
  },
  {
    id: "visitor-boundaries",
    title: "Visitor Boundaries Planner",
    summary: "Protect your nest without guilt.",
    tier: "premium",
    items: [
      "Visiting hours window that feels doable (e.g. 2–4 pm)",
      "One “gatekeeper” who communicates rules",
      "Ask for meals or errands instead of long visits",
      "Flu / recent illness: postpone kindly",
      "Script: “We’re resting—text first; short visits help us most.”",
    ],
  },
  {
    id: "household-duties",
    title: "Household Duties Planner",
    summary: "Split visible tasks and invisible mental load.",
    tier: "premium",
    items: [
      "List recurring tasks: trash, groceries, laundry, bills, pets",
      "Assign owners—not “help me” but “you own trash Wednesdays”",
      "Weekly 10-minute sync: what slipped, what to drop",
      "Outsource one thing if budget allows (cleaning, meal)",
      "Permission to let non-safety chores slide",
    ],
  },
  {
    id: "pump-selection",
    title: "Pump Selection Worksheet",
    summary: "Insurance, flange fit, and realistic use.",
    tier: "premium",
    items: [
      "Insurance DME: call early; ask brands covered + upgrade cost",
      "Flange sizing with IBCLC or measurement guide—not guesswork",
      "Hands-free vs primary pump: when each makes sense",
      "Cleaning plan: who washes parts at 3 a.m.?",
      "Return-to-work timing vs exclusive pumping goals",
    ],
  },
  {
    id: "medical-financial",
    title: "Medical & Financial Prep Planner",
    summary: "Paperwork chunked so it feels lighter.",
    tier: "premium",
    items: [
      "Add baby to insurance within deadline—note date on calendar",
      "FSA/HSA eligible items you might stock pre-birth",
      "Short-term disability / parental leave paperwork started",
      "Pediatrician choice + hospital pediatric handoff understood",
      "Emergency fund buffer or payment plan if bills stress you",
    ],
  },
];

export function canAccessTool(
  tier: MemberToolTier,
  plan: "free" | "premium",
): boolean {
  return tier === "free" || plan === "premium";
}
