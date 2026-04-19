import type { Metadata } from "next";
import { WeeklyGuideView } from "@/components/member/weekly-guide-view";
import type { MemberPlan } from "@/components/member/premium-gate";
import { parseWeeklyGuideWeekParam } from "@/lib/member/dashboard-spotlight";
import { getMemberPlan } from "@/lib/member-plan";

export const metadata: Metadata = {
  title: "Weekly Guide",
  description:
    "Gentle week-by-week guidance for pregnancy, birth prep, and early postpartum—from New Parent Harmony.",
};

type PageProps = {
  searchParams?: Promise<{ week?: string }>;
};

export default async function WeeklyGuidePage({ searchParams }: PageProps) {
  const userPlan: MemberPlan = await getMemberPlan();
  const sp = (await searchParams) ?? {};
  const weekParam = typeof sp.week === "string" ? sp.week : undefined;
  const initialWeekId = parseWeeklyGuideWeekParam(weekParam);

  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <WeeklyGuideView
        key={initialWeekId ?? "default"}
        userPlan={userPlan}
        initialWeekId={initialWeekId}
      />
    </main>
  );
}
