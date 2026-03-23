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
            Serving families in Montgomery County, MD and beyond with in-home
            and virtual care—thoughtful postpartum doula support, skilled
            lactation guidance, and gentle, responsive sleep help that fits
            your values.
          </p>
          <div className="mt-9 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-stretch sm:gap-4">
            <ButtonLink href="/contact" className="w-full sm:w-auto">
              Book a Discovery Call
            </ButtonLink>
            <ButtonLink
              href="#services"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Explore Services
            </ButtonLink>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div
            className="relative aspect-[4/5] w-full max-w-[20rem] overflow-hidden rounded-2xl bg-gradient-to-br from-cream-deep via-surface to-green-wash/50 shadow-soft sm:max-w-sm lg:max-w-none"
            role="img"
            aria-label="Warm, peaceful moment—placeholder for a family lifestyle photo"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-8 text-center">
              <span
                className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-harmony-green-muted"
                aria-hidden
              >
                Photo
              </span>
              <p className="max-w-[13rem] text-sm leading-relaxed text-muted">
                A natural image of rest, feeding, or early days at home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
