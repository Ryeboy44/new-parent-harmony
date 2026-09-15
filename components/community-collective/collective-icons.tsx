import type { ReactNode } from "react";
import type {
  CollectiveHelpIcon,
  CollectivePartnerIcon,
} from "@/data/community-collective-content";

const svgProps = {
  viewBox: "0 0 24 24",
  className: "h-6 w-6",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  "aria-hidden": true,
} as const;

export const helpIcons: Record<CollectiveHelpIcon, ReactNode> = {
  postpartum: (
    <svg {...svgProps}>
      <path
        d="M12 20.2s-6.6-4.2-6.6-8.8a3.6 3.6 0 0 1 6.6-2 3.6 3.6 0 0 1 6.6 2c0 4.6-6.6 8.8-6.6 8.8Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  feeding: (
    <svg {...svgProps}>
      <path
        d="M12 3.5c3.2 4 5 6.2 5 8.6a5 5 0 0 1-10 0c0-2.4 1.8-4.6 5-8.6Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  education: (
    <svg {...svgProps}>
      <rect x="3" y="5" width="18" height="11" rx="2" />
      <path d="M2.5 19.5h19" strokeLinecap="round" />
    </svg>
  ),
  connection: (
    <svg {...svgProps}>
      <circle cx="9" cy="9" r="3" />
      <path d="M3.75 19.25a5.25 5.25 0 0 1 10.5 0" strokeLinecap="round" />
      <circle cx="17.25" cy="10.75" r="2.25" />
      <path d="M16.2 15.6a4.4 4.4 0 0 1 4.05 3.65" strokeLinecap="round" />
    </svg>
  ),
};

export const partnerIcons: Record<CollectivePartnerIcon, ReactNode> = {
  sponsor: (
    <svg {...svgProps}>
      <circle cx="12" cy="12" r="9" />
      <path
        d="M12 16.4s-3.7-2.3-3.7-4.7a2.15 2.15 0 0 1 3.7-1.45 2.15 2.15 0 0 1 3.7 1.45c0 2.4-3.7 4.7-3.7 4.7Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  fund: (
    <svg {...svgProps}>
      <path
        d="M12 7.2C10.4 6 8.4 5.5 5.5 5.5v11c2.9 0 4.9.5 6.5 1.7 1.6-1.2 3.6-1.7 6.5-1.7v-11c-2.9 0-4.9.5-6.5 1.7Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 7.2v11" strokeLinecap="round" />
    </svg>
  ),
  partner: (
    <svg {...svgProps}>
      <circle cx="9.25" cy="12" r="5.25" />
      <circle cx="14.75" cy="12" r="5.25" />
    </svg>
  ),
};

/** Shared circular icon chip used across the Collective sections. */
export function IconChip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-wash/80 text-harmony-green-deep">
      {children}
    </span>
  );
}
