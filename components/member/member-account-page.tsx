import { auth } from "@/auth";
import { ManageBillingButton } from "@/components/member/manage-billing-button";
import { ButtonLink } from "@/components/shared/ui/button-link";
import { SectionShell } from "@/components/shared/ui/section-shell";
import { surfaceCard } from "@/components/shared/ui/surface-card";
import { prisma } from "@/lib/prisma";

const eyebrowClass =
  "text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-harmony-green-muted sm:text-xs";

export async function MemberAccountPage() {
  const session = await auth();
  const email = session?.user?.email ?? session?.user?.name ?? null;
  const sessionPlan = session?.user?.plan === "premium" ? "premium" : "free";

  const dbUser =
    session?.user?.id != null
      ? await prisma.user.findUnique({
          where: { id: session.user.id },
          select: { email: true, plan: true, stripeCustomerId: true },
        })
      : null;

  const displayEmail = dbUser?.email ?? email ?? "—";
  const plan = dbUser?.plan === "premium" ? "premium" : sessionPlan;
  const hasStripeCustomer = Boolean(dbUser?.stripeCustomerId?.trim());
  const canManageBilling = plan === "premium" && hasStripeCustomer;

  return (
    <>
      <SectionShell background="cream" padding="tight">
        <div
          className={`${surfaceCard} max-w-2xl border-harmony-green/10 bg-gradient-to-b from-surface to-cream-deep/35 ring-1 ring-harmony-green/8 sm:p-10`}
        >
          <p className={eyebrowClass}>Your account</p>
          <h1 className="mt-3 font-display text-[1.625rem] font-normal leading-[1.15] tracking-[-0.02em] text-foreground sm:text-3xl">
            Account & membership
          </h1>
          <p className="mt-5 max-w-xl text-[0.9375rem] leading-relaxed text-muted sm:text-base">
            A quiet place to see how you are signed in and, when you are on premium, to update card
            or renewal in Stripe&apos;s secure portal.
          </p>
        </div>
      </SectionShell>

      <SectionShell background="white" padding="tight">
        <h2 className="font-display text-xl font-normal tracking-tight text-foreground sm:text-2xl">
          Summary
        </h2>
        <div
          className={`${surfaceCard} mt-6 max-w-2xl border-border-soft/60 bg-surface/90 p-6 shadow-soft sm:p-8`}
        >
          <dl className="space-y-5">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-muted">Email</dt>
              <dd className="mt-1 break-all text-[0.9375rem] text-foreground sm:text-base">
                {displayEmail}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-muted">Plan</dt>
              <dd className="mt-2">
                <span
                  className={`inline-flex rounded-full border px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide ${
                    plan === "premium"
                      ? "border-harmony-green/30 bg-green-wash/50 text-harmony-green-deep"
                      : "border-border-soft/80 bg-cream-deep/50 text-muted"
                  }`}
                >
                  {plan === "premium" ? "Premium" : "Free"}
                </span>
              </dd>
            </div>
          </dl>
        </div>
      </SectionShell>

      <SectionShell background="cream" padding="tight">
        <h2 className="font-display text-xl font-normal tracking-tight text-foreground sm:text-2xl">
          Billing
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
          Subscriptions are handled by Stripe. We never store your full card number on our servers.
        </p>

        <div className={`${surfaceCard} mt-6 max-w-2xl border-border-soft/60 bg-surface p-6 sm:p-8`}>
          {canManageBilling ? (
            <>
              <p className="text-[0.9375rem] leading-relaxed text-muted sm:text-base">
                Update your payment method, see renewal dates, or cancel when you need to—all in one
                calm Stripe page. You will come back here when you are done.
              </p>
              <div className="mt-6">
                <ManageBillingButton />
              </div>
            </>
          ) : plan === "free" ? (
            <>
              <p className="text-[0.9375rem] leading-relaxed text-muted sm:text-base">
                When you choose premium, you can manage billing here anytime. There is no pressure to
                upgrade—take your time.
              </p>
              <div className="mt-6">
                <ButtonLink href="/app/upgrade" variant="primary" className="w-full sm:w-auto">
                  View Plans
                </ButtonLink>
              </div>
            </>
          ) : (
            <>
              <p className="text-[0.9375rem] leading-relaxed text-muted sm:text-base">
                Your account shows premium, but we do not see a linked Stripe billing profile yet. If
                you subscribed recently, wait a few seconds and refresh this page. Otherwise you can
                open plans to start or refresh checkout.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ButtonLink href="/app/upgrade" variant="secondary" className="w-full sm:w-auto">
                  View Plans
                </ButtonLink>
              </div>
            </>
          )}
        </div>
      </SectionShell>
    </>
  );
}
