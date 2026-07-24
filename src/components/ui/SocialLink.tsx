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
        "rounded-button border-border bg-glass shadow-button flex h-14 cursor-pointer items-center gap-3 border backdrop-blur-2xl transition-all select-none",
        className
      )}
      {...props}
    >
      <span className="text-emerald flex items-center justify-center">{icon}</span>

      {label && <span className="text-input text-text-primary font-medium">{label}</span>}
    </a>
  );
}
