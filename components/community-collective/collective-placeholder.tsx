import { ButtonLink } from "@/components/ui/button-link";
import { SectionShell } from "@/components/ui/section-shell";
import { surfaceCard } from "@/components/ui/surface-card";
import { COLLECTIVE_HREF } from "@/data/community-collective-content";

type CollectivePlaceholderProps = {
  eyebrow: string;
  title: string;
  paragraphs: readonly string[];
  ctaHref: string;
  ctaLabel: string;
};

/**
 * Interim page for Collective pathway pages until their full flows are built.
 */
export function CollectivePlaceholder({
  eyebrow,
  title,
  paragraphs,
  ctaHref,
  ctaLabel,
}: CollectivePlaceholderProps) {
  return (
    <SectionShell background="cream" padding="tight">
      <div className={`${surfaceCard} mx-auto max-w-2xl`}>
        <p className="text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-harmony-green-muted sm:text-xs">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-display text-[1.75rem] font-normal leading-[1.18] tracking-[-0.03em] text-foreground sm:text-3xl md:text-[2.125rem]">
          {title}
        </h1>
        {paragraphs.map((paragraph, index) => (
          <p
            key={paragraph.slice(0, 40)}
            className={`text-[0.9375rem] leading-relaxed text-muted sm:text-base ${
              index === 0 ? "mt-5" : "mt-4"
            }`}
          >
            {paragraph}
          </p>
        ))}
        <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <ButtonLink href={ctaHref} className="w-full sm:w-auto">
            {ctaLabel}
          </ButtonLink>
          <ButtonLink
            href={COLLECTIVE_HREF}
            variant="secondary"
            className="w-full sm:w-auto"
          >
            Back to the Collective
          </ButtonLink>
        </div>
      </div>
    </SectionShell>
  );
}
