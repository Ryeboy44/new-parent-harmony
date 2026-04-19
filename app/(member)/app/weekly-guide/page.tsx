import type { Metadata } from "next";
import { WeeklyGuideView } from "@/components/member/weekly-guide-view";

export const metadata: Metadata = {
  title: "Weekly Guide",
  description:
    "Gentle week-by-week guidance for pregnancy, birth prep, and early postpartum—from New Parent Harmony.",
};

export default function WeeklyGuidePage() {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <WeeklyGuideView />
    </main>
  );
}
