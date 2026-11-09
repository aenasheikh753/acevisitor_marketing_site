import type { Mockups, Page, SiteSettings } from "@/lib/types";
import { fetchContent } from "./client";
import { mockups } from "./seed/mockups";
import { pages } from "./seed/pages";
import { siteSettings } from "./seed/settings";

export function getSiteSettings(): Promise<SiteSettings> {
  return fetchContent("site", siteSettings);
}

export function getMockups(): Promise<Mockups> {
  return fetchContent("mockups", mockups);
}

export function getAllPages(): Promise<Page[]> {
  return fetchContent("pages", pages);
}

export async function getPage(slug: string): Promise<Page | undefined> {
  return (await getAllPages()).find((page) => page.slug === slug);
}

/** Slugs with their own route, so app/[slug] must not generate them. */
const DEDICATED_ROUTES = new Set(["home", "blog"]);

export async function getGenericPageSlugs(): Promise<string[]> {
  return (await getAllPages()).map((page) => page.slug).filter((slug) => !DEDICATED_ROUTES.has(slug));
}
