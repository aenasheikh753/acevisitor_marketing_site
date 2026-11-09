import type { Mockups, Page, SiteSettings } from "@/lib/types";
import { readJson, readJsonCollection } from "./read";

export function getSiteSettings(): SiteSettings {
  return readJson<SiteSettings>("site.json");
}

export function getMockups(): Mockups {
  return readJson<Mockups>("mockups.json");
}

export function getAllPages(): Page[] {
  return readJsonCollection<Page>("pages");
}

export function getPage(slug: string): Page | undefined {
  return getAllPages().find((page) => page.slug === slug);
}

/** Slugs with their own route, so app/[slug] must not generate them. */
const DEDICATED_ROUTES = new Set(["home", "blog"]);

export function getGenericPageSlugs(): string[] {
  return getAllPages()
    .map((page) => page.slug)
    .filter((slug) => !DEDICATED_ROUTES.has(slug));
}
