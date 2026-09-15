import { communitySupportPath } from "@/data/services-page-content";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionShell } from "@/components/ui/section-shell";

export function CommunitySupportPath() {
  return (
    <SectionShell
      background="cream"
      padding="tight"
      className="border-t border-border-soft/40"
    >
      <div className="mx-auto max-w-2xl text-center md:max-w-[40rem]">
        <h2 className="font-display text-[1.5rem] font-normal leading-[1.2] tracking-[-0.02em] text-foreground sm:text-[1.75rem] md:text-[1.875rem]">
          {communitySupportPath.title}
        </h2>
        <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted sm:mt-5 sm:text-base">
          {communitySupportPath.description}
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:mt-9">
          <ButtonLink
            href={communitySupportPath.primaryCta.href}
            className="w-full sm:w-auto"
          >
            {communitySupportPath.primaryCta.label}
          </ButtonLink>
          <ButtonLink
            href={communitySupportPath.secondaryCta.href}
            variant="ghost"
          >
            {communitySupportPath.secondaryCta.label}
          </ButtonLink>
        </div>
      </div>
    </SectionShell>
  );
}
