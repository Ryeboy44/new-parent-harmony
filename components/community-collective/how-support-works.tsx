import { SectionHeading } from "@/components/home/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { surfaceCard } from "@/components/ui/surface-card";
import { RequestSupportCta } from "@/components/community-collective/request-support-cta";
import { howItWorksSection } from "@/data/community-collective-content";
import type { CollectiveApplicationsStatus } from "@/lib/sanity/types";

type HowSupportWorksProps = {
  applicationsStatus: CollectiveApplicationsStatus;
};

export function HowSupportWorks({ applicationsStatus }: HowSupportWorksProps) {
  return (
    <SectionShell id="how-it-works" background="cream" padding="tight">
      <SectionHeading eyebrow="The process" title={howItWorksSection.title} compact />

      <ol className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-8">
        {howItWorksSection.steps.map((step, index) => (
          <li key={step.title}>
            <article className={`${surfaceCard} flex h-full flex-col`}>
              <span
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-green-wash/80 font-display text-base text-harmony-green-deep"
                aria-hidden
              >
                {index + 1}
              </span>
              <h3 className="mt-4 font-display text-lg font-normal text-foreground sm:text-xl">
                <span className="sr-only">{`Step ${index + 1}: `}</span>
                {step.title}
              </h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
                {step.description}
              </p>
            </article>
          </li>
        ))}
      </ol>

      <div className="mt-7 rounded-2xl border border-harmony-green/25 bg-gradient-to-b from-green-wash/50 via-white to-white p-6 shadow-soft ring-1 ring-harmony-green/10 sm:mt-8 sm:p-7">
        <h3 className="font-display text-lg font-normal leading-snug text-foreground sm:text-xl">
          {howItWorksSection.callout.title}
        </h3>
        {howItWorksSection.callout.paragraphs.map((paragraph) => (
          <p
            key={paragraph.slice(0, 40)}
            className="mt-4 text-[0.9375rem] leading-relaxed text-muted sm:text-base"
          >
            {paragraph}
          </p>
        ))}
        <div className="mt-7 sm:mt-8">
          <RequestSupportCta
            applicationsStatus={applicationsStatus}
            className="w-full sm:w-auto"
          />
        </div>
      </div>
    </SectionShell>
  );
}
