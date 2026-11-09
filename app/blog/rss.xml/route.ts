import { getPublishedPosts } from "@/lib/content/blog";
import { getPage, getSiteSettings } from "@/lib/content/site";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

const escapeXml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function GET() {
  const site = getSiteSettings();
  const blog = getPage("blog");
  const items = getPublishedPosts()
    .map((post) => {
      const url = absoluteUrl(post.seo.canonical);
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${new Date(`${post.date}T00:00:00Z`).toUTCString()}</pubDate>
      <description>${escapeXml(post.summary)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(blog?.seo.title ?? site.brandName)}</title>
    <link>${absoluteUrl("/blog/")}</link>
    <description>${escapeXml(blog?.seo.description ?? site.description)}</description>
    <language>en-us</language>
${items}
  </channel>
</rss>
`;

  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
