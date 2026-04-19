import type Stripe from "stripe";
import { prisma } from "@/lib/prisma";
import { subscriptionStatusToPlan } from "@/lib/stripe-billing";

function customerIdFromStripe(
  customer: string | Stripe.Customer | Stripe.DeletedCustomer | null,
): string | undefined {
  if (typeof customer === "string") return customer;
  if (customer && "deleted" in customer && customer.deleted) return undefined;
  if (customer && "id" in customer) return customer.id;
  return undefined;
}

/**
 * Applies subscription state to the correct Prisma user (metadata.userId first,
 * then stripeCustomerId match).
 */
export async function syncUserFromSubscription(
  subscription: Stripe.Subscription,
): Promise<void> {
  const userId = subscription.metadata?.userId;
  const customerId = customerIdFromStripe(subscription.customer);
  const plan = subscriptionStatusToPlan(subscription.status);
  const isEnded =
    subscription.status === "canceled" ||
    subscription.status === "incomplete_expired" ||
    subscription.status === "unpaid";

  const subscriptionId = isEnded ? null : subscription.id;

  if (userId) {
    await prisma.user.update({
      where: { id: userId },
      data: {
        plan,
        ...(customerId ? { stripeCustomerId: customerId } : {}),
        stripeSubscriptionId: subscriptionId,
      },
    });
    return;
  }

  if (customerId) {
    await prisma.user.updateMany({
      where: { stripeCustomerId: customerId },
      data: {
        plan,
        stripeSubscriptionId: subscriptionId,
      },
    });
  }
}
