import type { Metadata } from "next";
import { MemberTopicsIndex } from "@/components/member/member-topics-index";

export const metadata: Metadata = {
  title: "Topics",
  description:
    "Find calm, practical guidance by topic—feeding, sleep, recovery, and preparing for baby.",
};

export default function TopicsIndexPage() {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <MemberTopicsIndex />
    </main>
  );
}
