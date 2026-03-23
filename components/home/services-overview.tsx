import { SectionShell } from "@/components/ui/section-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/home/section-heading";
import { surfaceCard } from "@/components/ui/surface-card";

const services = [
  {
    title: "Postpartum Doula Care",
    description:
      "Hands-on help with recovery, newborn care, emotional check-ins, and light household rhythm so your early weeks feel more manageable.",
    learnMoreHref: "/services#postpartum-doula-care",
  },
  {
    title: "Lactation Support",
    description:
      "Private, practical guidance for latch, supply, pumping, bottle-feeding, and feeding plans—meeting you where you are with patience and skill.",
    learnMoreHref: "/services#lactation-support",
  },
  {
    title: "Sleep Support",
    description:
      "Gentle, responsive approaches to nights and naps that respect your baby's needs and your family's values—without rigid rules.",
    learnMoreHref: "/services#sleep-support",
  },
  {
    title: "Sleep & Feed Reset",
    description:
      "A focused package to untangle feeding and sleep patterns together, with a clear, compassionate path forward you can actually follow.",
    learnMoreHref: "/services#sleep-feed-reset",
  },
] as const;

export function ServicesOverview() {
  return (
    <SectionShell id="services" background="cream">
      <SectionHeading
        eyebrow="Services"
        title="Support that meets you in real life"
        description="From the first weeks home through feeding questions and sleepless nights, you can choose the care that fits your family—virtually or in person when available."
      />
      <ul className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-8">
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
    </SectionShell>
  );
}
