import type { BlogCategory } from "@/lib/sanity/types";

export const blogCategoryLabels: Record<BlogCategory, string> = {
  "postpartum-support": "Postpartum Support",
  "lactation-feeding": "Lactation & Feeding",
  "sleep-support": "Sleep Support",
  "preparing-for-baby": "Preparing for Baby",
  "parenting-community": "Parenting & Community",
};

export function getBlogCategoryLabel(category: BlogCategory): string {
  return blogCategoryLabels[category] ?? category;
}
