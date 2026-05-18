export type TestimonialCategory =
  | "postpartum-doula"
  | "sleep-support"
  | "postpartum-lactation";

export type Testimonial = {
  id: string;
  category: TestimonialCategory;
  /** Display label for cards and grouped sections */
  categoryLabel: string;
  shortQuote: string;
  fullQuote: string;
  name: string;
  /** Service · location · year — shown under the name on cards */
  contextLine: string;
  /** Location · year — shown on the full testimonials page */
  locationLine: string;
  featured: boolean;
};

export const testimonialCategories: {
  id: TestimonialCategory;
  label: string;
}[] = [
  { id: "postpartum-doula", label: "Postpartum Doula Care" },
  { id: "sleep-support", label: "Sleep Support" },
  { id: "postpartum-lactation", label: "Postpartum & Lactation Support" },
];

export const testimonials: Testimonial[] = [
  {
    id: "kelli-n",
    category: "postpartum-doula",
    categoryLabel: "Postpartum Doula Care",
    shortQuote:
      "I didn\u2019t have postpartum support with my first two births, so I wasn\u2019t entirely sure what to expect \u2014 but having Gemma made such a difference, and I only wish I had her the first two times as well.",
    fullQuote: `We recently finished working with Gemma after the birth of my third child, and I can't say enough positive things about our experience. I didn't have postpartum support with my first two births, so I wasn't entirely sure what to expect — but having Gemma made such a difference, and I only wish I had her the first two times as well.

She was always punctual and arrived with a warm, positive energy, immediately asking about my goals for the day and how she could best support me. She was incredibly knowledgeable and always able to answer any questions I had about the baby, nursing, pumping, sleep, and more, which gave me so much reassurance.

What stood out most was how much she genuinely cared — not just for the baby, but for me as well. That level of support meant everything during those early weeks. In addition to caring for the baby, Gemma also helped with things like cooking and laundry, which made our home feel more manageable and allowed me to focus on recovery and bonding.

I highly recommend her to anyone looking for postpartum support.`,
    name: "Kelli N.",
    contextLine: "Postpartum Doula Care \u00b7 Potomac, MD \u00b7 2026",
    locationLine: "Potomac, MD \u00b7 2026",
    featured: true,
  },
  {
    id: "jill-s",
    category: "sleep-support",
    categoryLabel: "Sleep Support",
    shortQuote:
      "Our toddler was struggling going to bed and we were beyond exhausted and frustrated. Working with Gemma just a few days and we saw immediate change.",
    fullQuote: `Gemma is a godsend. She came into our life at the perfect time. Our toddler was struggling going to bed and we were beyond exhausted and frustrated. Working with Gemma just a few days and we saw immediate change. It's been a few weeks and our son is going to bed with zero issues. We can't thank Gemma enough!`,
    name: "Jill S.",
    contextLine: "Sleep Support \u00b7 Washington, DC \u00b7 2024",
    locationLine: "Washington, DC \u00b7 2024",
    featured: true,
  },
  {
    id: "rachel-r",
    category: "postpartum-lactation",
    categoryLabel: "Postpartum & Lactation Support",
    shortQuote:
      "Gemma has been fantastic \u2014 exactly what we were looking for. She has been incredibly helpful keeping our house in order as we settle back into a new routine in the first few weeks home from the hospital.",
    fullQuote: `Gemma has been fantastic — exactly what we were looking for. She has been incredibly helpful keeping our house in order as we settle back into a new routine in the first few weeks home from the hospital. And she has provided invaluable advice and support with lactation and other baby care. Thank you, Gemma!`,
    name: "Rachel R.",
    contextLine: "Postpartum & Lactation Support \u00b7 Oakland, CA \u00b7 2024",
    locationLine: "Oakland, CA \u00b7 2024",
    featured: true,
  },
  {
    id: "ariel-b",
    category: "postpartum-doula",
    categoryLabel: "Postpartum Doula Care",
    shortQuote:
      "Gemma made sure our fridge was stocked, took care of me in those early postpartum days, cleaned, cooked, and watched the baby so that my husband and I could get some much needed rest.",
    fullQuote: `Gemma is amazing! Gemma worked with us when our daughter was 5 days old and helped us so much. Gemma made sure our fridge was stocked, took care of me in those early postpartum days, cleaned, cooked, and watched the baby so that my husband and I could get some much needed rest.

She helped with our first bath and she is just a wealth of knowledge with so much advice and kind words. I really appreciated that in between visits she would also check in to see how we were doing — this was above and beyond what I had expected and would recommend Gemma to anyone.`,
    name: "Ariel B.",
    contextLine: "Postpartum Doula Care \u00b7 Rockville, MD \u00b7 2023",
    locationLine: "Rockville, MD \u00b7 2023",
    featured: true,
  },
];

export const featuredTestimonials = testimonials.filter((t) => t.featured);

export function testimonialsByCategory(
  category: TestimonialCategory,
): Testimonial[] {
  return testimonials.filter((t) => t.category === category);
}
