import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function SectionHeader({ children, className, ...props }: SectionHeaderProps) {
  return (
    <div className={cn("flex w-full flex-col gap-3", className)} {...props}>
      {children}
    </div>
  );
}
