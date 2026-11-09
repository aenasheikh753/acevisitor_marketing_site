import { notFound } from "next/navigation";
import BlogListing from "@/components/blog/BlogListing";
import PageHero from "@/components/ui/PageHero";
import { getCategories, getCategory, getPosts } from "@/lib/content/blog";
import { getSiteSettings } from "@/lib/content/site";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return (await getCategories()).map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const [category, site] = await Promise.all([getCategory(slug), getSiteSettings()]);
  return category
    ? buildMetadata({
        title: `${category.name} | ${site.brandName}`,
        description: category.description,
        image: site.defaultSocialImage,
        canonical: `/blog/category/${category.slug}`,
      })
    : {};
}

export default async function BlogCategoryPage({ params }: Props) {
  const { slug } = await params;
  const [category, { ui }, posts] = await Promise.all([getCategory(slug), getSiteSettings(), getPosts()]);
  if (!category) notFound();
  return (
    <>
      <PageHero eyebrow={ui.blog.categoryEyebrow} title={category.name} subtitle={category.description} />
      <BlogListing posts={posts.filter((post) => post.category === slug)} activeCategory={slug} />
    </>
  );
}
