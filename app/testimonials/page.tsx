import type { Metadata } from "next";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteNavbar } from "@/components/home/site-navbar";
import { SectionHeading } from "@/components/home/section-heading";
import { TestimonialCard } from "@/components/testimonials/testimonial-card";
import { SectionShell } from "@/components/ui/section-shell";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Testimonials | New Parent Harmony",
  description:
    "Read what families share about postpartum, newborn, feeding, and sleep support with New Parent Harmony.",
};

export default function TestimonialsPage() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-foreground focus:shadow-md"
      >
        Skip to main content
      </a>
      <SiteNavbar />
      <main id="main-content" className="flex-1 bg-cream">
        <SectionShell background="white" className="border-y border-border-soft/40">
          <SectionHeading
            eyebrow="Testimonials"
            title="What families are saying"
            description="Supportive words from families who wanted calm, attentive, and practical care through the first weeks and months."
            align="center"
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
