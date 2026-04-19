import type { MemberPlan } from "@/components/member/premium-gate";
import {
  getWeeklyGuideWeek,
  WEEKLY_GUIDE_DETAILS,
  WEEKLY_GUIDE_WEEKS,
  selectDailyFocusPrompt,
} from "@/lib/content/weekly-guide";

/** Week shown on the dashboard for Today’s focus + continue (free tier + dailyFocus). */
export const DASHBOARD_WEEKLY_SPOTLIGHT_ID = "week-1-postpartum" as const;

const WEEK_IDS = new Set(WEEKLY_GUIDE_WEEKS.map((w) => w.id));

export function parseWeeklyGuideWeekParam(week: string | undefined): string | null {
  if (!week || !WEEK_IDS.has(week)) return null;
  return week;
}

export type DashboardWeeklySpotlight = {
  weekId: string;
  weekTitle: string;
  weekSummary: string;
  weekTier: "free" | "premium";
  /** From `dailyFocus` when the user can read this week; otherwise null. */
  todayFocusLine: string | null;
  weeklyGuideHref: string;
  canReadFullGuide: boolean;
};

export function getDashboardWeeklySpotlight(plan: MemberPlan): DashboardWeeklySpotlight {
  const weekId = DASHBOARD_WEEKLY_SPOTLIGHT_ID;
  const week = getWeeklyGuideWeek(weekId);
  if (!week) {
    throw new Error(`Missing weekly guide entry: ${weekId}`);
  }
  const detail = WEEKLY_GUIDE_DETAILS[weekId];
  const canReadFullGuide = week.tier === "free" || plan === "premium";
  const todayFocusLine =
    canReadFullGuide && detail?.dailyFocus?.length
      ? selectDailyFocusPrompt(detail.dailyFocus)
      : null;

  return {
    weekId: week.id,
    weekTitle: week.title,
    weekSummary: week.summary,
    weekTier: week.tier,
    todayFocusLine,
    weeklyGuideHref: `/app/weekly-guide?week=${encodeURIComponent(weekId)}`,
    canReadFullGuide,
  };
}
