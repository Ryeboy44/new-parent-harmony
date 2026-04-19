/** Placeholder dashboard copy and links — swap for user-specific data later. */

export const DASHBOARD_WELCOME = {
  eyebrow: "Your dashboard",
  heading: "Welcome to New Parent Harmony",
  subtext:
    "A calm corner you can open anytime—starting with a small focus for today and a week that meets you where you are. Explore pregnancy, postpartum, feeding, sleep, and recovery at your own pace. There is no rush here.",
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
    href: "/app/tools#tool-hospital-bag",
  },
  {
    title: "Birth Plan Worksheet",
    href: "/app/tools#tool-birth-plan",
  },
  {
    title: "Safe Sleep Checklist",
    href: "/app/tools#tool-safe-sleep",
  },
  {
    title: "Nursery Essentials",
    href: "/app/tools#tool-nursery-essentials",
  },
  {
    title: "Hospital Tour Questions",
    href: "/app/tools#tool-hospital-tour",
  },
  {
    title: "Route to Hospital",
    href: "/app/tools#tool-route-hospital",
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
