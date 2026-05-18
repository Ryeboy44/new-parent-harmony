import Image from "next/image";
import { servicesHero } from "@/data/services-page-content";
import { heroBabyImage } from "@/data/site-images";
import { ButtonLink } from "@/components/ui/button-link";

export function ServicesHero() {
  return (
    <section
      className="animate-fade-up-soft border-b border-border-soft/40 bg-cream"
      aria-labelledby="services-hero-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:gap-12 sm:px-6 sm:py-16 lg:grid-cols-[1fr_minmax(0,24rem)] lg:items-center lg:gap-16 lg:px-10 lg:py-24">
        <div className="min-w-0">
          <p className="mb-4 text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-harmony-green-muted sm:mb-5 sm:text-xs">
            {servicesHero.eyebrow}
          </p>
          <h1
            id="services-hero-heading"
            className="max-w-[28ch] font-display text-[1.75rem] font-normal leading-[1.18] tracking-[-0.03em] text-foreground sm:max-w-none sm:text-4xl md:text-[2.5rem] md:leading-[1.14]"
          >
            {servicesHero.title}
          </h1>
          <p className="mt-4 max-w-2xl text-[0.9375rem] leading-relaxed text-foreground/90 sm:mt-5 sm:text-base">
            {servicesHero.description}
          </p>
          <div className="mt-7 flex w-full max-w-md flex-col gap-3 sm:mt-8 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-stretch sm:gap-4">
            <ButtonLink href={servicesHero.primaryCta.href} className="w-full sm:w-auto">
              {servicesHero.primaryCta.label}
            </ButtonLink>
            <ButtonLink
              href={servicesHero.secondaryCta.href}
              variant="secondary"
              className="w-full sm:w-auto"
            >
              {servicesHero.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>

        <div className="relative flex w-full justify-center px-2 py-1 sm:px-4 sm:py-2 lg:justify-end lg:px-0 lg:py-0">
          <div className="relative aspect-[5/6] w-full max-w-[min(100%,20rem)] overflow-hidden rounded-2xl shadow-soft ring-1 ring-border-soft/60 sm:max-w-[22rem] lg:max-w-full">
            <Image
              src={heroBabyImage}
              alt="Calm moment between a parent and newborn in a soft, nurturing home setting"
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 92vw, (max-width: 1024px) 40vw, 360px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
