import { notFound } from "next/navigation";
import BlogListing from "@/components/blog/BlogListing";
import PageHero from "@/components/ui/PageHero";
import { getAuthor, getAuthors, getPosts } from "@/lib/content/blog";
import { getSiteSettings } from "@/lib/content/site";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAuthors().map((author) => ({ slug: author.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const author = getAuthor(slug);
  const site = getSiteSettings();
  return author
    ? buildMetadata({
        title: `${author.name} | ${site.brandName} Insights`,
        description: author.bio,
        image: site.defaultSocialImage,
        canonical: `/blog/author/${author.slug}/`,
      })
    : {};
}

export default async function BlogAuthorPage({ params }: Props) {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) notFound();
  const { blog } = getSiteSettings().ui;
  return (
    <>
      <PageHero eyebrow={blog.authorEyebrow} title={author.name} subtitle={author.bio} />
      <BlogListing posts={getPosts().filter((post) => post.author === slug)} activeCategory={`author:${slug}`} />
    </>
  );
}
