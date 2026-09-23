"use client";

import { cn } from "@/lib/utils";

export function CertificateFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "shrink-0 snap-start rounded-xl border border-white/10 bg-[#131A2E] p-2 shadow-md card-hover",
        "w-[280px] sm:w-[340px]",
        className
      )}
    >
      <div className="overflow-hidden rounded-lg border border-white/[0.04] bg-white/[0.03] aspect-[4/3] flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export function CertificatePlaceholder() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#6366F1]/10 to-[#8B5CF6]/10 p-6 text-center">
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-lg">🖼️</span>
      <p className="text-xs font-medium text-slate-400">Bingkai siap</p>
      <p className="text-[11px] text-slate-500">Foto bisa ditambah nanti di</p>
      <p className="text-[11px] font-mono text-slate-500">public/certificates/</p>
    </div>
  );
}
