import type { MetadataRoute } from "next";
import { getAuthors, getCategories, getPosts } from "@/lib/content/blog";
import { getAllPages, getSiteSettings } from "@/lib/content/site";
import { absoluteUrl } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [{ siteUrl }, pages, posts, categories, authors] = await Promise.all([
    getSiteSettings(),
    getAllPages(),
    getPosts(),
    getCategories(),
    getAuthors(),
  ]);
  return [
    ...pages.map((page) => ({ url: absoluteUrl(page.seo.canonical, siteUrl), lastModified: page.revised })),
    ...posts.map((post) => ({ url: absoluteUrl(post.seo.canonical, siteUrl), lastModified: post.date })),
    ...categories.map((category) => ({ url: absoluteUrl(`/blog/category/${category.slug}`, siteUrl) })),
    ...authors.map((author) => ({ url: absoluteUrl(`/blog/author/${author.slug}`, siteUrl) })),
  ];
}
