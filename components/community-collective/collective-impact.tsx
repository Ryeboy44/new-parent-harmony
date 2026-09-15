import { CollectiveImpactStory } from "@/components/community-collective/collective-impact-story";
import { SectionShell } from "@/components/ui/section-shell";
import { impactSection } from "@/data/community-collective-content";
import type { CommunityCollectiveSettings } from "@/lib/sanity/types";

const countFormatter = new Intl.NumberFormat("en-US");
const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

/** Only metrics with a real, non-zero value reach this list. */
function buildMetrics(settings: CommunityCollectiveSettings) {
  const metrics: { label: string; value: string }[] = [];

  if (settings.familiesSupported) {
    metrics.push({
      label: "Families Supported",
      value: countFormatter.format(settings.familiesSupported),
    });
  }
  if (settings.careHours) {
    metrics.push({
      label: "Care Hours",
      value: countFormatter.format(settings.careHours),
    });
  }
  if (settings.programsProvided) {
    metrics.push({
      label: "Programs Provided",
      value: countFormatter.format(settings.programsProvided),
    });
  }
  if (settings.valueOfSupport) {
    metrics.push({
      label: "Value of Support",
      value: currencyFormatter.format(settings.valueOfSupport),
    });
  }

  return metrics;
}

type CollectiveImpactProps = {
  settings: CommunityCollectiveSettings;
};

export function CollectiveImpact({ settings }: CollectiveImpactProps) {
  const metrics = buildMetrics(settings);
  const [openingParagraph, standardParagraph] = impactSection.paragraphs;
  const closingParagraph = settings.impactMessage || standardParagraph;

  return (
    <SectionShell id="collective-impact" background="subtle" padding="tight">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-[1.625rem] font-normal leading-[1.2] tracking-[-0.02em] text-foreground sm:text-3xl md:text-[2.125rem]">
          {impactSection.title}
        </h2>
        <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted sm:mt-6 sm:text-base">
          {openingParagraph}
        </p>
        <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
          {closingParagraph}
        </p>
      </div>

      <CollectiveImpactStory settings={settings} />

      {metrics.length > 0 ? (
        <div className="mx-auto mt-10 max-w-4xl sm:mt-12">
          {settings.impactYear ? (
            <p className="mb-5 text-center text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-harmony-green-muted sm:text-xs">
              {settings.impactYear}
            </p>
          ) : null}
          <dl className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
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
          {impactSection.emptyHeadline}
        </p>
      )}
    </SectionShell>
  );
}
