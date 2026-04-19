import Link from "next/link";
import { ButtonLink } from "@/components/shared/ui/button-link";
import { SectionShell } from "@/components/shared/ui/section-shell";
import { surfaceCard } from "@/components/shared/ui/surface-card";
import { PRIMARY_CTA_HREF, PRIMARY_CTA_LABEL } from "@/data/site-cta";
import type { MemberPlan } from "@/components/member/premium-gate";
import {
  DASHBOARD_FREE_ESSENTIALS,
  DASHBOARD_PREMIUM_PREVIEWS,
  DASHBOARD_QUICK_ACCESS,
  DASHBOARD_WELCOME,
} from "@/lib/content/member-dashboard";
import type { DashboardWeeklySpotlight } from "@/lib/member/dashboard-spotlight";

const eyebrowClass =
  "text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-harmony-green-muted sm:text-xs";

const sectionTitleClass =
  "font-display text-xl font-normal tracking-tight text-foreground sm:text-2xl";

const interactiveCard =
  "rounded-2xl border border-border-soft/50 bg-surface p-5 shadow-soft transition-[box-shadow,transform] duration-200 hover:border-harmony-green/20 hover:shadow-md active:scale-[0.99] sm:p-6";

const premiumLockedCard =
  "relative overflow-hidden rounded-2xl border border-harmony-green/15 bg-gradient-to-br from-cream-deep/90 via-surface to-green-wash/30 p-5 shadow-soft sm:p-6";

const focusCardClass =
  `${surfaceCard} border-harmony-green/18 bg-gradient-to-br from-green-wash/40 via-surface to-cream-deep/30 shadow-soft ring-1 ring-harmony-green/10`;

function LockGlyph({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

type MemberAppDashboardProps = {
  userPlan: MemberPlan;
  weeklySpotlight: DashboardWeeklySpotlight;
};

export function MemberAppDashboard({ userPlan, weeklySpotlight }: MemberAppDashboardProps) {
  const { weekTitle, weekSummary, todayFocusLine, weeklyGuideHref, canReadFullGuide } =
    weeklySpotlight;

  return (
    <>
      {/* 1. Welcome */}
      <SectionShell background="cream" padding="tight">
        <div
          className={`${surfaceCard} mx-auto max-w-2xl border-harmony-green/12 bg-gradient-to-b from-surface to-cream-deep/40 shadow-[0_12px_40px_-20px_rgb(95_118_95/0.18)] ring-1 ring-harmony-green/8 sm:p-10`}
        >
          <p className={eyebrowClass}>{DASHBOARD_WELCOME.eyebrow}</p>
          <h1 className="mt-3 font-display text-[1.625rem] font-normal leading-[1.15] tracking-[-0.02em] text-foreground sm:text-3xl md:text-[2.125rem]">
            {DASHBOARD_WELCOME.heading}
          </h1>
          <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted sm:mt-6 sm:text-base">
            {DASHBOARD_WELCOME.subtext}
          </p>
        </div>
      </SectionShell>

      {/* 2. Today’s focus */}
      <SectionShell background="white" padding="tight">
        <div className="mx-auto max-w-2xl">
          <h2 className={sectionTitleClass}>Today&apos;s focus</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
            One gentle line from your Weekly Guide—same idea you will see there, so your day
            can start with something small and true.
          </p>
          <div className={`${focusCardClass} mt-6 p-6 sm:p-8`} role="status" aria-live="polite">
            <p className={`${eyebrowClass} text-harmony-green-deep/90`}>For you, today</p>
            {todayFocusLine ? (
              <p
                className="mt-4 text-[0.9375rem] leading-relaxed text-foreground/95 sm:text-[1.0625rem] sm:leading-relaxed"
                suppressHydrationWarning
              >
                {todayFocusLine}
              </p>
            ) : (
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
                {canReadFullGuide
                  ? "Open your Weekly Guide for this week's gentle prompts."
                  : "Premium weeks include the same kind of daily focus—unlock when you want the full postpartum and early-month path."}
              </p>
            )}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <ButtonLink href={weeklyGuideHref} variant="primary" className="w-full sm:w-auto">
                Open in Weekly Guide
              </ButtonLink>
              <Link
                href="/app/weekly-guide"
                className="text-center text-sm font-medium text-harmony-green-deep underline-offset-4 hover:underline sm:text-left"
              >
                Browse all phases
              </Link>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* 3. Continue your week */}
      <SectionShell background="cream" padding="tight">
        <h2 className={sectionTitleClass}>Continue your week</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
          We are highlighting{" "}
          <span className="font-medium text-foreground/90">{weekTitle}</span> here—many families
          land on it in the first days home. Your timing is yours: switch weeks anytime in the
          guide.
        </p>
        {userPlan === "premium" ? (
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
            Your membership includes every postpartum and early-month week, with the same kind of
            daily focus when a week offers it.
          </p>
        ) : null}
        <div className="mt-6 max-w-xl">
          <Link
            href={weeklyGuideHref}
            className={`${interactiveCard} block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harmony-green-deep/45 focus-visible:ring-offset-2 focus-visible:ring-offset-cream`}
          >
            <p className="text-xs font-medium uppercase tracking-wide text-harmony-green-deep">
              Weekly Guide · {canReadFullGuide ? "Open week" : "Preview"}
            </p>
            <p className="mt-2 font-display text-lg font-normal text-foreground sm:text-xl">
              {weekTitle}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{weekSummary}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-harmony-green-deep">
              {canReadFullGuide ? "Keep reading" : "See what's inside"}
              <span aria-hidden>→</span>
            </span>
          </Link>
        </div>
      </SectionShell>

      {/* 4. Quick access */}
      <SectionShell background="white" padding="tight">
        <h2 className={sectionTitleClass}>Quick access</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted sm:text-[0.9375rem]">
          Jump into the areas you will use most often.
        </p>
        <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 lg:gap-5">
          {DASHBOARD_QUICK_ACCESS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`${interactiveCard} flex h-full min-h-[6.5rem] flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harmony-green-deep/45 focus-visible:ring-offset-2 focus-visible:ring-offset-surface`}
              >
                <div>
                  <p className="font-display text-base font-normal text-foreground sm:text-lg">
                    {item.label}
                  </p>
                  <p className="mt-1.5 text-xs leading-snug text-muted sm:text-sm">
                    {item.hint}
                  </p>
                </div>
                <span className="mt-3 text-xs font-medium text-harmony-green-deep sm:text-sm">
                  Open
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </SectionShell>

      {/* 5. Free essentials */}
      <SectionShell background="cream" padding="tight">
        <h2 className={sectionTitleClass}>Free essentials</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted sm:text-[0.9375rem]">
          Practical starters you can use today—no account upgrade required.
        </p>
        <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {DASHBOARD_FREE_ESSENTIALS.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className={`${interactiveCard} flex min-h-[4.75rem] items-center justify-between gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harmony-green-deep/45 focus-visible:ring-offset-2 focus-visible:ring-offset-cream`}
              >
                <span className="text-[0.9375rem] font-medium leading-snug text-foreground sm:text-base">
                  {item.title}
                </span>
                <span
                  className="shrink-0 rounded-full border border-harmony-green/25 bg-green-wash/40 px-2.5 py-1 text-xs font-medium text-harmony-green-deep"
                  aria-hidden
                >
                  Free
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </SectionShell>

      {/* 6. Premium preview */}
      <SectionShell background="white" padding="tight">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className={sectionTitleClass}>Premium preview</h2>
            <p className="mt-2 max-w-2xl text-sm text-muted sm:text-[0.9375rem]">
              A peek at deeper support—unlock when you are ready for more tailored care.
            </p>
          </div>
          <Link
            href="/app/upgrade"
            className="mt-1 inline-flex min-h-10 items-center text-sm font-medium text-harmony-green-deep underline-offset-4 hover:underline sm:mt-0"
          >
            View upgrade options
          </Link>
        </div>
        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
          {DASHBOARD_PREMIUM_PREVIEWS.map((item) => (
            <li key={item.title}>
              <div
                className={`${premiumLockedCard} flex h-full flex-col`}
                aria-label={`${item.title} — premium`}
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="font-display text-base font-normal leading-snug text-foreground/90 sm:text-lg">
                    {item.title}
                  </p>
                  <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-border-soft/70 bg-surface/80 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-muted">
                    <LockGlyph className="text-harmony-green-muted" />
                    <span className="sr-only">Locked</span>
                    <span aria-hidden>Premium</span>
                  </span>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{item.teaser}</p>
                <p className="mt-4 text-xs text-harmony-green-muted">
                  Included with premium membership
                </p>
              </div>
            </li>
          ))}
        </ul>
      </SectionShell>

      {/* 7. CTA */}
      <SectionShell background="subtle" padding="tight">
        <div className="mx-auto max-w-2xl text-center">
          <p className={eyebrowClass}>Personalized support</p>
          <h2 className="mt-3 font-display text-[1.5rem] font-normal leading-snug text-foreground sm:text-2xl">
            Want a human beside you—not just an app?
          </h2>
          <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
            Book a free 15-minute chat to talk through what you need, or explore in-home and
            virtual services on the main site.
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
