export type Testimonial = {
  quote: string;
  name: string;
  /** Second line under the name (e.g. role or area)—keeps anonymity while feeling specific. */
  attribution: string;
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
    name: "Sarah M.",
    attribution: "First-time parent · Montgomery County, MD",
    tag: "Postpartum Support",
    source: "Shared with permission (newparentharmony.com)",
    featured: true,
  },
  {
    // Paste verbatim quote from newparentharmony.com for Newborn Support:
    quote:
      "We felt truly cared for while adjusting to life with a newborn. The support was practical, nurturing, and exactly what we needed during such a tender season.",
    name: "Alex & Jordan",
    attribution: "Newborn season · virtual & in-home support",
    tag: "Newborn Support",
    source: "Shared with permission (newparentharmony.com)",
    featured: true,
  },
  {
    // Paste verbatim quote from newparentharmony.com for Family Support:
    quote:
      "Gemma has a wonderful way of anticipating what a family needs and offering support that feels both grounding and reassuring.",
    name: "Parent of two",
    attribution: "Ongoing family support · DMV area",
    tag: "Family Support",
    source: "Shared with permission (newparentharmony.com)",
    featured: true,
  },
];
