import type { Metadata } from "next";
import { MemberAppDashboard } from "@/components/member/member-app-dashboard";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function MemberAppDashboardPage() {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <MemberAppDashboard />
    </main>
  );
}
