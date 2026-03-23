import type { Metadata } from "next";
import { SectionHeading } from "@/components/home/section-heading";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteNavbar } from "@/components/home/site-navbar";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionShell } from "@/components/ui/section-shell";
import { surfaceCard } from "@/components/ui/surface-card";

export const metadata: Metadata = {
  title: "Services | New Parent Harmony",
  description:
    "Postpartum doula care, lactation support, gentle infant sleep guidance, and sleep & feed reset packages for Montgomery County and beyond.",
};

const serviceBlocks = [
  {
    id: "sleep-feed-reset",
    title: "Sleep & Feed Reset",
    body: "A focused package to untangle feeding and sleep patterns together, with a clear, compassionate path forward you can actually follow between visits.",
  },
  {
    id: "postpartum-doula-care",
    title: "Postpartum Doula Care",
    body: "Hands-on help with recovery, newborn care, emotional check-ins, and light household rhythm so your early weeks feel more manageable—in the rhythm that works for your home.",
  },
  {
    id: "lactation-support",
    title: "Lactation Support",
    body: "Private, practical guidance for latch, supply, pumping, bottle-feeding, and feeding plans—meeting you where you are with patience and skill, without judgment.",
  },
  {
    id: "sleep-support",
    title: "Sleep Support",
    body: "Gentle, responsive approaches to nights and naps that respect your baby's needs and your family's values—without rigid rules or pressure to move faster than feels right.",
  },
] as const;

export default function ServicesPage() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-foreground focus:shadow-md"
      >
        Skip to main content
      </a>
      <SiteNavbar />
      <main id="main-content" className="flex flex-1 flex-col">
        <SectionShell background="cream" padding="tight">
          <SectionHeading
            eyebrow="Services"
            title="Ways we can work together"
            description="Every family is different. These are the main paths families choose when they want steady, experienced support through postpartum, feeding, and early sleep."
          />
        </SectionShell>

        <div className="border-t border-border-soft/40 bg-surface">
          <div className="mx-auto max-w-6xl space-y-0 px-4 sm:px-6 lg:px-10">
            {serviceBlocks.map((block, index) => (
              <section
                key={block.id}
                id={block.id}
                className={`scroll-mt-28 py-16 md:py-20 lg:py-24 ${
                  index > 0 ? "border-t border-border-soft/50" : ""
                }`}
              >
                <article className={`${surfaceCard} max-w-3xl`}>
                  <h2 className="font-display text-xl font-normal text-foreground sm:text-2xl">
                    {block.title}
                  </h2>
                  <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
                    {block.body}
                  </p>
                  <div className="mt-8">
                    <ButtonLink href="/discovery-call" className="w-full sm:w-auto">
                      Book a Discovery Call
                    </ButtonLink>
                  </div>
                </article>
              </section>
            ))}
          </div>
        </div>

        <SectionShell id="about-gemma" background="cream">
          <div className="mx-auto max-w-2xl text-center md:max-w-[44rem]">
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-harmony-green-muted sm:text-xs">
              About
            </p>
            <h2 className="mt-3 font-display text-[1.625rem] font-normal leading-[1.2] tracking-[-0.02em] text-foreground sm:text-3xl md:text-[2.125rem]">
              Meet Gemma
            </h2>
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted sm:mt-6 sm:text-base">
              I&apos;m a postpartum and family support specialist with years of
              experience helping parents navigate recovery, feeding decisions,
              and sleep without losing sight of what matters to you. My approach
              blends hands-on care, clear education, and emotional steadiness.
            </p>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
              Based in Montgomery County, I work with families locally and
              virtually, always prioritizing safety, respect, and confidence over
              perfection.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <ButtonLink href="/discovery-call">Book a Discovery Call</ButtonLink>
              <ButtonLink href="/" variant="secondary">
                Back to home
              </ButtonLink>
            </div>
          </div>
        </SectionShell>
      </main>
      <SiteFooter />
    </>
  );
}
