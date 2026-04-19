import Link from "next/link";
import type { Session } from "next-auth";
import type { MemberPlan } from "@/components/member/premium-gate";
import { MemberSignOutButton } from "@/components/member/member-sign-out-button";

type MemberAppHeaderProps = {
  session: Session | null;
  /** From DB in server layout — overrides stale JWT `plan` after webhooks */
  memberPlan?: MemberPlan;
};

export function MemberAppHeader({ session, memberPlan }: MemberAppHeaderProps) {
  const user = session?.user;
  const planBadge: MemberPlan =
    memberPlan ?? (user?.plan === "premium" ? "premium" : "free");

  return (
    <header className="border-b border-border-soft/60 bg-surface/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3.5 sm:px-6 lg:px-10">
        <Link
          href="/app"
          className="min-h-10 min-w-0 font-display text-base font-normal tracking-tight text-foreground sm:text-lg"
        >
          New Parent Harmony
          <span className="ml-2 text-sm font-sans font-normal text-muted">Member</span>
        </Link>
        <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-3">
          {user ? (
            <>
              <span className="max-w-[12rem] truncate text-sm text-muted sm:max-w-xs">
                {user.email ?? user.name ?? "Signed in"}
              </span>
              <span className="rounded-full border border-harmony-green/25 bg-green-wash/40 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-harmony-green-deep">
                {planBadge === "premium" ? "Premium" : "Free"}
              </span>
              <MemberSignOutButton />
            </>
          ) : (
            <Link
              href="/app/login"
              className="inline-flex min-h-10 items-center rounded-xl border border-border-soft/80 bg-surface px-4 text-sm font-medium text-foreground shadow-soft transition-colors hover:border-harmony-green/25 hover:bg-cream-deep/80"
            >
              Sign in
            </Link>
          )}
          <Link
            href="/"
            className="inline-flex min-h-10 items-center text-sm text-muted transition-colors hover:text-foreground"
          >
            Public site
          </Link>
        </div>
      </div>
    </header>
  );
}
