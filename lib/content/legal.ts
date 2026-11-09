import type { LegalPage, Seo } from "@/lib/types";
import { readMarkdown, toDateString } from "./read";

export function getLegalPage(slug: "privacy-policy" | "terms"): LegalPage {
  const { data, body } = readMarkdown(`legal/${slug}.md`);
  return {
    slug,
    title: String(data.title),
    subtitle: String(data.subtitle),
    revised: toDateString(data.revised),
    notice: data.notice ? String(data.notice) : undefined,
    seo: data.seo as Seo,
    body,
  };
}
