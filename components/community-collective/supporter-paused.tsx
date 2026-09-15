import { supporterPage } from "@/data/community-collective-content";

export function SupporterPaused() {
  return (
    <article
      className="overflow-hidden rounded-[1.25rem] border border-border-soft/60 bg-surface shadow-[0_1px_2px_rgb(44_52_44_/0.05),0_20px_48px_-18px_rgb(44_52_44_/0.1)]"
      aria-labelledby="supporter-paused-heading"
    >
      <div
        className="h-1 w-full shrink-0 bg-gradient-to-r from-green-wash via-harmony-green/25 to-green-wash"
        aria-hidden
      />
      <div className="px-6 py-8 sm:px-8 sm:py-10">
        <h2
          id="supporter-paused-heading"
          className="font-display text-[1.5rem] font-normal leading-tight tracking-[-0.02em] text-foreground sm:text-2xl"
        >
          {supporterPage.paused.title}
        </h2>
        <p className="mt-5 text-[0.9375rem] leading-[1.65] text-muted sm:mt-6 sm:text-base">
          {supporterPage.paused.body}
        </p>
      </div>
    </article>
  );
}
