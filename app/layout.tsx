import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import { SkipToMainLink } from "@/components/ui/skip-to-main-link";
import { siteBaseUrl } from "@/data/site-url";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteBaseUrl),
  title: {
    default:
      "New Parent Harmony | Postpartum, lactation & infant sleep support",
    template: "%s | New Parent Harmony",
  },
  description:
    "Certified postpartum doula, lactation counselor, and pediatric sleep consultant offering calm, in-home and virtual support for families in Montgomery County, MD and surrounding areas.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "New Parent Harmony",
  },
  verification: {
    google: "a5Tfyd4pi4wPaBmbPZ0qbxEi-KIyavW_lNKHj9mw9qY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream text-foreground text-pretty">
        <SkipToMainLink />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
