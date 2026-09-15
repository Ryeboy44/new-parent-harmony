import type { Metadata } from "next";
import { CollectivePlaceholder } from "@/components/community-collective/collective-placeholder";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteNavbar } from "@/components/home/site-navbar";
import { partnerPlaceholder } from "@/data/community-collective-content";

export const metadata: Metadata = {
  title: "Partner With the Collective",
  description:
    "Partner with the New Parent Harmony Community Collective through sponsorships, grants, referrals and community programming. Partnership details coming soon.",
  /** Thin placeholder until the full partnership flow is built. */
  robots: { index: false, follow: true },
};

export default function PartnerPage() {
  return (
    <>
      <SiteNavbar />
      <main id="main-content" className="flex flex-1 flex-col">
        <CollectivePlaceholder
          eyebrow={partnerPlaceholder.eyebrow}
          title={partnerPlaceholder.title}
          paragraphs={partnerPlaceholder.paragraphs}
          ctaHref={partnerPlaceholder.ctaHref}
          ctaLabel={partnerPlaceholder.ctaLabel}
        />
      </main>
      <SiteFooter />
    </>
  );
}
