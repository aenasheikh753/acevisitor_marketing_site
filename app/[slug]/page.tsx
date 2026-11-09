import { notFound } from "next/navigation";
import PageView from "@/components/sections/PageView";
import { getGenericPageSlugs, getPage } from "@/lib/content/site";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return (await getGenericPageSlugs()).map((slug) => ({ slug }));
}

async function findPage(slug: string) {
  // The home and blog pages have their own routes.
  return (await getGenericPageSlugs()).includes(slug) ? getPage(slug) : undefined;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = await findPage(slug);
  return page ? buildMetadata(page.seo) : {};
}

export default async function ContentPage({ params }: Props) {
  const { slug } = await params;
  const page = await findPage(slug);
  if (!page) notFound();
  return <PageView page={page} />;
}
