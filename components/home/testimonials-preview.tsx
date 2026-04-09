import { SectionHeading } from "@/components/home/section-heading";
import { TestimonialCard } from "@/components/testimonials/testimonial-card";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionShell } from "@/components/ui/section-shell";
import { testimonials } from "@/data/testimonials";
import { PRIMARY_CTA_HREF, PRIMARY_CTA_LABEL } from "@/data/site-cta";

export function TestimonialsPreview() {
  return (
    <SectionShell id="testimonials" background="white" className="relative">
      <SectionHeading
        eyebrow="Testimonials"
        title="What families are saying"
        description="Gentle, grounded reflections from families supported through postpartum recovery, newborn adjustment, and everyday rhythm."
        align="center"
      />

      <ul className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {testimonials.map((testimonial) => (
          <li key={`${testimonial.name}-${testimonial.tag}-${testimonial.quote.slice(0, 16)}`}>
            <TestimonialCard testimonial={testimonial} />
          </li>
        ))}
      </ul>

      <div className="mt-11 flex justify-center sm:mt-12">
        <ButtonLink href={PRIMARY_CTA_HREF}>{PRIMARY_CTA_LABEL}</ButtonLink>
      </div>
    </SectionShell>
  );
}
