import type { Metadata } from "next";
import Link from "next/link";

/**
 * Product app shell at `/app` (folder is `app/app/` in the repo).
 * Marketing routes stay siblings under `app/` — this layout only wraps the freemium MVP.
 */
export const metadata: Metadata = {
  title: "Postpartum app",
  description:
    "A calm space to track and learn—freemium tools for early postpartum. From New Parent Harmony.",
  robots: { index: false, follow: true },
};

export default function ProductAppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <header className="border-b border-border-soft/60 bg-surface/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-10">
          <Link
            href="/app"
            className="font-display text-base font-normal tracking-tight text-foreground sm:text-lg"
          >
            New Parent Harmony
            <span className="ml-2 text-sm font-sans font-normal text-muted">
              App
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Back to website
          </Link>
        </div>
      </header>
      {children}
    </div>
  );
}
