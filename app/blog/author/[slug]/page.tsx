import { notFound } from "next/navigation";
import BlogListing from "@/components/blog/BlogListing";
import PageHero from "@/components/ui/PageHero";
import { getAuthor, getAuthors, getPosts } from "@/lib/content/blog";
import { getSiteSettings } from "@/lib/content/site";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return (await getAuthors()).map((author) => ({ slug: author.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const [author, site] = await Promise.all([getAuthor(slug), getSiteSettings()]);
  return author
    ? buildMetadata({
        title: `${author.name} | ${site.brandName}`,
        description: author.bio,
        image: site.defaultSocialImage,
        canonical: `/blog/author/${author.slug}`,
      })
    : {};
}

export default async function BlogAuthorPage({ params }: Props) {
  const { slug } = await params;
  const [author, { ui }, posts] = await Promise.all([getAuthor(slug), getSiteSettings(), getPosts()]);
  if (!author) notFound();
  return (
    <>
      <PageHero eyebrow={ui.blog.authorEyebrow} title={author.name} subtitle={author.bio} />
      <BlogListing posts={posts.filter((post) => post.author === slug)} activeCategory={`author:${slug}`} />
    </>
  );
}
