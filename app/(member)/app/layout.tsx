import type { Metadata } from "next";
import { MemberAppHeader } from "@/components/member/member-app-header";
import { MemberSubNav } from "@/components/member/member-sub-nav";

export const metadata: Metadata = {
  title: "Member app",
  description:
    "Freemium postpartum tools and guides from New Parent Harmony — in active development.",
  robots: { index: false, follow: true },
};

/**
 * Member experience at `/app` and nested routes. Route group `(member)` is omitted from URLs.
 */
export default function MemberAppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <MemberAppHeader />
      <MemberSubNav />
      {children}
    </div>
  );
}
