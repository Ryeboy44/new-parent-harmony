import { ButtonLink } from "@/components/ui/button-link";
import { surfaceCard } from "@/components/ui/surface-card";
import { RequestSupportCta } from "@/components/community-collective/request-support-cta";
import {
  COLLECTIVE_REQUEST_HREF,
  collectiveFinalCta,
} from "@/data/community-collective-content";
import type { CollectiveApplicationsStatus } from "@/lib/sanity/types";

type CollectiveFinalCtaProps = {
  applicationsStatus: CollectiveApplicationsStatus;
};

export function CollectiveFinalCta({
  applicationsStatus,
}: CollectiveFinalCtaProps) {
  return (
    <section
      className="border-t border-border-soft/50 bg-green-wash/35 py-14 md:py-16 lg:py-20"
      aria-labelledby="collective-final-cta-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center lg:max-w-3xl">
          <h2
            id="collective-final-cta-heading"
            className="font-display text-[1.625rem] font-normal leading-[1.2] tracking-[-0.02em] text-foreground sm:text-3xl md:text-[2.125rem]"
          >
            {collectiveFinalCta.title}
          </h2>
          <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted sm:mt-6 sm:text-base">
            {collectiveFinalCta.description}
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:gap-6 md:grid-cols-2 lg:gap-8">
          {collectiveFinalCta.pathways.map((pathway) => (
            <article
              key={pathway.title}
              className={`${surfaceCard} flex h-full flex-col`}
            >
              <h3 className="font-display text-lg font-normal text-foreground sm:text-xl">
                {pathway.title}
              </h3>
              <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
                {pathway.description}
              </p>
              <div className="mt-6">
                {pathway.ctaHref === COLLECTIVE_REQUEST_HREF ? (
                  <RequestSupportCta
                    applicationsStatus={applicationsStatus}
                    className="w-full sm:w-auto"
                  />
                ) : (
                  <ButtonLink href={pathway.ctaHref} className="w-full sm:w-auto">
                    {pathway.ctaLabel}
                  </ButtonLink>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-relaxed text-muted sm:mt-12">
          {collectiveFinalCta.smallPrint}
        </p>
      </div>
    </section>
  );
}
