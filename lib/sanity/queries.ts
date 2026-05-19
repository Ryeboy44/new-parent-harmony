/**
 * Posts visible on the public blog.
 * - Draft documents are excluded by the Sanity client (`perspective: "published"`).
 * - Requires a slug and a publish date that is not in the future.
 * - The `published` boolean in Studio is for editorial labelling only; site visibility
 *   follows Sanity’s Publish action, not that toggle.
 */
const publishedFilter = `
  _type == "post"
  && defined(slug.current)
  && publishDate <= now()
`;

export const postListFields = `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  category,
  publishDate,
  author,
  seoTitle,
  seoDescription,
  featuredImage {
    alt,
    asset->{
      _id,
      url,
      metadata { dimensions { width, height } }
    }
  },
  "bodyText": pt::text(body)
`;

export const postsQuery = `
  *[${publishedFilter}] | order(publishDate desc) {
    ${postListFields}
  }
`;

export const postBySlugQuery = `
  *[${publishedFilter} && slug.current == $slug][0] {
    ${postListFields},
    body
  }
`;

export const postSlugsQuery = `
  *[${publishedFilter}].slug.current
`;
