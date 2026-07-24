import type { TextareaHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        "rounded-input bg-glass border-border text-text-secondary text-input placeholder:text-text-secondary focus:border-emerald h-42.5 w-full resize-none border p-2.5 leading-[1.1] font-medium tracking-[-0.03em] focus:outline-none",
        className
      )}
      {...props}
    />
  );
}
