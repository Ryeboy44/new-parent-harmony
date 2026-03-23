import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Discovery call",
  description:
    "You’re being redirected to book a discovery call with New Parent Harmony—postpartum, lactation, and sleep support for Montgomery County, MD and surrounding areas.",
};

/** Alias for bookmarks and shared links — the form lives on `/contact`. */
export default function DiscoveryCallRedirectPage() {
  redirect("/contact");
}
