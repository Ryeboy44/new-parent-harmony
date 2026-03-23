import { z } from "zod";

/** Display order matches homepage services section + “Not sure yet”. */
export const SERVICE_OPTIONS = [
  { id: "sleep_feed_reset", label: "Sleep & Feed Reset" },
  { id: "postpartum", label: "Postpartum Doula Care" },
  { id: "lactation", label: "Lactation Support" },
  { id: "sleep", label: "Sleep Support" },
  { id: "not_sure", label: "Not sure yet" },
] as const;

const serviceIdEnum = z.enum(
  ["postpartum", "lactation", "sleep", "sleep_feed_reset", "not_sure"],
  { message: "Invalid service selection" },
);

export const discoveryCallSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name")
    .max(120, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email address"),
  phone: z
    .string()
    .trim()
    .max(40, "Phone number looks too long")
    .optional()
    .transform((v) => (v === "" ? undefined : v)),
  contactMethod: z.enum(["email", "phone", "either"], {
    message: "Please choose how you’d prefer to be reached",
  }),
  services: z
    .array(serviceIdEnum)
    .min(1, "Choose one or more areas—or “Not sure yet”"),
  newsletter: z.boolean(),
  details: z
    .string()
    .trim()
    .max(4000, "Please keep this under 4000 characters")
    .optional()
    .transform((v) => (v === "" ? undefined : v)),
});

export type DiscoveryCallInput = z.infer<typeof discoveryCallSchema>;

export function labelForServiceId(id: string): string {
  return SERVICE_OPTIONS.find((s) => s.id === id)?.label ?? id;
}
