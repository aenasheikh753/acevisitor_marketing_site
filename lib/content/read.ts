import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_ROOT = path.join(process.cwd(), "content");

export function readJson<T>(relativePath: string): T {
  const file = path.join(CONTENT_ROOT, relativePath);
  return JSON.parse(fs.readFileSync(file, "utf8")) as T;
}

function listFiles(folder: string, extension: string): string[] {
  return fs
    .readdirSync(path.join(CONTENT_ROOT, folder))
    .filter((name) => name.endsWith(extension))
    .sort();
}

export function readJsonCollection<T>(folder: string): T[] {
  return listFiles(folder, ".json").map((name) => readJson<T>(`${folder}/${name}`));
}

export function readMarkdownCollection(folder: string): { data: Record<string, unknown>; body: string }[] {
  return listFiles(folder, ".md").map((name) => readMarkdown(`${folder}/${name}`));
}

export function readMarkdown(relativePath: string): { data: Record<string, unknown>; body: string } {
  const raw = fs.readFileSync(path.join(CONTENT_ROOT, relativePath), "utf8");
  const { data, content } = matter(raw);
  return { data, body: content.trim() };
}

/** YAML parses bare dates into Date objects; everything downstream uses yyyy-MM-dd. */
export function toDateString(value: unknown): string {
  return value instanceof Date ? value.toISOString().slice(0, 10) : String(value ?? "");
}

export function bySortOrder<T extends { sortOrder: number }>(items: T[]): T[] {
  return [...items].sort((a, b) => a.sortOrder - b.sortOrder);
}
