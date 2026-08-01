import type { HTMLAttributes } from "react";

import { Technology } from "@/types/technologies";

import Image from "next/image";

import { cn } from "@/lib/utils";

interface TechnologyNodeProps extends HTMLAttributes<HTMLDivElement> {
  technology: Technology;
}

export default function TechnologyNode({ technology, className, ...props }: TechnologyNodeProps) {
  return (
    <div
      className={cn(
        "rounded-pill border-border bg-glass shadow-card flex h-13 w-fit items-center gap-2.5 border px-4.5 py-3 backdrop-blur-2xl",
        className
      )}
      {...props}
    >
      <Image src={technology.logo} alt={technology.name} width={18} height={18} />
      <span className="text-body text-text-primary leading-[170%] font-medium tracking-[-0.03em]">
        {technology.name}
      </span>
    </div>
  );
}
