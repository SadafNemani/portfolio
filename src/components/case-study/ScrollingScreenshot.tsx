"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { m, useInView, useReducedMotion } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface ScrollingScreenshotProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ScrollingScreenshot({ src, alt, className }: ScrollingScreenshotProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [duration, setDuration] = useState(6);
  const [isHovering, setIsHovering] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const hasHover = useMediaQuery("(hover: hover) and (pointer: fine)");
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });
  const hasAutoPlayed = useRef(false);

  const handleLoad = useCallback((img: HTMLImageElement) => {
    const container = containerRef.current;
    if (!container) return;

    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const renderedHeight = img.naturalHeight * (containerWidth / img.naturalWidth);
    const distance = Math.max(renderedHeight - containerHeight, 0);

    setScrollDistance(distance);
    setDuration(Math.min(Math.max(distance / 140, 3), 14));
  }, []);

  useEffect(() => {
    if (hasHover || prefersReducedMotion) return;
    if (!isInView || scrollDistance === 0 || hasAutoPlayed.current) return;

    hasAutoPlayed.current = true;
    const holdMs = 900;
    const playTimer = setTimeout(() => setIsHovering(true), 400);
    const resetTimer = setTimeout(() => setIsHovering(false), 400 + duration * 1000 + holdMs);

    return () => {
      clearTimeout(playTimer);
      clearTimeout(resetTimer);
    };
  }, [hasHover, prefersReducedMotion, isInView, scrollDistance, duration]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className ?? ""}`}
      onMouseEnter={hasHover ? () => setIsHovering(true) : undefined}
      onMouseLeave={hasHover ? () => setIsHovering(false) : undefined}
    >
      <m.div
        animate={{ y: isHovering && !prefersReducedMotion ? -scrollDistance : 0 }}
        transition={{
          duration: isHovering ? duration : 0.6,
          ease: isHovering ? "linear" : "easeOut",
        }}
        className="absolute inset-x-0 top-0"
      >
        <Image
          src={src}
          alt={alt}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full"
          onLoad={(e) => handleLoad(e.currentTarget)}
        />
      </m.div>
    </div>
  );
}
