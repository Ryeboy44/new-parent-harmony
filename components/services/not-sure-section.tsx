import { notSureSection } from "@/data/services-page-content";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionShell } from "@/components/ui/section-shell";

export function NotSureSection() {
  return (
    <SectionShell
      background="subtle"
      padding="tight"
      className="animate-fade-up-soft border-t border-border-soft/40"
    >
      <div className="mx-auto max-w-2xl text-center md:max-w-[44rem]">
        <h2 className="font-display text-[1.625rem] font-normal leading-[1.2] tracking-[-0.02em] text-foreground sm:text-3xl md:text-[2.125rem]">
          {notSureSection.title}
        </h2>
        {notSureSection.paragraphs.map((paragraph, index) => (
          <p
            key={paragraph.slice(0, 32)}
            className={`text-[0.9375rem] leading-relaxed text-muted sm:text-base ${
              index === 0 ? "mt-5 sm:mt-6" : "mt-4"
            }`}
          >
            {paragraph}
          </p>
        ))}
        <div className="mt-9 flex justify-center sm:mt-10">
          <ButtonLink href={notSureSection.ctaHref} className="w-full sm:w-auto">
            {notSureSection.ctaLabel}
          </ButtonLink>
        </div>
      </div>
    </SectionShell>
  );
}
