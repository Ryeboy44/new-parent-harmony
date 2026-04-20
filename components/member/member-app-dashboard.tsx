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
import { MEMBER_TOPICS, type MemberTopicId } from "@/lib/content/member-topics";
import type { DashboardHomeSpotlight } from "@/lib/member/dashboard-home";

const eyebrowClass =
  "text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-harmony-green-muted sm:text-xs";

const sectionTitleClass =
  "font-display text-xl font-normal tracking-tight text-foreground sm:text-2xl";

const interactiveCard =
  "rounded-2xl border border-border-soft/50 bg-surface p-5 shadow-soft transition-[box-shadow,transform] duration-200 hover:border-harmony-green/20 hover:shadow-md active:scale-[0.99] sm:p-6";

const premiumLockedCard =
  "relative overflow-hidden rounded-2xl border border-harmony-green/15 bg-gradient-to-br from-cream-deep/90 via-surface to-green-wash/30 p-5 shadow-soft sm:p-6";

const focusCardClass = `${surfaceCard} border-harmony-green/18 bg-gradient-to-br from-green-wash/40 via-surface to-cream-deep/30 shadow-soft ring-1 ring-harmony-green/10`;

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

function TopicGlyph({ id }: { id: MemberTopicId }) {
  const common = "size-6 text-harmony-green-deep";
  switch (id) {
    case "feeding":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M7 10c0-3 2.5-5 5-5s5 2 5 5v6c0 2-1.5 3.5-3.5 3.5S10 18 10 16v-1"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <path
            d="M9 20h6"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      );
    case "sleep":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M21 14.5A7.5 7.5 0 0 1 9.5 10a7.5 7.5 0 0 1 11.5 4.5Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path
            d="M7 5v2M5 7h2M4 11h2"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      );
    case "recovery":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 21s7-4.5 7-10a7 7 0 1 0-14 0c0 5.5 7 10 7 10Z"
            stroke="currentColor"
            strokeWidth="1.75"
          />
          <path
            d="M12 10.5v4.5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      );
    case "getting-ready":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M7 4h10v16H7z"
            stroke="currentColor"
            strokeWidth="1.75"
          />
          <path
            d="M10 8h4M10 12h4M10 16h2"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      );
    case "home-setup":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "support-boundaries":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M7 12h10M12 7v10"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <path
            d="M5 5h14v14H5z"
            stroke="currentColor"
            strokeWidth="1.75"
          />
        </svg>
      );
    case "mental-emotional":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 21a7 7 0 0 0 7-7c0-4-3-7-7-9-4 2-7 5-7 9a7 7 0 0 0 7 7Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
}

const FEATURED_TOPIC_IDS: MemberTopicId[] = ["feeding", "sleep", "recovery"];

type MemberAppDashboardProps = {
  userPlan: MemberPlan;
  homeSpotlight: DashboardHomeSpotlight;
};

export function MemberAppDashboard({ userPlan, homeSpotlight }: MemberAppDashboardProps) {
  const {
    spotlightTopicTitle,
    spotlightTopicSummary,
    todayFocusLine,
    topicHref,
  } = homeSpotlight;

  const featuredTopics = MEMBER_TOPICS.filter((t) => FEATURED_TOPIC_IDS.includes(t.id));

  return (
    <>
      {/* 1. Welcome + gentle search */}
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

          <form
            role="search"
            method="get"
            action="/app/support"
            className="mt-8"
          >
            <label htmlFor="home-help-search" className={eyebrowClass}>
              What do you need help with today?
            </label>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-stretch">
              <input
                id="home-help-search"
                name="q"
                type="search"
                placeholder="Try “sleep”, “pump”, “visitors”, “hospital bag”…"
                className="min-h-12 w-full flex-1 rounded-2xl border border-border-soft/70 bg-cream/60 px-4 py-3 text-[0.9375rem] text-foreground shadow-inner shadow-black/5 outline-none transition-[border-color,box-shadow] placeholder:text-muted/80 focus:border-harmony-green/35 focus:ring-2 focus:ring-harmony-green-deep/25 sm:px-5"
              />
              <button
                type="submit"
                className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-2xl bg-harmony-green px-6 text-[0.9375rem] font-medium text-white shadow-soft transition-colors hover:bg-harmony-green-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harmony-green-deep/50 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                Search
              </button>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-muted sm:text-sm">
              Prefer browsing? Jump to{" "}
              <Link className="font-medium text-harmony-green-deep underline-offset-4 hover:underline" href="/app/topics">
                Topics
              </Link>{" "}
              or{" "}
              <Link className="font-medium text-harmony-green-deep underline-offset-4 hover:underline" href="/app/support">
                Resource library
              </Link>
              .
            </p>
          </form>
        </div>
      </SectionShell>

      {/* 2. Today’s focus */}
      <SectionShell background="white" padding="tight">
        <div className="mx-auto max-w-2xl">
          <h2 className={sectionTitleClass}>Today&apos;s focus</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
            A tiny anchor for tired brains—pulled from the same gentle intentions as the original
            guide: small steps, less shame, more support.
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
                If nothing shows here, open Topics and pick one section—tiny is still progress.
              </p>
            )}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <ButtonLink href="/app/topics" variant="primary" className="w-full sm:w-auto">
                Browse topics
              </ButtonLink>
              <Link
                href="/app/support"
                className="text-center text-sm font-medium text-harmony-green-deep underline-offset-4 hover:underline sm:text-left"
              >
                Open resource library
              </Link>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* 3. Featured topics */}
      <SectionShell background="cream" padding="tight">
        <h2 className={sectionTitleClass}>Common “right now” needs</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
          Three places families often open first—each one is broken into short, scannable pieces.
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          <Link
            href="/app/topics/feeding"
            className="inline-flex min-h-10 items-center rounded-full border border-border-soft/70 bg-surface px-4 text-sm font-medium text-foreground transition-colors hover:border-harmony-green/25 hover:bg-cream-deep/50"
          >
            Feeding
          </Link>
          <Link
            href="/app/topics/sleep"
            className="inline-flex min-h-10 items-center rounded-full border border-border-soft/70 bg-surface px-4 text-sm font-medium text-foreground transition-colors hover:border-harmony-green/25 hover:bg-cream-deep/50"
          >
            Sleep
          </Link>
          <Link
            href="/app/topics/recovery"
            className="inline-flex min-h-10 items-center rounded-full border border-border-soft/70 bg-surface px-4 text-sm font-medium text-foreground transition-colors hover:border-harmony-green/25 hover:bg-cream-deep/50"
          >
            Recovery
          </Link>
        </div>

        <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {featuredTopics.map((topic) => (
            <li key={topic.id}>
              <Link
                href={`/app/topics/${topic.id}`}
                className={`${interactiveCard} flex h-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harmony-green-deep/45 focus-visible:ring-offset-2 focus-visible:ring-offset-cream`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="inline-flex size-11 items-center justify-center rounded-2xl border border-harmony-green/15 bg-green-wash/35">
                    <TopicGlyph id={topic.id} />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-harmony-green-muted">
                    Topic
                  </span>
                </div>
                <p className="mt-4 font-display text-lg font-normal text-foreground">{topic.label}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
                  {topic.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-harmony-green-deep">
                  Open
                  <span aria-hidden>→</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </SectionShell>

      {/* 4. Continue (topic spotlight) */}
      <SectionShell background="white" padding="tight">
        <h2 className={sectionTitleClass}>Continue what helps right now</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
          This is not a schedule—just a steady place to return when everything feels loud.
        </p>
        {userPlan === "premium" ? (
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
            Premium unlocks deeper reads and extra checklists inside Topics and the resource library.
          </p>
        ) : null}
        <div className="mt-6 max-w-xl">
          <Link
            href={topicHref}
            className={`${interactiveCard} block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harmony-green-deep/45 focus-visible:ring-offset-2 focus-visible:ring-offset-surface`}
          >
            <p className="text-xs font-medium uppercase tracking-wide text-harmony-green-deep">
              Topic spotlight
            </p>
            <p className="mt-2 font-display text-lg font-normal text-foreground sm:text-xl">
              {spotlightTopicTitle}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{spotlightTopicSummary}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-harmony-green-deep">
              Keep going
              <span aria-hidden>→</span>
            </span>
          </Link>
        </div>
      </SectionShell>

      {/* 5. Quick access */}
      <SectionShell background="cream" padding="tight">
        <h2 className={sectionTitleClass}>Quick access</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted sm:text-[0.9375rem]">
          A few calm doors—pick one, then stop when you have enough.
        </p>
        <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 lg:gap-5">
          {DASHBOARD_QUICK_ACCESS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`${interactiveCard} flex h-full min-h-[6.5rem] flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harmony-green-deep/45 focus-visible:ring-offset-2 focus-visible:ring-offset-cream`}
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

      {/* 6. Free essentials */}
      <SectionShell background="white" padding="tight">
        <h2 className={sectionTitleClass}>Free checklists (inside Topics)</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted sm:text-[0.9375rem]">
          Practical starters you can use today—no upgrade required.
        </p>
        <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {DASHBOARD_FREE_ESSENTIALS.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className={`${interactiveCard} flex min-h-[4.75rem] items-center justify-between gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harmony-green-deep/45 focus-visible:ring-offset-2 focus-visible:ring-offset-surface`}
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

      {/* 7. Premium preview */}
      <SectionShell background="cream" padding="tight">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className={sectionTitleClass}>Premium preview</h2>
            <p className="mt-2 max-w-2xl text-sm text-muted sm:text-[0.9375rem]">
              If you want more depth inside the library (and extra planners), premium stays calm—not
              pushy.
            </p>
          </div>
          <Link
            href="/app/upgrade"
            className="mt-1 inline-flex min-h-10 items-center text-sm font-medium text-harmony-green-deep underline-offset-4 hover:underline sm:mt-0"
          >
            View support options
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

      {/* 8. CTA */}
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
