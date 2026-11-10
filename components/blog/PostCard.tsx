import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { getAuthor, getCategory } from "@/lib/content/blog";
import { getSiteSettings } from "@/lib/content/site";
import { formatDate } from "@/lib/seo";
import type { BlogPost } from "@/lib/types";

type HeadingLevel = "h2" | "h3";

/** Use h2 where the grid sits directly under a page's h1, h3 under a section h2. */
export function PostGrid({ posts, headingLevel = "h3" }: { posts: BlogPost[]; headingLevel?: HeadingLevel }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} headingLevel={headingLevel} />
      ))}
    </div>
  );
}

export default async function PostCard({ post, headingLevel: Heading = "h3" }: { post: BlogPost; headingLevel?: HeadingLevel }) {
  const [category, author, { ui }] = await Promise.all([getCategory(post.category), getAuthor(post.author), getSiteSettings()]);
  return (
    <article className="card card-hover reveal flex flex-col overflow-hidden">
      <Image
        src={post.coverImage}
        alt={post.coverAlt}
        width={800}
        height={450}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="aspect-video w-full object-cover"
      />
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow">{category?.name}</p>
        <Heading className="heading-card mt-3 text-navy">
          <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-blue">
            {post.title}
          </Link>
        </Heading>
        <p className="mt-2 flex-1 text-[0.95rem] leading-7 text-muted">{post.summary}</p>
        <p className="mt-4 text-sm text-muted">
          {author?.name} · <time dateTime={post.date}>{formatDate(post.date)}</time>
        </p>
        <Button href={`/blog/${post.slug}`} variant="secondary" className="mt-5 self-start">
          {ui.blog.seeMore}
          <span className="sr-only">: {post.title}</span>
        </Button>
      </div>
    </article>
  );
}
