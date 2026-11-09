import type { Metadata } from "next";
import type { BlogPost, Seo } from "@/lib/types";
import { getAuthor, getCategory } from "@/lib/content/blog";
import { getSiteSettings } from "@/lib/content/site";

export function absoluteUrl(pathOrUrl: string): string {
  const { siteUrl } = getSiteSettings();
  const url = new URL(pathOrUrl, siteUrl);
  url.pathname = url.pathname.replace(/\/$/, "");
  return url.toString();
}

type MetadataOptions = {
  type?: "website" | "article";
  publishedTime?: string;
  noindex?: boolean;
};

export function buildMetadata(seo: Seo, options: MetadataOptions = {}): Metadata {
  const { brandName, defaultSocialImage } = getSiteSettings();
  const image = absoluteUrl(seo.image || defaultSocialImage);
  const url = absoluteUrl(seo.canonical);

  return {
    title: { absolute: seo.title },
    description: seo.description,
    alternates: {
      canonical: url,
      types: { "application/rss+xml": absoluteUrl("/blog/rss.xml") },
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

export function organizationJsonLd() {
  const site = getSiteSettings();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.brandName,
    legalName: site.legalEntity,
    url: absoluteUrl("/"),
    logo: absoluteUrl(site.logo.src),
    ...(site.social.length ? { sameAs: site.social.map((link) => link.href) } : {}),
  };
}

export function websiteJsonLd() {
  const site = getSiteSettings();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.brandName,
    description: site.description,
    url: absoluteUrl("/"),
  };
}

export function articleJsonLd(post: BlogPost) {
  const site = getSiteSettings();
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.seo.description,
    image: absoluteUrl(post.seo.image || post.coverImage),
    datePublished: post.date,
    articleSection: getCategory(post.category)?.name,
    author: { "@type": "Person", name: getAuthor(post.author)?.name ?? site.brandName },
    publisher: {
      "@type": "Organization",
      name: site.brandName,
      logo: { "@type": "ImageObject", url: absoluteUrl(site.logo.src) },
    },
    mainEntityOfPage: absoluteUrl(post.seo.canonical),
  };
}

export function formatDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", { dateStyle: "long", timeZone: "UTC" }).format(
    new Date(`${date}T00:00:00Z`),
  );
}
