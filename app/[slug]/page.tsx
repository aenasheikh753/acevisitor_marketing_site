import { notFound } from "next/navigation";
import SectionRenderer from "@/components/sections/SectionRenderer";
import PageHero from "@/components/ui/PageHero";
import { getGenericPageSlugs, getPage } from "@/lib/content/site";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getGenericPageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = getPage(slug);
  return page ? buildMetadata(page.seo) : {};
}

export default async function ContentPage({ params }: Props) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) notFound();
  return (
    <>
      <PageHero
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
