import Stripe from "stripe";

let stripe: Stripe | null = null;

/**
 * Server-side Stripe client. Requires `STRIPE_SECRET_KEY`.
 * Publishable key (`NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`) is for future Elements / Payment Request only.
 */
export function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error("STRIPE_SECRET_KEY is not configured");
  }
  if (!stripe) {
    stripe = new Stripe(key, { typescript: true });
  }
  return stripe;
}
