import { notFound } from "next/navigation";
import BlogListing from "@/components/blog/BlogListing";
import PageHero from "@/components/ui/PageHero";
import { getPosts } from "@/lib/content/blog";
import { getPage } from "@/lib/content/site";
import { buildMetadata } from "@/lib/seo";

export function generateMetadata() {
  const page = getPage("blog");
  return page ? buildMetadata(page.seo) : {};
}

export default function BlogIndexPage() {
  const page = getPage("blog");
  if (!page) notFound();
  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} subtitle={page.subtitle} />
      <BlogListing posts={getPosts()} />
    </>
  );
}
