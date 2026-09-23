"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#about");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      // active section by scroll position
      const sections = navItems.map((n) => n.href.slice(1));
      let current = "#about";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) current = `#${id}`;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-white/[0.08] bg-[#0B1020]/85 backdrop-blur-xl shadow-lg shadow-black/20"
          : "border-white/[0.04] bg-[#0B1020]/40 backdrop-blur-md"
      }`}
    >
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#6366F1]/20 to-transparent" />
      <div className="mx-auto flex h-[64px] max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="#about" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] text-sm font-bold text-white shadow-lg shadow-[#6366F1]/20 transition-transform group-hover:scale-105">
            &lt;/&gt;
          </span>
          <div className="flex flex-col leading-none">
            <span className="text-[14px] font-bold tracking-tight text-white">TONI.ILHAM</span>
            <span className="text-[10px] font-semibold tracking-[0.14em] text-slate-400">DEVELOPER</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((it) => (
            <a
              key={it.href}
              href={it.href}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                active === it.href
                  ? "bg-white text-slate-900 shadow"
                  : "text-slate-400 hover:bg-white/[0.06] hover:text-white"
              }`}
            >
              {it.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden h-2 w-2 rounded-full bg-emerald-500 shadow shadow-emerald-500/50 animate-pulse sm:block" />
          <a href="#contact">
            <Button size="sm" className="rounded-full bg-[#6366F1] hover:bg-[#5558E3] shadow-lg shadow-[#6366F1]/20">Hire Me</Button>
          </a>
        </div>
      </div>

      {/* Mobile scroll nav */}
      <div className="flex items-center gap-1 overflow-x-auto border-t border-white/[0.04] px-2 py-2 scrollbar-thin lg:hidden">
        {navItems.map((it) => (
          <a
            key={it.href}
            href={it.href}
            className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
              active === it.href ? "bg-white text-slate-900" : "text-slate-400"
            }`}
          >
            {it.label}
          </a>
        ))}
      </div>
    </header>
  );
}
