import type { Metadata } from "next";
import { MemberAccountPage } from "@/components/member/member-account-page";

export const metadata: Metadata = {
  title: "Account",
  description:
    "Your New Parent Harmony member account—email, plan, and optional Stripe billing management.",
};

export default function AccountPage() {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <MemberAccountPage />
    </main>
  );
}
