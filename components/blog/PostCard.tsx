import Image from "next/image";
import Link from "next/link";
import { getAuthor, getCategory } from "@/lib/content/blog";
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

export default function PostCard({ post, headingLevel: Heading = "h3" }: { post: BlogPost; headingLevel?: HeadingLevel }) {
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
        <p className="eyebrow">{getCategory(post.category)?.name}</p>
        <Heading className="heading-card mt-3 text-navy">
          <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-blue">
            {post.title}
          </Link>
        </Heading>
        <p className="mt-2 flex-1 text-[0.95rem] leading-7 text-muted">{post.summary}</p>
        <p className="mt-4 text-sm text-muted">
          {getAuthor(post.author)?.name} · <time dateTime={post.date}>{formatDate(post.date)}</time>
        </p>
      </div>
    </article>
  );
}
