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

const imageProjection = `
  alt,
  asset->{
    _id,
    url,
    metadata { dimensions { width, height } }
  }
`;

const communityEventFields = `
  _id,
  title,
  "slug": slug.current,
  shortDescription,
  eventDate,
  startTime,
  endTime,
  format,
  location,
  registrationUrl,
  "featured": coalesce(featured, false),
  status,
  featuredImage { ${imageProjection} }
`;

/**
 * Community events for the Collective page.
 * - Drafts are excluded by the Sanity client (`perspective: "published"`).
 * - Events marked "Past" are hidden immediately; every other event disappears on its
 *   own the day after `eventDate` ($today is the current date in America/New_York).
 * - Cancelled events stay visible until their date passes so families who already
 *   signed up can see the cancellation; the card suppresses the registration link.
 */
export const upcomingCommunityEventsQuery = `
  *[
    _type == "communityEvent"
    && defined(slug.current)
    && defined(eventDate)
    && status != "past"
    && eventDate >= $today
  ] | order(coalesce(featured, false) desc, eventDate asc) {
    ${communityEventFields}
  }
`;

/** Singleton holding the Collective's public availability controls and impact numbers. */
export const communityCollectiveSettingsQuery = `
  *[_type == "communityCollectiveSettings"][0] {
    applicationsStatus,
    supporterInquiriesStatus,
    inPersonAvailable,
    virtualAvailable,
    reducedRateCapacity,
    statusMessage,
    impactYear,
    familiesSupported,
    careHours,
    programsProvided,
    communityEventsCount,
    communityPartnersCount,
    valueOfSupport,
    impactMessage,
    impactStory,
    impactImage { ${imageProjection} }
  }
`;

const collectiveSupporterFields = `
  _id,
  name,
  websiteUrl,
  description,
  recognitionLevel,
  "displayAnonymously": coalesce(displayAnonymously, false),
  "featured": coalesce(featured, false),
  "displayOrder": coalesce(displayOrder, 0),
  logo { ${imageProjection} }
`;

/**
 * Public recognition list only.
 * Financial and administrative tracking fields are not stored in this document
 * and are never projected here.
 */
export const activeCollectiveSupportersQuery = `
  *[
    _type == "collectiveSupporter"
    && coalesce(active, publiclyRecognized, false) == true
    && recognitionConsent == true
    && defined(name)
  ] | order(coalesce(featured, false) desc, coalesce(displayOrder, 0) asc, name asc) {
    ${collectiveSupporterFields}
  }
`;

const testimonialFields = `
  _id,
  name,
  fullQuote,
  shortQuote,
  category,
  contextLine,
  locationLine,
  year,
  "displayOrder": coalesce(displayOrder, 0),
  "featured": coalesce(featured, false)
`;

/**
 * Published testimonials. Drafts are excluded by the Sanity client perspective.
 * `visible` hides a document without deleting it.
 */
export const publishedTestimonialsQuery = `
  *[
    _type == "testimonial"
    && coalesce(visible, true) == true
    && defined(name)
    && defined(fullQuote)
  ] | order(coalesce(displayOrder, 0) asc, name asc) {
    ${testimonialFields}
  }
`;

