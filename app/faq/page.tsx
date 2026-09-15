import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/home/section-heading";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteNavbar } from "@/components/home/site-navbar";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionShell } from "@/components/ui/section-shell";
import { surfaceCard } from "@/components/ui/surface-card";
import { faqItems } from "@/data/faq-items";
import { PRIMARY_CTA_HREF, PRIMARY_CTA_LABEL } from "@/data/site-cta";

export const metadata: Metadata = {
  title: "Frequently asked questions",
  description:
    "Answers to common questions about postpartum doula care, feeding/lactation support, infant sleep support, and the Community Collective in Montgomery County, MD.",
  openGraph: {
    title: "Frequently asked questions | New Parent Harmony",
    description:
      "Get clear answers about postpartum doula care, feeding/lactation support, infant sleep support, and the Community Collective.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.links?.length
        ? `${item.answer} ${item.links.map((link) => link.label).join(" ")}`
        : item.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <SiteNavbar />
      <main id="main-content" className="flex flex-1 flex-col">
        <SectionShell background="cream" padding="pageIntro">
          <SectionHeading
            eyebrow="FAQ"
            titleAs="h1"
            title="Frequently Asked Questions"
            description="If you’re wondering what support might look like, you’re not alone. These are some of the questions families often ask about postpartum doula care, feeding/lactation support, infant sleep support, and the Community Collective."
          />
        </SectionShell>

        <SectionShell
          background="white"
          padding="tight"
          className="border-y border-border-soft/40"
        >
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details key={item.question} className={`${surfaceCard} group`}>
                <summary className="relative cursor-pointer list-none pr-8 text-left">
                  <span className="font-display text-lg leading-snug text-foreground sm:text-xl">
                    {item.question}
                  </span>
                  <span
                    aria-hidden
                    className="pointer-events-none absolute right-7 mt-0.5 text-xl text-muted transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
                  {item.answer}
                </p>
                {item.links?.map((link) => (
                  <p key={link.href} className="mt-3">
                    <Link
                      href={link.href}
                      className="inline-flex min-h-11 items-center rounded-sm text-[0.9375rem] font-medium text-harmony-green-deep underline decoration-harmony-green/40 underline-offset-4 hover:text-foreground hover:decoration-harmony-green-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harmony-green-deep/60 focus-visible:ring-offset-2 focus-visible:ring-offset-surface sm:text-base"
                    >
                      {link.label}
                    </Link>
                  </p>
                ))}
              </details>
            ))}
          </div>
        </SectionShell>

        <SectionShell background="cream">
          <div className={`${surfaceCard} mx-auto max-w-3xl text-center`}>
            <p className="font-display text-2xl font-normal leading-tight text-foreground sm:text-3xl">
              You don&apos;t need to have everything figured out before reaching out.
            </p>
            <div className="mt-7">
              <ButtonLink href={PRIMARY_CTA_HREF}>{PRIMARY_CTA_LABEL}</ButtonLink>
            </div>
          </div>
        </SectionShell>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
