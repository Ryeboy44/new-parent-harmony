import type { Metadata } from "next";
import { ButtonLink } from "@/components/shared/ui/button-link";
import { SectionShell } from "@/components/shared/ui/section-shell";
import { surfaceCard } from "@/components/shared/ui/surface-card";

export const metadata: Metadata = {
  title: "Checkout complete",
  description: "Thank you for supporting New Parent Harmony.",
};

export default function UpgradeCheckoutSuccessPage() {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <SectionShell background="cream" padding="tight">
        <div
          className={`${surfaceCard} max-w-xl border-harmony-green/10 bg-gradient-to-b from-surface to-cream-deep/35 ring-1 ring-harmony-green/8 sm:p-10`}
        >
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-harmony-green-muted sm:text-xs">
            Thank you
          </p>
          <h1 className="mt-3 font-display text-[1.625rem] font-normal leading-[1.15] tracking-[-0.02em] text-foreground sm:text-3xl">
            Your checkout finished on Stripe
          </h1>
          <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
            We are updating your member access in the background. That usually takes just a moment. If
            premium areas still look locked, wait a few seconds and open a fresh page—no need to sign
            out unless things still look unchanged after a minute.
          </p>
          <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
            When you are ready, head back into the app and pick up where you left off.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/app" variant="primary" className="w-full sm:w-auto">
              Back to the app
            </ButtonLink>
            <ButtonLink href="/app/upgrade" variant="secondary" className="w-full sm:w-auto">
              View upgrade page
            </ButtonLink>
          </div>
        </div>
      </SectionShell>
    </main>
  );
}
