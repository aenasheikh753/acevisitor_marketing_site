import type { MetadataRoute } from "next";
import { getAuthors, getCategories, getPosts } from "@/lib/content/blog";
import { getLegalPage } from "@/lib/content/legal";
import { getAllPages } from "@/lib/content/site";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const legal = [getLegalPage("privacy-policy"), getLegalPage("terms")];
  return [
    ...getAllPages().map((page) => ({ url: absoluteUrl(page.seo.canonical) })),
    ...legal.map((page) => ({ url: absoluteUrl(page.seo.canonical), lastModified: page.revised })),
    ...getPosts().map((post) => ({ url: absoluteUrl(post.seo.canonical), lastModified: post.date })),
    ...getCategories().map((category) => ({ url: absoluteUrl(`/blog/category/${category.slug}/`) })),
    ...getAuthors().map((author) => ({ url: absoluteUrl(`/blog/author/${author.slug}/`) })),
  ];
}
