import { SectionHeading } from "@/components/home/section-heading";
import { surfaceCardMuted } from "@/components/ui/surface-card";
import { SectionShell } from "@/components/ui/section-shell";
import { servicesTestimonialPlaceholders } from "@/data/services-testimonials";

export function ServicesTestimonialsPreview() {
  return (
    <SectionShell background="cream" padding="tight" className="animate-fade-up-soft">
      <SectionHeading
        eyebrow="Families supported"
        title="Words from the early weeks"
        description="A preview of reflections from local families — more stories will be added over time."
        align="center"
      />

      <ul className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {servicesTestimonialPlaceholders.map((item) => (
          <li key={item.context}>
            <article
              className={`${surfaceCardMuted} flex h-full flex-col border-border-soft/45 bg-gradient-to-b from-surface to-cream-deep/25 p-6 sm:p-7`}
            >
              <p className="text-[0.66rem] font-medium uppercase tracking-[0.16em] text-harmony-green-deep/85 sm:text-[0.6875rem]">
                {item.context}
              </p>
              <blockquote className="mt-5 flex-1">
                <p className="text-[0.97rem] leading-relaxed text-foreground sm:text-base">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </blockquote>
              <p className="mt-6 text-xs text-muted/90">Placeholder — verified testimonial coming soon</p>
            </article>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
