import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Circle } from "lucide-react";

interface SectionLabelProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

export default function SectionLabel({ children, className, ...props }: SectionLabelProps) {
  return (
    <div className="inline-flex items-center gap-2 uppercase">
      <Circle className="text-emerald size-2 fill-current" strokeWidth={0} />
      <p
        className={cn("text-emerald text-section-label font-normal tracking-[0.15em]", className)}
        {...props}
      >
        {children}
      </p>
      <Circle className="text-emerald size-2 fill-current" strokeWidth={0} />
    </div>
  );
}
