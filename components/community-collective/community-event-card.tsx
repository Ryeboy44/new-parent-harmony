import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { surfaceCard } from "@/components/ui/surface-card";
import { formatEventDate, formatEventTimeRange } from "@/lib/format-date";
import { buildSanityCdnUrl } from "@/lib/sanity/image-url";
import type { CommunityEvent } from "@/lib/sanity/types";

/** Where the event happens, phrased for the card. */
function placeLabel(event: CommunityEvent): string {
  if (event.format === "virtual") return "Virtual";
  if (event.format === "hybrid") {
    return event.location ? `${event.location} · Virtual option` : "In person and virtual";
  }
  return event.location || "In person";
}

export function CommunityEventCard({ event }: { event: CommunityEvent }) {
  const imageUrl = buildSanityCdnUrl(event.featuredImage?.asset, {
    width: 800,
    height: 500,
  });
  const timeRange = formatEventTimeRange(event.startTime, event.endTime);
  const isCancelled = event.status === "cancelled";

  return (
    <article
      id={`event-${event.slug}`}
      className={`${surfaceCard} flex h-full scroll-mt-28 flex-col overflow-hidden p-0`}
    >
      {imageUrl ? (
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-green-wash/40">
          <Image
            src={imageUrl}
            alt={event.featuredImage?.alt || event.title}
            fill
            className="object-cover object-center"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        {event.featured || isCancelled ? (
          <div className="mb-3 flex flex-wrap gap-2">
            {isCancelled ? (
              <span className="rounded-full border border-border-soft/70 bg-surface-muted/80 px-2.5 py-0.5 text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-muted">
                Cancelled
              </span>
            ) : null}
            {event.featured && !isCancelled ? (
              <span className="rounded-full border border-harmony-green/25 bg-green-wash/60 px-2.5 py-0.5 text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-harmony-green-deep">
                Featured
              </span>
            ) : null}
          </div>
        ) : null}

        <h3 className="font-display text-lg font-normal leading-snug text-foreground sm:text-xl">
          {event.title}
        </h3>

        <div className="mt-3 flex flex-col gap-1 text-[0.8125rem] text-muted sm:text-sm">
          <p>
            <time dateTime={event.eventDate}>{formatEventDate(event.eventDate)}</time>
            {timeRange ? (
              <>
                {" "}
                <span aria-hidden>·</span> {timeRange}
              </>
            ) : null}
          </p>
          <p>{placeLabel(event)}</p>
        </div>

        <p className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
          {event.shortDescription}
        </p>

        {event.registrationUrl && !isCancelled ? (
          <div className="mt-6">
            <ButtonLink
              href={event.registrationUrl}
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Register<span className="sr-only"> for {event.title}</span>
            </ButtonLink>
          </div>
        ) : null}
      </div>
    </article>
  );
}
