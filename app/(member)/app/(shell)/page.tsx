import type { Metadata } from "next";
import { MemberAppDashboard } from "@/components/member/member-app-dashboard";
import type { MemberPlan } from "@/components/member/premium-gate";
import { getDashboardWeeklySpotlight } from "@/lib/member/dashboard-spotlight";
import { getMemberPlan } from "@/lib/member-plan";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function MemberAppDashboardPage() {
  const userPlan: MemberPlan = await getMemberPlan();
  const weeklySpotlight = getDashboardWeeklySpotlight(userPlan);

  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <MemberAppDashboard userPlan={userPlan} weeklySpotlight={weeklySpotlight} />
    </main>
  );
}
