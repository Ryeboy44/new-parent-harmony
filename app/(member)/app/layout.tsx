import type { Metadata } from "next";
import { AppSessionProvider } from "@/components/member/app-session-provider";

export const metadata: Metadata = {
  title: "Member app",
  description:
    "Freemium postpartum tools and guides from New Parent Harmony — in active development.",
  robots: { index: false, follow: true },
};

/**
 * All `/app/*` routes (auth + shell). SessionProvider wraps children; shell chrome lives in `(shell)/layout.tsx`.
 */
export default function MemberAppRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppSessionProvider>{children}</AppSessionProvider>;
}
