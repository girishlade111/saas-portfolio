"use client";

import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  dotClassName?: string;
  textClassName?: string;
  pulsing?: boolean;
}

export function SectionLabel({
  children,
  className,
  dotClassName,
  textClassName,
  pulsing = false,
}: SectionLabelProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/5 px-5 py-2",
        className
      )}
    >
      <span
        className={cn(
          "h-2 w-2 rounded-full bg-primary",
          pulsing && "animate-pulse-dot",
          dotClassName
        )}
      />
      <span
        className={cn(
          "font-mono text-xs uppercase tracking-[0.15em] text-primary",
          textClassName
        )}
      >
        {children}
      </span>
    </div>
  );
}
