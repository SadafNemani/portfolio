"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { LOADER_TOTAL_DURATION, LOADER_REDUCED_MOTION_DURATION } from "@/constants/loader";

interface HeadingRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function HeadingReveal({ children, delay = 0, className }: HeadingRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  const baseDelay =
    (prefersReducedMotion ? LOADER_REDUCED_MOTION_DURATION : LOADER_TOTAL_DURATION) / 1000;

  if (prefersReducedMotion) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: baseDelay }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={className} style={{ overflow: "hidden" }}>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0&", opacity: 1 }}
        transition={{ duration: 0.8, delay: baseDelay + delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
