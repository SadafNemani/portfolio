"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

type Phase = "drawing" | "complete" | "expanding";

const RING_RADIUS = 120;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

const DRAW_DURATION = 1300;
const HOLD_DURATION = 300;
const EXPAND_DURATION = 600;
const REDUCED_MOTION_DURATION = 500;

export default function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [phase, setPhase] = useState<Phase>("drawing");
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    document.documentElement.classList.add("overflow-hidden");

    const timers: ReturnType<typeof setTimeout>[] = [];

    if (prefersReducedMotion) {
      timers.push(
        setTimeout(() => {
          setIsVisible(false);
          document.documentElement.classList.remove("overflow-hidden");
        }, REDUCED_MOTION_DURATION)
      );
    } else {
      timers.push(setTimeout(() => setPhase("complete"), DRAW_DURATION));
      timers.push(setTimeout(() => setPhase("expanding"), DRAW_DURATION + HOLD_DURATION));
      timers.push(
        setTimeout(
          () => {
            setIsVisible(false);
            document.documentElement.classList.remove("overflow-hidden");
          },
          DRAW_DURATION + HOLD_DURATION + EXPAND_DURATION
        )
      );
    }

    return () => {
      timers.forEach(clearTimeout);
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, [prefersReducedMotion]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.2 : 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="bg-background fixed inset-0 z-10000 flex items-center justify-center overflow-hidden"
        >
          {prefersReducedMotion ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/logos/SadafLogo.svg"
                alt="Sadaf Nemani"
                width={168}
                height={152}
                priority
                className="h-auto w-28 sm:w-42"
              />
            </motion.div>
          ) : (
            <div className="relative flex items-center justify-center">
              <motion.div
                animate={{
                  opacity: phase === "expanding" ? 0 : [0, 0.5, 0.3],
                  scale: phase === "expanding" ? 3 : [0.85, 1.3, 1.4],
                }}
                transition={
                  phase === "expanding"
                    ? { duration: EXPAND_DURATION / 1000, ease: [0.22, 1, 0.36, 1] }
                    : { duration: DRAW_DURATION / 1000, ease: [0.22, 1, 0.36, 1] }
                }
                className="bg-emerald/30 pointer-events-none absolute h-40 w-40 rounded-full blur-[60px] sm:h-64 sm:w-64 sm:blur-[80px]"
              />

              <motion.svg
                width="180"
                height="180"
                viewBox="0 0 288 288"
                className="absolute -rotate-90 sm:h-72 sm:w-72"
                animate={{
                  opacity: phase === "expanding" ? 0 : 1,
                  scale: phase === "expanding" ? 2.4 : 1,
                }}
                transition={{ duration: EXPAND_DURATION / 1000, ease: [0.22, 1, 0.36, 1] }}
              >
                <circle
                  cx="144"
                  cy="144"
                  r={RING_RADIUS}
                  fill="none"
                  stroke="rgba(52, 211, 153, 0.15)"
                  strokeWidth="2.5"
                />
                <motion.circle
                  cx="144"
                  cy="144"
                  r={RING_RADIUS}
                  fill="none"
                  stroke="#34d399"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray={RING_CIRCUMFERENCE}
                  initial={{ strokeDashoffset: RING_CIRCUMFERENCE }}
                  animate={{
                    strokeDashoffset: phase === "drawing" ? RING_CIRCUMFERENCE * 0.15 : 0,
                    opacity: phase === "complete" ? [1, 0.6, 1] : 1,
                  }}
                  transition={{
                    strokeDashoffset: { duration: DRAW_DURATION / 1000, ease: [0.22, 1, 0.36, 1] },
                    opacity: { duration: HOLD_DURATION / 1000, ease: "easeInOut" },
                  }}
                />
              </motion.svg>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: phase === "expanding" ? 0 : 1,
                  scale: phase === "expanding" ? 1.15 : 1,
                }}
                transition={{
                  duration: phase === "expanding" ? EXPAND_DURATION / 1000 : 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Image
                  src="/logos/SadafLogo.svg"
                  alt="Sadaf Nemani"
                  width={168}
                  height={152}
                  priority
                  className="h-auto w-28 sm:w-42"
                />
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
