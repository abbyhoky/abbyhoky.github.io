import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/blog");
export type BlogPost = {
  slug: string; title: string; date: string; category: string; excerpt: string;
  readingTime: string; cover: string; content: string;
};

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs.readdirSync(postsDirectory).filter((name) => name.endsWith(".md")).map((name) => {
    const slug = name.replace(/\.md$/, "");
    const source = fs.readFileSync(path.join(postsDirectory, name), "utf8");
    const { data, content } = matter(source);
    return {
      slug, title: String(data.title ?? slug), date: String(data.date ?? ""),
      category: String(data.category ?? "Research Reflections"),
      excerpt: String(data.excerpt ?? ""), readingTime: String(data.readingTime ?? "4 min"),
      cover: String(data.cover ?? "/images/blog-default.svg"), content
    };
  }).sort((a, b) => b.date.localeCompare(a.date));
}

export async function getPostHtml(markdown: string) {
  const processed = await remark().use(html).process(markdown);
  return processed.toString();
}
