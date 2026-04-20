/**
 * Topic-first member content derived from `docs/preparing-for-baby-guide.md`.
 * Summaries are intentionally short and scannable (not pasted guide text).
 */

export type MemberTopicId =
  | "feeding"
  | "sleep"
  | "recovery"
  | "getting-ready"
  | "home-setup"
  | "support-boundaries"
  | "mental-emotional";

export type MemberTopic = {
  id: MemberTopicId;
  label: string;
  /** Short, human intro for cards */
  summary: string;
  /** Where this topic maps in the original guide (for transparency) */
  guideAnchors: string[];
  /** “At a glance” bullets (summarized from the guide) */
  glance: string[];
  /** Practical checklists / planners embedded in the topic */
  toolIds: string[];
  /** Related library resource ids (see `support-library.ts`) */
  resourceIds: string[];
};

export const MEMBER_TOPICS: MemberTopic[] = [
  {
    id: "feeding",
    label: "Feeding",
    summary:
      "Set up feeding so late nights feel a little less frantic—whether you are nursing, pumping, bottle-feeding, or mixing approaches.",
    guideAnchors: [
      "Prepping your kitchen (feeding station)",
      "Creating a Feeding & Diaper Station",
      "Choosing which diapers and bottles",
      "Choosing a pump",
    ],
    glance: [
      "A reachable feeding station makes frequent feeds easier for everyone helping.",
      "Bottle basics: start simple; you can adjust as you learn your baby’s preferences.",
      "Pump basics: insurance/DME questions, flange fit, and a realistic cleaning plan matter more than brand hype.",
    ],
    toolIds: ["feeding-station", "bottles-diapers", "pump-selection"],
    resourceIds: ["feeding-station", "bottles-diapers", "pump-selection", "nursing-in-public-family"],
  },
  {
    id: "sleep",
    label: "Sleep",
    summary:
      "Focus on what actually reduces risk and stress: a safe sleep space, a calm room, and realistic expectations for newborn nights.",
    guideAnchors: ["Setting up a safe sleep area", "Nursery essentials (sleep-related items)"],
    glance: [
      "Back sleep, firm flat surface, empty crib/bassinet—keep it boring and safe.",
      "Room-sharing can make night feeds easier while baby still has their own sleep surface.",
      "Avoid long sleeps in car seats/swings/bouncers; daytime tummy time is supervised.",
    ],
    toolIds: ["safe-sleep", "nursery-essentials"],
    resourceIds: ["nursery-safe-sleep", "gear-calm"],
  },
  {
    id: "recovery",
    label: "Recovery",
    summary:
      "Support your body and bandwidth after birth—practical help, pacing, and the kinds of questions worth asking early.",
    guideAnchors: [
      "Enlist help (doula, lactation counselor, cleaner)",
      "Postpartum doula / lactation / in-home nurse overview sections",
      "Bleeding & lochia (as a recovery checkpoint in the guide’s postpartum-adjacent framing)",
    ],
    glance: [
      "Line up help before you need it: meals, cleaning, lactation support, and someone who can hold the baby while you rest.",
      "Postpartum doulas can lighten feeding questions, safe sleep basics, and household load—especially in the early weeks.",
      "If something feels off in your healing, it is okay to call your clinician; you do not have to “tough it out.”",
    ],
    toolIds: ["household-duties", "medical-financial"],
    resourceIds: ["enlist-help", "postpartum-meals", "bleeding-lochia", "medical-financial-prep"],
  },
  {
    id: "getting-ready",
    label: "Getting ready for baby",
    summary:
      "Birth planning as values (not a script), plus the logistics that make the hospital or birth center feel less mysterious.",
    guideAnchors: [
      "Choosing a birth plan",
      "Touring the hospital and birthing center",
      "Childbirth classes",
      "Pain management",
      "Relaxation and breathing",
      "Understanding stages of labor",
      "Choosing a pediatrician",
      "What to pack for the hospital",
      "Mapping the route",
      "Car seat installation",
    ],
    glance: [
      "Flexibility matters: a plan helps your team support you when paths change.",
      "Classes + a tour turn unknowns into concrete questions you can actually ask.",
      "Pack early; keep IDs, chargers, comfort layers, and baby’s ride home ready.",
    ],
    toolIds: ["hospital-bag", "birth-plan", "hospital-tour", "route-hospital", "pediatrician-interview"],
    resourceIds: [
      "birth-plan-values",
      "hospital-tour-questions",
      "childbirth-class-fit",
      "pain-options-overview",
      "stages-of-labor",
      "route-to-hospital",
      "car-seat-basics",
    ],
  },
  {
    id: "home-setup",
    label: "Home setup",
    summary:
      "Make your space functional before cute: kitchen flow, nursery essentials, and gear choices without the anxiety spiral.",
    guideAnchors: [
      "Prepping your kitchen",
      "Nursery essentials-things to buy",
      "Getting comfortable with baby gear",
      "Preparing pets and siblings",
    ],
    glance: [
      "Kitchen: easy food, batch cooking, delivery/pickup options, and a calmer counter.",
      "Nursery: safe sleep first; many “extras” can wait.",
      "Gear: buy for real life, not fear—start with basics and adjust as you learn your baby.",
    ],
    toolIds: ["nursery-essentials"],
    resourceIds: ["kitchen-prep", "gear-calm", "pets-siblings", "baby-shower-registry"],
  },
  {
    id: "support-boundaries",
    label: "Support & boundaries",
    summary:
      "Protect your energy: clear household roles, kind visitor boundaries, and scripts that reduce awkward negotiations.",
    guideAnchors: [
      "Dividing duties in the household",
      "Decide how guests will be handled",
      "Discuss how you feel about nursing in public or around family and friends",
      "Discuss how your children will be disciplined (big-picture alignment)",
    ],
    glance: [
      "Divide duties by ownership (“you own trash Wednesdays”)—not vague “help me more.”",
      "Visitors can bring meals/errands; you do not owe a spotless house or hosting energy.",
      "Alignment talks are about values and teamwork—not winning an argument.",
    ],
    toolIds: ["visitor-boundaries", "household-duties"],
    resourceIds: ["household-duties", "visitor-boundaries", "nursing-in-public-family", "discipline-alignment"],
  },
  {
    id: "mental-emotional",
    label: "Mental & emotional wellbeing",
    summary:
      "Name the hard parts without shame: stress in labor, partner check-ins, and the emotional weight of “doing it all.”",
    guideAnchors: [
      "Relaxation and breathing (emotional regulation skills)",
      "Dividing duties (burnout prevention)",
      "Guest boundaries (protecting your nervous system)",
      "Guide introduction: inform and empower—not overwhelm",
    ],
    glance: [
      "Breathing and relaxation tools are useful in pregnancy, birth, and postpartum—small practices, repeated.",
      "Weekly check-ins with your partner can prevent resentment from silently stacking.",
      "If you feel unsafe with yourself or cannot cope, reach out for urgent support—asking for help is strength.",
    ],
    toolIds: [],
    resourceIds: ["enlist-help", "household-duties", "visitor-boundaries"],
  },
];

export const MEMBER_TOPIC_DAILY_FOCUS: string[] = [
  "Pick one small thing from your feeding station list and set it out tonight—future-you will notice.",
  "If sleep anxiety is loud, return to the basics in your safe sleep checklist (boring is protective).",
  "Name one task you can hand off this week—groceries, dishes, dog walk, anything real.",
  "If visitors feel heavy, use a simple script: short visits, meals instead of hangouts, text first.",
  "Take five slow breaths before the next feed; calm travels, even when everything feels urgent.",
  "If decisions feel endless, choose one topic to open—not the whole guide at once.",
  "If you are spiraling, text one person you trust with one sentence: “I’m not okay—can you check on me?”",
];

export function getMemberTopicById(id: string | undefined): MemberTopic | null {
  if (!id) return null;
  return MEMBER_TOPICS.find((t) => t.id === id) ?? null;
}
