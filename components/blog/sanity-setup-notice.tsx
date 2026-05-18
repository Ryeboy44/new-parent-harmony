import Link from "next/link";
import { isSanityConfigured } from "@/sanity/env";

export function SanitySetupNotice() {
  if (isSanityConfigured) return null;

  return (
    <aside
      className="mb-10 rounded-2xl border border-border-soft/60 bg-surface-muted/80 px-5 py-5 text-[0.9375rem] leading-relaxed text-muted sm:px-6 sm:py-6"
      role="status"
    >
      <p className="font-medium text-foreground">Blog CMS not connected</p>
      <p className="mt-2">
        Add{" "}
        <code className="rounded bg-cream-deep px-1.5 py-0.5 text-xs">
          NEXT_PUBLIC_SANITY_PROJECT_ID
        </code>{" "}
        and{" "}
        <code className="rounded bg-cream-deep px-1.5 py-0.5 text-xs">
          NEXT_PUBLIC_SANITY_DATASET
        </code>{" "}
        to <code className="rounded bg-cream-deep px-1.5 py-0.5 text-xs">.env.local</code>{" "}
        (local) and Vercel (production), then open{" "}
        <Link href="/studio" className="font-medium text-harmony-green-deep underline">
          Sanity Studio
        </Link>
        .
      </p>
    </aside>
  );
}
