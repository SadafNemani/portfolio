"use client";

import ProjectCard from "./ProjectCard";
import { ProjectContent } from "@/types/projects";

interface ProjectShowcaseProps {
  projects: ProjectContent[];
  labels: {
    liveButton: string;
    githubButton: string;
  };
}

export default function ProjectShowcase({ projects, labels }: ProjectShowcaseProps) {
  return (
    <div className="relative h-full">
      <div className="absolute top-0 right-0 z-0">
        <span className="text-[180px] leading-none font-extrabold">01</span>
      </div>
      <div className="relative z-10">
        <ProjectCard project={projects[0]} labels={labels} />{" "}
      </div>
    </div>
  );
}
