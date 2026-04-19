import type { Metadata } from "next";
import { MemberUpgradePage } from "@/components/member/member-upgrade-page";

export const metadata: Metadata = {
  title: "Upgrade",
  description:
    "Premium week-by-week guidance, deeper feeding and sleep support, and the full expert library from New Parent Harmony—optional monthly or annual plans.",
};

export default function UpgradePage() {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <MemberUpgradePage />
    </main>
  );
}
