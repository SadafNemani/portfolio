import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
}

export default function PrimaryButton({
  children,
  href,
  type = "button",
  className,
  ...props
}: PrimaryButtonProps) {
  if (href) {
    return <a href={href}>{children}</a>;
  }

  return (
    <button
      type={type}
      className={cn(
        "rounded-button gradient-button-background border-border shadow-button text-body hover:shadow-emerald cursor-pointer border px-7 py-4 leading-6 font-semibold tracking-[-0.03em] text-white transition-all",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
