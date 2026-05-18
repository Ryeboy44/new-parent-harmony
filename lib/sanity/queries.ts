/** Only posts that are published and not scheduled for the future. */
const publishedFilter = `
  _type == "post"
  && published == true
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
