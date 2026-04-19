import { PremiumGate, type MemberPlan } from "@/components/member/premium-gate";
import { SectionShell } from "@/components/shared/ui/section-shell";
import { surfaceCard } from "@/components/shared/ui/surface-card";
import {
  canAccessTool,
  MEMBER_TOOLS,
  MEMBER_TOOLS_HEADER,
} from "@/lib/content/tools";

const eyebrowClass =
  "text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-harmony-green-muted sm:text-xs";

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

type MemberToolsPageProps = {
  userPlan: MemberPlan;
};

export function MemberToolsPage({ userPlan }: MemberToolsPageProps) {
  return (
    <>
      <SectionShell background="cream" padding="tight">
        <div
          className={`${surfaceCard} max-w-3xl border-harmony-green/10 bg-gradient-to-b from-surface to-cream-deep/35 ring-1 ring-harmony-green/8 sm:p-10`}
        >
          <p className={eyebrowClass}>{MEMBER_TOOLS_HEADER.eyebrow}</p>
          <h1 className="mt-3 font-display text-[1.625rem] font-normal leading-[1.15] tracking-[-0.02em] text-foreground sm:text-3xl md:text-[2.125rem]">
            {MEMBER_TOOLS_HEADER.title}
          </h1>
          <p className="mt-5 max-w-2xl text-[0.9375rem] leading-relaxed text-muted sm:mt-6 sm:text-base">
            {MEMBER_TOOLS_HEADER.subheading}
          </p>
        </div>
      </SectionShell>

      <SectionShell background="white" padding="tight">
        <h2 className="font-display text-xl font-normal tracking-tight text-foreground sm:text-2xl">
          Checklists & worksheets
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted sm:text-[0.9375rem]">
          Tap a card to skim. Free tools are fully open; premium tools unlock with membership.
        </p>
        <ul className="mt-8 space-y-6">
          {MEMBER_TOOLS.map((tool) => {
            const open = canAccessTool(tool.tier, userPlan);
            return (
              <li key={tool.id} id={`tool-${tool.id}`}>
                <div
                  className={`${surfaceCard} border-border-soft/55 bg-surface/90 shadow-soft sm:p-8`}
                >
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
                </div>
              </li>
            );
          })}
        </ul>
      </SectionShell>
    </>
  );
}
