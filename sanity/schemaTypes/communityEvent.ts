import { defineArrayMember, defineField, defineType } from "sanity";

export const eventFormats = [
  { title: "In person", value: "in-person" },
  { title: "Virtual", value: "virtual" },
  { title: "Hybrid (in person and virtual)", value: "hybrid" },
] as const;

export const eventStatuses = [
  { title: "Upcoming", value: "upcoming" },
  { title: "Past", value: "past" },
  { title: "Cancelled", value: "cancelled" },
] as const;

/** Formats a YYYY-MM-DD date for the Studio list, without timezone drift. */
function previewDate(date: string | undefined): string {
  if (!date) return "No date set";
  const [year, month, day] = date.split("-").map(Number);
  if (!year || !month || !day) return date;
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

export const communityEventType = defineType({
  name: "communityEvent",
  title: "Community Event",
  type: "document",
  groups: [
    { name: "content", title: "Event details", default: true },
    { name: "when", title: "Date & place" },
    { name: "settings", title: "Display options" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Event title",
      type: "string",
      group: "content",
      description: "The name families will see, e.g. “Newborn Sleep Workshop”.",
      validation: (rule) => rule.required().max(120),
    }),
    defineField({
      name: "slug",
      title: "Link ID",
      type: "slug",
      group: "content",
      description:
        "Created automatically from the title. Used to link straight to this event from social media or an email.",
      options: {
        source: "title",
        maxLength: 96,
        slugify: (input) =>
          input
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/\s+/g, "-")
            .slice(0, 96),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Short description",
      type: "text",
      rows: 3,
      group: "content",
      description:
        "One or two sentences shown on the event card on the Community Collective page.",
      validation: (rule) => rule.required().max(300),
    }),
    defineField({
      name: "fullDescription",
      title: "Full description",
      type: "array",
      group: "content",
      description:
        "Optional. Longer details about the event. Not shown on the card yet — safe to leave empty.",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  defineField({
                    name: "href",
                    type: "url",
                    title: "URL",
                    validation: (rule) =>
                      rule.uri({
                        allowRelative: true,
                        scheme: ["http", "https", "mailto"],
                      }),
                  }),
                ],
              },
            ],
          },
        }),
      ],
    }),
    defineField({
      name: "eventDate",
      title: "Event date",
      type: "date",
      group: "when",
      description:
        "Events automatically stop showing in the upcoming list the day after this date.",
      options: { dateFormat: "dddd, MMMM D, YYYY" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "startTime",
      title: "Start time",
      type: "string",
      group: "when",
      description: "Type it the way you want it to appear, e.g. “10:00 AM”.",
      validation: (rule) => rule.max(40),
    }),
    defineField({
      name: "endTime",
      title: "End time",
      type: "string",
      group: "when",
      description: "Optional, e.g. “11:30 AM”.",
      validation: (rule) => rule.max(40),
    }),
    defineField({
      name: "format",
      title: "Where it happens",
      type: "string",
      group: "when",
      description:
        "Virtual events show as “Virtual” on the card, so a location isn’t needed.",
      options: {
        list: eventFormats.map((f) => ({ title: f.title, value: f.value })),
        layout: "radio",
      },
      initialValue: "in-person",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      group: "when",
      description:
        "Venue, neighbourhood or town for in-person events, e.g. “Bethesda, MD”.",
      validation: (rule) =>
        rule.custom((location, context) => {
          const parent = context.parent as { format?: string } | undefined;
          const needsLocation =
            parent?.format === "in-person" || parent?.format === "hybrid";
          if (needsLocation && !location) {
            return "Add a location for in-person and hybrid events.";
          }
          return true;
        }),
    }),
    defineField({
      name: "registrationUrl",
      title: "Registration link",
      type: "url",
      group: "content",
      description:
        "Optional. If you add one, a “Register” button appears on the event card.",
      validation: (rule) => rule.uri({ scheme: ["http", "https", "mailto"] }),
    }),
    defineField({
      name: "featuredImage",
      title: "Event image",
      type: "image",
      group: "content",
      description: "Optional. A calm, welcoming photo works best.",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          description:
            "Describe the image for accessibility and SEO (required for accessibility).",
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
    defineField({
      name: "featured",
      title: "Highlight this event",
      type: "boolean",
      group: "settings",
      description:
        "Turn on to show this event first, with a “Featured” label on the card.",
      initialValue: false,
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      group: "settings",
      description:
        "“Cancelled” keeps the event visible with a cancelled label so families who already signed up can see it. “Past” hides it right away.",
      options: {
        list: eventStatuses.map((s) => ({ title: s.title, value: s.value })),
        layout: "radio",
      },
      initialValue: "upcoming",
      validation: (rule) => rule.required(),
    }),
  ],
  orderings: [
    {
      name: "eventDateAsc",
      title: "Event date — soonest first",
      by: [{ field: "eventDate", direction: "asc" }],
    },
    {
      name: "eventDateDesc",
      title: "Event date — newest first",
      by: [{ field: "eventDate", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      eventDate: "eventDate",
      status: "status",
      format: "format",
      media: "featuredImage",
    },
    prepare({ title, eventDate, status, format, media }) {
      const formatLabel =
        eventFormats.find((f) => f.value === format)?.title ?? "";
      const statusLabel =
        status && status !== "upcoming"
          ? ` · ${eventStatuses.find((s) => s.value === status)?.title ?? status}`
          : "";
      return {
        title,
        subtitle: `${previewDate(eventDate)}${formatLabel ? ` · ${formatLabel}` : ""}${statusLabel}`,
        media,
      };
    },
  },
});
