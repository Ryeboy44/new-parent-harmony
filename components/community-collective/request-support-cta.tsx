import { ButtonLink } from "@/components/ui/button-link";
import {
  COLLECTIVE_PAUSED_MESSAGE,
  COLLECTIVE_REQUEST_HREF,
  COLLECTIVE_REQUEST_LABEL,
} from "@/data/community-collective-content";
import type { CollectiveApplicationsStatus } from "@/lib/sanity/types";

type RequestSupportCtaProps = {
  applicationsStatus: CollectiveApplicationsStatus;
  variant?: "primary" | "secondary";
  className?: string;
};

/**
 * The Request Support button, swapped for a short notice when applications are
 * paused in Sanity. Matches button sizing so surrounding layout stays put.
 */
export function RequestSupportCta({
  applicationsStatus,
  variant = "primary",
  className = "",
}: RequestSupportCtaProps) {
  if (applicationsStatus === "paused") {
    return (
      <p
        className={`inline-flex min-h-11 items-center justify-center rounded-xl border border-border-soft/70 bg-surface-muted/70 px-5 py-2.5 text-center text-[0.9375rem] font-medium text-muted sm:min-h-12 sm:text-base ${className}`.trim()}
      >
        {COLLECTIVE_PAUSED_MESSAGE}
      </p>
    );
  }

  return (
    <ButtonLink
      href={COLLECTIVE_REQUEST_HREF}
      variant={variant}
      className={className}
    >
      {COLLECTIVE_REQUEST_LABEL}
    </ButtonLink>
  );
}
