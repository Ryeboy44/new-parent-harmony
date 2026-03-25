import Image from "next/image";
import { heroBabyImage } from "@/data/site-images";
import { ButtonLink } from "@/components/ui/button-link";
import { PRIMARY_CTA_HREF, PRIMARY_CTA_LABEL } from "@/data/site-cta";

export function HeroSection() {
  return (
    <section
      className="border-b border-border-soft/40 bg-cream"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:gap-12 sm:px-6 sm:py-16 lg:grid-cols-[1fr_minmax(0,24rem)] lg:items-center lg:gap-16 lg:px-10 lg:py-28">
        <div className="min-w-0">
          <p className="mb-4 text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-harmony-green-muted sm:mb-5 sm:text-xs">
            New Parent Harmony
          </p>
          <h1
            id="hero-heading"
            className="max-w-[22ch] font-display text-[2rem] font-normal leading-[1.15] tracking-[-0.03em] text-foreground sm:max-w-none sm:text-4xl md:text-[2.625rem] md:leading-[1.12]"
          >
            Calm, compassionate support for postpartum, feeding, and infant
            sleep
          </h1>
          <p className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-foreground/90 sm:mt-5 sm:text-base">
            Not sure what kind of support you need? That&apos;s completely
            normal. We&apos;ll figure it out together.
          </p>
          <div className="mt-7 flex w-full max-w-md flex-col gap-3 sm:mt-8 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-stretch sm:gap-4">
            <ButtonLink href={PRIMARY_CTA_HREF} className="w-full sm:w-auto">
              {PRIMARY_CTA_LABEL}
            </ButtonLink>
            <ButtonLink
              href="/services"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Explore Services
            </ButtonLink>
          </div>
          <p className="mt-7 max-w-xl text-[0.9375rem] leading-relaxed text-muted sm:mt-8 sm:text-base">
            Serving Montgomery County, MD and surrounding areas—in-home and
            virtually—with postpartum support, help with newborn sleep, and
            calm guidance when feeding and sleep feel hard. No judgment, just
            steady care.
          </p>
        </div>

        <div className="relative flex w-full justify-center px-2 py-1 sm:px-4 sm:py-2 lg:justify-end lg:px-0 lg:py-0">
          <div className="relative aspect-[5/6] w-full max-w-[min(100%,20rem)] overflow-hidden rounded-2xl sm:max-w-[22rem] lg:max-w-full">
            <Image
              src={heroBabyImage}
              alt="Swaddled newborn resting peacefully in a calm home environment"
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
