"use client";

import type { ReactNode } from "react";
import { HTMLMotionProps, motion } from "framer-motion";

import { cn } from "@/lib/utils";

const glowAnimation = {
  boxShadow: [
    "0 0 12px rgba(52, 211, 153, 0.2), 0 12px 35px rgba(0, 0, 0, 0.25)",
    "0 0 28px rgba(52, 211, 153, 0.55), 0 12px 35px rgba(0, 0, 0, 0.25)",
    "0 0 12px rgba(52, 211, 153, 0.2), 0 12px 35px rgba(0, 0, 0, 0.25)",
  ],
};

const glowTransition = { duration: 2.2, repeat: Infinity, ease: "easeInOut" as const };

const buttonClassName =
  "rounded-button gradient-button-background border-border text-body inline-flex cursor-pointer items-center justify-center border px-7 py-4 leading-6 font-semibold tracking-[-0.03em] text-white";

interface PrimaryButtonBaseProps {
  children: ReactNode;
  className?: string;
}

interface PrimaryButtonAsButton
  extends PrimaryButtonBaseProps, Omit<HTMLMotionProps<"button">, "children" | "className"> {
  href?: undefined;
  type?: "button" | "submit" | "reset";
}

interface PrimaryButtonAsLink
  extends PrimaryButtonBaseProps, Omit<HTMLMotionProps<"a">, "children" | "className"> {
  href: string;
}

type PrimaryButtonProps = PrimaryButtonAsButton | PrimaryButtonAsLink;

export default function PrimaryButton({ children, className, ...props }: PrimaryButtonProps) {
  if (props.href) {
    const { href, ...linkProps } = props as PrimaryButtonAsLink;

    return (
      <motion.a
        href={href}
        animate={glowAnimation}
        transition={glowTransition}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className={cn(buttonClassName, className)}
        {...linkProps}
      >
        {children}
      </motion.a>
    );
  }

  const { type = "button", ...buttonProps } = props as PrimaryButtonAsButton;

  return (
    <motion.button
      type={type}
      animate={glowAnimation}
      transition={glowTransition}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={cn(buttonClassName, className)}
      {...buttonProps}
    >
      {children}
    </motion.button>
  );
}
