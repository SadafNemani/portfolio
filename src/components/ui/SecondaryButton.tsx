import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function SecondaryButton({ children, className, ...props }: SecondaryButtonProps) {
  return (
    <button
      className={cn(
        "rounded-button bg-glass border-border shadow-button text-input border px-7 py-4 leading-6 font-semibold tracking-[-0.03em] text-white backdrop-blur-2xl transition-all",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
