import type { Metadata } from "next";
import { ApproachSection } from "@/components/services/approach-section";
import { EarlySupportBannerSection } from "@/components/services/early-support-banner";
import { NotSureSection } from "@/components/services/not-sure-section";
import { ServiceDetailBlock } from "@/components/services/service-detail-block";
import { ServicesHero } from "@/components/services/services-hero";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteNavbar } from "@/components/home/site-navbar";
import { serviceDetails } from "@/data/services-page-content";

export const metadata: Metadata = {
  title: "Postpartum doula, lactation & sleep services",
  description:
    "Postpartum doula care in Montgomery County MD, lactation counseling in Maryland, pediatric sleep consulting, and Sleep & Feed Reset — in-home in Bethesda and Rockville or virtual newborn support near you.",
  openGraph: {
    title: "Postpartum, lactation & sleep services | New Parent Harmony",
    description:
      "Certified postpartum doula, lactation counselor, and sleep consultant support for families in Montgomery County, MD and beyond — transparent pricing and free discovery calls.",
  },
};

const serviceVariants: Array<"cream" | "white" | "subtle"> = [
  "white",
  "cream",
  "subtle",
  "white",
];

export default function ServicesPage() {
  return (
    <>
      <SiteNavbar />
      <main id="main-content" className="flex flex-1 flex-col">
        <ServicesHero />
        <EarlySupportBannerSection />
        <ApproachSection />

        <div id="services-list" className="scroll-mt-24">
          {serviceDetails.map((service, index) => (
            <ServiceDetailBlock
              key={service.id}
              service={service}
              variant={serviceVariants[index] ?? "white"}
            />
          ))}
        </div>

        <NotSureSection />
      </main>
      <SiteFooter />
    </>
  );
}
