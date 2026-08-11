"use client";

import { useRef, useState, type ReactNode } from "react";
import { m, useInView, useReducedMotion } from "framer-motion";

interface QuoteMarkRevealProps {
  children: ReactNode;
  delay?: number;
}

type Phase = "hidden" | "entering" | "pulsing";

export default function QuoteMarkReveal({ children, delay = 0 }: QuoteMarkRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });
  const prefersReducedMotion = useReducedMotion();

  const [phase, setPhase] = useState<Phase>("hidden");

  if (isInView && phase === "hidden") {
    setPhase("entering");
  }

  if (prefersReducedMotion) {
    return (
      <m.div
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </m.div>
    );
  }

  if (phase === "pulsing") {
    return (
      <m.div
        ref={containerRef}
        style={{ opacity: 0.5 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      >
        {children}
      </m.div>
    );
  }

  return (
    <m.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
      animate={phase === "entering" ? { opacity: 0.5, scale: 1, rotate: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      onAnimationComplete={() => {
        if (phase === "entering") setPhase("pulsing");
      }}
    >
      {children}
    </m.div>
  );
}
