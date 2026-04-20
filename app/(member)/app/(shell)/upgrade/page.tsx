import type { Metadata } from "next";
import { MemberUpgradePage } from "@/components/member/member-upgrade-page";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Choose calm support options for this season: free chat, premium digital membership, premium plus virtual doula sessions, and sleep package support.",
};

export default function UpgradePage() {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <MemberUpgradePage />
    </main>
  );
}
