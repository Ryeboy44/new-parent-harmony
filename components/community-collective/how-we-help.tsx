import { SectionHeading } from "@/components/home/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { surfaceCard } from "@/components/ui/surface-card";
import { IconChip, helpIcons } from "@/components/community-collective/collective-icons";
import { howWeHelpSection } from "@/data/community-collective-content";

export function HowWeHelp() {
  return (
    <SectionShell id="how-we-help" background="white" padding="tight">
      <SectionHeading eyebrow="Support" title={howWeHelpSection.title} compact />

      <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
        {howWeHelpSection.cards.map((card) => (
          <li key={card.title}>
            <article
              className={`${surfaceCard} flex h-full flex-col border-border-soft/50 bg-gradient-to-b from-surface to-cream-deep/20 p-5 sm:p-6`}
            >
              <IconChip>{helpIcons[card.icon]}</IconChip>
              <h3 className="mt-4 font-display text-base font-normal text-foreground sm:text-lg">
                {card.title}
              </h3>
              <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted sm:text-sm">
                {card.description}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
