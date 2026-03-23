import type { Metadata } from "next";
import { DiscoveryCallForm } from "@/components/discovery-call/discovery-call-form";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteNavbar } from "@/components/home/site-navbar";

export const metadata: Metadata = {
  title: "Book a discovery call",
  description:
    "Request a confidential discovery call for postpartum doula care, lactation support, or infant sleep help. Serving Montgomery County, MD and surrounding areas, with virtual options when that fits best.",
  openGraph: {
    title: "Book a discovery call | New Parent Harmony",
    description:
      "Reach out for calm, no-pressure postpartum, lactation, or sleep support—Montgomery County, MD and surrounding areas.",
  },
};

export default function ContactPage() {
  return (
    <>
      <SiteNavbar />
      <main
        id="main-content"
        className="flex flex-1 flex-col border-b border-border-soft/40 bg-cream"
      >
        <div className="mx-auto w-full max-w-xl flex-1 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <DiscoveryCallForm />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
