import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

export default function Input({ className, error, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <input
        aria-invalid={!!error}
        className={cn(
          "rounded-input bg-glass border-border text-text-secondary text-body placeholder:text-text-secondary focus:border-emerald h-16 w-full border p-2.5 leading-[1.1] font-medium tracking-[-0.03em] focus:outline-none",
          error && "border-red-400 focus:border-red-400",
          className
        )}
        {...props}
      />
      {error && <span className="text-sm text-red-400">{error}</span>}
    </div>
  );
}
