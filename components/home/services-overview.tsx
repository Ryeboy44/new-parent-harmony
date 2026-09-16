import { SectionShell } from "@/components/ui/section-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/home/section-heading";
import { surfaceCard } from "@/components/ui/surface-card";
import { PRIMARY_CTA_HREF, PRIMARY_CTA_LABEL } from "@/data/site-cta";

const services = [
  {
    title: "Postpartum Doula Care",
    description:
      "Hands-on support for recovery, newborn care, and the early weeks at home.",
    learnMoreHref: "/services#postpartum-doula-care",
  },
  {
    title: "Feeding & Lactation Support",
    description:
      "Help with latch, supply, pumping, and bottle-feeding—without pressure or judgment.",
    learnMoreHref: "/services#lactation-support",
  },
  {
    title: "Infant Sleep Support",
    description:
      "Gentle guidance for nights and naps that fit your baby and your family.",
    learnMoreHref: "/services#sleep-support",
  },
] as const;

export function ServicesOverview() {
  return (
    <SectionShell id="services" background="cream" padding="afterHero">
      <SectionHeading
        eyebrow="Services"
        title="Support that fits real family life"
        description="Postpartum, feeding, and infant sleep care—shaped around your family, in home or online."
      />

      <ul className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
        {services.map((service) => (
          <li key={service.title}>
            <article className={`${surfaceCard} flex h-full flex-col`}>
              <h3 className="font-display text-lg font-normal text-foreground sm:text-xl">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
                {service.description}
              </p>
              <div className="mt-6">
                <ButtonLink href={service.learnMoreHref} variant="ghost">
                  Learn more
                </ButtonLink>
              </div>
            </article>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-col items-center gap-3 sm:mt-12 sm:flex-row sm:justify-center sm:gap-4">
        <ButtonLink href="/services" className="w-full sm:w-auto">
          Explore Services
        </ButtonLink>
        <ButtonLink
          href={PRIMARY_CTA_HREF}
          variant="secondary"
          className="w-full sm:w-auto"
        >
          {PRIMARY_CTA_LABEL}
        </ButtonLink>
      </div>
    </SectionShell>
  );
}
