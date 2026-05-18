import { earlySupportMessage } from "@/data/services-page-content";

export function EarlySupportBanner() {
  return (
    <aside
      className="animate-fade-up-soft border-b border-border-soft/40 bg-green-wash/40 py-10 md:py-12"
      aria-label="Early support reminder"
      style={{ animationDelay: "80ms" }}
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-10">
        <p className="text-[0.9375rem] leading-relaxed text-foreground/90 sm:text-base">
          {earlySupportMessage}
        </p>
      </div>
    </aside>
  );
}
