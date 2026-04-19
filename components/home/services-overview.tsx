import { SectionShell } from "@/components/shared/ui/section-shell";
import { ButtonLink } from "@/components/shared/ui/button-link";
import { SectionHeading } from "@/components/home/section-heading";
import { surfaceCard } from "@/components/shared/ui/surface-card";
import { PRIMARY_CTA_HREF, PRIMARY_CTA_LABEL } from "@/data/site-cta";

const otherServices = [
  {
    title: "Postpartum Doula Care",
    description:
      "Steady postpartum support at home—recovery, newborn care, and emotional check-ins—so the early weeks feel more manageable.",
    learnMoreHref: "/services#postpartum-doula-care",
  },
  {
    title: "Lactation Support",
    description:
      "Breastfeeding support near you in Montgomery County and virtually too—latch, supply, pumping, and bottle-feeding with patience and skill.",
    learnMoreHref: "/services#lactation-support",
  },
  {
    title: "Sleep Support",
    description:
      "Gentle infant sleep support and help with newborn sleep—responsive nights and naps that fit your baby and your values, without rigid rules.",
    learnMoreHref: "/services#sleep-support",
  },
] as const;

const featuredCardClass =
  "rounded-2xl border border-harmony-green/25 bg-gradient-to-b from-green-wash/45 via-white to-white p-7 shadow-soft ring-1 ring-harmony-green/10 sm:p-9";

const unsureCardClass =
  "rounded-2xl border border-border-soft/50 bg-surface-muted/60 px-6 py-8 sm:px-8 sm:py-9";

export function ServicesOverview() {
  return (
    <SectionShell id="services" background="cream">
      <SectionHeading
        eyebrow="Services"
        title="Support that meets you in real life"
        description={
          "Every family\u2019s needs are different. Some families need a gentle starting point, while others are looking for more ongoing support—in Montgomery County, MD and surrounding areas, in home or online."
        }
      />

      <div className="mx-auto mt-10 max-w-2xl sm:mt-12">
        <article className={featuredCardClass}>
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-harmony-green-deep/90 sm:text-xs">
            Start here
          </p>
          <h3 className="mt-3 font-display text-xl font-normal text-foreground sm:text-2xl">
            Sleep &amp; Feed Reset
          </h3>
          <p className="mt-3 text-[0.9375rem] font-medium leading-relaxed text-foreground/90 sm:text-base">
            If you&apos;re feeling overwhelmed with sleep or feeding, this is
            the best place to begin.
          </p>
          <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
            A focused path for families dealing with baby feeding struggles and
            nights that feel unsustainable—feeding and sleep support woven
            together so you can follow a clear, compassionate plan.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <ButtonLink href={PRIMARY_CTA_HREF} className="w-full sm:w-auto">
              {PRIMARY_CTA_LABEL}
            </ButtonLink>
            <ButtonLink
              href="/services#sleep-feed-reset"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Learn more
            </ButtonLink>
          </div>
        </article>
      </div>

      <div className="mx-auto mt-10 max-w-2xl sm:mt-12">
        <div className={unsureCardClass}>
          <h3 className="font-display text-lg font-normal text-foreground sm:text-xl">
            Not sure where to begin?
          </h3>
          <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
            You don&apos;t have to have it all figured out.
          </p>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
            If you&apos;re feeling overwhelmed, unsure, or just need someone to
            talk things through with, we can start there and gently create a
            plan that works for your family.
          </p>
          <div className="mt-7 sm:mt-8">
            <ButtonLink href={PRIMARY_CTA_HREF} variant="secondary">
              {PRIMARY_CTA_LABEL}
            </ButtonLink>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-xl text-center text-[0.9375rem] leading-relaxed text-muted sm:mt-14 sm:text-base">
        When you&apos;re ready, these are other ways I walk alongside families.
      </p>

      <ul className="mt-8 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-10 lg:grid-cols-3 lg:gap-8">
        {otherServices.map((service) => (
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

      <p className="mx-auto mt-10 max-w-xl text-center text-[0.9375rem] leading-relaxed text-muted sm:mt-12 sm:text-base">
        During your free chat, we can talk through what kind of support feels
        right for your family.
      </p>
    </SectionShell>
  );
}
