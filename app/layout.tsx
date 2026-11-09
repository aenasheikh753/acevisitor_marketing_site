import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import type { ReactNode } from "react";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import JsonLd from "@/components/ui/JsonLd";
import { getSiteSettings } from "@/lib/content/site";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import "./globals.css";

const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"], display: "swap" });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], display: "swap" });

export function generateMetadata(): Metadata {
  const site = getSiteSettings();
  return {
    metadataBase: new URL(site.siteUrl),
    title: site.brandName,
    description: site.description,
  };
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const site = getSiteSettings();
  return (
    <html lang="en" className={`${dmSans.variable} ${manrope.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a className="skip-link" href="#main-content">
          {site.ui.skipLink}
        </a>
        <Header
          brandName={site.brandName}
          logo={site.logo}
          menu={site.menu}
          loginLabel={site.loginLabel}
          cta={site.cta}
          ui={site.ui}
        />
        <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <Footer site={site} />
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
      </body>
    </html>
  );
}
