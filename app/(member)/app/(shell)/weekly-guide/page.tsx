import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Weekly guide (moved)",
};

export default function WeeklyGuideRedirectPage() {
  redirect("/app/topics/getting-ready");
}
