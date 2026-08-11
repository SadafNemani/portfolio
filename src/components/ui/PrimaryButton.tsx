"use client";

import type { ReactNode } from "react";
import { HTMLMotionProps, m } from "framer-motion";

import { cn } from "@/lib/utils";

const buttonClassName =
  "rounded-button gradient-button-background border-border text-body relative isolate inline-flex cursor-pointer items-center justify-center border px-7 py-4 leading-6 font-semibold tracking-[-0.03em] text-white";

const glowLayerClassName = "rounded-button pointer-events-none absolute inset-0 -z-10";

const glowStyle = {
  boxShadow: "0 0 28px rgba(52, 211, 153, 0.55), 0 12px 35px rgba(0, 0, 0, 0.25)",
};

const glowAnimation = { opacity: [0.3, 1, 0.3] };
const glowTransition = { duration: 2.2, repeat: Infinity, ease: "easeInOut" as const };

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
      <m.a
        href={href}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className={cn(buttonClassName, className)}
        {...linkProps}
      >
        <m.span
          aria-hidden="true"
          className={glowLayerClassName}
          style={glowStyle}
          animate={glowAnimation}
          transition={glowTransition}
        />
        {children}
      </m.a>
    );
  }

  const { type = "button", ...buttonProps } = props as PrimaryButtonAsButton;

  return (
    <m.button
      type={type}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={cn(buttonClassName, className)}
      {...buttonProps}
    >
      <m.span
        aria-hidden="true"
        className={glowLayerClassName}
        style={glowStyle}
        animate={glowAnimation}
        transition={glowTransition}
      />
      {children}
    </m.button>
  );
}
