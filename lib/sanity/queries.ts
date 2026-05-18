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
  *[_type == "post" && published == true] | order(publishDate desc) {
    ${postListFields}
  }
`;

export const postBySlugQuery = `
  *[_type == "post" && published == true && slug.current == $slug][0] {
    ${postListFields},
    body
  }
`;

export const postSlugsQuery = `
  *[_type == "post" && published == true && defined(slug.current)].slug.current
`;
