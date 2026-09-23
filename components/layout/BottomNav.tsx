"use client";

const items = [
  { href: "#about", label: "About", icon: "◈" },
  { href: "#education", label: "Edu", icon: "🎓" },
  { href: "#experience", label: "Exp", icon: "💼" },
  { href: "#skills", label: "Skills", icon: "⬢" },
  { href: "#projects", label: "Proj", icon: "▣" },
  { href: "#certificates", label: "Cert", icon: "🏅" },
  { href: "#contact", label: "Contact", icon: "✉️" },
];

export function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-white/[0.06] bg-[#0B1020]/90 backdrop-blur-xl md:hidden">
      <div className="mx-auto flex max-w-6xl items-center justify-around gap-0.5 px-1 py-1.5">
        {items.map((it) => (
          <a
            key={it.href}
            href={it.href}
            className="flex flex-col items-center gap-0.5 rounded-xl px-2 py-1 text-xs font-medium text-slate-400 active:bg-white/[0.06] active:text-white"
          >
            <span className="text-sm leading-none">{it.icon}</span>
            <span className="text-[9px] tracking-wide">{it.label}</span>
          </a>
        ))}
      </div>
      <div className="h-[env(safe-area-inset-bottom)] bg-[#0B1020]" />
    </nav>
  );
}
