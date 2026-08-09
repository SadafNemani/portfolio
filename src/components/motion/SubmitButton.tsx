"use client";

import type { ReactNode } from "react";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

interface SubmitButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  isPending: boolean;
  isSuccess: boolean;
}

export default function SubmitButton({
  children,
  isPending,
  isSuccess,
  className,
  ...props
}: SubmitButtonProps) {
  return (
    <motion.button
      animate={isPending ? { scale: [1, 1.015, 1] } : { scale: 1 }}
      transition={
        isPending ? { duration: 1.4, repeat: Infinity, ease: "easeInOut" } : { duration: 0.2 }
      }
      className={cn(
        "rounded-button gradient-button-background border-border shadow-button text-body flex cursor-pointer items-center justify-center gap-2 border px-7 py-4 leading-6 font-semibold tracking-[-0.03em] text-white transition-opacity duration-300 disabled:cursor-not-allowed disabled:opacity-70",
        className
      )}
      {...props}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isSuccess ? (
          <motion.span
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2"
          >
            <Check size={18} strokeWidth={2.5} />
            {children}
          </motion.span>
        ) : (
          <motion.span
            key="default"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
