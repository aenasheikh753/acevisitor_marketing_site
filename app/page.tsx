import { notFound } from "next/navigation";
import PageView from "@/components/sections/PageView";
import { getPage } from "@/lib/content/site";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const page = await getPage("home");
  return page ? buildMetadata(page.seo) : {};
}

export default async function HomePage() {
  const page = await getPage("home");
  if (!page) notFound();
  return <PageView page={page} large />;
}
