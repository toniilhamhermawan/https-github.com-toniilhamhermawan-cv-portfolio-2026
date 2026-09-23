"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ProgressProps {
  value: number;
  className?: string;
  barClassName?: string;
  animate?: boolean;
}

export function Progress({ value, className, barClassName, animate = true }: ProgressProps) {
  const [width, setWidth] = useState(animate ? 0 : value);

  useEffect(() => {
    if (!animate) return;
    const t = setTimeout(() => setWidth(value), 120);
    return () => clearTimeout(t);
  }, [value, animate]);

  return (
    <div
      className={cn(
        "h-2 w-full overflow-hidden rounded-full bg-white/[0.06] p-0.5",
        className
      )}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className={cn(
          "h-full rounded-full transition-all duration-[1000ms] ease-out",
          barClassName ?? "bg-gradient-to-r from-[#6366F1] to-[#A78BFA] shadow-[0_0_12px_rgb(99_102_241/0.5)]"
        )}
        style={{ width: `${width}%` }}
      />
    </div>
  );
}
