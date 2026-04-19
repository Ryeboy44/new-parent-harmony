"use client";

import type { ReactNode } from "react";
import { useCallback, useState } from "react";
import { buttonBase, buttonVariantClass } from "@/components/shared/ui/button-classes";
import type { BillingInterval } from "@/lib/stripe-billing";

type Props = {
  billing: BillingInterval;
  planName: string;
  children: ReactNode;
};

export function StripeSubscriptionButton({ billing, planName, children }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const startCheckout = useCallback(async () => {
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ billing }),
      });
      const data = (await res.json().catch(() => ({}))) as { url?: string; error?: string };
      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }
      if (data.url) {
        window.location.href = data.url;
        return;
      }
      setError("Checkout did not return a link. Please try again.");
    } catch {
      setError("Could not reach the server. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }, [billing]);

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={startCheckout}
        disabled={loading}
        className={`${buttonBase} ${buttonVariantClass.primary} w-full`}
        aria-busy={loading}
        aria-label={
          loading
            ? `${planName} — opening secure checkout`
            : `${planName} — continue to checkout`
        }
      >
        {loading ? "One moment…" : children}
      </button>
      {error ? (
        <p className="mt-2 text-center text-sm text-red-800/90 dark:text-red-200/90" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
