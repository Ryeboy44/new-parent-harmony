/**
 * Weekly Guide — structured phases and copy. Add new week ids + detail blocks to scale.
 */

export const WEEKLY_GUIDE_HEADER = {
  eyebrow: "Member app",
  title: "Weekly Guide",
  subheading:
    "Gentle, week-by-week support for pregnancy, birth prep, and the early postpartum months—so you always know what might be normal, what to watch for, and how to be kind to yourself along the way.",
} as const;

export type WeeklyGuideStageId = "preparing" | "postpartum" | "early";

export const WEEKLY_GUIDE_STAGES: {
  id: WeeklyGuideStageId;
  label: string;
  description: string;
}[] = [
  {
    id: "preparing",
    label: "Preparing for Baby",
    description: "Before labor—orientation, packing, and emotional grounding.",
  },
  {
    id: "postpartum",
    label: "Postpartum Weeks",
    description: "The first six weeks home—healing, feeding, sleep, and rhythm.",
  },
  {
    id: "early",
    label: "Early Months",
    description: "Months two and three—patterns, confidence, and small wins.",
  },
];

export type WeeklyGuideTier = "free" | "premium";

export type WeeklyGuideWeek = {
  id: string;
  stageId: WeeklyGuideStageId;
  title: string;
  summary: string;
  tier: WeeklyGuideTier;
};

export const WEEKLY_GUIDE_WEEKS: WeeklyGuideWeek[] = [
  {
    id: "birth-week-prep",
    stageId: "preparing",
    title: "Birth Week Prep",
    summary:
      "Last-minute packing, when to call, comfort cues, and how to soften anxiety without pretending it away.",
    tier: "free",
  },
  {
    id: "week-1-postpartum",
    stageId: "postpartum",
    title: "Week 1 Postpartum",
    summary:
      "The blur of first feeds, bleeding, sleep fragments, and big feelings—what often shows up first.",
    tier: "free",
  },
  {
    id: "week-2-postpartum",
    stageId: "postpartum",
    title: "Week 2 Postpartum",
    summary:
      "Baby may cluster-feed; you may feel more tired before feeling better—common curves this week.",
    tier: "free",
  },
  {
    id: "week-3-postpartum",
    stageId: "postpartum",
    title: "Week 3 Postpartum",
    summary:
      "Growth spurts, witching hour beginnings, and your body still doing a lot behind the scenes.",
    tier: "premium",
  },
  {
    id: "weeks-4-6",
    stageId: "postpartum",
    title: "Weeks 4–6",
    summary:
      "Emerging patterns, possible fussiness peaks, and checking in on healing and support.",
    tier: "premium",
  },
  {
    id: "month-2",
    stageId: "early",
    title: "Month 2",
    summary:
      "Longer wake windows, more social curiosity, and finding a sustainable cadence for you.",
    tier: "premium",
  },
  {
    id: "month-3",
    stageId: "early",
    title: "Month 3",
    summary:
      "Smiles, routines that bend instead of break, and honoring how far you have come.",
    tier: "free",
  },
];

/** Flat order for “continue to next” navigation */
export const WEEKLY_GUIDE_ORDER = WEEKLY_GUIDE_WEEKS.map((w) => w.id);

export type WeeklyDetailSection = { heading: string; body: string };

export type WeeklyGuideDetail = {
  sections: WeeklyDetailSection[];
};

/** Expanded week content — add keys as you ship each week. */
export const WEEKLY_GUIDE_DETAILS: Record<string, WeeklyGuideDetail> = {
  "week-1-postpartum": {
    sections: [
      {
        heading: "What may feel normal",
        body: "Heavy fatigue, night sweats, soreness (especially if you had a cesarean or tears), engorgement if chestfeeding, frequent waking for feeds, and waves of emotion—even joy mixed with weepiness. None of this means you are failing; it often reflects a huge hormonal and physical shift.",
      },
      {
        heading: "What baby may be doing",
        body: "Sleeping in short stretches, rooting often, cluster feeding some evenings, passing meconium then transitioning to yellow stools, and wanting to be held close. Babies rarely read textbooks; wide variation is normal.",
      },
      {
        heading: "Feeding",
        body: "Focus on comfortable positioning, frequent effective feeds or paced bottles per your plan, and hydration plus snacks for you. If pain persists, latch pinches, or weight concerns arise, reach out—early tweaks can save weeks of struggle.",
      },
      {
        heading: "Sleep",
        body: "Day–night mixing is common. Keep days gently bright and nights boring and dim. Safe sleep space on a flat firm surface matters more than any gadget. Rest when you can without pressure to “fix” nights immediately.",
      },
      {
        heading: "Your recovery",
        body: "Bleeding should trend lighter (not heavier), pain should slowly improve with prescribed or clinician-approved comfort measures, and movement can be little and often. Notice swelling, fever, one-sided breast pain, or foul-smelling discharge as reasons to call your clinician.",
      },
      {
        heading: "Emotional wellbeing",
        body: "Baby blues peak for many around days 3–5. If anxiety feels constant, sleep is impossible even when baby sleeps, or intrusive thoughts scare you, tell someone you trust and contact your clinician or crisis line—you deserve support, not secrecy.",
      },
      {
        heading: "When to seek extra help",
        body: "Fever over 100.4°F, soaking more than a pad an hour, chest pain or shortness of breath, thoughts of harming yourself or baby, a very sleepy baby who skips feeds, or signs of dehydration warrant urgent or emergency care depending on severity. When unsure, it is always okay to call.",
      },
    ],
  },
};

/** Placeholder copy for weeks not yet fully written */
export function weeklyGuidePlaceholderDetail(title: string): WeeklyGuideDetail {
  return {
    sections: [
      {
        heading: "Coming soon",
        body: `We are still building the full narrative for ${title}. For now, use the Support Library for related articles—or book a free chat if you want this week tailored to you.`,
      },
    ],
  };
}

export function getWeeklyGuideWeek(id: string): WeeklyGuideWeek | undefined {
  return WEEKLY_GUIDE_WEEKS.find((w) => w.id === id);
}

export function getNextWeekId(currentId: string): string | null {
  const i = WEEKLY_GUIDE_ORDER.indexOf(currentId);
  if (i === -1 || i >= WEEKLY_GUIDE_ORDER.length - 1) return null;
  return WEEKLY_GUIDE_ORDER[i + 1] ?? null;
}
