import SectionRenderer from "@/components/sections/SectionRenderer";
import PageHero from "@/components/ui/PageHero";
import { getSiteSettings } from "@/lib/content/site";
import { formatDate } from "@/lib/seo";
import type { Page } from "@/lib/types";

export default async function PageView({ page, large }: { page: Page; large?: boolean }) {
  const { ui } = await getSiteSettings();
  return (
    <>
      <PageHero
        large={large}
        eyebrow={page.eyebrow}
        title={page.title}
        subtitle={page.subtitle}
        images={page.heroImages}
        primaryAction={page.primaryAction}
        secondaryAction={page.secondaryAction}
        proofLine={page.proofLine}
        proofs={page.heroProofs}
      >
        {page.revised ? (
          <p className="on-dark-muted mt-5 text-sm">
            {ui.legal.revisedLabel} <time dateTime={page.revised}>{formatDate(page.revised)}</time>
          </p>
        ) : null}
      </PageHero>
      <SectionRenderer sections={page.sections} />
    </>
  );
}
