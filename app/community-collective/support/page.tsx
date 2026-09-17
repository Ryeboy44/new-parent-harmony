import type { Metadata } from "next";
import { CollectivePageNav } from "@/components/community-collective/collective-page-nav";
import { CollectiveScope } from "@/components/community-collective/collective-scope";
import { SponsorRecognition } from "@/components/community-collective/sponsor-recognition";
import { SupporterHero } from "@/components/community-collective/supporter-hero";
import { SupporterImpact } from "@/components/community-collective/supporter-impact";
import { SupporterInterestForm } from "@/components/community-collective/supporter-interest-form";
import { SupporterPaused } from "@/components/community-collective/supporter-paused";
import { WaysToSupport } from "@/components/community-collective/ways-to-support";
import { WhereSupportGoes } from "@/components/community-collective/where-support-goes";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteNavbar } from "@/components/home/site-navbar";
import { siteBaseUrl } from "@/data/site-url";
import {
  getActiveCollectiveSupporters,
  getCommunityCollectiveSettings,
} from "@/lib/sanity/fetch";

const pageDescription =
  "Support the New Parent Harmony Community Collective through sponsorship, partnership, grants or individual involvement. Help expand access to postpartum care, education and community support as the Collective grows.";

export const metadata: Metadata = {
  title: {
    absolute: "Support the Community Collective | New Parent Harmony",
  },
  description: pageDescription,
  alternates: { canonical: "/community-collective/support" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Support the Community Collective | New Parent Harmony",
    description: pageDescription,
    url: `${siteBaseUrl}/community-collective/support`,
    type: "website",
  },
};

export const revalidate = 60;

type SupportPageProps = {
  searchParams: Promise<{ interest?: string; example?: string }>;
};

export default async function SupportTheCollectivePage({
  searchParams,
}: SupportPageProps) {
  const [{ interest, example }, settings, supporters] = await Promise.all([
    searchParams,
    getCommunityCollectiveSettings(),
    getActiveCollectiveSupporters(),
  ]);
  const inquiriesPaused = settings.supporterInquiriesStatus === "paused";

  return (
    <>
      <SiteNavbar />
      <CollectiveScope>
        <CollectivePageNav />
        <main id="main-content" className="flex flex-1 flex-col">
        <SupporterHero />
        <WhereSupportGoes />
        <WaysToSupport />
        <SponsorRecognition supporters={supporters} />
        <SupporterImpact settings={settings} />
        <section
          id="supporter-form"
          className="scroll-mt-28 border-b border-border-soft/40 bg-cream"
          aria-label={
            inquiriesPaused ? "Supporter inquiry status" : "Supporter interest form"
          }
        >
          <div className="mx-auto w-full max-w-2xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
            {inquiriesPaused ? (
              <SupporterPaused />
            ) : (
              <SupporterInterestForm
                key={`${interest ?? ""}-${example ?? ""}`}
                initialInterest={interest}
                initialExample={example}
              />
            )}
          </div>
        </section>
      </main>
      </CollectiveScope>
      <SiteFooter />
    </>
  );
}
