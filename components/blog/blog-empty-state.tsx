import Link from "next/link";
import { isSanityConfigured } from "@/sanity/env";

export function BlogEmptyState() {
  return (
    <div className="mx-auto max-w-lg rounded-2xl border border-border-soft/60 bg-surface-muted/50 px-6 py-10 text-center sm:px-8">
      <p className="font-display text-xl text-foreground">Articles coming soon</p>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
        New posts will appear here once they are published.
        {isSanityConfigured() ? (
          <>
            {" "}
            You can add posts in{" "}
            <Link href="/studio" className="font-medium text-harmony-green-deep underline">
              Sanity Studio
            </Link>
            .
          </>
        ) : null}
      </p>
    </div>
  );
}
