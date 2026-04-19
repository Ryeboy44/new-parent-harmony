import { NextRequest, NextResponse } from "next/server";
import type Stripe from "stripe";
import { prisma } from "@/lib/prisma";
import { subscriptionStatusToPlan } from "@/lib/stripe-billing";
import { getStripe } from "@/lib/stripe";
import { syncUserFromSubscription } from "@/lib/stripe-sync-user";

export const runtime = "nodejs";

function customerIdFromSession(
  customer: Stripe.Checkout.Session["customer"],
): string | undefined {
  if (typeof customer === "string") return customer;
  if (customer && !("deleted" in customer && customer.deleted) && "id" in customer) {
    return customer.id;
  }
  return undefined;
}

function subscriptionIdFromSession(
  subscription: Stripe.Checkout.Session["subscription"],
): string | undefined {
  if (typeof subscription === "string") return subscription;
  if (subscription && typeof subscription === "object" && "id" in subscription) {
    return subscription.id;
  }
  return undefined;
}

export async function POST(req: NextRequest) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) {
    console.error("[stripe webhook] STRIPE_WEBHOOK_SECRET is not set");
    return NextResponse.json({ error: "Not configured" }, { status: 503 });
  }

  const rawBody = await req.text();
  const signature = req.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = getStripe().webhooks.constructEvent(rawBody, signature, secret);
  } catch (err) {
    console.error("[stripe webhook] signature verification failed", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const sess = event.data.object as Stripe.Checkout.Session;
        if (sess.mode !== "subscription") break;
        const userId = sess.metadata?.userId ?? sess.client_reference_id;
        if (!userId) break;

        const customerId = customerIdFromSession(sess.customer);
        const subId = subscriptionIdFromSession(sess.subscription);
        if (!customerId || !subId) break;

        const sub = await getStripe().subscriptions.retrieve(subId);
        await prisma.user.update({
          where: { id: userId },
          data: {
            stripeCustomerId: customerId,
            stripeSubscriptionId: sub.id,
            plan: subscriptionStatusToPlan(sub.status),
          },
        });
        break;
      }
      case "customer.subscription.created":
      case "customer.subscription.updated":
      case "customer.subscription.deleted": {
        const sub = event.data.object as Stripe.Subscription;
        await syncUserFromSubscription(sub);
        break;
      }
      default:
        break;
    }
  } catch (err) {
    console.error("[stripe webhook] handler error", event.type, err);
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
