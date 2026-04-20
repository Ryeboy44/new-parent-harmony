/** Member app primary navigation — single source for labels and hrefs. */
export const MEMBER_NAV_ITEMS = [
  { href: "/app", label: "Home" },
  { href: "/app/topics", label: "Topics" },
  { href: "/app/support", label: "Support" },
  { href: "/app/account", label: "Account" },
] as const;

export type MemberPageSlug =
  | "topics"
  | "resource-library"
  | "support";

/** Placeholder copy for MVP sections — replace with CMS or DB-backed content later. */
export const MEMBER_PAGE_BLURBS: Record<
  MemberPageSlug,
  { title: string; body: string }
> = {
  topics: {
    title: "Topics",
    body: "Find concise, practical guidance by need: feeding, sleep, recovery, and more.",
  },
  "resource-library": {
    title: "Resource library",
    body: "Scannable guides, checklists, and trusted links organized for tired brains.",
  },
  support: {
    title: "Support",
    body: "Digital and live support options so you can choose the level of help that fits this season.",
  },
};
