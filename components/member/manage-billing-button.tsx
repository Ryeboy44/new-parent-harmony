"use client";

import { useCallback, useState } from "react";
import { buttonBase, buttonVariantClass } from "@/components/shared/ui/button-classes";

export function ManageBillingButton() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const openPortal = useCallback(async () => {
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/billing/portal", {
        method: "POST",
        credentials: "include",
      });
      const data = (await res.json().catch(() => ({}))) as { url?: string; error?: string };
      if (!res.ok) {
        setError(
          data.error ??
            "We could not open billing right now. You can try again in a moment.",
        );
        return;
      }
      if (data.url) {
        window.location.href = data.url;
        return;
      }
      setError("Something went wrong. Please try again.");
    } catch {
      setError("Could not reach the server. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div className="w-full max-w-md">
      <button
        type="button"
        onClick={openPortal}
        disabled={loading}
        className={`${buttonBase} ${buttonVariantClass.secondary} w-full sm:w-auto`}
        aria-busy={loading}
      >
        {loading ? "Opening billing…" : "Manage Billing"}
      </button>
      {error ? (
        <p className="mt-3 text-sm text-red-800/90 dark:text-red-200/90" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
