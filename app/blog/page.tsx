import { notFound } from "next/navigation";
import BlogListing from "@/components/blog/BlogListing";
import PageHero from "@/components/ui/PageHero";
import { getPosts } from "@/lib/content/blog";
import { getPage } from "@/lib/content/site";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const page = await getPage("blog");
  return page ? buildMetadata(page.seo) : {};
}

export default async function BlogIndexPage() {
  const page = await getPage("blog");
  if (!page) notFound();
  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} subtitle={page.subtitle} />
      <BlogListing posts={await getPosts()} />
    </>
  );
}
