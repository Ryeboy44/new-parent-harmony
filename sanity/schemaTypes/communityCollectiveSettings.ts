import { defineField, defineType } from "sanity";

/** The one and only settings document — kept at a fixed ID so the site can always find it. */
export const COLLECTIVE_SETTINGS_DOC_ID = "communityCollectiveSettings";

export const applicationStatuses = [
  { title: "Applications open", value: "open" },
  { title: "Applications temporarily paused", value: "paused" },
] as const;

export const reducedRateCapacities = [
  { title: "Available", value: "available" },
  { title: "Limited", value: "limited" },
  { title: "Currently unavailable", value: "unavailable" },
] as const;

export const communityCollectiveSettingsType = defineType({
  name: "communityCollectiveSettings",
  title: "Collective Settings & Impact",
  type: "document",
  groups: [
    { name: "availability", title: "Availability", default: true },
    { name: "impact", title: "Impact numbers" },
  ],
  fields: [
    defineField({
      name: "applicationsStatus",
      title: "Collective applications",
      type: "string",
      group: "availability",
      description:
        "Pausing replaces the “Request Support” buttons with a short note. The rest of the page stays exactly as it is.",
      options: {
        list: applicationStatuses.map((s) => ({
          title: s.title,
          value: s.value,
        })),
        layout: "radio",
      },
      initialValue: "open",
    }),
    defineField({
      name: "inPersonAvailable",
      title: "In-person support available",
      type: "boolean",
      group: "availability",
      description:
        "Turn off if you currently have no capacity for in-person Collective visits in Montgomery County.",
      initialValue: true,
    }),
    defineField({
      name: "virtualAvailable",
      title: "Virtual support available",
      type: "boolean",
      group: "availability",
      description: "Turn off if you are not taking virtual Collective requests right now.",
      initialValue: true,
    }),
    defineField({
      name: "reducedRateCapacity",
      title: "Reduced-rate availability",
      type: "string",
      group: "availability",
      description:
        "Choose whether New Parent Harmony currently has capacity to offer reduced-rate Collective care.",
      options: {
        list: reducedRateCapacities.map((c) => ({
          title: c.title,
          value: c.value,
        })),
        layout: "radio",
      },
      initialValue: "available",
    }),
    defineField({
      name: "statusMessage",
      title: "Public status message",
      type: "text",
      rows: 3,
      group: "availability",
      description:
        "Optional. When applications are paused, this note appears near the top of the page. Leave it blank to rely on the default paused message on the Request Support buttons.",
      validation: (rule) => rule.max(300),
    }),
    defineField({
      name: "supporterInquiriesStatus",
      title: "Supporter inquiries",
      type: "string",
      group: "availability",
      description:
        "Pausing hides the supporter interest form on the Support the Collective page. The rest of the page stays visible.",
      options: {
        list: [
          { title: "Inquiries open", value: "open" },
          { title: "Inquiries temporarily paused", value: "paused" },
        ],
        layout: "radio",
      },
      initialValue: "open",
    }),
    defineField({
      name: "impactYear",
      title: "Impact year or period",
      type: "string",
      group: "impact",
      description: "Optional label shown above the numbers, e.g. “2026” or “Since 2026”.",
      validation: (rule) => rule.max(40),
    }),
    defineField({
      name: "familiesSupported",
      title: "Families supported",
      type: "number",
      group: "impact",
      description:
        "Leave blank until you have a real number — empty and zero values are hidden on the website.",
      validation: (rule) => rule.min(0).integer(),
    }),
    defineField({
      name: "careHours",
      title: "Care hours funded or provided",
      type: "number",
      group: "impact",
      description: "Leave blank until you have a real number.",
      validation: (rule) => rule.min(0),
    }),
    defineField({
      name: "programsProvided",
      title: "Programs or workshops provided",
      type: "number",
      group: "impact",
      description: "Leave blank until you have a real number.",
      validation: (rule) => rule.min(0).integer(),
    }),
    defineField({
      name: "communityEventsCount",
      title: "Community events",
      type: "number",
      group: "impact",
      description: "Leave blank until you have a real number.",
      validation: (rule) => rule.min(0).integer(),
    }),
    defineField({
      name: "communityPartnersCount",
      title: "Community partners",
      type: "number",
      group: "impact",
      description: "Leave blank until you have a real number.",
      validation: (rule) => rule.min(0).integer(),
    }),
    defineField({
      name: "valueOfSupport",
      title: "Total value of support provided",
      type: "number",
      group: "impact",
      description:
        "In US dollars, numbers only — enter 5200 and the website shows $5,200. Leave blank to hide.",
      validation: (rule) => rule.min(0),
    }),
    defineField({
      name: "impactMessage",
      title: "Custom impact message",
      type: "text",
      rows: 3,
      group: "impact",
      description:
        "Optional. Replaces the standard paragraph in the impact section when filled in.",
      validation: (rule) => rule.max(400),
    }),
    defineField({
      name: "impactStory",
      title: "Family or community story",
      type: "text",
      rows: 5,
      group: "impact",
      description:
        "Optional. A short real story shown in the impact area. Leave blank until you have something true to share.",
      validation: (rule) => rule.max(800),
    }),
    defineField({
      name: "impactImage",
      title: "Impact image",
      type: "image",
      group: "impact",
      description:
        "Optional. Shown with the impact story when a real photo is available. Leave empty rather than using a placeholder.",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          description: "Describe the image for accessibility.",
          validation: (rule) =>
            rule.custom((alt, context) => {
              const parent = context.parent as { asset?: unknown };
              if (parent?.asset && !alt) {
                return "Alt text is required when an image is set.";
              }
              return true;
            }),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      applicationsStatus: "applicationsStatus",
      reducedRateCapacity: "reducedRateCapacity",
    },
    prepare({ applicationsStatus, reducedRateCapacity }) {
      const applications =
        applicationStatuses.find((s) => s.value === applicationsStatus)?.title ??
        "Applications open";
      const capacity =
        reducedRateCapacities.find((c) => c.value === reducedRateCapacity)?.title ??
        "Available";
      return {
        title: "Collective Settings & Impact",
        subtitle: `${applications} · Reduced-rate: ${capacity}`,
      };
    },
  },
});
