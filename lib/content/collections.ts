import type { Feature, Industry, MediaItem } from "@/lib/types";
import { fetchContent } from "./client";
import { features } from "./seed/features";
import { industries } from "./seed/industries";
import { media } from "./seed/media";

const bySortOrder = <T extends { sortOrder: number }>(items: T[]): T[] =>
  [...items].sort((a, b) => a.sortOrder - b.sortOrder);

export async function getFeatures(kind: Feature["kind"]): Promise<Feature[]> {
  const items = await fetchContent("features", features);
  return bySortOrder(items.filter((item) => item.kind === kind));
}

export async function getIndustries(): Promise<Industry[]> {
  return bySortOrder(await fetchContent("industries", industries));
}

export async function getGalleryItems(): Promise<MediaItem[]> {
  const items = await fetchContent("media", media);
  return bySortOrder(items.filter((item) => item.usage === "gallery"));
}
