/**
 * Weekly Guide — app-ready content derived from `docs/preparing-for-baby-guide.md`.
 * Concise, skimmable sections; freemium tiers on entries (not individual sections).
 */

export const WEEKLY_GUIDE_HEADER = {
  eyebrow: "Member app",
  title: "Weekly Guide",
  subheading:
    "Gentle, phase-by-phase support from the third trimester through early months—what to expect, what to prepare, and how to stay kind to yourself.",
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
    description: "Weeks 28 onward—classes, birth preferences, home setup, and the final stretch.",
  },
  {
    id: "postpartum",
    label: "Postpartum Weeks",
    description: "The first weeks home—healing, feeding, sleep, and finding rhythm.",
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
    id: "weeks-28-32",
    stageId: "preparing",
    title: "Weeks 28–32",
    summary:
      "Childbirth education, first tours, and gentle pacing—building confidence without cramming at the end.",
    tier: "free",
  },
  {
    id: "weeks-33-36",
    stageId: "preparing",
    title: "Weeks 33–36",
    summary:
      "Hospital bag starts, pediatric interviews, car seat checks, and your route to care—logistics that calm the mind.",
    tier: "free",
  },
  {
    id: "weeks-37-40-plus",
    stageId: "preparing",
    title: "Weeks 37–40+",
    summary:
      "Full-term watch, labor signs, when to call, and permission to rest while you wait.",
    tier: "free",
  },
  {
    id: "birth-week-prep",
    stageId: "preparing",
    title: "Birth Week Prep",
    summary:
      "Final packing, comfort cues, communication with your team, and softening anxiety without pretending it away.",
    tier: "free",
  },
  {
    id: "week-1-postpartum",
    stageId: "postpartum",
    title: "Week 1 Postpartum",
    summary:
      "Bleeding, milk, broken sleep, big feelings—none of it means you are doing it wrong. A steady companion for week one.",
    tier: "free",
  },
  {
    id: "week-2-postpartum",
    stageId: "postpartum",
    title: "Week 2 Postpartum",
    summary:
      "Evenings get loud, feeds bunch up, and tired can deepen before it eases—you are not failing; you are in the thick of it.",
    tier: "premium",
  },
  {
    id: "week-3-postpartum",
    stageId: "postpartum",
    title: "Week 3 Postpartum",
    summary:
      "When the newness wears off but the tired does not—more crying, more questions, and a quiet worry: should this feel easier by now? You are not behind.",
    tier: "premium",
  },
  {
    id: "weeks-4-6-postpartum",
    stageId: "postpartum",
    title: "Weeks 4–6 Postpartum",
    summary:
      "Emerging patterns, possible fussiness peaks, follow-ups, and checking in on healing and support systems.",
    tier: "premium",
  },
  {
    id: "month-2",
    stageId: "early",
    title: "Month 2",
    summary:
      "Longer wake windows, more social curiosity, and shaping a cadence that fits your real life.",
    tier: "premium",
  },
  {
    id: "month-3",
    stageId: "early",
    title: "Month 3",
    summary:
      "Smiles, routines that bend, and honoring how far you have come—together.",
    tier: "premium",
  },
];

export const WEEKLY_GUIDE_ORDER = WEEKLY_GUIDE_WEEKS.map((w) => w.id);

export type WeeklyDetailSection = { heading: string; body: string };

export type WeeklyGuideDetail = {
  sections: WeeklyDetailSection[];
  /** Short daily check-in lines; UI picks one per calendar day (local). */
  dailyFocus?: string[];
};

/**
 * Which `dailyFocus` string to show today. Uses local weekday: 0 = Sunday … 6 = Saturday.
 * Same parent always sees the same prompt on a given calendar day (until midnight).
 */
export function selectDailyFocusPrompt(prompts: string[] | undefined): string | null {
  if (!prompts?.length) return null;
  const day = new Date().getDay();
  return prompts[day % prompts.length] ?? null;
}

export const WEEKLY_GUIDE_DETAILS: Record<string, WeeklyGuideDetail> = {
  "weeks-28-32": {
    sections: [
      {
        heading: "What this stretch is for",
        body: "You are in the window most educators recommend for childbirth classes—information stays fresh, and you still have time to adjust plans. This is not about doing everything; it is about choosing a few trustworthy anchors: a class, a tour, and space to breathe.",
      },
      {
        heading: "Birth preferences & education",
        body: "Whether you hope for unmedicated birth, an epidural, or a planned cesarean, a balanced class helps you ask better questions. Look for instructors who cover both comfort techniques and medical options so you can adapt without shame if plans shift.",
      },
      {
        heading: "Hospital or birth center orientation",
        body: "Schedule a tour if you can. Notice check-in, triage, where partners wait, and postpartum rooming. Ask about lactation support, visitor rules, and what the hospital supplies so your mental picture matches reality.",
      },
      {
        heading: "Pain & labor basics (preview)",
        body: "Breathing, movement, hydrotherapy, and medication paths all have a place. You do not need to decide your labor story now—just know the menu so nothing feels foreign when contractions ask for your attention.",
      },
      {
        heading: "Emotional pacing",
        body: "Excitement and worry often sit side by side. Name one fear out loud to someone you trust, and pair it with one small action (book the tour, save the L&D number). Small steps reduce the urge to sprint through every chapter at once.",
      },
    ],
  },
  "weeks-33-36": {
    sections: [
      {
        heading: "Logistics that earn calm",
        body: "Pediatric interviews, car seat installation or checks, and a dry run to your birthplace reduce last-minute adrenaline. Spread tasks across days—your nervous system will thank you.",
      },
      {
        heading: "Choosing a pediatrician",
        body: "Consider location, after-hours access, how sick visits work, and whether the practice’s communication style fits you. Values questions (feeding, sleep, vaccines) matter—but so does whether you feel heard when you are worried at 2 a.m.",
      },
      {
        heading: "Hospital bag (started, not stuffed)",
        body: "Begin with IDs, chargers, comfort layers, snacks, and postpartum hygiene. Baby needs a going-home outfit and an installed rear-facing seat. Finish packing by 36 weeks if you can; life rarely waits for “perfect.”",
      },
      {
        heading: "Route & backup plan",
        body: "Save two routes, note parking or drop-off, and talk through who drives if labor is fast. A printed list of numbers (provider, hospital) in the glove box survives dead batteries better than memory alone.",
      },
      {
        heading: "Kitchen & home base",
        body: "Stock easy proteins, freezer-friendly meals, and one-handed snacks. Clear a counter for bottles or pump parts if needed. The goal is nourishment with minimal decisions—not a Pinterest kitchen.",
      },
    ],
  },
  "weeks-37-40-plus": {
    sections: [
      {
        heading: "Full term & the waiting game",
        body: "Due dates are estimates. If you pass yours, your provider will outline monitoring that fits your health profile. Rest is productive; nesting is optional. You are not “late” at being a parent—you are still waiting for the right moment.",
      },
      {
        heading: "Signs labor may be near",
        body: "Irregular tightenings, lightening, mucus changes, or a burst of energy can appear—or not. What matters is your care team’s guidance on contractions, bleeding, fluid, and baby movement. When unsure, call; that is what triage lines are for.",
      },
      {
        heading: "When to call & when to go",
        body: "Follow the thresholds your clinician gave you for contraction timing, water breaking, bleeding, or reduced fetal movement. Keep the hospital bag by the door, gas in the car if you can, and a calm script for childcare or pet coverage.",
      },
      {
        heading: "Partners & support people",
        body: "Clarify who updates the group text chain and who stays present with you in the room. Protect your focus: labor is not a performance for an audience—it is intimate work that deserves privacy.",
      },
      {
        heading: "Mindset for the unknown",
        body: "You can hold a birth vision and still welcome help. Flexibility is not failure—it is how most births unfold. Trust that you will make the best decisions you can with the information you have at each step.",
      },
    ],
  },
  "birth-week-prep": {
    sections: [
      {
        heading: "Final packing & paperwork",
        body: "IDs, insurance, birth preferences copy, chargers, comfort items, and snacks. Confirm what the facility provides so you are not hauling duplicates. A folder beats a loose stack at check-in.",
      },
      {
        heading: "Comfort in the room",
        body: "Music, dimmable light if allowed, your own pillow with a colored case, lip balm, hair ties, and easy-open layers. Heat and cold packs—ask what is available or bring microwavable options if policy allows.",
      },
      {
        heading: "Communication scripts",
        body: "Decide a phrase for “I need a minute” and another for “Please explain options simply.” Advocacy is easier when you are not inventing language mid-contraction.",
      },
      {
        heading: "If plans change",
        body: "Inductions, cesareans, or NICU needs can arise without warning. Pre-read nothing as personal failure. Ask for a nurse navigator or social worker if the path feels disorienting—you do not have to map it alone.",
      },
      {
        heading: "First moments after birth",
        body: "Skin-to-skin when safe, delayed cord clamping if aligned with your plan, and early feeding support. Photos can wait; bonding and breathing come first.",
      },
    ],
  },
  "week-1-postpartum": {
    sections: [
      {
        heading: "What’s happening now",
        body: "Your uterus is still shrinking, bleeding (lochia) is part of the deal, and hormones may throw a party—especially if milk is coming in. One hour you might feel wonder; the next, wiped out. That whiplash is human. This week is not about bouncing back. It is about small steps, real rest when you can grab it, and speaking up if something feels wrong.",
      },
      {
        heading: "What may feel normal",
        body: "Bone-deep tiredness, night sweats, afterpains with feeds, soreness where you birthed or where you were cut, breasts full or tender, waking round the clock, crying when you did not see it coming. Joy and grief can share a room—you are not dramatic, and you are not failing. You are recovering from a huge event while learning a new person.",
      },
      {
        heading: "What baby may be doing",
        body: "Snacking on sleep, waking hungry often, cluster feeding some nights, dirty diapers shifting from tarry to mustard-y, wanting skin on skin. Some newborns sleep a ton; others fuss more. If feeds hurt every time, baby will not wake for feeds, or your gut says intake is off, your pediatric or lactation folks are there to look with you—not to judge.",
      },
      {
        heading: "Feeding",
        body: "Chest, bottle, both, pump—your path is yours. This week, aim for feeds that do not leave you wincing the whole way through, diapers that match what your team expects, and enough food and water in you to survive the marathon. Rough latch, bleeding nipples, or a worried weight check? A tweak now beats white-knuckling for weeks.",
      },
      {
        heading: "Sleep",
        body: "Night and day might look the same for a while. Dim nights, dull days, baby on a firm flat surface alone on their back—your clinician’s safe-sleep rules win over trends. For you: a couch nap, eyes closed in the shower, partner holding the baby so you sleep—none of it has to look Instagram-worthy to count.",
      },
      {
        heading: "Your recovery",
        body: "Bleeding usually lightens; pain usually eases with rest and what your provider okayed for meds. Moving a little is often fine—follow your own instructions after surgery or complications. Fever, chills, pain getting worse, smells that alarm you, one hot angry breast, calf pain and swelling, or trouble breathing: call today, not when you “see if it passes.”",
      },
      {
        heading: "Emotional wellbeing",
        body: "Lots of people cry more the first two weeks—that fog can lift. If heavy mood sticks around, panic will not leave, or you cannot rest even when baby rests, tell someone who will listen. Getting help is strength. If you ever think you might hurt yourself or your baby, emergency care is the right move—you are not broken; you need backup.",
      },
      {
        heading: "Practical support",
        body: "Let food appear without you cooking it. Let someone else hold the baby while you shower. “Text before you come” and short visits are allowed. Pick one person to be the gatekeeper for offers so your phone does not become a second job. Paid help is not in everyone’s budget—small favors from people who love you still count.",
      },
      {
        heading: "When to seek extra help",
        body: "You: fever, pads soaked too fast, clots that scare you, chest pain, bad headache with vision changes, infection vibes, a hot swollen leg. Baby: not feeding, too few wet diapers, jaundice climbing, fever, or impossible to rouse. Emergency: your local emergency number. Gray area? Call anyway. You will never annoy a triage nurse for caring.",
      },
    ],
    dailyFocus: [
      "Let one thing wait. The dishes, the thank-you texts, the “should”—pick one and release it for today.",
      "Drink a glass of water before your next feed if you can. Small, kind, enough.",
      "Notice one thing your body did right today—even if it is tiny. Your heart counts too.",
      "If someone offers help, try answering with something specific: “Could you hold them while I shower?”",
      "Five slow breaths with your hand on your chest. You are still here. That matters.",
      "Say out loud: “This is hard.” No fix required after. Naming it often softens it a little.",
      "Rest does not need to be earned. Close your eyes for two minutes if that is all there is.",
    ],
  },
  "week-2-postpartum": {
    sections: [
      {
        heading: "What often shows up this week",
        body: "Evenings can feel louder—feeds bunch, sleep still comes in scraps. Some folks feel even more wiped before things lift; others notice one small groove. None of that means you are doing it wrong. You are still in the soup. If this feels hard today: say one true sentence out loud to someone safe (“I am really tired”) without fixing anything after. That counts.",
      },
      {
        heading: "Feeding rhythms",
        body: "Cluster feeding is often a hungry-growing thing, not a report card on your body. Diapers and any weight checks your team wanted still matter more than the clock. If feeds hurt, nipples are angry, or your mind will not let go of “enough,” a lactation consultant (IBCLC) can sit with you sooner than later—you do not have to prove you tried everything first. Today, try this: after one feed, jot only wet vs dirty on a sticky note or phone note—no essay, just a tally for your own peace.",
      },
      {
        heading: "Sleep & nights",
        body: "Keep nights dull and dark, days a little brighter. Same safe sleep setup your clinician already gave you; swaddle or sack only if they said it is okay. If there are two adults in the house, trading one protected stretch—even awkwardly—beats both of you hollow. Tonight, try this: whoever is “off” first puts phone on silent in another room for even twenty minutes. Not perfect sleep—just a boundary from the noise.",
      },
      {
        heading: "Healing check-in",
        body: "Bleeding easing bit by bit? Hurts a little less? Doing incision or tear care the way you were shown? That is your body still working. Spreading redness, fever, a smell that worries you—call. No gold stars for toughing it out. Today, try this: one slow lap to the bathroom or kitchen if you are cleared to move—water in your hand on the way back. That is enough.",
      },
      {
        heading: "Support systems",
        body: "You do not owe anyone a perfect plan—just a few names. Who could drop food? Walk the dog? Be the one who replies to the group chat so you do not have to? Paid help is not in every budget; a friend who leaves groceries on the porch still counts. Today, try this: one short text to one person—“Could you ___ this week?” Specific, small. No apology paragraph needed.",
      },
      {
        heading: "Emotional weather",
        body: "If low mood sits on your chest all day, or worry runs the show even when things are “fine,” your OB, midwife, or primary care person should hear it. Lots of people hit a rough patch here; help really does help. Naming it is not making a fuss. If this feels hard today: you do not have to explain it perfectly—try “I am not okay and I need a next step” and let them carry part of the weight.",
      },
    ],
    dailyFocus: [
      "Evening loud? It is not a grade on you. Step outside the room for sixty seconds if you safely can—air helps.",
      "One feed at a time. You do not have to solve the whole week tonight.",
      "Tag your person (or a voice memo to yourself): one win today, however small. Fed counts.",
      "Dim the lights an hour before you hope baby settles. Boring is soothing.",
      "If worry loops on “enough milk,” text one sentence to your clinician or IBCLC line. Facts beat rumination.",
      "Swap who is “on” for the next wake window if there are two of you. Rest is shared work.",
      "You are allowed to feel touched out. Holding less for a few minutes does not mean you love them less.",
    ],
  },
  "week-3-postpartum": {
    sections: [
      {
        heading: "Growth & fussy windows",
        body: "By now a lot of babies want more milk and more holding, and the evenings can sound… big. That does not mean you broke something. It often means a growth spurt or a tired little nervous system—not a grade on you. If today feels heavy: step outside with the baby for two minutes of air, or hand them to someone else while you wash your face. You are still allowed to need a pause.",
      },
      {
        heading: "Feeding focus",
        body: "If feeds feel endless or your mind keeps whispering “not enough,” that thought is common—and lonely. Follow what your clinician or lactation person already told you about diapers, weight checks, or pumping. If you have been meaning to ask for help: send one message today—a photo of a latch, a voice note, or “Can we book a call?” You do not have to sound composed. If something hurts every feed or baby will not wake to eat, that is a same-day check-in, not something to wait out bravely.",
      },
      {
        heading: "Sleep shaping (gentle)",
        body: "You might have thought sleep would settle by now. For many families it has not—and that gap between expectation and reality stings. Dim nights, boring days, same safe sleep spot you chose before. Tonight, try this: whoever is “off” first gets the room dark and phone face-down for twenty minutes—not perfect sleep, just a pocket of quiet. Shared nights are not fifty-fifty every hour; they are “we trade what we can so neither of us disappears.”",
      },
      {
        heading: "Your body",
        body: "The adrenaline of the early days can fade while the work stays loud—so fatigue can feel deeper, not lighter. Water, food, and bathroom trips still count as care. If bleeding picks up, pain spikes, your mood feels flat or scary, or you cannot catch your breath emotionally, tell your OB or midwife. “I thought I would feel more like myself by week three” is a complete sentence. They have heard it before, and they can help you sort what is normal tired from what needs treatment.",
      },
      {
        heading: "Boundaries & visitors",
        body: "Week three is often when the “help” starts feeling like more bodies, more opinions, more dishes you did not ask for. You are allowed to narrow the circle, shorten visits, or say, “We need meals dropped off, not company.” If you have been meaning to ask for help: name one concrete thing—laundry, a walk with the dog, someone to hold the baby while you nap—and one person to ask. Shared responsibility is not you doing less love; it is you not carrying every thread alone.",
      },
      {
        heading: "When to call",
        body: "For you: fever, pain or bleeding getting worse, chest pain, trouble breathing, thoughts of hurting yourself or your baby, or feeling like you cannot cope even when you want to—call your emergency number or your clinician the same day, whichever matches how urgent it feels. For baby: trouble feeding, very few wet diapers, yellowing skin that climbs, fever, or crying you cannot soothe at all—same-day care is reasonable. When you are not sure, calling is not overreacting. It is you taking yourself and your baby seriously.",
      },
    ],
    dailyFocus: [
      "If today feels heavy: text one person “I’m not okay—can you check on me later?” That counts.",
      "If you’ve been meaning to ask for help: one sentence, one task, send. No essay required.",
      "Tonight, try this: dim everything one notch earlier than yesterday. Small signals add up.",
      "You are not failing because week three still feels hard. Some of us are still in the weeds here.",
      "Drink water before the next feed if you remember. Your body is still doing night shifts too.",
      "Hand the baby to someone—or set them in a safe spot—and sit alone for three minutes. Permission granted.",
      "If worry will not quiet, call the line your provider gave you. You deserve an answer, not a badge for suffering.",
    ],
  },
  "weeks-4-6-postpartum": {
    sections: [
      {
        heading: "Patterns emerging",
        body: "You might notice slightly longer sleep stretches or more predictable fussy times—or not yet. Either way, you are gathering data, not grading yourself.",
      },
      {
        heading: "Feeding & weight",
        body: "Follow-up appointments are checkpoints, not exams you must ace. Ask about growth curves, any supplementation plan, and how to wean interventions if they were temporary.",
      },
      {
        heading: "Sleep & sanity",
        body: "If every nap is contact-only and that works for your family, fine. If you need a bridge (partner, doula, safe sleep space), that is valid too. Sustainable beats heroic.",
      },
      {
        heading: "Relationship & roles",
        body: "Resentment can creep in when tired. Name one weekly win together—even tiny—and one chore handoff. Household systems matter as much as baby gear.",
      },
      {
        heading: "Returning obligations",
        body: "If work or older kids need energy soon, start micro-boundaries now: shorter to-do lists, delegated meals, and realistic childcare backups.",
      },
      {
        heading: "Medical follow-up",
        body: "Postpartum visits are for blood pressure, mood screening, contraception talk if desired, and healing checks. Bring questions written down—sleep deprivation steals memory.",
      },
    ],
  },
  "month-2": {
    sections: [
      {
        heading: "What changes now",
        body: "Wake windows may lengthen slightly; babies often track faces and voices more deliberately. You might feel a little less shell-shocked—or differently tired. Both are real.",
      },
      {
        heading: "Feeding",
        body: "Whether bottle, chest, or combo, consistency and responsive feeding still beat rigid schedules for most families. If reflux or allergy concerns appear, your pediatric team guides next steps.",
      },
      {
        heading: "Sleep",
        body: "Rhythms emerge slowly. Protect safe sleep, avoid unsafe props, and question products that promise “fixes” overnight. Small routines (song, dark room) can cue rest without harsh training.",
      },
      {
        heading: "Developmental glimpses",
        body: "Tummy time in tiny doses, face-to-face talk, and outdoor light when possible—all low-pressure stimulation. Milestones are ranges, not deadlines.",
      },
      {
        heading: "You & identity",
        body: "Grief for your old freedom can coexist with love for your baby. Naming that tension to a friend or therapist is healthy—not selfish.",
      },
      {
        heading: "Support refresh",
        body: "If early help ended, rebuild a lightweight circle: meal train, online grocery, or a standing walk with a friend. Isolation creeps in month two—push gently against it.",
      },
    ],
  },
  "month-3": {
    sections: [
      {
        heading: "Settling in",
        body: "Many families feel a softening around three months—more smiles, slightly more predictable nights, or simply more trust in yourselves. If you are still in survival mode, that is not failure; it is still early.",
      },
      {
        heading: "Feeding confidence",
        body: "You have history now—use it. Patterns you see matter more than generic apps. Lactation or bottle-feeding support remains available if questions linger.",
      },
      {
        heading: "Sleep realities",
        body: "Regressions may appear later; for now, keep nights calm and days bright-ish. Protect your own sleep fragments—they add up.",
      },
      {
        heading: "Relationship repair",
        body: "Check in with your partner or co-parent about emotional labor, not just tasks. Appreciation scripts land better than scorekeeping when you are both depleted.",
      },
      {
        heading: "Celebrating small wins",
        body: "A shower alone, a walk around the block, a baby laugh—these count. Progress is uneven; notice it anyway.",
      },
      {
        heading: "What’s next",
        body: "Return-to-work planning, childcare tours, or simply maintaining routines—pick the next hill deliberately. You do not owe the world a busy calendar; you owe yourself steadiness.",
      },
    ],
  },
};

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
