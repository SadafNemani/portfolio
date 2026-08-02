"use client";

import { AnimatePresence, motion } from "framer-motion";

import { TestimonialContent } from "@/types/testimonials";
import TestimonialCard from "./TestimonialCard";

import { useEffect, useState } from "react";

interface TestimonialCarouselProps {
  testimonials: TestimonialContent[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((previous) => (previous + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="relative min-h-85 w-full">
      <div className="bg-emerald/30 absolute inset-x-10 bottom-0 h-24 rounded-full blur-3xl" />

      <AnimatePresence mode="wait">
        <motion.div
          key={testimonials[currentIndex].slug}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
        >
          <TestimonialCard testimonial={testimonials[currentIndex]} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
