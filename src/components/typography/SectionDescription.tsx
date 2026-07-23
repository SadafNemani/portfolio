import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

export default function SectionDescription({
  children,
  className,
  ...props
}: SectionDescriptionProps) {
  return (
    <p
      className={cn(
        "text-text-secondary text-paragraph leading-[170%] font-medium tracking-[-0.03em]",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
