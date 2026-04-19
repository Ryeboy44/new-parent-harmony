import type { Metadata } from "next";
import { MemberPlaceholderSection } from "@/components/member/member-placeholder-section";
import { MEMBER_PAGE_BLURBS } from "@/lib/content/member-app";

export const metadata: Metadata = {
  title: MEMBER_PAGE_BLURBS.tools.title,
};

export default function ToolsPage() {
  const { title, body } = MEMBER_PAGE_BLURBS.tools;
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <MemberPlaceholderSection title={title} body={body} />
    </main>
  );
}
