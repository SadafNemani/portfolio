"use client";

import type { ReactNode } from "react";
import { m, useReducedMotion } from "framer-motion";

interface PillRevealProps {
  children: ReactNode;
  delay?: number;
}

export default function PillReveal({ children, delay = 0 }: PillRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.3, delay }}
      >
        {children}
      </m.div>
    );
  }

  return (
    <m.div
      initial={{ opacity: 0, scale: 0.75, y: 12 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay, ease: [0.34, 1.56, 0.64, 1] }}
    >
      {children}
    </m.div>
  );
}
