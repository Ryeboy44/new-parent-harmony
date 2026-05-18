import { earlySupportMessage } from "@/data/services-page-content";
import { EarlySupportBanner } from "@/components/ui/early-support-banner";

export function EarlySupportBannerSection() {
  return <EarlySupportBanner message={earlySupportMessage} />;
}
