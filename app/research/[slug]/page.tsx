import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { research } from "@/lib/content";

export function generateStaticParams() { return research.map((item) => ({ slug: item.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const item = research.find((x) => x.slug === slug);
  return { title: item?.title ?? "Research" };
}
export default async function ResearchDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const item = research.find((x) => x.slug === slug); if (!item) notFound();
  const blocks = [
    ["Overview", item.overview], ["Research Questions", item.questions], ["Methodology", item.methodology],
    ["Findings / Contributions", item.contributions], ["My Role", item.role], ["Skills Developed", item.skills], ["Publications / Outputs", item.outputs]
  ] as const;
  return <div className="container-shell max-w-5xl py-14 sm:py-20">
    <Link href="/research/" className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-accent"><ArrowLeft size={16}/> Back to research</Link>
    <p className="eyebrow">{item.year} · {item.status}</p><h1 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight text-ink dark:text-white sm:text-5xl">{item.title}</h1>
    <div className="mt-5 flex flex-wrap gap-2">{item.area.map((x)=><span className="tag" key={x}>{x}</span>)}</div>
    <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">{item.summary}</p>
    <div className="mt-12 rounded-2xl border border-slate-200 px-6 dark:border-slate-800 sm:px-9">{blocks.map(([heading, content])=><section className="detail-section" key={heading}><p className="detail-label">{heading}</p>{typeof content !== "string"?<ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 dark:text-slate-300">{content.map((x)=><li key={x}>{x}</li>)}</ul>:<p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">{content}</p>}</section>)}</div>
    <div className="mt-8 rounded-xl bg-slate-50 p-5 text-sm leading-6 text-slate-500 dark:bg-slate-900 dark:text-slate-400">Research detail note: the page reflects currently available project information. Add approved participant quotations, complete findings, co-author details and publication links when they are ready for public release.</div>
    <Link href="/contact/" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent">Discuss this research <ArrowUpRight size={16}/></Link>
  </div>;
}
