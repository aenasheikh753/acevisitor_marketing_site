import Link from "next/link";
import { PostGrid } from "@/components/blog/PostCard";
import Section from "@/components/ui/Section";
import { getCategories } from "@/lib/content/blog";
import { getSiteSettings } from "@/lib/content/site";
import type { BlogPost } from "@/lib/types";

export default function BlogListing({ posts, activeCategory }: { posts: BlogPost[]; activeCategory?: string }) {
  const { blog } = getSiteSettings().ui;
  return (
    <Section tone="white">
      <nav aria-label={blog.categoriesLabel} className="mb-10 flex flex-wrap gap-2">
        <Link href="/blog" className="chip" aria-current={activeCategory ? undefined : "page"}>
          {blog.allCategories}
        </Link>
        {getCategories().map((category) => (
          <Link
            key={category.slug}
            href={`/blog/category/${category.slug}`}
            className="chip"
            aria-current={activeCategory === category.slug ? "page" : undefined}
          >
            {category.name}
          </Link>
        ))}
      </nav>
      {posts.length ? <PostGrid posts={posts} headingLevel="h2" /> : <p className="text-muted">{blog.empty}</p>}
      <p className="mt-10 text-sm">
        <a className="text-link" href="/blog/rss.xml">
          {blog.rssLabel}
        </a>
      </p>
    </Section>
  );
}
