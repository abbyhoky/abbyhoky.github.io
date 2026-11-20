import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getAllPosts, getPostHtml } from "@/lib/blog";
export function generateStaticParams(){return getAllPosts().map(post=>({slug:post.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const post=getAllPosts().find(x=>x.slug===slug);return {title:post?.title??"Article",description:post?.excerpt};}
export default async function BlogDetail({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;const post=getAllPosts().find(x=>x.slug===slug);if(!post)notFound();const content=await getPostHtml(post.content);
  return <article className="container-shell max-w-3xl py-14 sm:py-20"><Link href="/blog/" className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-accent"><ArrowLeft size={16}/> Back to blog</Link><p className="eyebrow">{post.category} · {post.readingTime}</p><h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink dark:text-white sm:text-5xl">{post.title}</h1><p className="mt-5 text-sm text-slate-500">{post.date}</p><p className="mt-8 border-l-2 border-accent pl-5 text-lg leading-8 text-slate-600 dark:text-slate-400">{post.excerpt}</p><div className="prose mt-10 dark:prose-invert" dangerouslySetInnerHTML={{__html:content}}/><p className="mt-12 border-t border-slate-200 pt-6 text-xs text-slate-400 dark:border-slate-800">Editorial sample for portfolio demonstration. Revise and approve before treating as a published article.</p></article>;
}
