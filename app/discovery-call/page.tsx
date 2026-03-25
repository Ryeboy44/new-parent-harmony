import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Free 15-minute chat",
  description:
    "You’re being redirected to book a free 15-minute chat with New Parent Harmony—postpartum, lactation, and infant sleep support for Montgomery County, MD and surrounding areas.",
};

/** Alias for bookmarks and shared links — the form lives on `/contact`. */
export default function DiscoveryCallRedirectPage() {
  redirect("/contact");
}
