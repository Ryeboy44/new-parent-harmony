import type Stripe from "stripe";

export type BillingInterval = "monthly" | "annual";

export function priceIdForBilling(billing: BillingInterval): string {
  const id =
    billing === "monthly"
      ? process.env.STRIPE_PRICE_MONTHLY
      : process.env.STRIPE_PRICE_ANNUAL;
  if (!id?.trim()) {
    throw new Error(
      billing === "monthly"
        ? "STRIPE_PRICE_MONTHLY is not set"
        : "STRIPE_PRICE_ANNUAL is not set",
    );
  }
  return id.trim();
}

/** Map Stripe subscription status to app plan (freemium rules). */
export function subscriptionStatusToPlan(
  status: Stripe.Subscription.Status,
): "free" | "premium" {
  if (status === "active" || status === "trialing") {
    return "premium";
  }
  return "free";
}
