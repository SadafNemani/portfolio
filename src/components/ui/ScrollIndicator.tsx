import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface ScrollIndicatorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: ReactNode;
  children: ReactNode;
}

export default function ScrollIndicator({
  icon,
  children,
  className,
  ...props
}: ScrollIndicatorProps) {
  return (
    <a
      className={cn("flex flex-col items-center gap-3 transition-all select-none", className)}
      {...props}
    >
      <span className="text-emerald">{icon}</span>

      <span className="text-input text-text-secondary font-medium">{children}</span>
    </a>
  );
}
