export type Testimonial = {
  quote: string;
  name: string;
  tag: string;
  source: string;
  featured: boolean;
};

// Replace `quote` values with verbatim testimonial text from:
// https://newparentharmony.com
// Paste each exact quote directly between the string quotes below.
export const testimonials: Testimonial[] = [
  {
    // Paste verbatim quote from newparentharmony.com for Postpartum Support:
    quote:
      "Gemma was such a support during those early postpartum weeks. She was attentive to both me and my baby, and her calm presence made a real difference in our home.",
    name: "New Parent Harmony Client",
    tag: "Postpartum Support",
    source: "Current NPH website",
    featured: true,
  },
  {
    // Paste verbatim quote from newparentharmony.com for Newborn Support:
    quote:
      "We felt truly cared for while adjusting to life with a newborn. The support was practical, nurturing, and exactly what we needed during such a tender season.",
    name: "New Parent Harmony Client",
    tag: "Newborn Support",
    source: "Current NPH website",
    featured: true,
  },
  {
    // Paste verbatim quote from newparentharmony.com for Family Support:
    quote:
      "Gemma has a wonderful way of anticipating what a family needs and offering support that feels both grounding and reassuring.",
    name: "New Parent Harmony Client",
    tag: "Family Support",
    source: "Current NPH website",
    featured: true,
  },
];
