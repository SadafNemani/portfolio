"use client";

import type { InputHTMLAttributes } from "react";
import { AnimatePresence, m } from "framer-motion";

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
          "rounded-input bg-glass border-border text-text-secondary text-body placeholder:text-text-secondary focus:border-emerald focuse:shadow-[0_0_0_3px_rgba(52,211,153,0.1)] h-16 w-full border p-2.5 leading-[1.1] font-medium tracking-[-0.03em] transition-all duration-300 focus:outline-none",
          error &&
            "border-red-400 focus:border-red-400 focus:shadow-[0_0_0_3px_rgba(248,113,113,0.1)]",
          className
        )}
        {...props}
      />
      <AnimatePresence>
        {error && (
          <m.span
            initial={{ opacity: 0, y: -4, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -4, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm text-red-400"
          >
            {error}
          </m.span>
        )}
      </AnimatePresence>
    </div>
  );
}
