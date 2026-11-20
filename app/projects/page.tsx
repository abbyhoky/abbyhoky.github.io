import type { Metadata } from "next";
import { projects } from "@/lib/content";
import { ProjectCard } from "@/components/cards";
export const metadata: Metadata = { title: "Projects" };
export default function ProjectsPage() {
  return <div className="container-shell py-16 sm:py-20"><p className="eyebrow mb-4">Selected work</p><h1 className="page-title">Projects</h1><p className="mt-5 max-w-2xl leading-8 text-slate-600 dark:text-slate-400">A collection of games, educational experiences and product concepts shaped by interaction design, research and development.</p><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{projects.map((item)=><ProjectCard key={item.slug} item={item}/>)}</div></div>;
}
