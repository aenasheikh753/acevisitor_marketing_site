import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { getSiteSettings } from "@/lib/content/site";

export function generateMetadata(): Metadata {
  const { brandName, ui } = getSiteSettings();
  return {
    title: { absolute: `${ui.notFound.title} | ${brandName}` },
    description: ui.notFound.description,
    robots: { index: false, follow: true },
  };
}

export default function NotFound() {
  const { notFound } = getSiteSettings().ui;
  return (
    <PageHero
      eyebrow={notFound.eyebrow}
      title={notFound.title}
      subtitle={notFound.description}
      primaryAction={notFound.primary}
      secondaryAction={notFound.secondary}
    />
  );
}
