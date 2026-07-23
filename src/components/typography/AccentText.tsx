import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface AccentTextProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export default function AccentText({ children, className, ...props }: AccentTextProps) {
  return (
    <span className={cn("text-accent", className)} {...props}>
      {children}
    </span>
  );
}
