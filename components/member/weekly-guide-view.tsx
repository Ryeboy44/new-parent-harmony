"use client";

import { useMemo, useState } from "react";
import { ButtonLink } from "@/components/shared/ui/button-link";
import { buttonBase, buttonVariantClass } from "@/components/shared/ui/button-classes";
import { SectionShell } from "@/components/shared/ui/section-shell";
import { surfaceCard } from "@/components/shared/ui/surface-card";
import {
  getNextWeekId,
  getWeeklyGuideWeek,
  WEEKLY_GUIDE_DETAILS,
  WEEKLY_GUIDE_HEADER,
  WEEKLY_GUIDE_STAGES,
  WEEKLY_GUIDE_WEEKS,
  weeklyGuidePlaceholderDetail,
  type WeeklyGuideStageId,
  type WeeklyGuideWeek,
} from "@/lib/content/weekly-guide";

const eyebrowClass =
  "text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-harmony-green-muted sm:text-xs";

const sectionTitleClass =
  "font-display text-xl font-normal tracking-tight text-foreground sm:text-2xl";

const cardInteractive =
  "w-full rounded-2xl border border-border-soft/50 bg-surface p-5 text-left shadow-soft transition-[box-shadow,transform,border-color] hover:border-harmony-green/20 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harmony-green-deep/45 focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:p-6";

function TierBadge({ tier }: { tier: WeeklyGuideWeek["tier"] }) {
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

export function WeeklyGuideView() {
  const [stageId, setStageId] = useState<WeeklyGuideStageId>("postpartum");
  const [weekId, setWeekId] = useState<string>("week-1-postpartum");

  const weeksInStage = useMemo(
    () => WEEKLY_GUIDE_WEEKS.filter((w) => w.stageId === stageId),
    [stageId],
  );

  const selectedWeek = getWeeklyGuideWeek(weekId);
  const detail =
    WEEKLY_GUIDE_DETAILS[weekId] ??
    (selectedWeek
      ? weeklyGuidePlaceholderDetail(selectedWeek.title)
      : weeklyGuidePlaceholderDetail("This week"));

  const nextId = weekId ? getNextWeekId(weekId) : null;
  const nextWeek = nextId ? getWeeklyGuideWeek(nextId) : null;

  function selectStage(id: WeeklyGuideStageId) {
    setStageId(id);
    const first = WEEKLY_GUIDE_WEEKS.find((w) => w.stageId === id);
    if (first) setWeekId(first.id);
  }

  function handleContinue() {
    if (!nextId) return;
    const next = getWeeklyGuideWeek(nextId);
    if (!next) return;
    setStageId(next.stageId);
    setWeekId(next.id);
  }

  return (
    <>
      {/* 1. Header */}
      <SectionShell background="cream" padding="tight">
        <div
          className={`${surfaceCard} max-w-3xl border-harmony-green/10 bg-gradient-to-b from-surface to-cream-deep/35 ring-1 ring-harmony-green/8 sm:p-10`}
        >
          <p className={eyebrowClass}>{WEEKLY_GUIDE_HEADER.eyebrow}</p>
          <h1 className="mt-3 font-display text-[1.625rem] font-normal leading-[1.15] tracking-[-0.02em] text-foreground sm:text-3xl md:text-[2.125rem]">
            {WEEKLY_GUIDE_HEADER.title}
          </h1>
          <p className="mt-5 max-w-2xl text-[0.9375rem] leading-relaxed text-muted sm:mt-6 sm:text-base">
            {WEEKLY_GUIDE_HEADER.subheading}
          </p>
        </div>
      </SectionShell>

      {/* 2. Stage selector */}
      <SectionShell background="white" padding="tight">
        <h2 className="sr-only">Choose your stage</h2>
        <div
          role="tablist"
          aria-label="Guide stage"
          className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-3"
        >
          {WEEKLY_GUIDE_STAGES.map((stage) => {
            const selected = stageId === stage.id;
            return (
              <button
                key={stage.id}
                type="button"
                role="tab"
                aria-selected={selected}
                id={`tab-${stage.id}`}
                aria-controls={`panel-${stage.id}`}
                onClick={() => selectStage(stage.id)}
                className={`min-h-12 flex-1 rounded-2xl border px-4 py-3 text-left transition-[border-color,box-shadow,background] sm:min-w-[10.5rem] sm:flex-none sm:px-5 ${
                  selected
                    ? "border-harmony-green/35 bg-green-wash/45 shadow-soft ring-1 ring-harmony-green/10"
                    : "border-border-soft/70 bg-surface hover:border-harmony-green/20 hover:bg-cream-deep/40"
                }`}
              >
                <span className="block font-display text-base font-normal text-foreground">
                  {stage.label}
                </span>
                <span className="mt-1 block text-xs leading-snug text-muted">
                  {stage.description}
                </span>
              </button>
            );
          })}
        </div>
      </SectionShell>

      {/* 3. Week cards */}
      <SectionShell background="cream" padding="tight">
        <h2 className={sectionTitleClass}>Phases & weeks</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted sm:text-[0.9375rem]">
          Tap a card to open the guide for that stretch. Premium weeks unlock with
          membership.
        </p>
        <ul
          id={`panel-${stageId}`}
          role="tabpanel"
          aria-labelledby={`tab-${stageId}`}
          className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:gap-4"
        >
          {weeksInStage.map((week) => {
            const isActive = week.id === weekId;
            return (
              <li key={week.id}>
                <button
                  type="button"
                  onClick={() => setWeekId(week.id)}
                  className={`${cardInteractive} ${isActive ? "border-harmony-green/30 ring-1 ring-harmony-green/12" : ""}`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <span className="font-display text-lg font-normal text-foreground sm:text-xl">
                      {week.title}
                    </span>
                    <TierBadge tier={week.tier} />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
                    {week.summary}
                  </p>
                </button>
              </li>
            );
          })}
        </ul>
      </SectionShell>

      {/* 4. Detail */}
      <SectionShell background="white" padding="tight">
        <div className="mx-auto max-w-3xl">
          <p className={eyebrowClass}>This week</p>
          <h2 className="mt-2 font-display text-[1.5rem] font-normal text-foreground sm:text-2xl">
            {selectedWeek?.title ?? "Guide"}
          </h2>
          <div className="mt-6 space-y-4">
            {detail.sections.map((section) => (
              <section
                key={section.heading}
                className={`${surfaceCard} border-border-soft/50 bg-cream/40`}
              >
                <h3 className="font-display text-lg font-normal text-foreground sm:text-xl">
                  {section.heading}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* 5. Progress */}
      <SectionShell background="subtle" padding="tight">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="min-w-0 flex-1">
            <p className={eyebrowClass}>Keep going</p>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
              {nextWeek
                ? `When you are ready, move forward to ${nextWeek.title}—at your pace, with no streak pressure.`
                : "You are at the end of this guide path for now. Revisit any week above, explore the library, or book a chat if you want this tailored to you."}
            </p>
          </div>
          {nextWeek ? (
            <button
              type="button"
              onClick={handleContinue}
              className={`${buttonBase} ${buttonVariantClass.primary} w-full shrink-0 sm:w-auto`}
            >
              Continue to {nextWeek.title}
            </button>
          ) : (
            <ButtonLink href="/app/support-library" variant="secondary" className="w-full sm:w-auto">
              Browse support library
            </ButtonLink>
          )}
        </div>
      </SectionShell>
    </>
  );
}
