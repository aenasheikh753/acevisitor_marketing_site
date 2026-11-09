import LegalArticle from "@/components/sections/LegalArticle";
import { getLegalPage } from "@/lib/content/legal";
import { buildMetadata } from "@/lib/seo";

export function generateMetadata() {
  return buildMetadata(getLegalPage("privacy-policy").seo);
}

export default function PrivacyPolicyPage() {
  return <LegalArticle page={getLegalPage("privacy-policy")} />;
}
