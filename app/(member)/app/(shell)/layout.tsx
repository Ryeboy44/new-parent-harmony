import { auth } from "@/auth";
import { MemberAppHeader } from "@/components/member/member-app-header";
import { MemberSubNav } from "@/components/member/member-sub-nav";
import { getMemberPlan } from "@/lib/member-plan";

export default async function MemberAppShellLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const memberPlan = await getMemberPlan();

  return (
    <div className="flex min-h-full flex-1 flex-col">
      <MemberAppHeader session={session} memberPlan={memberPlan} />
      <MemberSubNav />
      {children}
    </div>
  );
}
