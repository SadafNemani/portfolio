"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorState = "default" | "hover" | "special";

function subscribteToFinePointer(callback: () => void) {
  const mediaQuery = window.matchMedia("(pointer: fine");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getFinePointerSnapshot() {
  return window.matchMedia("(pointer: fine").matches;
}

function getFinePointerServerSnapshot() {
  return false;
}

export default function CustomCursor() {
  const isFinePointer = useSyncExternalStore(
    subscribteToFinePointer,
    getFinePointerSnapshot,
    getFinePointerServerSnapshot
  );

  const [cursorState, setCursorState] = useState<CursorState>("default");
  const [specialText, setSpecialText] = useState<string | null>(null);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const dotX = useSpring(mouseX, { stiffness: 1000, damping: 60 });
  const dotY = useSpring(mouseY, { stiffness: 1000, damping: 60 });

  const ringX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const ringY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  useEffect(() => {
    if (!isFinePointer) return;

    document.documentElement.classList.add("custom-cursor-active");

    function handleMouseMove(event: MouseEvent) {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    }

    function handleMouseOver(event: MouseEvent) {
      const target = event.target as HTMLElement;

      const specialTarget = target.closest<HTMLElement>("[data-cursor='special']");
      const hoverTarget = target.closest<HTMLElement>(
        "a, button, [data-cursor='hover'], [role='button']"
      );

      if (specialTarget) {
        setCursorState("special");
        setSpecialText(specialTarget.dataset.cursorText ?? null);
      } else if (hoverTarget) {
        setCursorState("hover");
        setSpecialText(null);
      } else {
        setCursorState("default");
        setSpecialText(null);
      }
    }

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [isFinePointer, mouseX, mouseY]);

  if (!isFinePointer) return null;

  const ringSize = cursorState === "special" ? 64 : cursorState === "hover" ? 40 : 28;
  const dotOpacity = cursorState === "special" ? 0 : 1;

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="bg-emerald pointer-events-none fixed top-0 left-0 z-9999 rounded-full"
        style={{
          x: dotX,
          y: dotY,
          width: 6,
          height: 6,
          translateX: "-50%",
          translateY: "-50%",
          opacity: dotOpacity,
        }}
        transition={{ duration: 0.2 }}
      />

      <motion.div
        aria-hidden="true"
        className="border-emerald/40 bg-emerald/5 pointer-events-none fixed top-0 left-0 z-9998 flex items-center justify-center rounded-full border"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: ringSize,
          height: ringSize,
          borderColor:
            cursorState === "default" ? "rgba(52, 211, 153, 0.25)" : "rgba(52, 211, 153, 0.5)",
        }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        {specialText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: 0.05 }}
            className="text-text-primary text-[10px] font-medium tracking-[-0.02em] whitespace-nowrap"
          >
            {specialText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
