"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { site } from "@/lib/site";
import { useTheme } from "./theme-provider";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { dark, toggle } = useTheme();
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/85">
      <div className="container-shell flex h-16 items-center justify-between gap-5">
        <Link href="/" className="font-semibold tracking-tight text-ink dark:text-white" onClick={() => setOpen(false)}>
          Abby Ho<span className="text-accent">.</span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-5 xl:flex">
          {site.navigation.map((item) => (
            <Link key={item.href} href={item.href} className={`nav-link ${pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href)) ? "nav-link-active" : ""}`}>{item.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={toggle} className="icon-button" aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}>{dark ? <Sun size={18} /> : <Moon size={18} />}</button>
          <button onClick={() => setOpen(!open)} className="icon-button xl:hidden" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open}>{open ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </div>
      {open && <nav aria-label="Mobile navigation" className="border-t border-slate-200 bg-white px-6 py-4 dark:border-slate-800 dark:bg-slate-950 xl:hidden">
        <div className="container-shell grid gap-1">{site.navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900">{item.label}</Link>)}</div>
      </nav>}
    </header>
  );
}
