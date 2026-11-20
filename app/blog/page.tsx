import type { Metadata } from "next";
import { BlogCard } from "@/components/cards";
import { getAllPosts } from "@/lib/blog";
export const metadata: Metadata = { title: "Blog" };
const categories = ["Human-AI Interaction","AI Governance","Educational Technology","Research Reflections"];
export default function BlogPage() {
  const posts=getAllPosts();
  return <div className="container-shell py-16 sm:py-20"><p className="eyebrow mb-4">Writing & reflections</p><h1 className="page-title">Blog</h1><p className="mt-5 max-w-2xl leading-8 text-slate-600 dark:text-slate-400">Notes on human-AI interaction, governance, educational technology and the practice of research.</p><div className="mt-7 flex flex-wrap gap-2">{categories.map(x=><span className="tag" key={x}>{x}</span>)}</div><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{posts.map(post=><BlogCard key={post.slug} post={post}/>)}</div></div>;
}
