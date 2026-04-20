import Link from "next/link";
import { PremiumGate, type MemberPlan } from "@/components/member/premium-gate";
import { ButtonLink } from "@/components/shared/ui/button-link";
import { SectionShell } from "@/components/shared/ui/section-shell";
import { surfaceCard } from "@/components/shared/ui/surface-card";
import { PRIMARY_CTA_HREF, PRIMARY_CTA_LABEL } from "@/data/site-cta";
import { resourceLibraryHref } from "@/lib/content/support-library";
import { canAccessTool, MEMBER_TOOLS } from "@/lib/content/tools";
import type { MemberTopic } from "@/lib/content/member-topics";

const eyebrowClass =
  "text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-harmony-green-muted sm:text-xs";

const sectionTitleClass =
  "font-display text-xl font-normal tracking-tight text-foreground sm:text-2xl";

const subtleCard = `${surfaceCard} border-border-soft/55 bg-surface/90 shadow-soft`;

type MemberTopicDetailProps = {
  topic: MemberTopic;
  userPlan: MemberPlan;
};

function TierBadge({ tier }: { tier: "free" | "premium" }) {
  if (tier === "free") {
    return (
      <span className="shrink-0 rounded-full border border-harmony-green/25 bg-green-wash/50 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-harmony-green-deep">
        Free
      </span>
    );
  }
  return (
    <span className="shrink-0 rounded-full border border-harmony-green/20 bg-gradient-to-r from-cream-deep/80 to-green-wash/40 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-harmony-green-deep">
      Premium
    </span>
  );
}

export function MemberTopicDetail({ topic, userPlan }: MemberTopicDetailProps) {
  const tools = topic.toolIds
    .map((id) => MEMBER_TOOLS.find((t) => t.id === id))
    .filter(Boolean) as (typeof MEMBER_TOOLS)[number][];

  return (
    <>
      <SectionShell background="cream" padding="tight">
        <div className="mx-auto max-w-3xl">
          <p className={eyebrowClass}>Topic</p>
          <h1 className="mt-3 font-display text-[1.625rem] font-normal leading-[1.15] tracking-[-0.02em] text-foreground sm:text-3xl md:text-[2.125rem]">
            {topic.label}
          </h1>
          <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted sm:mt-6 sm:text-base">
            {topic.summary}
          </p>

          <div
            className={`${surfaceCard} mt-8 border-harmony-green/14 bg-gradient-to-br from-green-wash/35 via-surface to-cream-deep/25 ring-1 ring-harmony-green/10 sm:p-8`}
          >
            <p className={`${eyebrowClass} text-harmony-green-deep/90`}>At a glance</p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/95 sm:text-[0.9375rem]">
              {topic.glance.map((line) => (
                <li key={line} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-harmony-green/55" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink
                href={resourceLibraryHref({ topic: topic.id })}
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Matching library items
              </ButtonLink>
              <Link
                href="/app/support"
                className="inline-flex min-h-10 items-center justify-center text-sm font-medium text-harmony-green-deep underline-offset-4 hover:underline"
              >
                Search the whole library
              </Link>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell background="white" padding="tight">
        <h2 className={sectionTitleClass}>Checklists & planners (embedded here)</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted sm:text-[0.9375rem]">
          These are the same practical worksheets from the member app—now living inside the topic
          that matches them, so you are not bouncing between sections.
        </p>

        <div className="mt-8 space-y-6">
          {tools.map((tool) => {
            const open = canAccessTool(tool.tier, userPlan);
            return (
              <section key={tool.id} id={`tool-${tool.id}`} className={subtleCard}>
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="font-display text-lg font-normal text-foreground sm:text-xl">
                    {tool.title}
                  </h3>
                  <TierBadge tier={tool.tier} />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
                  {tool.summary}
                </p>

                {open ? (
                  <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-foreground/95 sm:text-[0.9375rem]">
                    {tool.items.map((line) => (
                      <li key={line} className="pl-0.5">
                        {line}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="mt-5">
                    <PremiumGate plan={userPlan} />
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </SectionShell>

      <SectionShell background="cream" padding="tight">
        <h2 className={sectionTitleClass}>Where this comes from in the guide</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted sm:text-[0.9375rem]">
          This is not new advice invented for an app—it is a reorganized, shortened map of themes in
          Gemma&apos;s &quot;Preparing for Baby&quot; guide.
        </p>

        <div className="mx-auto mt-6 max-w-3xl divide-y divide-border-soft/60 rounded-2xl border border-border-soft/60 bg-surface/80 px-1 py-1 shadow-inner sm:px-2">
          <details className="group border-border-soft/40 px-3 py-1 first:pt-2 last:pb-2 sm:px-4">
            <summary className="cursor-pointer list-none py-3 font-medium text-foreground transition-colors marker:content-none group-open:text-harmony-green-deep [&::-webkit-details-marker]:hidden">
              <span className="flex items-start justify-between gap-3">
                Guide sections this topic draws from
                <span className="mt-0.5 shrink-0 text-harmony-green-muted transition-transform group-open:rotate-180" aria-hidden>
                  <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </span>
            </summary>
            <ul className="pb-4 pl-0.5 text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
              {topic.guideAnchors.map((a) => (
                <li key={a} className="mt-2">
                  {a}
                </li>
              ))}
            </ul>
          </details>

          <details className="group border-border-soft/40 px-3 py-1 first:pt-2 last:pb-2 sm:px-4">
            <summary className="cursor-pointer list-none py-3 font-medium text-foreground transition-colors marker:content-none group-open:text-harmony-green-deep [&::-webkit-details-marker]:hidden">
              <span className="flex items-start justify-between gap-3">
                Trusted external references (from the guide)
                <span className="mt-0.5 shrink-0 text-harmony-green-muted transition-transform group-open:rotate-180" aria-hidden>
                  <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </span>
            </summary>
            <div className="pb-4 pl-0.5 text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
              <p>
                When the guide points you outward for safety checks, these are the kinds of
                resources it names (car seat help, evidence-aligned sleep basics, and professional
                directories)—use what fits your location and care team.
              </p>
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    className="font-medium text-harmony-green-deep underline-offset-4 hover:underline"
                    href="https://www.nhtsa.gov/equipment/car-seats-and-booster-seats"
                    rel="noreferrer"
                    target="_blank"
                  >
                    NHTSA car seat help
                  </a>
                </li>
                <li>
                  <a
                    className="font-medium text-harmony-green-deep underline-offset-4 hover:underline"
                    href="https://www.safekids.org/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Safe Kids Worldwide
                  </a>
                </li>
                <li>
                  <a
                    className="font-medium text-harmony-green-deep underline-offset-4 hover:underline"
                    href="https://www.postpartum.net/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Postpartum Support International
                  </a>
                </li>
              </ul>
            </div>
          </details>
        </div>
      </SectionShell>

      <SectionShell background="subtle" padding="tight">
        <div className="mx-auto max-w-2xl text-center">
          <p className={eyebrowClass}>If you want a person, not a page</p>
          <h2 className="mt-3 font-display text-[1.5rem] font-normal leading-snug text-foreground sm:text-2xl">
            You can book a short call anytime
          </h2>
          <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
            The app is here for midnight scrolling—but you never have to translate worry alone.
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
            <ButtonLink href={PRIMARY_CTA_HREF} variant="primary" className="w-full sm:w-auto">
              {PRIMARY_CTA_LABEL}
            </ButtonLink>
            <ButtonLink href="/services" variant="secondary" className="w-full sm:w-auto">
              View services
            </ButtonLink>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
