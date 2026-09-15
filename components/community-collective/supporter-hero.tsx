import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { supporterPage } from "@/data/community-collective-content";
import { supportCollectiveCommunityImage } from "@/data/site-images";

export function SupporterHero() {
  return (
    <section
      className="animate-fade-up-soft border-b border-border-soft/40 bg-cream"
      aria-labelledby="supporter-hero-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:gap-10 sm:px-6 sm:py-14 lg:grid-cols-[1fr_minmax(0,32rem)] lg:items-center lg:gap-14 lg:px-10 lg:py-20">
        <div className="min-w-0">
          <p className="mb-4 text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-harmony-green-muted sm:mb-5 sm:text-xs">
            {supporterPage.eyebrow}
          </p>
          <h1
            id="supporter-hero-heading"
            className="max-w-[18ch] font-display text-[1.75rem] font-normal leading-[1.18] tracking-[-0.03em] text-foreground sm:text-4xl md:text-[2.5rem] md:leading-[1.14]"
          >
            {supporterPage.title}
          </h1>
          <p className="mt-5 font-display text-xl font-normal leading-snug text-harmony-green-deep sm:mt-6 sm:text-2xl">
            {supporterPage.tagline}
          </p>
          {supporterPage.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph.slice(0, 40)}
              className={`max-w-2xl text-[0.9375rem] leading-relaxed text-muted sm:text-base ${
                index === 0 ? "mt-5 sm:mt-6" : "mt-4"
              }`}
            >
              {paragraph}
            </p>
          ))}
          <div className="mt-7 flex w-full max-w-md flex-col gap-3 sm:mt-8 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-stretch sm:gap-4">
            <ButtonLink href="#supporter-form" className="w-full sm:w-auto">
              {supporterPage.primaryCtaLabel}
            </ButtonLink>
            <ButtonLink
              href={supporterPage.secondaryCtaHref}
              variant="secondary"
              className="w-full sm:w-auto"
            >
              {supporterPage.secondaryCtaLabel}
            </ButtonLink>
          </div>
        </div>

        <div className="relative flex w-full justify-center lg:justify-end">
          <div className="relative aspect-[3/2] w-full max-w-[min(100%,36rem)] overflow-hidden rounded-2xl shadow-soft ring-1 ring-border-soft/60 lg:max-w-full">
            <Image
              src={supportCollectiveCommunityImage}
              alt="Parents and community members gathering together with young children."
              fill
              className="object-cover object-[center_42%]"
              sizes="(max-width: 640px) 92vw, (max-width: 1024px) 80vw, 512px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
