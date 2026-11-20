import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/lib/site";
export function Footer() {
  return <footer className="border-t border-slate-200 dark:border-slate-800">
    <div className="container-shell flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-slate-500">© {new Date().getFullYear()} Abby K.Y. Ho. Built with curiosity.</p>
      <div className="flex items-center gap-4">
        <a className="social-link" href={`mailto:${site.email}`} aria-label="Email Abby"><Mail size={17}/></a>
        <a className="social-link" href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17}/></a>
        <a className="social-link" href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a>
      </div>
    </div>
  </footer>;
}
