"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  duration?: string;
  pauseOnHover?: boolean;
}

export function Marquee({ children, className, duration = "30s", pauseOnHover = true }: MarqueeProps) {
  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <div
        className={cn("flex w-max items-center gap-8 will-change-transform", pauseOnHover && "hover:[animation-play-state:paused]")}
        style={
          {
            animation: `marquee ${duration} linear infinite`,
          } as React.CSSProperties
        }
      >
        {/* Duplicate 4x for seamless on wide screens */}
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex items-center gap-8 shrink-0">
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}

export function MarqueeItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return <span className={cn("shrink-0 whitespace-nowrap", className)}>{children}</span>;
}
