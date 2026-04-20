"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const TOOL_REDIRECTS: Record<string, { href: string; hash?: string }> = {
  "hospital-bag": { href: "/app/topics/getting-ready", hash: "tool-hospital-bag" },
  "birth-plan": { href: "/app/topics/getting-ready", hash: "tool-birth-plan" },
  "hospital-tour": { href: "/app/topics/getting-ready", hash: "tool-hospital-tour" },
  "route-hospital": { href: "/app/topics/getting-ready", hash: "tool-route-hospital" },
  "pediatrician-interview": { href: "/app/topics/getting-ready", hash: "tool-pediatrician-interview" },
  "nursery-essentials": { href: "/app/topics/home-setup", hash: "tool-nursery-essentials" },
  "feeding-station": { href: "/app/topics/feeding", hash: "tool-feeding-station" },
  "safe-sleep": { href: "/app/topics/sleep", hash: "tool-safe-sleep" },
  "visitor-boundaries": { href: "/app/topics/support-boundaries", hash: "tool-visitor-boundaries" },
  "household-duties": { href: "/app/topics/support-boundaries", hash: "tool-household-duties" },
  "pump-selection": { href: "/app/topics/feeding", hash: "tool-pump-selection" },
  "medical-financial": { href: "/app/topics/getting-ready", hash: "tool-medical-financial" },
};

function destinationFromHash(hash: string): string | null {
  const raw = hash.startsWith("#") ? hash.slice(1) : hash;
  if (!raw.startsWith("tool-")) return null;
  const toolId = raw.slice("tool-".length);
  const mapped = TOOL_REDIRECTS[toolId];
  if (!mapped) return "/app/topics";
  return `${mapped.href}${mapped.hash ? `#${mapped.hash}` : ""}`;
}

export function ToolsLegacyRedirect() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const tool = searchParams.get("tool");
    if (tool && TOOL_REDIRECTS[tool]) {
      const mapped = TOOL_REDIRECTS[tool];
      router.replace(`${mapped.href}${mapped.hash ? `#${mapped.hash}` : ""}`);
      return;
    }

    const fromHash = typeof window !== "undefined" ? destinationFromHash(window.location.hash) : null;
    router.replace(fromHash ?? "/app/topics");
  }, [router, searchParams]);

  return (
    <div className="mx-auto max-w-xl px-4 py-16 text-center text-sm text-muted">
      Taking you to the right topic…
    </div>
  );
}
