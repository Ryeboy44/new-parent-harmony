import type { Metadata } from "next";
import { CollectiveFinalCta } from "@/components/community-collective/collective-final-cta";
import { CollectiveHero } from "@/components/community-collective/collective-hero";
import { CollectiveImpact } from "@/components/community-collective/collective-impact";
import { CollectiveModel } from "@/components/community-collective/collective-model";
import { CollectivePageNav } from "@/components/community-collective/collective-page-nav";
import { CommunityEvents } from "@/components/community-collective/community-events";
import { CommunityProgramming } from "@/components/community-collective/community-programming";
import { HowSupportWorks } from "@/components/community-collective/how-support-works";
import { HowWeHelp } from "@/components/community-collective/how-we-help";
import { PartnerSection } from "@/components/community-collective/partner-section";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteNavbar } from "@/components/home/site-navbar";
import { EarlySupportBanner } from "@/components/ui/early-support-banner";
import { siteBaseUrl } from "@/data/site-url";
import {
  getCommunityCollectiveSettings,
  getUpcomingCommunityEvents,
} from "@/lib/sanity/fetch";
import type { CommunityEvent } from "@/lib/sanity/types";

const pageDescription =
  "The New Parent Harmony Community Collective is being built to help make postpartum support, education and community connection more accessible in Montgomery County, MD, with virtual support that may be available nationwide.";

export const metadata: Metadata = {
  title: {
    absolute: "New Parent Harmony Community Collective | Montgomery County, MD",
  },
  description: pageDescription,
  alternates: { canonical: "/community-collective" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "New Parent Harmony Community Collective | Montgomery County, MD",
    description: pageDescription,
    url: `${siteBaseUrl}/community-collective`,
    type: "website",
  },
};

export const revalidate = 60;

const attendanceMode = {
  "in-person": "https://schema.org/OfflineEventAttendanceMode",
  virtual: "https://schema.org/OnlineEventAttendanceMode",
  hybrid: "https://schema.org/MixedEventAttendanceMode",
} as const;

const collectiveUrl = `${siteBaseUrl}/community-collective`;

function eventSchema(event: CommunityEvent) {
  const isVirtual = event.format === "virtual" || event.format === "hybrid";

  return {
    "@type": "Event",
    name: event.title,
    description: event.shortDescription,
    startDate: event.eventDate,
    eventAttendanceMode: attendanceMode[event.format],
    eventStatus:
      event.status === "cancelled"
        ? "https://schema.org/EventCancelled"
        : "https://schema.org/EventScheduled",
    url: event.registrationUrl || `${collectiveUrl}#event-${event.slug}`,
    organizer: {
      "@type": "Organization",
      name: "New Parent Harmony",
      url: siteBaseUrl,
    },
    location: isVirtual
      ? {
          "@type": "VirtualLocation",
          url: event.registrationUrl || collectiveUrl,
        }
      : {
          "@type": "Place",
          name: event.location || "Montgomery County, MD",
          address: event.location || "Montgomery County, MD",
        },
  };
}

export default async function CommunityCollectivePage() {
  const [settings, events] = await Promise.all([
    getCommunityCollectiveSettings(),
    getUpcomingCommunityEvents(),
  ]);

  const eventListSchema = events.length
    ? {
        "@context": "https://schema.org",
        "@graph": events.map(eventSchema),
      }
    : null;

  return (
    <>
      <SiteNavbar />
      <CollectivePageNav />
      <main id="main-content" className="flex flex-1 flex-col">
        <CollectiveHero applicationsStatus={settings.applicationsStatus} />

        {settings.applicationsStatus === "paused" && settings.statusMessage ? (
          <EarlySupportBanner
            message={settings.statusMessage}
            ariaLabel="Community Collective request status"
          />
        ) : null}

        <CollectiveModel />
        <HowWeHelp />
        <HowSupportWorks applicationsStatus={settings.applicationsStatus} />
        <CommunityProgramming />
        <CommunityEvents events={events} />
        <PartnerSection />
        <CollectiveImpact settings={settings} />
        <CollectiveFinalCta applicationsStatus={settings.applicationsStatus} />
      </main>
      <SiteFooter />
      {eventListSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventListSchema) }}
        />
      ) : null}
    </>
  );
}
