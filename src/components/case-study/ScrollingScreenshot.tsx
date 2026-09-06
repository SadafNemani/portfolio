"use client";

import { useCallback, useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useReducedMotion, m } from "framer-motion";

interface ScrollingScreenshotProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ScrollingScreenshot({ src, alt, className }: ScrollingScreenshotProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [duration, setDuraion] = useState(6);
  const [isHovering, setIsHovering] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const measure = useCallback(() => {
    const container = containerRef.current;
    const img = imgRef.current;
    if (!container || !img || !img.naturalWidth) return;

    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const renderedHeight = img.naturalHeight * (containerWidth / img.naturalWidth);
    const distance = Math.max(renderedHeight - containerHeight, 0);

    setScrollDistance(distance);
    setDuraion(Math.min(Math.max(distance / 140, 3), 14));
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    return () => observer.disconnect();
  }, [measure]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className ?? ""}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
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
          ref={imgRef}
          onLoad={measure}
        />
      </m.div>
    </div>
  );
}
