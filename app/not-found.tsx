import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { getSiteSettings } from "@/lib/content/site";

export async function generateMetadata(): Promise<Metadata> {
  const { brandName, ui } = await getSiteSettings();
  return {
    title: { absolute: `${ui.notFound.title} | ${brandName}` },
    description: ui.notFound.description,
    robots: { index: false, follow: true },
  };
}

export default async function NotFound() {
  const { notFound } = (await getSiteSettings()).ui;
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
