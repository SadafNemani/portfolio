import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export default function Section({ children, className, ...props }: SectionProps) {
  return (
    <section className={cn("py-[140px]", className)} {...props}>
      {children}
    </section>
  );
}
