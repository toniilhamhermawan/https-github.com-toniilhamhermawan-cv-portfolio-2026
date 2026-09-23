import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[#6366F1] text-white hover:bg-[#5558E3] shadow-lg shadow-[#6366F1]/20 hover:shadow-[#6366F1]/30",
  secondary:
    "bg-white/[0.06] text-[#F8FAFC] border border-white/10 hover:bg-white/[0.10] hover:text-white",
  outline:
    "border border-white/10 bg-transparent hover:bg-white/[0.06] text-[#94A3B8] hover:text-[#F8FAFC]",
  ghost: "bg-transparent hover:bg-white/[0.06] text-[#94A3B8] hover:text-white",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-10 px-6 text-sm",
  lg: "h-11 px-8 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full font-semibold tracking-tight transition-all duration-300 touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] disabled:opacity-50 disabled:pointer-events-none hover:scale-[1.01] active:scale-[0.98]",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
