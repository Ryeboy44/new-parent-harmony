/** Placeholder dashboard copy and links — swap for user-specific data later. */

export const DASHBOARD_WELCOME = {
  eyebrow: "Your dashboard",
  heading: "Welcome to New Parent Harmony",
  subtext:
    "A calm corner for you—whether you are still expecting or already in the thick of it. Explore gentle guidance for pregnancy, postpartum, feeding, sleep, and recovery at your own pace. There is no rush here.",
} as const;

export const DASHBOARD_CONTINUE = {
  title: "Comfort measures after birth",
  description: "Simple ideas for rest, warmth, and feeling a little more like yourself.",
  meta: "Support library · Article",
  href: "/app/support-library",
} as const;

export const DASHBOARD_QUICK_ACCESS = [
  {
    href: "/app/weekly-guide",
    label: "Weekly Guide",
    hint: "Week-by-week reassurance",
  },
  {
    href: "/app/support-library",
    label: "Support Library",
    hint: "Articles & checklists",
  },
  { href: "/app/tools", label: "Tools", hint: "Trackers & planners" },
  {
    href: "/app/upgrade",
    label: "Upgrade",
    hint: "More depth when you are ready",
  },
] as const;

export const DASHBOARD_FREE_ESSENTIALS = [
  {
    title: "Hospital Bag Checklist",
    href: "/app/support-library",
  },
  {
    title: "Birth Plan Basics",
    href: "/app/support-library",
  },
  {
    title: "Safe Sleep Setup",
    href: "/app/support-library",
  },
  {
    title: "Nursery Essentials",
    href: "/app/support-library",
  },
  {
    title: "Feeding Station Checklist",
    href: "/app/support-library",
  },
  {
    title: "When to Ask for Help",
    href: "/app/support-library",
  },
] as const;

export const DASHBOARD_PREMIUM_PREVIEWS = [
  {
    title: "1:1 sleep rhythm review",
    teaser: "A personalized look at nights and naps tailored to your baby and your values.",
  },
  {
    title: "Private feeding consult recap",
    teaser: "Structured notes and next steps after a lactation-focused session.",
  },
  {
    title: "Postpartum recovery roadmap",
    teaser: "A gentle week-by-week plan for healing, energy, and emotional steadiness.",
  },
] as const;
