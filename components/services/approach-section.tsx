import type { ReactNode } from "react";
import { approachSection } from "@/data/services-page-content";
import { surfaceCard } from "@/components/ui/surface-card";
import { SectionShell } from "@/components/ui/section-shell";

const credentialIcons: Record<string, ReactNode> = {
  "Postpartum Doula": (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M12 3c-2 3-6 4-6 9a6 6 0 0 0 12 0c0-5-4-6-6-9Z" strokeLinecap="round" />
      <path d="M8 21h8" strokeLinecap="round" />
    </svg>
  ),
  "Lactation Counselor": (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M6 8v8M10 6v12M14 9v6M18 7v10" strokeLinecap="round" />
    </svg>
  ),
  "Pediatric Sleep Consultant": (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M21 14.5A8.5 8.5 0 1 1 12 6" strokeLinecap="round" />
      <path d="M16 3v5h5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "20+ Years Experience": (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export function ApproachSection() {
  return (
    <SectionShell id="about-gemma" background="white" padding="tight" className="animate-fade-up-soft">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-[1.625rem] font-normal leading-[1.2] tracking-[-0.02em] text-foreground sm:text-3xl md:text-[2.125rem]">
          {approachSection.title}
        </h2>
        {approachSection.paragraphs.map((paragraph) => (
          <p
            key={paragraph.slice(0, 48)}
            className="mt-5 text-[0.9375rem] leading-relaxed text-muted first:mt-5 sm:text-base"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-4 lg:gap-6">
        {approachSection.credentials.map((item) => (
          <li key={item.label}>
            <article
              className={`${surfaceCard} flex h-full flex-col border-border-soft/50 bg-gradient-to-b from-surface to-cream-deep/20 p-5 sm:p-6`}
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-wash/80 text-harmony-green-deep">
                {credentialIcons[item.label]}
              </span>
              <h3 className="mt-4 font-display text-base font-normal text-foreground sm:text-lg">
                {item.label}
              </h3>
              <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted sm:text-sm">
                {item.description}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
