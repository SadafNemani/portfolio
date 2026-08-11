"use client";

import { Children, Fragment, isValidElement, useRef, type ReactNode } from "react";
import { m, useInView, useReducedMotion } from "framer-motion";

import { LOADER_TOTAL_DURATION, LOADER_REDUCED_MOTION_DURATION } from "@/constants/loader";

interface WordRevealProps {
  children: ReactNode;
  delay?: number;
  wordStagger?: number;
  duration?: number;
  className?: string;
  gate?: boolean;
  triggerOnView?: boolean;
}

type Token =
  { type: "word"; content: ReactNode; wordIndex: number } | { type: "space" } | { type: "break" };

function tokenize(children: ReactNode): Token[] {
  const tokens: Token[] = [];
  let wordIndex = 0;

  Children.forEach(children, (child) => {
    if (typeof child === "string") {
      child.split(/(\s+)/).forEach((part) => {
        if (part === "") return;
        if (/^\s+$/.test(part)) {
          tokens.push({ type: "space" });
        } else {
          tokens.push({ type: "word", content: part, wordIndex });
          wordIndex += 1;
        }
      });
    } else if (isValidElement(child)) {
      if (child.type === "br") {
        tokens.push({ type: "break" });
      } else {
        tokens.push({ type: "word", content: child, wordIndex });
        wordIndex += 1;
      }
    }
  });

  return tokens;
}

export default function WordReveal({
  children,
  delay = 0,
  wordStagger = 0.08,
  duration = 0.75,
  className,
  gate = true,
  triggerOnView = true,
}: WordRevealProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const prefersReducedMotion = useReducedMotion();

  const baseDelay = gate
    ? (prefersReducedMotion ? LOADER_REDUCED_MOTION_DURATION : LOADER_TOTAL_DURATION) / 1000
    : 0;

  const shouldAnimate = gate ? true : triggerOnView ? isInView : true;

  if (prefersReducedMotion) {
    return (
      <m.span
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={shouldAnimate ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3, delay: gate ? baseDelay : 0 }}
        className={className}
      >
        {children}
      </m.span>
    );
  }

  const tokens = tokenize(children);

  return (
    <span ref={containerRef} className={className}>
      {tokens.map((token, index) => {
        if (token.type === "space") return <Fragment key={index}> </Fragment>;
        if (token.type === "break") return <br key={index} />;

        const wordDelay = baseDelay + delay + token.wordIndex * wordStagger;

        return (
          <span
            key={index}
            style={{ display: "inline-block", overflow: "hidden", paddingBottom: "0.15em" }}
          >
            <m.span
              initial={{ y: "110%", opacity: 0 }}
              animate={shouldAnimate ? { y: "0%", opacity: 1 } : { y: "110%", opacity: 0 }}
              transition={{ duration, delay: wordDelay, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: "inline-block", marginBottom: "-0.15em" }}
            >
              {token.content}
            </m.span>
          </span>
        );
      })}
    </span>
  );
}
