"use client";

import { ReactNode, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  MotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import Container from "@/components/layout/Container";
import ProjectCard from "./ProjectCard";
import { ProjectContent } from "@/types/projects";

interface ProjectShowcaseProps {
  projects: ProjectContent[];
  labels: {
    liveButton: string;
    githubButton: string;
  };
  heading: ReactNode;
}

const TRANSITION_RATIO = 0.35;

export default function ProjectShowcase({ projects, labels, heading }: ProjectShowcaseProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 500,
    damping: 60,
    mass: 0.2,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(Math.floor(latest * projects.length), projects.length - 1);
    setCurrentIndex(Math.max(index, 0));
  });

  return (
    <div ref={scrollRef} className="relative" style={{ height: `${projects.length * 100}vh` }}>
      <div className="sticky top-(--navbar-clearance) h-[calc(100dvh-(--navbar-clearance))] overflow-hidden py-16 sm:py-20 lg:py-28">
        {" "}
        <Container className="relative flex h-full min-h-0 flex-col">
          <div className="relative z-10">{heading}</div>

          <div className="pointer-events-none absolute inset-0 z-0 flex justify-end">
            <PaginationNumber value={currentIndex + 1} />
          </div>

          <div className="relative z-10 mt-7.5 min-h-0 overflow-hidden">
            <div
              className="relative mx-auto w-full max-w-300"
              style={{ height: "clamp(460px, 62dvh, 560px)" }}
            >
              {projects.map((project, index) => (
                <StackedCard
                  key={project.slug}
                  index={index}
                  total={projects.length}
                  progress={smoothProgress}
                >
                  <ProjectCard project={project} labels={labels} />
                </StackedCard>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

function StackedCard({
  index,
  total,
  progress,
  children,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
  children: ReactNode;
}) {
  const segment = 1 / total;

  const transitionStart =
    index === 0 ? -segment : (index - 1) * segment + (1 - TRANSITION_RATIO) * segment;
  const transitionEnd = index === 0 ? 0 : index * segment;

  const y = useTransform(progress, [transitionStart, transitionEnd], ["100%", "0%"], {
    clamp: true,
  });

  return (
    <motion.div
      className="absolute inset-0 h-full min-h-0"
      style={{ y, zIndex: index, willChange: "transform" }}
    >
      {children}
    </motion.div>
  );
}

function PaginationNumber({ value }: { value: number }) {
  return (
    <div className="relative h-full" style={{ perspective: 1000 }}>
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ rotateX: 90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: -90, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="text-text-primary absolute inset-e-0 leading-none font-extrabold opacity-[0.12]"
          style={{
            fontSize: "clamp(90px, 20vw, 300px)",
            top: "-0.18em",
            transformOrigin: "center",
          }}
        >
          {String(value).padStart(2, "0")}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
