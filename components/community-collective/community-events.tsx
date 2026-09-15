import { SectionHeading } from "@/components/home/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { CommunityEventCard } from "@/components/community-collective/community-event-card";
import { eventsSection } from "@/data/community-collective-content";
import type { CommunityEvent } from "@/lib/sanity/types";

type CommunityEventsProps = {
  events: CommunityEvent[];
};

export function CommunityEvents({ events }: CommunityEventsProps) {
  return (
    <SectionShell id="community-events" background="white" padding="tight">
      <SectionHeading
        eyebrow="What's on"
        title={eventsSection.title}
        description={eventsSection.description}
        compact
      />

      {events.length > 0 ? (
        <ul
          className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3"
          aria-label="Upcoming community events"
        >
          {events.map((event) => (
            <li key={event._id}>
              <CommunityEventCard event={event} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mx-auto max-w-lg rounded-2xl border border-border-soft/60 bg-surface-muted/50 px-6 py-10 text-center sm:px-8">
          <p className="font-display text-xl text-foreground">
            {eventsSection.emptyHeadline}
          </p>
          <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
            {eventsSection.emptyBody}
          </p>
        </div>
      )}
    </SectionShell>
  );
}
