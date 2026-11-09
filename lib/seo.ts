import type { Metadata } from "next";
import { getAuthor, getCategory } from "@/lib/content/blog";
import { getSiteSettings } from "@/lib/content/site";
import type { BlogPost, Seo, SiteSettings } from "@/lib/types";

export function absoluteUrl(pathOrUrl: string, siteUrl: string): string {
  const url = new URL(pathOrUrl, siteUrl);
  url.pathname = url.pathname.replace(/\/$/, "");
  return url.toString();
}

type MetadataOptions = {
  type?: "website" | "article";
  publishedTime?: string;
  noindex?: boolean;
};

export async function buildMetadata(seo: Seo, options: MetadataOptions = {}): Promise<Metadata> {
  const { brandName, defaultSocialImage, siteUrl } = await getSiteSettings();
  const image = absoluteUrl(seo.image || defaultSocialImage, siteUrl);
  const url = absoluteUrl(seo.canonical, siteUrl);

  return {
    title: { absolute: seo.title },
    description: seo.description,
    alternates: {
      canonical: url,
      types: { "application/rss+xml": absoluteUrl("/blog/rss.xml", siteUrl) },
    },
    openGraph: {
      type: options.type ?? "website",
      url,
      title: seo.title,
      description: seo.description,
      siteName: brandName,
      images: [image],
      ...(options.publishedTime ? { publishedTime: options.publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [image],
    },
    ...(options.noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

export function organizationJsonLd(site: SiteSettings) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.brandName,
    legalName: site.legalEntity,
    url: absoluteUrl("/", site.siteUrl),
    logo: absoluteUrl(site.logo.src, site.siteUrl),
    ...(site.social.length ? { sameAs: site.social.map((link) => link.href) } : {}),
  };
}

export function websiteJsonLd(site: SiteSettings) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.brandName,
    description: site.description,
    url: absoluteUrl("/", site.siteUrl),
  };
}

export async function articleJsonLd(post: BlogPost) {
  const [site, category, author] = await Promise.all([
    getSiteSettings(),
    getCategory(post.category),
    getAuthor(post.author),
  ]);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.seo.description,
    image: absoluteUrl(post.seo.image || post.coverImage, site.siteUrl),
    datePublished: post.date,
    articleSection: category?.name,
    author: { "@type": "Person", name: author?.name ?? site.brandName },
    publisher: {
      "@type": "Organization",
      name: site.brandName,
      logo: { "@type": "ImageObject", url: absoluteUrl(site.logo.src, site.siteUrl) },
    },
    mainEntityOfPage: absoluteUrl(post.seo.canonical, site.siteUrl),
  };
}

export function formatDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", { dateStyle: "long", timeZone: "UTC" }).format(
    new Date(`${date}T00:00:00Z`),
  );
}
