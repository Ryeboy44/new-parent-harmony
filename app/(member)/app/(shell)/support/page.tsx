import type { Metadata } from "next";
import { MemberSupportLibrary } from "@/components/member/member-support-library";
import type { MemberPlan } from "@/components/member/premium-gate";
import { getMemberPlan } from "@/lib/member-plan";
import { MEMBER_TOPICS } from "@/lib/content/member-topics";
import { SUPPORT_LIBRARY_CATEGORIES } from "@/lib/content/support-library";

export const metadata: Metadata = {
  title: "Resource library",
  description:
    "Trusted guidance for pregnancy, postpartum, feeding, sleep, and early parenthood—summarized for scanning, with checklists embedded in Topics.",
};

const VALID_CATEGORY = new Set<string>(SUPPORT_LIBRARY_CATEGORIES.map((c) => c.id));
const VALID_TOPIC = new Set<string>(MEMBER_TOPICS.map((t) => t.id));

type PageProps = {
  searchParams?: Promise<{ q?: string; cat?: string; topic?: string }>;
};

export default async function ResourceLibraryPage({ searchParams }: PageProps) {
  const userPlan: MemberPlan = await getMemberPlan();

  const sp = (await searchParams) ?? {};
  const query = typeof sp.q === "string" ? sp.q : "";
  const rawCat = typeof sp.cat === "string" ? sp.cat : "all";
  const category = rawCat === "all" || VALID_CATEGORY.has(rawCat) ? rawCat : "all";
  const rawTopic = typeof sp.topic === "string" ? sp.topic : "all";
  const topic = rawTopic === "all" || VALID_TOPIC.has(rawTopic) ? rawTopic : "all";

  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <MemberSupportLibrary query={query} category={category} topic={topic} userPlan={userPlan} />
    </main>
  );
}
