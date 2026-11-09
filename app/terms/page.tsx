import LegalArticle from "@/components/sections/LegalArticle";
import { getLegalPage } from "@/lib/content/legal";
import { buildMetadata } from "@/lib/seo";

export function generateMetadata() {
  return buildMetadata(getLegalPage("terms").seo);
}

export default function TermsPage() {
  return <LegalArticle page={getLegalPage("terms")} />;
}
