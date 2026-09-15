import { defineField, defineType } from "sanity";

export const testimonialCategories = [
  { title: "Postpartum Doula Care", value: "postpartum-doula" },
  { title: "Feeding/Lactation Support", value: "feeding-lactation" },
  { title: "Infant Sleep Support", value: "infant-sleep" },
  { title: "Sleep Support", value: "sleep-support" },
  { title: "Postpartum & Lactation Support", value: "postpartum-lactation" },
  { title: "Other", value: "other" },
] as const;

export const testimonialType = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  orderings: [
    {
      title: "Display order",
      name: "displayOrderAsc",
      by: [
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
      title: "Client / display name",
      type: "string",
      description: "How the attribution appears on the website, e.g. “Kelli N.”",
      validation: (rule) => rule.required().max(80),
    }),
    defineField({
      name: "fullQuote",
      title: "Testimonial text",
      type: "text",
      rows: 8,
      description: "The full wording shown on the Testimonials page. Keep the family’s own words.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "shortQuote",
      title: "Short quote",
      type: "text",
      rows: 3,
      description: "Optional shorter excerpt for cards elsewhere on the site. Leave blank to use the start of the full text.",
      validation: (rule) => rule.max(400),
    }),
    defineField({
      name: "category",
      title: "Service category",
      type: "string",
      options: {
        list: [...testimonialCategories],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "contextLine",
      title: "Card context line",
      type: "string",
      description:
        "Shown on shorter cards. Example: “Postpartum Doula Care · Potomac, MD · 2026”.",
      validation: (rule) => rule.max(160),
    }),
    defineField({
      name: "locationLine",
      title: "Location line",
      type: "string",
      description: "Shown under the name on the Testimonials page. Example: “Potomac, MD · 2026”.",
      validation: (rule) => rule.max(160),
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "string",
      description: "Optional year or date for sorting and display, e.g. “2026”.",
      validation: (rule) => rule.max(12),
    }),
    defineField({
      name: "displayOrder",
      title: "Display order",
      type: "number",
      description: "Lower numbers appear first within a service category. Defaults to 0.",
      initialValue: 0,
      validation: (rule) => rule.integer().min(0),
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      description:
        "Marks this testimonial for possible use elsewhere on the website. Does not change the Testimonials page grouping.",
      initialValue: false,
    }),
    defineField({
      name: "visible",
      title: "Show on website",
      type: "boolean",
      description:
        "Turn off to hide this testimonial without deleting it. Drafts are already excluded until you publish.",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "name",
      category: "category",
      featured: "featured",
      visible: "visible",
      quote: "fullQuote",
    },
    prepare({ title, category, featured, visible, quote }) {
      const label =
        testimonialCategories.find((item) => item.value === category)?.title ??
        category ??
        "Uncategorized";
      const flags = [
        featured ? "Featured" : null,
        visible === false ? "Hidden" : null,
      ]
        .filter(Boolean)
        .join(" · ");
      return {
        title: title || "Untitled testimonial",
        subtitle: flags ? `${label} · ${flags}` : label,
        description: typeof quote === "string" ? quote.slice(0, 80) : undefined,
      };
    },
  },
});
