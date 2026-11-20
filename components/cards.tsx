import Link from "next/link";
import { ArrowUpRight, BookOpen, FlaskConical, Layers3 } from "lucide-react";

export function ResearchCard({ item }: { item: { slug: string; title: string; area: string[]; status: string; summary: string; year: string } }) {
  return <Link href={`/research/${item.slug}/`} className="group surface-card flex h-full flex-col p-6">
    <div className="mb-5 flex items-center justify-between"><span className="icon-tile"><FlaskConical size={19}/></span><ArrowUpRight className="text-slate-400 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" size={19}/></div>
    <p className="text-xs font-semibold uppercase tracking-wider text-accent">{item.year} · {item.status}</p>
    <h3 className="mt-3 text-lg font-semibold leading-snug text-ink dark:text-white">{item.title}</h3>
    <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-400">{item.summary}</p>
    <div className="mt-5 flex flex-wrap gap-2">{item.area.map((tag) => <span key={tag} className="tag">{tag}</span>)}</div>
  </Link>;
}
export function ProjectCard({ item }: { item: { slug: string; title: string; subtitle: string; tags: string[]; summary: string; year: string } }) {
  return <Link href={`/projects/${item.slug}/`} className="group surface-card flex h-full flex-col overflow-hidden">
    <div className="project-art"><Layers3 size={34}/><span>{item.year}</span></div>
    <div className="flex flex-1 flex-col p-6">
      <div className="flex items-start justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-wider text-accent">{item.subtitle}</p><h3 className="mt-2 text-xl font-semibold text-ink dark:text-white">{item.title}</h3></div><ArrowUpRight className="shrink-0 text-slate-400 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" size={19}/></div>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-400">{item.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">{item.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}</div>
    </div>
  </Link>;
}
export function BlogCard({ post }: { post: { slug: string; title: string; date: string; category: string; excerpt: string; readingTime: string; cover: string } }) {
  return <Link href={`/blog/${post.slug}/`} className="group surface-card overflow-hidden">
    <div className="blog-art"><BookOpen size={28}/><span>{post.category}</span></div>
    <div className="p-5"><div className="flex flex-wrap gap-2 text-xs text-slate-500"><span>{post.date}</span><span>·</span><span>{post.readingTime}</span></div><h3 className="mt-3 text-lg font-semibold leading-snug text-ink group-hover:text-accent dark:text-white">{post.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{post.excerpt}</p></div>
  </Link>;
}
