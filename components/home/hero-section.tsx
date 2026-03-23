import Image from "next/image";
import { nphSiteImages } from "@/data/site-images";
import { ButtonLink } from "@/components/ui/button-link";

export function HeroSection() {
  return (
    <section
      className="border-b border-border-soft/40 bg-cream"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:gap-14 sm:px-6 sm:py-20 lg:grid-cols-[1fr_minmax(0,26rem)] lg:items-center lg:gap-16 lg:px-10 lg:py-28">
        <div className="min-w-0">
          <p className="mb-5 text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-harmony-green-muted sm:text-xs">
            New Parent Harmony
          </p>
          <h1
            id="hero-heading"
            className="max-w-[22ch] font-display text-[2rem] font-normal leading-[1.15] tracking-[-0.03em] text-foreground sm:max-w-none sm:text-4xl md:text-[2.625rem] md:leading-[1.12]"
          >
            Calm, compassionate support for postpartum, feeding, and infant
            sleep
          </h1>
          <p className="mt-6 max-w-xl text-[0.9375rem] leading-relaxed text-muted sm:text-base md:mt-7">
            Serving Montgomery County, MD and surrounding areas—in-home and
            virtually—with calm postpartum care, lactation support, and
            responsive sleep guidance that fits your family and your values.
          </p>
          <div className="mt-9 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-stretch sm:gap-4">
            <ButtonLink href="/discovery-call" className="w-full sm:w-auto">
              Book a Discovery Call
            </ButtonLink>
            <ButtonLink
              href="/services"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Explore Services
            </ButtonLink>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative aspect-[760/362] w-full max-w-xl overflow-hidden rounded-2xl bg-cream">
            <Image
              src={nphSiteImages.heroKeyVisual}
              alt="New Parent Harmony — calm postpartum, lactation, and infant sleep support for families in Montgomery County, MD and surrounding areas"
              width={760}
              height={362}
              className="h-full w-full object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 480px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
