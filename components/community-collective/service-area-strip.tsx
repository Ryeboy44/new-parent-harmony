import { serviceAreaSection } from "@/data/community-collective-content";

type Place = {
  label: string;
  detail: string;
};

type ServiceAreaStripProps = {
  headingId?: string;
  places?: readonly Place[];
  qualifier?: string;
  compact?: boolean;
};

export function ServiceAreaStrip({
  headingId = "collective-service-area-heading",
  places = serviceAreaSection.places,
  qualifier = serviceAreaSection.qualifier,
  compact = false,
}: ServiceAreaStripProps) {
  return (
    <section
      className={
        compact
          ? "border-b border-clay/15 bg-clay-wash-deep/40 py-6 md:py-7"
          : "border-b border-clay/15 bg-clay-wash-deep/40 py-7 md:py-8"
      }
      aria-labelledby={headingId}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <h2 id={headingId} className="sr-only">
          Where support is offered
        </h2>
        <dl className="grid gap-4 sm:grid-cols-2 sm:gap-8 lg:max-w-3xl">
          {places.map((place) => (
            <div key={place.label}>
              <dt className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-clay-muted sm:text-xs">
                {place.label}
              </dt>
              <dd className="mt-1 text-[0.9375rem] text-foreground sm:text-base">
                {place.detail}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 max-w-3xl text-xs leading-relaxed text-muted">
          {qualifier}
        </p>
      </div>
    </section>
  );
}
