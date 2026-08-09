import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
}

export default function SecondaryButton({
  children,
  href,
  type = "button",
  className,
  ...props
}: SecondaryButtonProps) {
  if (href) {
    return <a href={href}>{children}</a>;
  }

  return (
    <button
      type={type}
      className={cn(
        "rounded-button bg-glass border-border shadow-button text-body hover:border-emerald/20 cursor-pointer border px-7 py-4 leading-6 font-semibold tracking-[-0.03em] text-white backdrop-blur-2xl transition-all hover:bg-white/8",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
