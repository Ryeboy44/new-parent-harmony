import { defineField, defineType } from "sanity";

export const supporterTypes = [
  { title: "Individual / family supporter", value: "individual_family" },
  { title: "Business sponsor", value: "business_sponsor" },
  { title: "Community partner", value: "community_partner" },
  { title: "Event / workshop sponsor", value: "event_sponsor" },
] as const;

/** Public recognition labels — qualitative only, not tied to dollar amounts. */
export const recognitionLevels = [
  { title: "Supporter", value: "supporter" },
  { title: "Featured supporter", value: "featured" },
  { title: "Community champion", value: "champion" },
  { title: "Lead partner", value: "lead" },
] as const;

export const collectiveSupporterType = defineType({
  name: "collectiveSupporter",
  title: "Collective Supporter",
  type: "document",
  orderings: [
    {
      title: "Display order",
      name: "displayOrderAsc",
      by: [
        { field: "featured", direction: "desc" },
        { field: "displayOrder", direction: "asc" },
        { field: "name", direction: "asc" },
      ],
    },
    {
      title: "Name",
      name: "nameAsc",
      by: [{ field: "name", direction: "asc" }],
    },
  ],
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description:
        "The person, family, business or organization. If Display anonymously is on, the website shows “Anonymous supporter” instead.",
      validation: (rule) => rule.required().max(120),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      description: "Optional. Hidden on the website if Display anonymously is on.",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          description:
            "Describe the logo for screen readers. If left blank, the organization name is used.",
          validation: (rule) => rule.max(160),
        }),
      ],
    }),
    defineField({
      name: "websiteUrl",
      title: "Website",
      type: "url",
      description:
        "Optional. Linked from the recognition area unless Display anonymously is on.",
      validation: (rule) => rule.uri({ scheme: ["http", "https"] }),
    }),
    defineField({
      name: "description",
      title: "Short public description",
      type: "text",
      rows: 3,
      description:
        "Optional. One or two sentences shown with the recognition card. Hidden if Display anonymously is on.",
      validation: (rule) => rule.max(240),
    }),
    defineField({
      name: "supporterType",
      title: "Supporter type",
      type: "string",
      description:
        "What kind of supporter this is. Separate from public recognition level.",
      options: {
        list: supporterTypes.map((item) => ({
          title: item.title,
          value: item.value,
        })),
        layout: "radio",
      },
      initialValue: "business_sponsor",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "recognitionLevel",
      title: "Public recognition level",
      type: "string",
      description:
        "How this supporter is recognized on the website. Independent of display order. There are no dollar thresholds.",
      options: {
        list: recognitionLevels.map((item) => ({
          title: item.title,
          value: item.value,
        })),
        layout: "radio",
      },
      initialValue: "supporter",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "displayAnonymously",
      title: "Display anonymously",
      type: "boolean",
      description:
        "If on, the website never shows the name, logo, website or description. The internal record stays available here.",
      initialValue: false,
    }),
    defineField({
      name: "featured",
      title: "Feature / highlight",
      type: "boolean",
      description: "Highlights this supporter on the website.",
      initialValue: false,
    }),
    defineField({
      name: "displayOrder",
      title: "Display order",
      type: "number",
      description:
        "Lower numbers appear first. Use 10, 20, 30 so it’s easy to insert later. Independent of recognition level.",
      initialValue: 0,
      validation: (rule) => rule.integer(),
    }),
    defineField({
      name: "recognitionConsent",
      title: "Permission to recognize publicly",
      type: "boolean",
      description:
        "Confirm that this supporter or business has given permission to be recognized on the website. Required before they can appear publicly.",
      initialValue: false,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "active",
      title: "Active on the website",
      type: "boolean",
      description:
        "Turn off to hide this supporter without deleting the record. Also requires permission above.",
      initialValue: false,
      validation: (rule) =>
        rule.custom((active, context) => {
          const parent = context.parent as
            | { recognitionConsent?: boolean }
            | undefined;
          if (active && parent?.recognitionConsent !== true) {
            return "Confirm permission to recognize this supporter before making them active on the website.";
          }
          return true;
        }),
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "logo",
      active: "active",
      consent: "recognitionConsent",
      anonymous: "displayAnonymously",
      featured: "featured",
      supporterType: "supporterType",
      recognitionLevel: "recognitionLevel",
    },
    prepare({
      title,
      media,
      active,
      consent,
      anonymous,
      featured,
      supporterType,
      recognitionLevel,
    }) {
      const typeLabel =
        supporterTypes.find((item) => item.value === supporterType)?.title ??
        "Supporter";
      const recognitionLabel =
        recognitionLevels.find((item) => item.value === recognitionLevel)
          ?.title ?? "Recognition unset";
      let visibility = "Inactive";
      if (active && consent) {
        visibility = anonymous ? "Active · Anonymous" : "Active";
      } else if (active && !consent) {
        visibility = "Needs consent";
      }
      const highlight = featured ? " · Featured" : "";
      return {
        title: title || "Untitled supporter",
        subtitle: `${typeLabel} · ${recognitionLabel} · ${visibility}${highlight}`,
        media,
      };
    },
  },
});
