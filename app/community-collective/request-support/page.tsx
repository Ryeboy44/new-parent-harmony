import type { Metadata } from "next";
import { CollectivePageNav } from "@/components/community-collective/collective-page-nav";
import { CollectiveScope } from "@/components/community-collective/collective-scope";
import { RequestSupportForm } from "@/components/community-collective/request-support-form";
import { RequestSupportHero } from "@/components/community-collective/request-support-hero";
import { RequestSupportImage } from "@/components/community-collective/request-support-image";
import { RequestSupportPaused } from "@/components/community-collective/request-support-paused";
import { ServiceAreaStrip } from "@/components/community-collective/service-area-strip";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteNavbar } from "@/components/home/site-navbar";
import { requestSupportPage } from "@/data/community-collective-content";
import { siteBaseUrl } from "@/data/site-url";
import { getCommunityCollectiveSettings } from "@/lib/sanity/fetch";

const pageDescription =
  "Request funded or reduced-cost postpartum support through the New Parent Harmony Community Collective. In-person support serves Montgomery County, Maryland. Virtual support may be available nationwide. Submitting a request does not guarantee services.";

export const metadata: Metadata = {
  title: {
    absolute: "Request Support | New Parent Harmony Community Collective",
  },
  description: pageDescription,
  alternates: { canonical: "/community-collective/request-support" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Request Support | New Parent Harmony Community Collective",
    description: pageDescription,
    url: `${siteBaseUrl}/community-collective/request-support`,
    type: "website",
  },
};

export const revalidate = 60;

export default async function RequestSupportPage() {
  const settings = await getCommunityCollectiveSettings();
  const paused = settings.applicationsStatus === "paused";

  return (
    <>
      <SiteNavbar />
      <CollectiveScope>
        <CollectivePageNav />
        <main id="main-content" className="flex flex-1 flex-col">
        <RequestSupportHero />
        <RequestSupportImage />
        <ServiceAreaStrip
          headingId="request-support-service-area"
          places={requestSupportPage.serviceArea.places}
          qualifier={requestSupportPage.serviceArea.qualifier}
          compact
        />
        <section
          className="bg-cream"
          aria-label={paused ? "Request status" : "Request support form"}
        >
          <div className="mx-auto w-full max-w-2xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            {paused ? <RequestSupportPaused /> : <RequestSupportForm />}
          </div>
        </section>
      </main>
      </CollectiveScope>
      <SiteFooter />
    </>
  );
}
