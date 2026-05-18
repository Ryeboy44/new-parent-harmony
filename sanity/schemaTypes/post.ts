import { defineArrayMember, defineField, defineType } from "sanity";

export const blogCategories = [
  { title: "Postpartum Support", value: "postpartum-support" },
  { title: "Lactation & Feeding", value: "lactation-feeding" },
  { title: "Sleep Support", value: "sleep-support" },
  { title: "Preparing for Baby", value: "preparing-for-baby" },
  { title: "Parenting & Community", value: "parenting-community" },
] as const;

export const postType = defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      description: "Short summary for blog cards and SEO fallback.",
      validation: (rule) => rule.required().max(320),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: { list: [...blogCategories], layout: "radio" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishDate",
      title: "Publish date",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "featuredImage",
      title: "Featured image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          description: "Describe the image for accessibility and SEO.",
        }),
      ],
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
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
                      rule.uri({ allowRelative: true, scheme: ["http", "https", "mailto"] }),
                  }),
                ],
              },
            ],
          },
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string",
      initialValue: "Gemma Cawley · New Parent Harmony",
      description: "Shown on blog posts. Default is Gemma Cawley / New Parent Harmony.",
    }),
    defineField({
      name: "seoTitle",
      title: "SEO title",
      type: "string",
      description: "Optional. Defaults to the post title.",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO description",
      type: "text",
      rows: 2,
      description: "Optional. Defaults to the excerpt.",
    }),
    defineField({
      name: "published",
      title: "Published",
      type: "boolean",
      description: "Only published posts appear on the website.",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "featuredImage",
      published: "published",
    },
    prepare({ title, subtitle, media, published }) {
      return {
        title: published ? title : `${title} (draft)`,
        subtitle,
        media,
      };
    },
  },
});
