import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Circle } from "lucide-react";

interface SectionLabelProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

export default function SectionLabel({ children, className, ...props }: SectionLabelProps) {
  return (
    <div className="inline-flex items-center gap-2 uppercase">
      <Circle className="size-2 fill-current" strokeWidth={0} />
      <p
        className={cn("text-emerald text-section-label font-medium tracking-[0.2%]", className)}
        {...props}
      >
        {children}
      </p>
      <Circle className="size-2 fill-current" strokeWidth={0} />
    </div>
  );
}
