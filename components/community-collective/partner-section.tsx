import { ButtonLink } from "@/components/ui/button-link";
import { SectionShell } from "@/components/ui/section-shell";
import { surfaceCard } from "@/components/ui/surface-card";
import {
  IconChip,
  partnerIcons,
} from "@/components/community-collective/collective-icons";
import {
  COLLECTIVE_SUPPORT_HREF,
  COLLECTIVE_SUPPORT_LABEL,
  partnerSection,
} from "@/data/community-collective-content";

export function PartnerSection() {
  return (
    <SectionShell id="partner" background="cream" padding="tight">
      <header className="max-w-xl md:max-w-2xl">
        <p className="mb-3 text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-harmony-green-muted sm:text-xs">
          Partnership
        </p>
        <h2 className="font-display text-[1.625rem] font-normal leading-[1.2] tracking-[-0.02em] text-foreground sm:text-3xl md:text-[2.125rem]">
          {partnerSection.title}
        </h2>
        {partnerSection.paragraphs.map((paragraph, index) => (
          <p
            key={paragraph.slice(0, 40)}
            className={`text-[0.9375rem] leading-relaxed text-muted sm:text-base ${
              index === 0 ? "mt-4 md:mt-5" : "mt-4"
            }`}
          >
            {paragraph}
          </p>
        ))}
      </header>

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-12 lg:grid-cols-3 lg:gap-8">
        {partnerSection.cards.map((card) => (
          <li key={card.title}>
            <article className={`${surfaceCard} flex h-full flex-col`}>
              <IconChip>{partnerIcons[card.icon]}</IconChip>
              <h3 className="mt-4 font-display text-lg font-normal text-foreground sm:text-xl">
                {card.title}
              </h3>
              <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
                {card.description}
              </p>
            </article>
          </li>
        ))}
      </ul>

      <div className="mt-9 sm:mt-10">
        <ButtonLink href={COLLECTIVE_SUPPORT_HREF} className="w-full sm:w-auto">
          {COLLECTIVE_SUPPORT_LABEL}
        </ButtonLink>
      </div>
    </SectionShell>
  );
}
