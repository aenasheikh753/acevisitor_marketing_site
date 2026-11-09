import type { Author, BlogPost, Category, Seo } from "@/lib/types";
import { readJsonCollection, readMarkdownCollection, toDateString } from "./read";

/** Published posts only, newest first. Drafts are never built. */
export function getPublishedPosts(): BlogPost[] {
  return readMarkdownCollection("blog")
    .map(({ data, body }): BlogPost => ({
      slug: String(data.slug),
      title: String(data.title),
      date: toDateString(data.date),
      status: data.status === "published" ? "published" : "draft",
      summary: String(data.summary),
      coverImage: String(data.coverImage),
      coverAlt: String(data.coverAlt),
      category: String(data.category),
      author: String(data.author),
      seo: data.seo as Seo,
      body,
    }))
    .filter((post) => post.status === "published")
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): BlogPost | undefined {
  return getPublishedPosts().find((post) => post.slug === slug);
}

export function getCategories(): Category[] {
  return readJsonCollection<Category>("categories");
}

export function getCategory(slug: string): Category | undefined {
  return getCategories().find((category) => category.slug === slug);
}

export function getAuthors(): Author[] {
  return readJsonCollection<Author>("authors");
}

export function getAuthor(slug: string): Author | undefined {
  return getAuthors().find((author) => author.slug === slug);
}
