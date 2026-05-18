import { SectionHeading } from "@/components/home/section-heading";
import { TestimonialCard } from "@/components/testimonials/testimonial-card";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionShell } from "@/components/ui/section-shell";
import { featuredTestimonials } from "@/data/testimonials";

export function TestimonialsPreview() {
  return (
    <SectionShell id="testimonials" background="white" className="relative">
      <SectionHeading
        eyebrow="Testimonials"
        title="What families are saying"
        description="Real words from parents who have worked with New Parent Harmony through postpartum, feeding, and sleep."
        align="center"
      />

      <ul
        className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-8"
        aria-label="Featured family testimonials"
      >
        {featuredTestimonials.map((testimonial) => (
          <li key={testimonial.id}>
            <TestimonialCard testimonial={testimonial} variant="short" />
          </li>
        ))}
      </ul>

      <div className="mt-11 flex justify-center sm:mt-12">
        <ButtonLink href="/testimonials" variant="secondary">
          Read More Kind Words
        </ButtonLink>
      </div>
    </SectionShell>
  );
}
