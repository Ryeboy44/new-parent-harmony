import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { siteBaseUrl } from "@/data/site-url";
import { prisma } from "@/lib/prisma";
import { getStripe } from "@/lib/stripe";

export const runtime = "nodejs";

function requestOrigin(req: NextRequest): string {
  const forwardedHost = req.headers.get("x-forwarded-host");
  const forwardedProto = req.headers.get("x-forwarded-proto");
  if (forwardedHost) {
    return `${forwardedProto ?? "https"}://${forwardedHost}`;
  }
  return siteBaseUrl;
}

/**
 * Creates a Stripe Customer Portal session (manage/cancel subscription).
 * Call from the client when you add a “Manage billing” button.
 */
export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { stripeCustomerId: true, plan: true },
  });

  if (user?.plan !== "premium") {
    return NextResponse.json(
      {
        error:
          "Billing management is available for premium members. You can explore plans anytime.",
      },
      { status: 403 },
    );
  }

  if (!user?.stripeCustomerId?.trim()) {
    return NextResponse.json(
      {
        error:
          "We could not find a billing profile yet. If you just subscribed, wait a moment and refresh—or open View plans to connect checkout.",
      },
      { status: 400 },
    );
  }

  try {
    const stripe = getStripe();
    const origin = requestOrigin(req);
    const portal = await stripe.billingPortal.sessions.create({
      customer: user.stripeCustomerId,
      return_url: `${origin}/app/account`,
    });
    if (!portal.url) {
      return NextResponse.json(
        { error: "Stripe did not return a portal URL" },
        { status: 502 },
      );
    }
    return NextResponse.json({ url: portal.url });
  } catch (err) {
    console.error("[billing portal]", err);
    return NextResponse.json(
      { error: "Could not open billing portal." },
      { status: 500 },
    );
  }
}
