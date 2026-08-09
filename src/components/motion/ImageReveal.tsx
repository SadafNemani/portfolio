"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";

interface ImageRevealProps {
  children: React.ReactNode;
  className?: string;
}

export default function ImageReveal({ children, className }: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ overflow: "hidden", position: "relative" }}
    >
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          height: "110%",
          y: prefersReducedMotion ? 0 : parallaxY,
        }}
      >
        <motion.div
          initial={{ clipPath: "inset(0% 0% 100% 0%)", scale: 1.15 }}
          animate={
            isInView
              ? { clipPath: "inset(0% 0% 0% 0%)", scale: 1 }
              : { clipPath: "inset(0% 0% 100% 0%)", scale: 1.15 }
          }
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: "relative", height: "100%", width: "100%" }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
