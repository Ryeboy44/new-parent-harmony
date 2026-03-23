"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const skipClassName =
  "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-foreground focus:shadow-md";

export function SkipToMainLink() {
  const pathname = usePathname() || "/";
  const href = `${pathname}#main-content`;

  return (
    <Link href={href} className={skipClassName}>
      Skip to main content
    </Link>
  );
}
