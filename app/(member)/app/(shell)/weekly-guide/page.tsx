import type { Metadata } from "next";
import { WeeklyGuideView } from "@/components/member/weekly-guide-view";
import type { MemberPlan } from "@/components/member/premium-gate";
import { getMemberPlan } from "@/lib/member-plan";

export const metadata: Metadata = {
  title: "Weekly Guide",
  description:
    "Gentle week-by-week guidance for pregnancy, birth prep, and early postpartum—from New Parent Harmony.",
};

export default async function WeeklyGuidePage() {
  const userPlan: MemberPlan = await getMemberPlan();

  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <WeeklyGuideView userPlan={userPlan} />
    </main>
  );
}
