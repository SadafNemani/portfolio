"use client";

import { Children, Fragment, isValidElement, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { LOADER_TOTAL_DURATION, LOADER_REDUCED_MOTION_DURATION } from "@/constants/loader";

interface WordRevealProps {
  children: ReactNode;
  delay?: number;
  wordStagger?: number;
  className?: string;
  gate?: boolean;
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
  className,
  gate = true,
}: WordRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  const baseDelay = gate
    ? (prefersReducedMotion ? LOADER_REDUCED_MOTION_DURATION : LOADER_TOTAL_DURATION) / 1000
    : 0;

  if (prefersReducedMotion) {
    return (
      <motion.span
        initial={{ opacity: 0 }}
        animate={gate ? { opacity: 1 } : undefined}
        whileInView={gate ? undefined : { opacity: 1 }}
        viewport={gate ? undefined : { once: true, amount: 0.3 }}
        transition={{ duration: 0.3, delay: baseDelay }}
        className={className}
      >
        {children}
      </motion.span>
    );
  }

  const tokens = tokenize(children);

  return (
    <span className={className}>
      {tokens.map((token, index) => {
        if (token.type === "space") {
          return <Fragment key={index}> </Fragment>;
        }

        if (token.type === "break") {
          return <br key={index} />;
        }

        const wordDelay = baseDelay + delay + token.wordIndex * wordStagger;

        return (
          <span
            key={index}
            style={{ display: "inline-block", overflow: "hidden", paddingBottom: "0.15em" }}
          >
            <motion.span
              initial={{ y: "110%", opacity: 0 }}
              animate={gate ? { y: "0%", opacity: 1 } : undefined}
              whileInView={gate ? undefined : { y: "0%", opacity: 1 }}
              viewport={gate ? undefined : { once: true, amount: 0.6 }}
              transition={{ duration: 0.75, delay: wordDelay, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: "inline-block", marginBottom: "-0.15em" }}
            >
              {token.content}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}
