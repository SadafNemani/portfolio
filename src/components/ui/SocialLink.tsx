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
        "rounded-pill border-border bg-glass shadow-button flex h-14 cursor-pointer items-center gap-3 border px-4 py-5.5 backdrop-blur-2xl transition-all select-none",
        !label && "w-14 justify-center",
        className
      )}
      {...props}
    >
      <span className="text-emerald flex items-center justify-center">{icon}</span>

      {label && <span className="text-body text-text-primary font-medium">{label}</span>}
    </a>
  );
}
