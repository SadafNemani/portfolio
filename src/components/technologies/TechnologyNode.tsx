import type { HTMLAttributes } from "react";

import { Technology } from "@/types/technologies";

import Image from "next/image";

import { cn } from "@/lib/utils";

interface TechnologyNodeProps extends HTMLAttributes<HTMLDivElement> {
  technology: Technology;
  size?: "default" | "sm";
}

const sizeStyles = {
  default: {
    wrapper: "h-13 gap-2.5 px-4.5 py-3",
    icon: 18,
    text: "text-body",
  },
  sm: {
    wrapper: "h-10 gap-2 px-3.5 py-2",
    icon: 14,
    text: "text-body-sm",
  },
};

export default function TechnologyNode({
  technology,
  size = "default",
  className,
  ...props
}: TechnologyNodeProps) {
  const styles = sizeStyles[size];

  return (
    <div
      className={cn(
        "rounded-pill border-border bg-glass shadow-card hover:border-emerald-light/30 flex w-fit items-center border backdrop-blur-2xl transition-colors duration-300",
        styles.wrapper,
        className
      )}
      {...props}
    >
      <Image src={technology.logo} alt={technology.name} width={styles.icon} height={styles.icon} />
      <span
        className={cn(
          "text-text-primary leading-[170%] font-medium tracking-[-0.03em]",
          styles.text
        )}
      >
        {technology.name}
      </span>
    </div>
  );
}
