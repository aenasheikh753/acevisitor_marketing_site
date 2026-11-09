import { notFound } from "next/navigation";
import SectionRenderer from "@/components/sections/SectionRenderer";
import PageHero from "@/components/ui/PageHero";
import { getPage } from "@/lib/content/site";
import { buildMetadata } from "@/lib/seo";

export function generateMetadata() {
  const page = getPage("home");
  return page ? buildMetadata(page.seo) : {};
}

export default function HomePage() {
  const page = getPage("home");
  if (!page) notFound();
  return (
    <>
      <PageHero
        large
        eyebrow={page.eyebrow}
        title={page.title}
        subtitle={page.subtitle}
        visual={page.heroVisual}
        primaryAction={page.primaryAction}
        secondaryAction={page.secondaryAction}
        proofLine={page.proofLine}
      />
      <SectionRenderer sections={page.sections} />
    </>
  );
}
