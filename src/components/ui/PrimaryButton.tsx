import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function PrimaryButton({ children, className, ...props }: PrimaryButtonProps) {
  return (
    <button
      className={cn(
        "rounded-button gradient-button-background border-border shadow-button text-input border px-7 py-4 leading-6 font-semibold tracking-[-0.03em] text-white transition-all",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
