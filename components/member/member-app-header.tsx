import Link from "next/link";

export function MemberAppHeader() {
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
        <Link
          href="/"
          className="inline-flex min-h-10 items-center text-sm text-muted transition-colors hover:text-foreground"
        >
          Public site
        </Link>
      </div>
    </header>
  );
}
