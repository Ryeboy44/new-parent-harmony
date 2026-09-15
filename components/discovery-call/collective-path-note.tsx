import { ButtonLink } from "@/components/ui/button-link";
import { contactCollectivePath } from "@/data/site-contact";

export function CollectivePathNote() {
  return (
    <aside
      className="rounded-[1.25rem] border border-border-soft/60 bg-green-wash/35 px-5 py-5 shadow-soft sm:px-6 sm:py-6"
      aria-labelledby="contact-collective-path-heading"
    >
      <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-harmony-green-muted">
        Community Collective
      </p>
      <h2
        id="contact-collective-path-heading"
        className="mt-2 font-display text-[1.25rem] font-normal leading-tight tracking-[-0.02em] text-foreground sm:text-[1.375rem]"
      >
        {contactCollectivePath.title}
      </h2>
      <p className="mt-3 text-sm leading-[1.65] text-muted sm:text-[0.9375rem]">
        {contactCollectivePath.description}
      </p>
      <div className="mt-5 flex flex-col items-start gap-3">
        <ButtonLink
          href={contactCollectivePath.primaryCta.href}
          className="w-full min-w-0 sm:w-auto"
        >
          {contactCollectivePath.primaryCta.label}
        </ButtonLink>
        <ButtonLink href={contactCollectivePath.secondaryCta.href} variant="ghost">
          {contactCollectivePath.secondaryCta.label}
        </ButtonLink>
      </div>
    </aside>
  );
}
