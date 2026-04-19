import type { ReactNode } from "react";
import { ButtonLink } from "@/components/shared/ui/button-link";
import { surfaceCard } from "@/components/shared/ui/surface-card";

export type MemberPlan = "free" | "premium";

type PremiumGateProps = {
  plan: MemberPlan;
  children?: ReactNode;
};

/**
 * Renders `children` only for premium users. Free users see a calm upgrade prompt
 * (premium body is not rendered—safe for future paid-only copy).
 */
export function PremiumGate({ plan, children }: PremiumGateProps) {
  if (plan === "premium") {
    return <>{children}</>;
  }

  return (
    <div
      className={`${surfaceCard} border-harmony-green/15 bg-gradient-to-b from-cream-deep/60 to-surface text-center shadow-inner`}
    >
      <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-harmony-green-muted">
        Premium
      </p>
      <p className="mt-3 font-display text-lg font-normal text-foreground sm:text-xl">
        This is part of our premium support
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
        Unlock deeper week-by-week guidance, expanded library articles, and
        printable tools—whenever you are ready.
      </p>
      <div className="mt-6 flex justify-center">
        <ButtonLink href="/app/upgrade" variant="primary" className="w-full sm:w-auto">
          View upgrade options
        </ButtonLink>
      </div>
    </div>
  );
}
