import { CollectiveLabel } from "@/components/community-collective/collective-label";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionShell } from "@/components/ui/section-shell";
import { COLLECTIVE_HREF } from "@/data/community-collective-content";

export function CollectiveIntro() {
  return (
    <SectionShell
      id="community-collective"
      background="collective"
      padding="tight"
      className="border-y border-clay/15"
    >
      <div className="mx-auto max-w-2xl text-center md:max-w-[44rem]">
        <div className="flex justify-center">
          <CollectiveLabel />
        </div>
        <h2 className="mt-4 font-display text-[1.5rem] font-normal leading-[1.2] tracking-[-0.02em] text-foreground sm:text-[1.75rem] md:text-[1.875rem]">
          Support should be within reach
        </h2>
        <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted sm:mt-5 sm:text-base">
          The New Parent Harmony Community Collective helps make postpartum,
          feeding and sleep support more accessible by using grants,
          sponsorships and community funding to subsidize care for families who
          otherwise may not be able to afford it, while also creating
          educational workshops, community events and opportunities for families
          to connect and feel supported.
        </p>
        <div className="mt-8 flex justify-center sm:mt-9">
          <ButtonLink href={COLLECTIVE_HREF} className="w-full sm:w-auto">
            Explore the Community Collective
          </ButtonLink>
        </div>
      </div>
    </SectionShell>
  );
}
