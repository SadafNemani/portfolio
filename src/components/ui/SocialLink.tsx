import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SocialLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: ReactNode;
  label?: string;
}

export default function SocialLink({ icon, label, className, ...props }: SocialLinkProps) {
  return (
    <a
      className={cn(
        "rounded-pill border-border bg-glass shadow-button hover:border-emerald/30 flex h-12 w-12 cursor-pointer items-center gap-3 border px-4 py-5.5 backdrop-blur-2xl transition-colors duration-300 select-none hover:bg-white/6 sm:h-14 sm:w-14",
        !label && "w-12 justify-center sm:w-14",
        className
      )}
      {...props}
    >
      <span className="text-emerald flex items-center justify-center">{icon}</span>

      {label && <span className="text-body text-text-primary font-medium">{label}</span>}
    </a>
  );
}
