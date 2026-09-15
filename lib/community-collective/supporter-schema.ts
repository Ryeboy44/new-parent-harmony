import { z } from "zod";

export const SUPPORTER_INTEREST_OPTIONS = [
  { id: "business", label: "Business" },
  { id: "organization", label: "Community organization" },
  { id: "healthcare", label: "Healthcare/professional partner" },
  { id: "grant", label: "Grant/funding organization" },
  { id: "individual", label: "Individual supporter" },
  { id: "other", label: "Other" },
] as const;

const interestAliases: Record<string, (typeof SUPPORTER_INTEREST_OPTIONS)[number]["id"]> =
  {
    family: "individual",
    sponsorship: "business",
    partnership: "organization",
    event: "business",
  };

const interestId = z.enum(
  [
    "business",
    "organization",
    "healthcare",
    "grant",
    "individual",
    "other",
  ],
  { message: "Please choose how you’d like to support" },
);

const optionalText = z
  .string()
  .trim()
  .max(4000, "Please keep this under 4000 characters")
  .optional()
  .transform((value) => (value === "" ? undefined : value));

export const supporterInquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Please enter your name")
    .max(120, "Name is too long"),
  organization: optionalText,
  email: z.string().trim().email("Please enter a valid email address"),
  phone: z
    .string()
    .trim()
    .max(40, "Phone number looks too long")
    .optional()
    .transform((value) => (value === "" ? undefined : value)),
  interest: interestId,
  message: optionalText,
  updates: z.boolean(),
});

export type SupporterInquiryInput = z.infer<typeof supporterInquirySchema>;

export function labelForSupporterInterest(id: string): string {
  return SUPPORTER_INTEREST_OPTIONS.find((option) => option.id === id)?.label ?? id;
}

export function isSupporterInterestId(
  value: string | undefined,
): value is (typeof SUPPORTER_INTEREST_OPTIONS)[number]["id"] {
  return SUPPORTER_INTEREST_OPTIONS.some((option) => option.id === value);
}

export function normalizeSupporterInterest(
  value: string | undefined,
): (typeof SUPPORTER_INTEREST_OPTIONS)[number]["id"] | undefined {
  if (!value) return undefined;
  const mapped = interestAliases[value] ?? value;
  return isSupporterInterestId(mapped) ? mapped : undefined;
}
