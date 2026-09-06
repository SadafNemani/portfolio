"use client";

import type { ReactNode } from "react";
import { m, useReducedMotion } from "framer-motion";

import { LOADER_TOTAL_DURATION, LOADER_REDUCED_MOTION_DURATION } from "@/constants/loader";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  gate?: boolean;
  triggerOnView?: boolean;
  amount?: number;
  margin?: string;
  once?: boolean;
}

export default function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 1,
  className,
  gate = true,
  triggerOnView = true,
  amount = 0.3,
  margin = "0px",
  once = true,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  const baseDelay = gate
    ? (prefersReducedMotion ? LOADER_REDUCED_MOTION_DURATION : LOADER_TOTAL_DURATION) / 1000
    : 0;

  const useViewTrigger = !gate && triggerOnView;

  return (
    <m.div
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : y }}
      whileInView={useViewTrigger ? { opacity: 1, y: 0 } : undefined}
      animate={!useViewTrigger ? { opacity: 1, y: 0 } : undefined}
      viewport={useViewTrigger ? { once, amount, margin } : undefined}
      transition={{
        duration: prefersReducedMotion ? 0.3 : duration,
        delay: baseDelay + delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </m.div>
  );
}
