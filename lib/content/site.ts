import type { Mockups, Page, SiteSettings } from "@/lib/types";
import { mockups } from "./mockups";
import { pages } from "./pages";
import { siteSettings } from "./settings";

export function getSiteSettings(): SiteSettings {
  return siteSettings;
}

export function getMockups(): Mockups {
  return mockups;
}

export function getAllPages(): Page[] {
  return pages;
}

export function getPage(slug: string): Page | undefined {
  return pages.find((page) => page.slug === slug);
}

/** Slugs with their own route, so app/[slug] must not generate them. */
const DEDICATED_ROUTES = new Set(["home", "blog"]);

export function getGenericPageSlugs(): string[] {
  return pages.map((page) => page.slug).filter((slug) => !DEDICATED_ROUTES.has(slug));
}
