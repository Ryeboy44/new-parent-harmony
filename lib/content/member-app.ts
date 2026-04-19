/** Member app primary navigation — single source for labels and hrefs. */
export const MEMBER_NAV_ITEMS = [
  { href: "/app", label: "Dashboard" },
  { href: "/app/weekly-guide", label: "Weekly guide" },
  { href: "/app/support-library", label: "Support library" },
  { href: "/app/tools", label: "Tools" },
  { href: "/app/upgrade", label: "Upgrade" },
  { href: "/app/account", label: "Account" },
] as const;

export type MemberPageSlug =
  | "weekly-guide"
  | "support-library"
  | "tools"
  | "upgrade";

/** Placeholder copy for MVP sections — replace with CMS or DB-backed content later. */
export const MEMBER_PAGE_BLURBS: Record<
  MemberPageSlug,
  { title: string; body: string }
> = {
  "weekly-guide": {
    title: "Weekly guide",
    body: "Gentle week-by-week prompts and reassurance will live here for freemium members.",
  },
  "support-library": {
    title: "Support library",
    body: "Articles, checklists, and short audio or video clips you can dip into between visits.",
  },
  tools: {
    title: "Tools",
    body: "Simple trackers and planners (sleep, feeding, mood) — built to stay calm, not clinical.",
  },
  upgrade: {
    title: "Upgrade",
    body: "When you are ready, unlock deeper guidance and live touchpoints — details coming soon.",
  },
};
