import type { Metadata } from "next";
import { SectionHeading } from "@/components/home/section-heading";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteNavbar } from "@/components/home/site-navbar";
import { TestimonialFullCard } from "@/components/testimonials/testimonial-full-card";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionShell } from "@/components/ui/section-shell";
import {
  testimonialCategories,
  testimonialsByCategory,
} from "@/data/testimonials";
import { PRIMARY_CTA_HREF, PRIMARY_CTA_LABEL } from "@/data/site-cta";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Families share their experience with postpartum doula care, lactation support, and pediatric sleep consulting with New Parent Harmony in Maryland, DC, and beyond.",
  openGraph: {
    title: "Testimonials | New Parent Harmony",
    description:
      "Kind words from families supported through postpartum, feeding, and sleep — in their own words.",
  },
};

export default function TestimonialsPage() {
  return (
    <>
      <SiteNavbar />
      <main id="main-content" className="flex flex-1 flex-col">
        <SectionShell background="cream" padding="tight">
          <SectionHeading
            eyebrow="Testimonials"
            title="Kind words from families"
            description="These reflections are shared with permission, in each family’s own words — from postpartum doula care, lactation support, and sleep consulting."
            titleAs="h1"
            align="center"
          />
        </SectionShell>

        {testimonialCategories.map((category, categoryIndex) => {
          const items = testimonialsByCategory(category.id);
          if (items.length === 0) return null;

          return (
            <SectionShell
              key={category.id}
              background={categoryIndex % 2 === 0 ? "white" : "cream"}
              padding="tight"
            >
              <h2
                id={`testimonials-${category.id}`}
                className="mb-8 font-display text-xl font-normal text-foreground sm:mb-10 sm:text-2xl md:text-[1.75rem]"
              >
                {category.label}
              </h2>
              <ul className="mx-auto flex max-w-3xl flex-col gap-6 sm:gap-8">
                {items.map((testimonial) => (
                  <li key={testimonial.id}>
                    <TestimonialFullCard testimonial={testimonial} />
                  </li>
                ))}
              </ul>
            </SectionShell>
          );
        })}

        <section
          className="border-t border-border-soft/50 bg-green-wash/35 py-20 md:py-24 lg:py-28"
          aria-labelledby="testimonials-cta-heading"
        >
          <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:max-w-3xl lg:px-10">
            <h2
              id="testimonials-cta-heading"
              className="font-display text-[1.625rem] font-normal leading-[1.2] tracking-[-0.02em] text-foreground sm:text-3xl md:text-[2.125rem]"
            >
              Ready to feel supported?
            </h2>
            <div className="mt-9 flex justify-center sm:mt-10">
              <ButtonLink href={PRIMARY_CTA_HREF}>{PRIMARY_CTA_LABEL}</ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
