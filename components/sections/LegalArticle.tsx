import PageHero from "@/components/ui/PageHero";
import Markdown from "@/components/ui/Markdown";
import { getSiteSettings } from "@/lib/content/site";
import { formatDate } from "@/lib/seo";
import type { LegalPage } from "@/lib/types";

export default function LegalArticle({ page }: { page: LegalPage }) {
  const { legal } = getSiteSettings().ui;
  return (
    <>
      <PageHero title={page.title} subtitle={page.subtitle}>
        <p className="on-dark-muted mt-5 text-sm">
          {legal.revisedLabel} <time dateTime={page.revised}>{formatDate(page.revised)}</time>
        </p>
      </PageHero>
      <div className="container-page max-w-3xl py-12 lg:py-16">
        <Markdown>{page.body}</Markdown>
      </div>
    </>
  );
}
