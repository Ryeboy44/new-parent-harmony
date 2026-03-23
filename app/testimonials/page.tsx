import type { Metadata } from "next";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteNavbar } from "@/components/home/site-navbar";
import { SectionHeading } from "@/components/home/section-heading";
import { TestimonialCard } from "@/components/testimonials/testimonial-card";
import { SectionShell } from "@/components/ui/section-shell";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "What families say",
  description:
    "Reflections from families who worked with New Parent Harmony for postpartum support, newborn care, feeding, and sleep—based in Montgomery County, MD and serving surrounding areas.",
  openGraph: {
    title: "What families say | New Parent Harmony",
    description:
      "Real words from parents about postpartum doula care and sleep support in Montgomery County, MD and surrounding areas.",
  },
};

export default function TestimonialsPage() {
  return (
    <>
      <SiteNavbar />
      <main id="main-content" className="flex-1 bg-cream">
        <SectionShell background="white" className="border-y border-border-soft/40">
          <SectionHeading
            eyebrow="Testimonials"
            title="What families are saying"
            description="Supportive words from families who wanted calm, attentive, and practical care through the first weeks and months."
            align="center"
            titleAs="h1"
          />

          <ul className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {testimonials.map((testimonial) => (
              <li key={`${testimonial.name}-${testimonial.tag}-${testimonial.quote.slice(0, 16)}`}>
                <TestimonialCard testimonial={testimonial} />
              </li>
            ))}
          </ul>
        </SectionShell>
      </main>
      <SiteFooter />
    </>
  );
}
