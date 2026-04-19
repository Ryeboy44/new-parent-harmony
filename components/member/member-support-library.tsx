import Link from "next/link";
import { PremiumGate, type MemberPlan } from "@/components/member/premium-gate";
import { ButtonLink } from "@/components/shared/ui/button-link";
import { SectionShell } from "@/components/shared/ui/section-shell";
import { surfaceCard } from "@/components/shared/ui/surface-card";
import { PRIMARY_CTA_HREF, PRIMARY_CTA_LABEL } from "@/data/site-cta";
import {
  categoryLabel,
  matchesSupportLibraryFilters,
  supportLibraryHref,
  SUPPORT_LIBRARY_CATEGORIES,
  SUPPORT_LIBRARY_HEADER,
  SUPPORT_LIBRARY_RESOURCES,
  SUPPORT_LIBRARY_SEARCH_PLACEHOLDER,
  type SupportLibraryResource,
} from "@/lib/content/support-library";

const eyebrowClass =
  "text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-harmony-green-muted sm:text-xs";

const sectionTitleClass =
  "font-display text-xl font-normal tracking-tight text-foreground sm:text-2xl";

const interactiveCard =
  "rounded-2xl border border-border-soft/50 bg-surface p-5 shadow-soft transition-[box-shadow,transform] duration-200 hover:border-harmony-green/20 hover:shadow-md sm:p-6";

const chipBase =
  "inline-flex min-h-10 shrink-0 snap-start items-center justify-center rounded-full border px-3.5 py-2 text-center text-xs font-medium transition-colors sm:text-sm";

function TierBadge({ tier }: { tier: SupportLibraryResource["tier"] }) {
  if (tier === "free") {
    return (
      <span className="shrink-0 rounded-full border border-harmony-green/25 bg-green-wash/50 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-harmony-green-deep">
        Free
      </span>
    );
  }
  return (
    <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-harmony-green/20 bg-gradient-to-r from-cream-deep/80 to-green-wash/40 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-harmony-green-deep">
      Premium
    </span>
  );
}

function ResourceCard({
  resource,
  userPlan,
}: {
  resource: SupportLibraryResource;
  userPlan: MemberPlan;
}) {
  return (
    <article
      className={`${interactiveCard} flex h-full flex-col`}
      aria-label={`${resource.title} — ${resource.tier}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="text-xs font-medium text-harmony-green-deep">
          {categoryLabel(resource.categoryId)}
        </span>
        <TierBadge tier={resource.tier} />
      </div>
      <h3 className="mt-3 font-display text-lg font-normal leading-snug text-foreground sm:text-xl">
        {resource.title}
      </h3>
      {resource.tier === "free" ? (
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
          {resource.summary}
        </p>
      ) : (
        <PremiumGate plan={userPlan}>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
            {resource.summary}
          </p>
        </PremiumGate>
      )}
      {resource.tier === "free" || userPlan === "premium" ? (
        <p className="mt-4 text-xs text-harmony-green-muted">Full article · coming soon</p>
      ) : null}
    </article>
  );
}

type MemberSupportLibraryProps = {
  query: string;
  category: string;
  userPlan: MemberPlan;
};

export function MemberSupportLibrary({
  query,
  category,
  userPlan,
}: MemberSupportLibraryProps) {
  const q = query.trim();
  const cat = category || "all";

  const filterOpts = { q, cat };

  const featured = SUPPORT_LIBRARY_RESOURCES.filter(
    (r) => r.featured && matchesSupportLibraryFilters(r, filterOpts),
  );

  const gridResources = SUPPORT_LIBRARY_RESOURCES.filter((r) =>
    matchesSupportLibraryFilters(r, filterOpts),
  );

  return (
    <>
      {/* 1. Header */}
      <SectionShell background="cream" padding="tight">
        <div
          className={`${surfaceCard} max-w-3xl border-harmony-green/10 bg-gradient-to-b from-surface to-cream-deep/35 ring-1 ring-harmony-green/8 sm:p-10`}
        >
          <p className={eyebrowClass}>{SUPPORT_LIBRARY_HEADER.eyebrow}</p>
          <h1 className="mt-3 font-display text-[1.625rem] font-normal leading-[1.15] tracking-[-0.02em] text-foreground sm:text-3xl md:text-[2.125rem]">
            {SUPPORT_LIBRARY_HEADER.title}
          </h1>
          <p className="mt-5 max-w-2xl text-[0.9375rem] leading-relaxed text-muted sm:mt-6 sm:text-base">
            {SUPPORT_LIBRARY_HEADER.subheading}
          </p>
        </div>
      </SectionShell>

      {/* 2. Search + 3. Categories */}
      <SectionShell background="white" padding="tight">
        <form
          role="search"
          method="get"
          action="/app/support-library"
          className="mx-auto max-w-2xl"
        >
          {cat !== "all" ? <input type="hidden" name="cat" value={cat} /> : null}
          <label htmlFor="support-library-search" className="sr-only">
            Search resources
          </label>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
            <input
              id="support-library-search"
              type="search"
              name="q"
              defaultValue={q}
              placeholder={SUPPORT_LIBRARY_SEARCH_PLACEHOLDER}
              className="min-h-12 w-full flex-1 rounded-2xl border border-border-soft/70 bg-cream/60 px-4 py-3 text-[0.9375rem] text-foreground shadow-inner shadow-black/5 outline-none transition-[border-color,box-shadow] placeholder:text-muted/80 focus:border-harmony-green/35 focus:ring-2 focus:ring-harmony-green-deep/25 sm:px-5"
            />
            <button
              type="submit"
              className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-2xl bg-harmony-green px-6 text-[0.9375rem] font-medium text-white shadow-soft transition-colors hover:bg-harmony-green-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harmony-green-deep/50 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            >
              Search
            </button>
          </div>
        </form>

        <div className="mt-8">
          <p className={eyebrowClass}>Browse by topic</p>
          <div className="mt-3 flex snap-x snap-mandatory gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:flex-wrap sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden">
            <Link
              href={supportLibraryHref({ q })}
              className={`${chipBase} ${
                cat === "all"
                  ? "border-harmony-green/35 bg-green-wash/50 text-foreground"
                  : "border-border-soft/70 bg-surface text-muted hover:border-harmony-green/25 hover:bg-cream-deep/50"
              }`}
              scroll={false}
            >
              All topics
            </Link>
            {SUPPORT_LIBRARY_CATEGORIES.map((c) => {
              const active = cat === c.id;
              return (
                <Link
                  key={c.id}
                  href={supportLibraryHref({ q, cat: c.id })}
                  className={`${chipBase} max-w-[11rem] sm:max-w-none ${
                    active
                      ? "border-harmony-green/35 bg-green-wash/50 text-foreground"
                      : "border-border-soft/70 bg-surface text-muted hover:border-harmony-green/25 hover:bg-cream-deep/50"
                  }`}
                  scroll={false}
                >
                  {c.label}
                </Link>
              );
            })}
          </div>
        </div>
      </SectionShell>

      {/* 4. Featured */}
      <SectionShell background="cream" padding="tight">
        <h2 className={sectionTitleClass}>Featured resources</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
          Curated starting points many families open first—clear, kind, and practical.
        </p>
        {featured.length === 0 ? (
          <p className="mt-6 rounded-2xl border border-dashed border-border-soft/80 bg-surface/60 px-4 py-8 text-center text-sm text-muted">
            No featured resources match your filters. Try another topic or clear
            your search.
          </p>
        ) : (
          <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {featured.map((r) => (
              <li key={r.id}>
                <ResourceCard resource={r} userPlan={userPlan} />
              </li>
            ))}
          </ul>
        )}
      </SectionShell>

      {/* 5. Resources grid */}
      <SectionShell background="white" padding="tight">
        <h2 className={sectionTitleClass}>All resources</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted sm:text-[0.9375rem]">
          Free guides sit alongside premium deep-dives—look for the badge on each
          card.
        </p>
        {gridResources.length === 0 ? (
          <p className="mt-6 rounded-2xl border border-dashed border-border-soft/80 bg-cream/50 px-4 py-8 text-center text-sm text-muted">
            Nothing matches that search yet. Try a shorter word or browse by topic
            above.
          </p>
        ) : (
          <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {gridResources.map((r) => (
              <li key={r.id}>
                <ResourceCard resource={r} userPlan={userPlan} />
              </li>
            ))}
          </ul>
        )}
      </SectionShell>

      {/* 6. Upgrade CTA */}
      <SectionShell background="subtle" padding="tight">
        <div className="mx-auto max-w-2xl text-center">
          <p className={eyebrowClass}>Go deeper</p>
          <h2 className="mt-3 font-display text-[1.5rem] font-normal leading-snug text-foreground sm:text-2xl">
            Unlock the full library
          </h2>
          <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
            Premium resources include longer guides, scripts for partners, and
            printable checklists—always written with the same calm tone you find
            here.
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:justify-center">
            <ButtonLink href="/app/upgrade" variant="primary" className="w-full sm:w-auto">
              View upgrade options
            </ButtonLink>
            <ButtonLink href={PRIMARY_CTA_HREF} variant="secondary" className="w-full sm:w-auto">
              {PRIMARY_CTA_LABEL}
            </ButtonLink>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
