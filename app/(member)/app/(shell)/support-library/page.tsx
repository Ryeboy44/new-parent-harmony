import type { Metadata } from "next";
import { auth } from "@/auth";
import { MemberSupportLibrary } from "@/components/member/member-support-library";
import type { MemberPlan } from "@/components/member/premium-gate";
import { SUPPORT_LIBRARY_CATEGORIES } from "@/lib/content/support-library";

export const metadata: Metadata = {
  title: "Support Library",
  description:
    "Trusted guidance for pregnancy, postpartum, feeding, sleep, and early parenthood—articles, checklists, and deep dives from New Parent Harmony.",
};

const VALID_CATEGORY = new Set<string>(
  SUPPORT_LIBRARY_CATEGORIES.map((c) => c.id),
);

type PageProps = {
  searchParams?: Promise<{ q?: string; cat?: string }>;
};

export default async function SupportLibraryPage({ searchParams }: PageProps) {
  const session = await auth();
  const userPlan: MemberPlan =
    session?.user?.plan === "premium" ? "premium" : "free";

  const sp = (await searchParams) ?? {};
  const query = typeof sp.q === "string" ? sp.q : "";
  const rawCat = typeof sp.cat === "string" ? sp.cat : "all";
  const category =
    rawCat === "all" || VALID_CATEGORY.has(rawCat) ? rawCat : "all";

  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <MemberSupportLibrary
        query={query}
        category={category}
        userPlan={userPlan}
      />
    </main>
  );
}
