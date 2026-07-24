import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "rounded-input bg-glass border-border text-text-secondary text-input placeholder:text-text-secondary focus:border-emerald h-16 w-full border p-2.5 leading-[1.1] font-medium tracking-[-0.03em] focus:outline-none",
        className
      )}
      {...props}
    />
  );
}
