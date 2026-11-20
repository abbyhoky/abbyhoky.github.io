import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Layers3 } from "lucide-react";
import { projects } from "@/lib/content";
export function generateStaticParams() { return projects.map((item)=>({slug:item.slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const item=projects.find(x=>x.slug===slug);return {title:item?.title??"Project"};}
export default async function ProjectDetail({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;const item=projects.find(x=>x.slug===slug);if(!item)notFound();
  const sections=[["Project Overview",item.overview],["Problem",item.problem],["Solution",item.solution],["Technical Stack",item.stack],["My Contributions",item.contributions],["Development Process",item.process],["Lessons Learned",item.lessons],["Outcomes",item.outcomes]] as const;
  return <div className="container-shell max-w-5xl py-14 sm:py-20">
    <Link href="/projects/" className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-accent"><ArrowLeft size={16}/> Back to projects</Link>
    <div className="project-art h-64 rounded-3xl sm:h-80"><Layers3 size={58}/><span>{item.year}</span></div>
    <p className="eyebrow mt-10">{item.year} · Project</p><h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink dark:text-white sm:text-5xl">{item.title}</h1><p className="mt-3 text-lg text-slate-500">{item.subtitle}</p><p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-400">{item.summary}</p>
    <div className="mt-6 flex flex-wrap gap-2">{item.tags.map(x=><span className="tag" key={x}>{x}</span>)}</div>
    <div className="mt-12 rounded-2xl border border-slate-200 px-6 dark:border-slate-800 sm:px-9">{sections.map(([heading,content])=><section className="detail-section" key={heading}><p className="detail-label">{heading}</p>{typeof content !== "string"?<ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 dark:text-slate-300">{content.map(x=><li key={x}>{x}</li>)}</ul>:<p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">{content}</p>}</section>)}
    <section className="detail-section"><p className="detail-label">Gallery</p><div className="mt-4 grid gap-3 sm:grid-cols-3">{["Visual placeholder 01","Visual placeholder 02","Visual placeholder 03"].map(x=><div key={x} className="flex aspect-[4/3] items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 text-xs text-slate-400 dark:border-slate-700 dark:bg-slate-900">{x}</div>)}</div><p className="mt-3 text-xs text-slate-400">Replace these placeholders with approved screenshots, prototypes or event photographs.</p></section></div>
    <Link href="/contact/" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent">Ask about this project <ArrowUpRight size={16}/></Link>
  </div>;
}
