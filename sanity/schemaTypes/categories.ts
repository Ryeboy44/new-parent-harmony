export const blogCategories = [
  { title: "Postpartum Support", value: "postpartum-support" },
  { title: "Lactation & Feeding", value: "lactation-feeding" },
  { title: "Sleep Support", value: "sleep-support" },
  { title: "Preparing for Baby", value: "preparing-for-baby" },
  { title: "Parenting & Community", value: "parenting-community" },
] as const;

export type BlogCategoryValue = (typeof blogCategories)[number]["value"];

export const categoryTitles = Object.fromEntries(
  blogCategories.map((c) => [c.value, c.title]),
) as Record<BlogCategoryValue, string>;

export function categoryPreviewSubtitle(category: string | undefined): string {
  if (!category) return "";
  return categoryTitles[category as BlogCategoryValue] ?? category;
}
