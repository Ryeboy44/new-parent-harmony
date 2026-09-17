import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { CollectiveLabel } from "@/components/community-collective/collective-label";
import { RequestSupportCta } from "@/components/community-collective/request-support-cta";
import { serviceAreaSection } from "@/data/community-collective-content";
import {
  COLLECTIVE_SUPPORT_HREF,
  COLLECTIVE_SUPPORT_LABEL,
  collectiveHero,
} from "@/data/community-collective-content";
import { collectiveFamiliesImage } from "@/data/site-images";
import type { CollectiveApplicationsStatus } from "@/lib/sanity/types";

type CollectiveHeroProps = {
  applicationsStatus: CollectiveApplicationsStatus;
};

export function CollectiveHero({ applicationsStatus }: CollectiveHeroProps) {
  return (
    <section
      className="animate-fade-up-soft border-b border-clay/15 bg-cream"
      aria-labelledby="collective-hero-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:gap-10 sm:px-6 sm:py-14 lg:grid-cols-[1fr_minmax(0,32rem)] lg:items-center lg:gap-14 lg:px-10 lg:py-20">
        <div className="min-w-0">
          <CollectiveLabel className="mb-4 sm:mb-5" />
          <h1
            id="collective-hero-heading"
            className="max-w-[20ch] font-display text-[1.75rem] font-normal leading-[1.18] tracking-[-0.03em] text-foreground sm:max-w-[24ch] sm:text-4xl md:text-[2.5rem] md:leading-[1.14]"
          >
            {collectiveHero.title}
          </h1>
          <p className="mt-5 font-display text-xl font-normal leading-snug text-harmony-green-deep sm:mt-6 sm:text-2xl">
            {collectiveHero.tagline}
          </p>
          {collectiveHero.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph.slice(0, 40)}
              className={`max-w-2xl text-[0.9375rem] leading-relaxed text-muted sm:text-base ${
                index === 0 ? "mt-5 sm:mt-6" : "mt-4"
              }`}
            >
              {paragraph}
            </p>
          ))}

          <dl className="mt-6 grid max-w-lg gap-4 sm:grid-cols-2 sm:gap-6">
            {serviceAreaSection.places.map((place) => (
              <div key={place.label}>
                <dt className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-harmony-green-muted">
                  {place.label}
                </dt>
                <dd className="mt-1 text-[0.9375rem] text-foreground">
                  {place.detail}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 max-w-xl text-xs leading-relaxed text-muted">
            {serviceAreaSection.qualifier}
          </p>

          <div className="mt-7 flex w-full max-w-md flex-col gap-3 sm:mt-8 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-stretch sm:gap-4">
            <RequestSupportCta
              applicationsStatus={applicationsStatus}
              className="w-full sm:w-auto"
            />
            <ButtonLink
              href={COLLECTIVE_SUPPORT_HREF}
              variant="secondary"
              className="w-full sm:w-auto"
            >
              {COLLECTIVE_SUPPORT_LABEL}
            </ButtonLink>
          </div>
        </div>

        <div className="relative flex w-full justify-center lg:justify-end">
          <div className="relative aspect-[3/2] w-full max-w-[min(100%,36rem)] overflow-hidden rounded-2xl shadow-soft ring-1 ring-border-soft/60 lg:max-w-full">
            <Image
              src={collectiveFamiliesImage}
              alt="Parents sitting together with their babies."
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
