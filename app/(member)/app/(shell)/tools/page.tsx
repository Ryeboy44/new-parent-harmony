import type { Metadata } from "next";
import { MemberToolsPage } from "@/components/member/member-tools-page";
import type { MemberPlan } from "@/components/member/premium-gate";
import { getMemberPlan } from "@/lib/member-plan";

export const metadata: Metadata = {
  title: "Tools & checklists",
  description:
    "Hospital bag, birth plan prompts, safe sleep, and more—gentle worksheets from New Parent Harmony.",
};

export default async function ToolsPage() {
  const plan: MemberPlan = await getMemberPlan();

  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <MemberToolsPage userPlan={plan} />
    </main>
  );
}
