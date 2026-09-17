type CollectiveLabelProps = {
  className?: string;
};

/** Shared Collective identifier — a small warm label, not a logo. */
export function CollectiveLabel({ className = "" }: CollectiveLabelProps) {
  return (
    <p
      className={`inline-flex w-fit items-center rounded-full border border-clay/20 bg-clay-wash px-3 py-1 text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-clay-deep sm:text-xs ${className}`.trim()}
    >
      Community Collective
    </p>
  );
}
