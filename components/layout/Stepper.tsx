import { cn } from "@/lib/utils";

export interface Step {
  id: string;
  label: string;
}

interface StepperProps {
  steps: Step[];
  current: number;
}

export function Stepper({ steps, current }: StepperProps) {
  return (
    <ol className="flex items-center gap-2 overflow-x-auto">
      {steps.map((step, idx) => {
        const isActive = idx === current;
        const isDone = idx < current;
        return (
          <li key={step.id} className="flex items-center gap-2">
            <div
              className={cn(
                "flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold",
                isDone
                  ? "bg-[var(--success)] text-white"
                  : isActive
                    ? "bg-[var(--accent)] text-white"
                    : "bg-[var(--muted)] text-[var(--muted-foreground)] border border-[var(--border)]"
              )}
            >
              {isDone ? "✓" : idx + 1}
            </div>
            <span
              className={cn(
                "whitespace-nowrap text-sm",
                isActive ? "font-semibold text-[var(--foreground)]" : "text-[var(--muted-foreground)]"
              )}
            >
              {step.label}
            </span>
            {idx < steps.length - 1 && (
              <span className="mx-1 h-px w-6 bg-[var(--border)] sm:w-8" />
            )}
          </li>
        );
      })}
    </ol>
  );
}
