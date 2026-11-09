import type { Author, BlogPost, Category } from "@/lib/types";
import { fetchContent } from "./client";
import { authors, categories, posts } from "./seed/blog";

/** Published posts only, newest first. */
export async function getPosts(): Promise<BlogPost[]> {
  const items = await fetchContent("posts", posts);
  return items.filter((post) => post.status === "published").sort((a, b) => b.date.localeCompare(a.date));
}

export async function getPost(slug: string): Promise<BlogPost | undefined> {
  return (await getPosts()).find((post) => post.slug === slug);
}

export function getCategories(): Promise<Category[]> {
  return fetchContent("categories", categories);
}

export async function getCategory(slug: string): Promise<Category | undefined> {
  return (await getCategories()).find((category) => category.slug === slug);
}

export function getAuthors(): Promise<Author[]> {
  return fetchContent("authors", authors);
}

export async function getAuthor(slug: string): Promise<Author | undefined> {
  return (await getAuthors()).find((author) => author.slug === slug);
}
