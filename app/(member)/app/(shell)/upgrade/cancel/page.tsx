import type { Metadata } from "next";
import { ButtonLink } from "@/components/shared/ui/button-link";
import { SectionShell } from "@/components/shared/ui/section-shell";
import { surfaceCard } from "@/components/shared/ui/surface-card";

export const metadata: Metadata = {
  title: "Checkout canceled",
  description: "No changes were made to your subscription.",
};

export default function UpgradeCheckoutCancelPage() {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <SectionShell background="cream" padding="tight">
        <div className={`${surfaceCard} max-w-xl border-border-soft/60 bg-surface sm:p-10`}>
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-harmony-green-muted sm:text-xs">
            No worries
          </p>
          <h1 className="mt-3 font-display text-[1.625rem] font-normal leading-[1.15] tracking-[-0.02em] text-foreground sm:text-3xl">
            Checkout was canceled
          </h1>
          <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
            Nothing was charged and your plan is unchanged. You can return to the app anytime, or try
            again when it feels right.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/app" variant="primary" className="w-full sm:w-auto">
              Back to the app
            </ButtonLink>
            <ButtonLink href="/app/upgrade" variant="secondary" className="w-full sm:w-auto">
              Return to plans
            </ButtonLink>
          </div>
        </div>
      </SectionShell>
    </main>
  );
}
