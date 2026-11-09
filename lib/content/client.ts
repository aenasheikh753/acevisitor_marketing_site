/**
 * The one place the website gets its content.
 *
 * Without CONTENT_API_URL the site shows the seed data in lib/content/seed.
 * With it, every resource is fetched from the admin API, so edits, additions
 * and deletions made in the admin panel appear on the site.
 */
const API_URL = process.env.CONTENT_API_URL?.replace(/\/$/, "");

/** How long a published change can take to appear on the site. */
const REVALIDATE_SECONDS = 60;

export async function fetchContent<T>(resource: string, seed: T): Promise<T> {
  if (!API_URL) return seed;

  const response = await fetch(`${API_URL}/${resource}`, {
    next: { revalidate: REVALIDATE_SECONDS, tags: [resource] },
  });
  if (!response.ok) throw new Error(`Content API returned ${response.status} for "${resource}"`);
  return (await response.json()) as T;
}
