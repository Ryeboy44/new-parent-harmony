import { z } from "zod";

export const SUPPORT_NEED_OPTIONS = [
  { id: "postpartum_doula", label: "Postpartum doula support" },
  { id: "feeding_lactation", label: "Feeding/lactation support" },
  { id: "infant_sleep", label: "Infant sleep support" },
  { id: "virtual_postpartum", label: "Virtual postpartum support" },
  { id: "education_workshops", label: "Parent education or workshops" },
  { id: "support_groups", label: "Support groups/community programs" },
  { id: "not_sure", label: "I’m not sure what I need yet" },
] as const;

export const ASSISTANCE_OPTIONS = [
  { id: "fully_funded", label: "Fully funded support, if available" },
  { id: "reduced_cost", label: "Reduced-cost support" },
  { id: "either_funded", label: "Either fully funded or reduced-cost support" },
  { id: "workshops_programs", label: "Free or reduced-cost workshops/programs" },
  { id: "talk_options", label: "I’m not sure — I’d like to talk about my options" },
] as const;

export const TIMING_OPTIONS = [
  { id: "asap", label: "As soon as possible" },
  { id: "few_weeks", label: "Within the next few weeks" },
  { id: "after_arrival", label: "After my baby arrives" },
  { id: "flexible", label: "I’m flexible" },
  { id: "other", label: "Other" },
] as const;

export const FORMAT_OPTIONS = [
  { id: "in_person", label: "In person" },
  { id: "virtual", label: "Virtual" },
  { id: "either", label: "Either / open to both" },
] as const;

export const BABY_STATUS_OPTIONS = [
  { id: "expected", label: "Baby is expected" },
  { id: "arrived", label: "Baby has arrived" },
] as const;

const supportNeedId = z.enum([
  "postpartum_doula",
  "feeding_lactation",
  "infant_sleep",
  "virtual_postpartum",
  "education_workshops",
  "support_groups",
  "not_sure",
]);

const assistanceId = z.enum(
  [
    "fully_funded",
    "reduced_cost",
    "either_funded",
    "workshops_programs",
    "talk_options",
  ],
  { message: "Please choose at least one type of assistance" },
);

const timingId = z.enum(
  ["asap", "few_weeks", "after_arrival", "flexible", "other"],
  { message: "Please tell us when you’re hoping to receive support" },
);

const formatId = z.enum(["in_person", "virtual", "either"], {
  message: "Please choose how you’d prefer to receive support",
});

const babyStatusId = z.enum(["expected", "arrived"], {
  message: "Please tell us whether baby is expected or has arrived",
});

const optionalText = z
  .string()
  .trim()
  .max(4000, "Please keep this under 4000 characters")
  .optional()
  .transform((v) => (v === "" ? undefined : v));

export const requestSupportSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, "Please enter your first name")
    .max(80, "First name is too long"),
  lastName: z
    .string()
    .trim()
    .min(1, "Please enter your last name")
    .max(80, "Last name is too long"),
  email: z.string().trim().email("Please enter a valid email address"),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a phone number")
    .max(40, "Phone number looks too long"),
  zipCode: z
    .string()
    .trim()
    .regex(/^\d{5}(-\d{4})?$/, "Please enter a 5-digit ZIP code"),
  babyStatus: babyStatusId,
  babyDate: z
    .string()
    .trim()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Please enter a date"),
  supportNeeds: z
    .array(supportNeedId)
    .min(1, "Choose one or more options—or “I’m not sure what I need yet”"),
  assistanceTypes: z
    .array(assistanceId)
    .min(1, "Please choose at least one type of assistance"),
  barrier: z
    .string()
    .trim()
    .min(1, "A few words about what’s getting in the way are enough")
    .max(4000, "Please keep this under 4000 characters"),
  financialContext: optionalText,
  biggestDifference: z
    .string()
    .trim()
    .min(1, "A sentence or two about what would help is enough")
    .max(4000, "Please keep this under 4000 characters"),
  timing: timingId,
  scheduleNotes: optionalText,
  supportFormat: formatId,
  attestation: z
    .boolean()
    .refine((value) => value === true, {
      message: "Please confirm this before submitting",
    }),
  acknowledgement: z
    .boolean()
    .refine((value) => value === true, {
      message: "Please confirm you understand this before submitting",
    }),
});

export type RequestSupportInput = z.infer<typeof requestSupportSchema>;

export function labelForSupportNeed(id: string): string {
  return SUPPORT_NEED_OPTIONS.find((o) => o.id === id)?.label ?? id;
}

export function labelForAssistance(id: string): string {
  return ASSISTANCE_OPTIONS.find((o) => o.id === id)?.label ?? id;
}

export function labelForTiming(id: string): string {
  return TIMING_OPTIONS.find((o) => o.id === id)?.label ?? id;
}

export function labelForFormat(id: string): string {
  return FORMAT_OPTIONS.find((o) => o.id === id)?.label ?? id;
}

export function labelForBabyStatus(id: string): string {
  return BABY_STATUS_OPTIONS.find((o) => o.id === id)?.label ?? id;
}

/** Montgomery County, MD is primarily 208xx and 209xx. Used only as a gentle note. */
export function isLikelyMontgomeryCountyZip(zip: string): boolean {
  const digits = zip.replace(/\D/g, "").slice(0, 5);
  if (digits.length < 5) return true;
  const n = Number(digits);
  return (n >= 20812 && n <= 20899) || (n >= 20901 && n <= 20918);
}
