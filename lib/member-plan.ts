import { auth } from "@/auth";
import type { MemberPlan } from "@/components/member/premium-gate";
import { prisma } from "@/lib/prisma";

/**
 * Current plan from the database (Node-only). Use in server components / routes
 * so premium gating stays correct when JWT `plan` is stale (e.g. after Stripe webhooks).
 */
export async function getMemberPlan(): Promise<MemberPlan> {
  const session = await auth();
  const id = session?.user?.id;
  if (!id) return "free";

  const row = await prisma.user.findUnique({
    where: { id },
    select: { plan: true },
  });
  return row?.plan === "premium" ? "premium" : "free";
}
