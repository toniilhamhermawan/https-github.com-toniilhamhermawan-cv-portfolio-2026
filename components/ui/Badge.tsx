import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "accent" | "red" | "teal" | "outline" | "success";

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-[#F8FAFC] text-[#0B1020]",
  accent: "bg-[#6366F1]/10 text-[#818CF8] border border-[#6366F1]/20",
  red: "bg-[#8B5CF6]/10 text-[#A78BFA] border border-[#8B5CF6]/20",
  teal: "bg-[#A78BFA]/10 text-[#A78BFA] border border-[#A78BFA]/20",
  outline: "border border-white/10 bg-transparent text-[#94A3B8]",
  success: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
};

export function Badge({
  variant = "default",
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { variant?: BadgeVariant }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold tracking-tight",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
}
