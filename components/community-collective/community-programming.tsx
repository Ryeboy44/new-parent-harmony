import { SectionShell } from "@/components/ui/section-shell";
import { programmingSection } from "@/data/community-collective-content";

export function CommunityProgramming() {
  return (
    <SectionShell
      id="community-programming"
      background="subtle"
      padding="tight"
      className="animate-fade-up-soft"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-[1.625rem] font-normal leading-[1.2] tracking-[-0.02em] text-foreground sm:text-3xl md:text-[2.125rem]">
          {programmingSection.title}
        </h2>
        {programmingSection.paragraphs.map((paragraph, index) => (
          <p
            key={paragraph.slice(0, 40)}
            className={`text-[0.9375rem] leading-relaxed text-muted sm:text-base ${
              index === 0 ? "mt-5 sm:mt-6" : "mt-4"
            }`}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </SectionShell>
  );
}
