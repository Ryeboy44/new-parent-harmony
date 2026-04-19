import type { Metadata } from "next";
import { auth } from "@/auth";
import { WeeklyGuideView } from "@/components/member/weekly-guide-view";
import type { MemberPlan } from "@/components/member/premium-gate";

export const metadata: Metadata = {
  title: "Weekly Guide",
  description:
    "Gentle week-by-week guidance for pregnancy, birth prep, and early postpartum—from New Parent Harmony.",
};

export default async function WeeklyGuidePage() {
  const session = await auth();
  const userPlan: MemberPlan =
    session?.user?.plan === "premium" ? "premium" : "free";

  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <WeeklyGuideView userPlan={userPlan} />
    </main>
  );
}
