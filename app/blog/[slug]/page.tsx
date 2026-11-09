import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/ui/Icon";
import JsonLd from "@/components/ui/JsonLd";
import Markdown from "@/components/ui/Markdown";
import { getAuthor, getCategory, getPost, getPosts } from "@/lib/content/blog";
import { getSiteSettings } from "@/lib/content/site";
import { articleJsonLd, buildMetadata, formatDate } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  return post
    ? buildMetadata(
        { ...post.seo, image: post.seo.image || post.coverImage },
        { type: "article", publishedTime: post.date },
      )
    : {};
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const category = getCategory(post.category);
  const author = getAuthor(post.author);
  const { blog } = getSiteSettings().ui;

  return (
    <article>
      <header className="tone-dark">
        <div className="container-page max-w-3xl py-14 lg:py-20">
          <Link href="/blog" className="footer-link inline-flex items-center gap-2 text-sm font-semibold">
            <Icon name="arrowRight" className="h-4 w-4 rotate-180" />
            {blog.backToAll}
          </Link>
          {category ? (
            <p className="eyebrow mt-6">
              <Link href={`/blog/category/${category.slug}`}>{category.name}</Link>
            </p>
          ) : null}
          <h1 className="heading-page mt-4 text-white">{post.title}</h1>
          <p className="lead on-dark-muted mt-5">{post.summary}</p>
          <p className="on-dark-muted mt-6 text-sm">
            {author ? (
              <Link href={`/blog/author/${author.slug}`} className="footer-link font-semibold">
                {author.name}
              </Link>
            ) : null}{" "}
            · <time dateTime={post.date}>{formatDate(post.date)}</time>
          </p>
        </div>
      </header>
      <div className="container-page max-w-3xl py-12 lg:py-16">
        <Image
          src={post.coverImage}
          alt={post.coverAlt}
          width={1200}
          height={675}
          sizes="(min-width: 800px) 768px, 100vw"
          className="mb-10 aspect-video w-full rounded-card object-cover"
        />
        <Markdown>{post.body}</Markdown>
        {author ? (
          <aside className="card mt-12 p-6">
            <p className="eyebrow">{blog.writtenBy}</p>
            <p className="heading-card mt-2 text-navy">{author.name}</p>
            <p className="text-sm text-muted">{author.role}</p>
            <p className="mt-3 text-[0.95rem] leading-7 text-muted">{author.bio}</p>
          </aside>
        ) : null}
      </div>
      <JsonLd data={articleJsonLd(post)} />
    </article>
  );
}
