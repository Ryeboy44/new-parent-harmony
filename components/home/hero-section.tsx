import Image from "next/image";
import { heroNewbornImage } from "@/data/site-images";
import { ButtonLink } from "@/components/ui/button-link";

export function HeroSection() {
  return (
    <section
      className="border-b border-border-soft/40 bg-cream"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:gap-14 sm:px-6 sm:py-20 lg:grid-cols-[1fr_minmax(0,24rem)] lg:items-center lg:gap-16 lg:px-10 lg:py-28">
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

        <div className="relative flex w-full justify-center px-1 sm:px-2 lg:justify-end lg:px-0 lg:pt-0">
          <div className="relative aspect-[5/6] w-full max-w-[min(100%,19.5rem)] overflow-hidden rounded-2xl sm:max-w-[21rem] lg:max-w-full">
            <Image
              src={heroNewbornImage}
              alt="Swaddled newborn resting peacefully in a calm home environment on soft cream bedding, gently lit"
              fill
              className="object-cover object-[50%_48%] sm:object-[50%_46%]"
              sizes="(max-width: 1024px) 90vw, 360px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
