import type { Metadata } from "next";
import { MemberUpgradePage } from "@/components/member/member-upgrade-page";

export const metadata: Metadata = {
  title: "Support for the weeks ahead",
  description:
    "Optional premium for New Parent Harmony members—more weekly guidance, deeper library, and gentle tools when free is not quite enough. Monthly or annual.",
};

export default function UpgradePage() {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <MemberUpgradePage />
    </main>
  );
}
