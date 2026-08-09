import { cn } from "@/lib/utils";

import GlassCard from "../ui/GlassCard";
import { ProjectContent } from "@/types/projects";
import TechnologyNode from "../technologies/TechnologyNode";

import { getTechnology } from "@/lib/getTechnology";
import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";

import Image from "next/image";

interface ProjectCardProps extends React.ComponentProps<typeof GlassCard> {
  project: ProjectContent;
  labels: {
    liveButton: string;
    githubButton: string;
  };
}

export default function ProjectCard({ project, labels, className, ...props }: ProjectCardProps) {
  return (
    <GlassCard
      className={cn(
        "hover:border-emerald/20 flex h-full min-h-0 flex-col gap-6 overflow-y-auto border-transparent p-5 transition-all duration-300 hover:-translate-y-1 lg:flex-row lg:gap-10",
        className
      )}
      {...props}
    >
      <div className="flex flex-1 flex-col gap-4 lg:gap-8">
        <span className="text-emerald-light text-section-description font-medium">
          {project.category}
        </span>

        <h3 className="text-text-primary text-project-title font-bold">{project.title}</h3>

        <p className="text-text-secondary text-body font-medium">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technologyId) => {
            const technology = getTechnology(technologyId);
            if (!technology) return null;
            return <TechnologyNode key={technology.id} technology={technology} size="sm" />;
          })}
        </div>

        <div className="flex gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={labels.liveButton}
              data-cursor="special"
              data-cursor-text="View project ↗"
            >
              <PrimaryButton type="button">{labels.liveButton}</PrimaryButton>
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={labels.githubButton}
            >
              <SecondaryButton type="button">{labels.githubButton}</SecondaryButton>
            </a>
          )}
        </div>
      </div>

      <div className="bg-glass rounded-card shadow-button relative h-40 shrink-0 overflow-hidden px-6 py-2.5 backdrop-blur-2xl lg:h-full lg:flex-1">
        <Image
          src={project.thumbnail}
          alt={project.title}
          width={700}
          height={500}
          className="rounded-card h-full w-full object-cover"
        />
      </div>
    </GlassCard>
  );
}
