"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { m } from "framer-motion";

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
      <m.span
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="text-emerald"
      >
        {icon}
      </m.span>

      <span className="text-body text-text-secondary font-medium">{children}</span>
    </a>
  );
}
