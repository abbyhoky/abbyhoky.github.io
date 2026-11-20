import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, GraduationCap, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { ResearchCard, ProjectCard, BlogCard } from "@/components/cards";
import { research, projects } from "@/lib/content";
import { getAllPosts } from "@/lib/blog";
import { site } from "@/lib/site";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);
  return <>
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_70%_10%,rgba(49,94,232,.12),transparent_45%)]"/>
      <div className="container-shell grid min-h-[610px] items-center gap-12 py-20 lg:grid-cols-[1.2fr_.8fr] lg:py-28">
        <div className="max-w-3xl animate-[fadeIn_.7s_ease-out]">
          <p className="eyebrow mb-6">Research · Design · Interactive Media</p>
          <div className="mb-7 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-700 text-xl font-bold text-white shadow-xl shadow-blue-500/20">AH</div>
            <div><p className="text-sm font-medium text-slate-500 dark:text-slate-400">Hello, I’m</p><h1 className="text-4xl font-semibold tracking-tight text-ink dark:text-white sm:text-6xl">Abby Ho<span className="text-accent">.</span></h1></div>
          </div>
          <p className="max-w-2xl text-lg font-medium leading-8 text-slate-700 dark:text-slate-300">AI in Education <span className="text-slate-300 dark:text-slate-600">|</span> Human-AI Interaction <span className="text-slate-300 dark:text-slate-600">|</span> Interactive Media</p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400">{site.description}</p>
          <div className="mt-9 flex flex-wrap gap-3"><Link href="/research/" className="btn-primary">View Research <ArrowRight size={16}/></Link><Link href="/projects/" className="btn-secondary">View Projects <ArrowUpRight size={16}/></Link></div>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400"><span className="inline-flex items-center gap-2"><GraduationCap size={16}/> MSc, HKU · Distinction</span><span className="inline-flex items-center gap-2"><Sparkles size={16}/> Research Assistant · CityU</span></div>
        </div>
        <div className="relative hidden lg:block">
          <div className="absolute -inset-8 rounded-full bg-blue-100/50 blur-3xl dark:bg-blue-950/30"/>
          <div className="relative mx-auto aspect-square max-w-[410px] rounded-[2.5rem] border border-blue-100 bg-white/70 p-7 shadow-soft dark:border-slate-800 dark:bg-slate-900/70">
            <div className="flex h-full flex-col justify-between rounded-[1.8rem] bg-gradient-to-br from-slate-50 to-blue-50 p-8 dark:from-slate-950 dark:to-blue-950/50">
              <div className="flex items-center justify-between"><span className="eyebrow">Areas of inquiry</span><span className="h-2 w-2 rounded-full bg-blue-500"/></div>
              <div className="space-y-4">{["People × AI", "Learning × Technology", "Play × Interaction", "Design × Society"].map((x, i) => <div key={x} className="flex items-center gap-4"><span className="text-xs font-semibold text-blue-400">0{i+1}</span><div className="h-px flex-1 bg-blue-200 dark:bg-blue-900"/><span className="text-lg font-medium tracking-tight text-slate-700 dark:text-slate-200">{x}</span></div>)}</div>
              <p className="max-w-[220px] text-sm leading-6 text-slate-500 dark:text-slate-400">Understanding how emerging technologies reshape human experience.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="container-shell py-20"><SectionHeading eyebrow="Selected work" title="Featured research" description="Research at the intersection of human experience, emerging technologies and learning."/><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{research.map((item) => <ResearchCard key={item.slug} item={item}/>)}</div><div className="mt-7"><Link className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3" href="/research/">Explore all research <ArrowRight size={16}/></Link></div></section>
    <section className="bg-slate-50 py-20 dark:bg-slate-900/40"><div className="container-shell"><SectionHeading eyebrow="Making and experimenting" title="Featured projects" description="Interactive experiences and prototypes that connect technology, play and education."/><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{projects.slice(0,3).map((item) => <ProjectCard key={item.slug} item={item}/>)}</div><div className="mt-7"><Link className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3" href="/projects/">Explore all projects <ArrowRight size={16}/></Link></div></div></section>
    <section className="container-shell py-20"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><SectionHeading eyebrow="Notes & ideas" title="Latest writing" description="Short reflections on research, design and the changing relationship between people and technology."/><Link href="/blog/" className="mb-9 inline-flex items-center gap-2 text-sm font-semibold text-accent">All articles <ArrowRight size={16}/></Link></div>{posts.length ? <div className="grid gap-5 md:grid-cols-3">{posts.map((post) => <BlogCard key={post.slug} post={post}/>)}</div> : <p className="text-sm text-slate-500">New writing coming soon.</p>}</section>
    <section className="container-shell pb-20"><div className="rounded-3xl bg-slate-950 px-7 py-10 text-white sm:px-12 sm:py-14"><p className="eyebrow text-blue-300">Let’s connect</p><div className="mt-3 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><h2 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">Curious about a collaboration?</h2><p className="mt-3 max-w-xl leading-7 text-slate-300">I’m interested in thoughtful conversations about AI, learning, interactive media and responsible technology.</p></div><Link href="/contact/" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-blue-50">Get in touch <ArrowUpRight size={16}/></Link></div></div></section>
  </>;
}
