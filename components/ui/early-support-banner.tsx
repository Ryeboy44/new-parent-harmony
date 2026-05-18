type EarlySupportBannerProps = {
  message: string;
  /** Accessible name for the aside region */
  ariaLabel?: string;
};

export function EarlySupportBanner({
  message,
  ariaLabel = "Early support reminder",
}: EarlySupportBannerProps) {
  return (
    <aside
      className="border-b border-border-soft/40 bg-green-wash/40 py-12 md:py-14"
      aria-label={ariaLabel}
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-10">
        <p className="text-[0.9375rem] leading-[1.7] text-foreground/90 sm:text-base sm:leading-relaxed">
          {message}
        </p>
      </div>
    </aside>
  );
}
