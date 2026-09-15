import { CollectiveImpactStory } from "@/components/community-collective/collective-impact-story";
import { SectionShell } from "@/components/ui/section-shell";
import { supporterPage } from "@/data/community-collective-content";
import type { CommunityCollectiveSettings } from "@/lib/sanity/types";

const countFormatter = new Intl.NumberFormat("en-US");

function buildSupporterMetrics(settings: CommunityCollectiveSettings) {
  const metrics: { label: string; value: string }[] = [];

  if (settings.familiesSupported) {
    metrics.push({
      label: "Families Supported",
      value: countFormatter.format(settings.familiesSupported),
    });
  }
  if (settings.careHours) {
    metrics.push({
      label: "Hours of Care Funded",
      value: countFormatter.format(settings.careHours),
    });
  }
  if (settings.programsProvided) {
    metrics.push({
      label: "Workshops Offered",
      value: countFormatter.format(settings.programsProvided),
    });
  }
  if (settings.communityEventsCount) {
    metrics.push({
      label: "Community Events",
      value: countFormatter.format(settings.communityEventsCount),
    });
  }
  if (settings.communityPartnersCount) {
    metrics.push({
      label: "Community Partners",
      value: countFormatter.format(settings.communityPartnersCount),
    });
  }

  return metrics;
}

type SupporterImpactProps = {
  settings: CommunityCollectiveSettings;
};

export function SupporterImpact({ settings }: SupporterImpactProps) {
  const metrics = buildSupporterMetrics(settings);
  const { impact } = supporterPage;

  return (
    <SectionShell id="community-impact" background="subtle" padding="tight">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-harmony-green-muted sm:text-xs">
          {impact.eyebrow}
        </p>
        <h2 className="font-display text-[1.625rem] font-normal leading-[1.2] tracking-[-0.02em] text-foreground sm:text-3xl md:text-[2.125rem]">
          {impact.title}
        </h2>
        {impact.paragraphs.map((paragraph, index) => (
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

      <CollectiveImpactStory settings={settings} />

      {metrics.length > 0 ? (
        <div className="mx-auto mt-10 max-w-4xl sm:mt-12">
          {settings.impactYear ? (
            <p className="mb-5 text-center text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-harmony-green-muted sm:text-xs">
              {settings.impactYear}
            </p>
          ) : null}
          <dl className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="flex flex-col-reverse gap-1 rounded-2xl border border-border-soft/50 bg-surface/70 px-5 py-6 text-center"
              >
                <dt className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-harmony-green-muted sm:text-xs">
                  {metric.label}
                </dt>
                <dd className="font-display text-[1.75rem] font-normal leading-none text-foreground sm:text-3xl">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      ) : (
        <p className="mx-auto mt-10 max-w-lg text-center font-display text-xl text-harmony-green-deep sm:mt-12 sm:text-2xl">
          {impact.emptyHeadline}
        </p>
      )}
    </SectionShell>
  );
}
