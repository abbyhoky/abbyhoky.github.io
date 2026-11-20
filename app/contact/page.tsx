import type { Metadata } from "next";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
export const metadata: Metadata = { title: "Contact" };
export default function ContactPage(){
 const links=[{label:"Email",value:site.email,href:`mailto:${site.email}`,icon:Mail},{label:"GitHub",value:"github.com/abbyhoky",href:site.github,icon:Github},{label:"LinkedIn",value:"Add or confirm your LinkedIn profile URL",href:site.linkedin,icon:Linkedin}];
 return <div className="container-shell max-w-4xl py-16 sm:py-24"><p className="eyebrow mb-4">Get in touch</p><h1 className="page-title">Let’s start a conversation.</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">For research collaboration, speaking invitations, educational technology projects or conversations about interactive media, feel free to reach out.</p><div className="mt-12 grid gap-4 md:grid-cols-3">{links.map(({label,value,href,icon:Icon})=><a key={label} href={href} target={label==="Email"?"_self":"_blank"} rel="noreferrer" className="surface-card p-6"><Icon className="text-accent" size={22}/><p className="mt-5 text-sm font-semibold dark:text-white">{label}</p><p className="mt-2 break-words text-sm text-slate-500">{value}</p><ArrowUpRight className="mt-5 text-slate-400" size={17}/></a>)}</div><p className="mt-8 text-xs text-slate-400">LinkedIn currently uses a generic placeholder URL. Replace it with your public profile before launch.</p></div>;
}
