import type { Metadata } from "next";
import { research } from "@/lib/content";
import { ResearchCard } from "@/components/cards";
export const metadata: Metadata = { title: "Publications & Research" };
export default function ResearchPage() {
  return <div className="container-shell py-16 sm:py-20"><p className="eyebrow mb-4">Research portfolio</p><h1 className="page-title">Publications & research</h1><p className="mt-5 max-w-2xl leading-8 text-slate-600 dark:text-slate-400">Projects exploring learning, human-AI relationships, inclusive interaction and the governance of emerging technologies.</p><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{research.map((item)=><ResearchCard key={item.slug} item={item}/>)}</div></div>;
}
