/** Shared styles for primary actions (ButtonLink + modal triggers) */
export const buttonBase =
  "inline-flex min-h-11 min-w-[10rem] touch-manipulation select-none items-center justify-center rounded-xl px-6 py-2.5 text-[0.9375rem] font-medium tracking-tight transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harmony-green-deep/60 focus-visible:ring-offset-2 focus-visible:ring-offset-cream active:transition-none sm:min-h-12 sm:text-base";

export const buttonVariantClass = {
  primary:
    "bg-harmony-green text-white shadow-soft hover:bg-harmony-green-deep hover:shadow-md hover:shadow-harmony-green/15 active:bg-[#567056] active:shadow-sm disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none disabled:saturate-75",
  secondary:
    "border border-border-soft/80 bg-surface text-foreground shadow-soft hover:border-harmony-green/25 hover:bg-cream-deep/90 hover:shadow-md active:bg-cream-deep active:shadow-sm disabled:pointer-events-none disabled:opacity-50",
  ghost:
    "min-h-0 min-w-0 border-0 bg-transparent px-0 py-1 text-harmony-green-deep shadow-none decoration-harmony-green-deep/35 underline-offset-[0.35em] transition-colors hover:text-foreground hover:underline",
} as const;
