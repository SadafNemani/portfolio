import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

export default function SectionHeading({ children, className, ...props }: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        "text-text-primary text-section-heading leading-[105%] font-extrabold tracking-[-0.03em]",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}
