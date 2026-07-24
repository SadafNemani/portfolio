import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function GlassCard({ children, className, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-card bg-glass border-border shadow-card border p-7 backdrop-blur-2xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
