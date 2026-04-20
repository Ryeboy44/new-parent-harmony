import type { Metadata } from "next";
import { Suspense } from "react";
import { ToolsLegacyRedirect } from "@/components/member/tools-legacy-redirect";

export const metadata: Metadata = {
  title: "Tools (moved)",
  description:
    "Checklists and planners now live inside Topics for easier navigation.",
};

export default function ToolsRedirectPage() {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <Suspense fallback={null}>
        <ToolsLegacyRedirect />
      </Suspense>
    </main>
  );
}
