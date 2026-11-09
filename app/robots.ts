import type { MetadataRoute } from "next";
import { getSiteSettings } from "@/lib/content/site";
import { absoluteUrl } from "@/lib/seo";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const { siteUrl } = await getSiteSettings();
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: absoluteUrl("/sitemap.xml", siteUrl),
  };
}
