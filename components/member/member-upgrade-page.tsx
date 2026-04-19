import { ButtonLink } from "@/components/shared/ui/button-link";
import { SectionShell } from "@/components/shared/ui/section-shell";
import { surfaceCard } from "@/components/shared/ui/surface-card";
import { StripeSubscriptionButton } from "@/components/member/stripe-subscription-button";
import { PRIMARY_CTA_HREF, PRIMARY_CTA_LABEL } from "@/data/site-cta";
import {
  UPGRADE_COMPARISON,
  UPGRADE_CTA,
  UPGRADE_FAQ,
  UPGRADE_HEADER,
  UPGRADE_PLANS,
  UPGRADE_PREMIUM_INCLUDES,
  UPGRADE_VALUE_SUMMARY,
} from "@/lib/content/member-upgrade";

const eyebrowClass =
  "text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-harmony-green-muted sm:text-xs";

const sectionTitleClass =
  "font-display text-xl font-normal tracking-tight text-foreground sm:text-2xl";

const pricingCardBase =
  "relative flex h-full flex-col rounded-2xl border border-border-soft/60 bg-surface p-6 shadow-soft sm:p-8";

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 size-5 shrink-0 text-harmony-green-deep"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function MemberUpgradePage() {
  const { monthly, annual } = UPGRADE_PLANS;

  return (
    <>
      {/* 1. Header */}
      <SectionShell background="cream" padding="tight">
        <div
          className={`${surfaceCard} max-w-3xl border-harmony-green/10 bg-gradient-to-b from-surface to-cream-deep/35 ring-1 ring-harmony-green/8 sm:p-10`}
        >
          <p className={eyebrowClass}>{UPGRADE_HEADER.eyebrow}</p>
          <h1 className="mt-3 font-display text-[1.625rem] font-normal leading-[1.15] tracking-[-0.02em] text-foreground sm:text-3xl md:text-[2.125rem]">
            {UPGRADE_HEADER.title}
          </h1>
          <p className="mt-5 max-w-2xl text-[0.9375rem] leading-relaxed text-muted sm:mt-6 sm:text-base">
            {UPGRADE_HEADER.subheading}
          </p>
        </div>
      </SectionShell>

      {/* 2. Value summary */}
      <SectionShell background="white" padding="tight">
        <h2 className={sectionTitleClass}>{UPGRADE_VALUE_SUMMARY.title}</h2>
        <p className="mt-4 max-w-2xl text-[0.9375rem] leading-relaxed text-muted sm:text-base">
          {UPGRADE_VALUE_SUMMARY.body}
        </p>
      </SectionShell>

      {/* 3. Pricing */}
      <SectionShell background="cream" padding="tight">
        <h2 className={sectionTitleClass}>Choose your plan</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted sm:text-[0.9375rem]">
          Checkout will connect to Stripe here—buttons are placeholders for now.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:max-w-4xl lg:mx-auto">
          <div className={pricingCardBase}>
            <h3 className="font-display text-lg font-normal text-foreground sm:text-xl">
              {monthly.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-1">
              <span className="font-display text-3xl font-normal text-foreground sm:text-4xl">
                {monthly.price}
              </span>
              <span className="text-sm text-muted">{monthly.period}</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{monthly.note}</p>
            <div className="mt-8 mt-auto pt-2">
              <StripeSubscriptionButton billing="monthly" planName={monthly.name}>
                Subscribe monthly
              </StripeSubscriptionButton>
            </div>
          </div>

          <div
            className={`${pricingCardBase} border-harmony-green/25 ring-1 ring-harmony-green/15`}
          >
            <span className="absolute right-4 top-4 rounded-full bg-harmony-green px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-white shadow-sm">
              Best value
            </span>
            <h3 className="font-display text-lg font-normal text-foreground sm:text-xl">
              {annual.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-1">
              <span className="font-display text-3xl font-normal text-foreground sm:text-4xl">
                {annual.price}
              </span>
              <span className="text-sm text-muted">{annual.period}</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{annual.note}</p>
            <div className="mt-8 mt-auto pt-2">
              <StripeSubscriptionButton billing="annual" planName={annual.name}>
                Subscribe annually
              </StripeSubscriptionButton>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* 4. What premium includes */}
      <SectionShell background="white" padding="tight">
        <h2 className={sectionTitleClass}>What premium includes</h2>
        <ul className="mt-6 max-w-2xl space-y-4">
          {UPGRADE_PREMIUM_INCLUDES.map((line) => (
            <li key={line} className="flex gap-3">
              <CheckIcon />
              <span className="text-[0.9375rem] leading-relaxed text-muted sm:text-base">
                {line}
              </span>
            </li>
          ))}
        </ul>
      </SectionShell>

      {/* 5. Comparison */}
      <SectionShell background="cream" padding="tight">
        <h2 className={sectionTitleClass}>Free vs premium</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted sm:text-[0.9375rem]">
          A simple side-by-side—no fine print, just honest differences.
        </p>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-border-soft/60 bg-surface shadow-soft">
          <table className="w-full min-w-[20rem] border-collapse text-left text-sm sm:text-[0.9375rem]">
            <thead>
              <tr className="border-b border-border-soft/70 bg-cream-deep/40">
                <th
                  scope="col"
                  className="px-4 py-3 font-display font-normal text-foreground sm:px-5 sm:py-4"
                >
                  Feature
                </th>
                <th scope="col" className="px-4 py-3 font-medium text-muted sm:px-5 sm:py-4">
                  Free
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 font-medium text-harmony-green-deep sm:px-5 sm:py-4"
                >
                  Premium
                </th>
              </tr>
            </thead>
            <tbody>
              {UPGRADE_COMPARISON.map((row) => (
                <tr
                  key={row.label}
                  className="border-b border-border-soft/50 last:border-0"
                >
                  <th
                    scope="row"
                    className="px-4 py-3.5 font-medium text-foreground sm:px-5 sm:py-4"
                  >
                    {row.label}
                  </th>
                  <td className="px-4 py-3.5 text-muted sm:px-5 sm:py-4">{row.free}</td>
                  <td className="px-4 py-3.5 text-foreground/90 sm:px-5 sm:py-4">
                    {row.premium}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionShell>

      {/* 6. CTA */}
      <SectionShell background="subtle" padding="tight">
        <div className="mx-auto max-w-2xl text-center">
          <p className={eyebrowClass}>Human support</p>
          <h2 className="mt-3 font-display text-[1.5rem] font-normal leading-snug text-foreground sm:text-2xl">
            {UPGRADE_CTA.title}
          </h2>
          <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
            {UPGRADE_CTA.body}
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:justify-center">
            <ButtonLink href={PRIMARY_CTA_HREF} variant="primary" className="w-full sm:w-auto">
              {PRIMARY_CTA_LABEL}
            </ButtonLink>
            <ButtonLink href="/services" variant="secondary" className="w-full sm:w-auto">
              Explore 1:1 services
            </ButtonLink>
          </div>
        </div>
      </SectionShell>

      {/* 7. FAQ */}
      <SectionShell background="white" padding="tight">
        <h2 className={sectionTitleClass}>Questions</h2>
        <div className="mx-auto mt-6 max-w-2xl divide-y divide-border-soft/60 rounded-2xl border border-border-soft/60 bg-surface/80 px-1 py-1 shadow-inner sm:px-2">
          {UPGRADE_FAQ.map((item) => (
            <details
              key={item.question}
              className="group border-border-soft/40 px-3 py-1 first:pt-2 last:pb-2 sm:px-4"
            >
              <summary className="cursor-pointer list-none py-3 font-medium text-foreground transition-colors marker:content-none group-open:text-harmony-green-deep [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-3">
                  {item.question}
                  <span
                    className="mt-0.5 shrink-0 text-harmony-green-muted transition-transform group-open:rotate-180"
                    aria-hidden
                  >
                    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </span>
              </summary>
              <p className="pb-4 pl-0.5 text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
