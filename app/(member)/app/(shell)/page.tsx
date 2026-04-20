import type { Metadata } from "next";
import { MemberAppDashboard } from "@/components/member/member-app-dashboard";
import type { MemberPlan } from "@/components/member/premium-gate";
import { getDashboardHomeSpotlight } from "@/lib/member/dashboard-home";
import { getMemberPlan } from "@/lib/member-plan";

export const metadata: Metadata = {
  title: "Home",
};

export default async function MemberAppDashboardPage() {
  const userPlan: MemberPlan = await getMemberPlan();
  const homeSpotlight = getDashboardHomeSpotlight(userPlan);

  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <MemberAppDashboard userPlan={userPlan} homeSpotlight={homeSpotlight} />
    </main>
  );
}
