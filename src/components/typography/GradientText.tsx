import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface GradientTextProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export default function GradientText({ children, className, ...props }: GradientTextProps) {
  return (
    <span className={cn("gradient-text-primary", className)} {...props}>
      {children}
    </span>
  );
}
