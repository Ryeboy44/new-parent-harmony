/** Placeholder dashboard copy and links — swap for user-specific data later. */

export const DASHBOARD_WELCOME = {
  eyebrow: "Your home",
  heading: "You don’t have to hold everything in your head",
  subtext:
    "This app is organized by what you need—not a timeline. Start with a tiny focus for today, then open the topic that matches your night (feeding, sleep, recovery, and more).",
} as const;

export const DASHBOARD_QUICK_ACCESS = [
  {
    href: "/app/topics",
    label: "Topics",
    hint: "Find help by need",
  },
  {
    href: "/app/support",
    label: "Resource library",
    hint: "Short reads & checklists",
  },
  {
    href: "/app/upgrade",
    label: "Support options",
    hint: "Digital + live help",
  },
] as const;

export const DASHBOARD_FREE_ESSENTIALS = [
  {
    title: "Hospital Bag Checklist",
    href: "/app/topics/getting-ready#tool-hospital-bag",
  },
  {
    title: "Birth Plan Worksheet",
    href: "/app/topics/getting-ready#tool-birth-plan",
  },
  {
    title: "Safe Sleep Checklist",
    href: "/app/topics/sleep#tool-safe-sleep",
  },
  {
    title: "Nursery Essentials",
    href: "/app/topics/home-setup#tool-nursery-essentials",
  },
  {
    title: "Hospital Tour Questions",
    href: "/app/topics/getting-ready#tool-hospital-tour",
  },
  {
    title: "Route to Hospital",
    href: "/app/topics/getting-ready#tool-route-hospital",
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
