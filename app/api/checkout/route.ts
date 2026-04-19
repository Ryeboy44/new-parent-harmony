import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { siteBaseUrl } from "@/data/site-url";
import { prisma } from "@/lib/prisma";
import {
  priceIdForBilling,
  type BillingInterval,
} from "@/lib/stripe-billing";
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

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const billing = (body as { billing?: string }).billing;
  if (billing !== "monthly" && billing !== "annual") {
    return NextResponse.json({ error: "Invalid billing interval" }, { status: 400 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
    });
    if (!user?.email) {
      return NextResponse.json(
        { error: "Your account needs an email before checkout." },
        { status: 400 },
      );
    }

    const stripe = getStripe();
    const priceId = priceIdForBilling(billing as BillingInterval);
    const origin = requestOrigin(req);

    const checkoutSession = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/app/upgrade/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/app/upgrade/cancel`,
      client_reference_id: user.id,
      metadata: { userId: user.id },
      subscription_data: {
        metadata: { userId: user.id },
      },
      ...(user.stripeCustomerId
        ? { customer: user.stripeCustomerId }
        : { customer_email: user.email }),
      allow_promotion_codes: true,
    });

    if (!checkoutSession.url) {
      return NextResponse.json(
        { error: "Stripe did not return a checkout URL" },
        { status: 502 },
      );
    }

    return NextResponse.json({ url: checkoutSession.url });
  } catch (err) {
    console.error("[checkout]", err);
    const message =
      err instanceof Error && err.message.includes("STRIPE_SECRET_KEY")
        ? "Billing is not configured on this server."
        : "Could not start checkout. Please try again in a moment.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
