import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/home/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { surfaceCard } from "@/components/ui/surface-card";
import { supporterPage } from "@/data/community-collective-content";
import { contributionHref } from "@/lib/community-collective/contribution-href";

export function WaysToSupport() {
  const { waysToSupport } = supporterPage;

  return (
    <SectionShell
      id="ways-to-support"
      background="cream"
      padding="tight"
      className="scroll-mt-28"
    >
      <SectionHeading
        eyebrow={waysToSupport.eyebrow}
        title={waysToSupport.title}
        compact
      />

      <ul className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {waysToSupport.pathways.map((pathway) => (
          <li key={pathway.id}>
            <article
              id={pathway.id === "partner" ? "community-partners" : pathway.id}
              className={`${surfaceCard} flex h-full scroll-mt-28 flex-col`}
            >
              <h3 className="font-display text-xl font-normal text-foreground sm:text-2xl">
                {pathway.title}
              </h3>
              <p className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
                {pathway.description}
              </p>
              <div className="mt-7">
                <ButtonLink
                  href={contributionHref({ interest: pathway.interest })}
                  className="w-full sm:w-auto"
                >
                  {pathway.ctaLabel}
                </ButtonLink>
              </div>
            </article>
          </li>
        ))}
      </ul>

      <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted sm:mt-10">
        {waysToSupport.note}
      </p>
    </SectionShell>
  );
}
