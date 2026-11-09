import { notFound } from "next/navigation";
import BlogListing from "@/components/blog/BlogListing";
import PageHero from "@/components/ui/PageHero";
import { getCategories, getCategory, getPosts } from "@/lib/content/blog";
import { getSiteSettings } from "@/lib/content/site";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getCategories().map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  const site = getSiteSettings();
  return category
    ? buildMetadata({
        title: `${category.name} | ${site.brandName} Insights`,
        description: category.description,
        image: site.defaultSocialImage,
        canonical: `/blog/category/${category.slug}/`,
      })
    : {};
}

export default async function BlogCategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const { blog } = getSiteSettings().ui;
  return (
    <>
      <PageHero eyebrow={blog.categoryEyebrow} title={category.name} subtitle={category.description} />
      <BlogListing posts={getPosts().filter((post) => post.category === slug)} activeCategory={slug} />
    </>
  );
}
