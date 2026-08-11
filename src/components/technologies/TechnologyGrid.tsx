"use client";

import PillReveal from "../motion/PillReveal";
import Reveal from "../motion/Reveal";
import TechnologyNode from "./TechnologyNode";
import type { Technology, TechnologyCategory } from "@/types/technologies";
import type { ReactNode } from "react";

interface TechnologyGridProps {
  categories: TechnologyCategory[];
  technologies: Technology[];
  categoryLabels: Record<TechnologyCategory, ReactNode>;
}

export default function TechnologyGrid({
  categories,
  technologies,
  categoryLabels,
}: TechnologyGridProps) {
  return (
    <div className="flex flex-col gap-10">
      {categories.map((category, categoryIndex) => {
        const categoryTechnologies = technologies.filter(
          (technology) => technology.category === category
        );

        return (
          <div key={category} className="flex flex-col gap-4">
            <div className="flex flex-col items-center gap-4">
              <Reveal gate={false} delay={categoryIndex * 0.1} y={12}>
                <span className="text-text-secondary border-b-border text-section-description border-b font-semibold">
                  {categoryLabels[category]}
                </span>
              </Reveal>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {categoryTechnologies.map((technology, techIndex) => (
                <PillReveal key={technology.id} delay={categoryIndex * 0.1 + techIndex * 0.05}>
                  <TechnologyNode key={technology.id} technology={technology} />
                </PillReveal>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
