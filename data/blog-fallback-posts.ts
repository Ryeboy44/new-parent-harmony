import type { BlogPost } from "@/lib/sanity/types";

/**
 * Layout-only samples when Sanity is not configured (local dev).
 * Marked as placeholders — replace by publishing posts in Sanity Studio (/studio).
 */
export const blogFallbackPosts: BlogPost[] = [
  {
    _id: "placeholder-1",
    title: "Do I Need a Postpartum Doula?",
    slug: "do-i-need-a-postpartum-doula",
    excerpt:
      "[Sample layout placeholder] A short introduction will go here once this post is written and published in Sanity Studio.",
    category: "postpartum-support",
    publishDate: new Date().toISOString(),
    author: "Gemma Cawley",
    readingMinutes: 1,
    isPlaceholder: true,
    body: [
      {
        _type: "block",
        _key: "p1",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "This is sample placeholder copy for layout testing only. Replace this post in Sanity Studio with your full article before publishing.",
            marks: [],
          },
        ],
      },
    ],
  },
  {
    _id: "placeholder-2",
    title: "Why Feeding and Sleep Often Affect Each Other",
    slug: "why-feeding-and-sleep-affect-each-other",
    excerpt:
      "[Sample layout placeholder] A short introduction will go here once this post is written and published in Sanity Studio.",
    category: "lactation-feeding",
    publishDate: new Date().toISOString(),
    author: "Gemma Cawley",
    readingMinutes: 1,
    isPlaceholder: true,
    body: [
      {
        _type: "block",
        _key: "p1",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "This is sample placeholder copy for layout testing only. Replace this post in Sanity Studio with your full article before publishing.",
            marks: [],
          },
        ],
      },
    ],
  },
  {
    _id: "placeholder-3",
    title: "Preparing for Postpartum Before Baby Arrives",
    slug: "preparing-for-postpartum-before-baby-arrives",
    excerpt:
      "[Sample layout placeholder] A short introduction will go here once this post is written and published in Sanity Studio.",
    category: "preparing-for-baby",
    publishDate: new Date().toISOString(),
    author: "Gemma Cawley",
    readingMinutes: 1,
    isPlaceholder: true,
    body: [
      {
        _type: "block",
        _key: "p1",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "This is sample placeholder copy for layout testing only. Replace this post in Sanity Studio with your full article before publishing.",
            marks: [],
          },
        ],
      },
    ],
  },
];
