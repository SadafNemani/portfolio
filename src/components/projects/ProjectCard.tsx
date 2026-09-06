"use client";

import { cn } from "@/lib/utils";

import GlassCard from "../ui/GlassCard";
import { ProjectContent } from "@/types/projects";
import TechnologyNode from "../technologies/TechnologyNode";

import { getTechnology } from "@/lib/getTechnology";
import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";

import { Link } from "@/i18n/navigation";
import ScrollingScreenshot from "@/components/case-study/ScrollingScreenshot";

interface ProjectCardProps extends React.ComponentProps<typeof GlassCard> {
  project: ProjectContent;
  labels: {
    liveButton: string;
    githubButton: string;
    caseStudyLink: string;
  };
}

export default function ProjectCard({ project, labels, className, ...props }: ProjectCardProps) {
  return (
    <GlassCard
      className={cn(
        "hover:border-emerald/20 flex h-full min-h-0 flex-col gap-6 border-transparent p-5 transition-all duration-300 hover:-translate-y-1 lg:flex-row-reverse lg:gap-10 lg:overflow-y-auto",
        className
      )}
      {...props}
    >
      <div className="bg-glass rounded-card shadow-button relative h-56 shrink-0 overflow-hidden px-6 py-2.5 backdrop-blur-2xl sm:h-64 lg:h-full lg:flex-1">
        <ScrollingScreenshot
          src={project.thumbnail}
          alt={project.title}
          className="rounded-card h-full w-full"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 lg:gap-8">
        <span className="text-emerald-light text-section-description font-medium">
          {project.category}
        </span>

        <h3 className="text-text-primary text-project-title font-bold">
          {project.hasCaseStudy ? (
            <Link
              href={`/projects/${project.slug}`}
              className="hover:text-emerald-light transition-colors"
            >
              {project.title}
            </Link>
          ) : (
            project.title
          )}
        </h3>

        <p className="text-text-secondary text-body font-medium">{project.description}</p>

        {project.scope && project.scope.length > 0 && (
          <ul className="text-text-secondary flex flex-wrap gap-x-2 gap-y-1 text-sm">
            {project.scope.map((item, i) => (
              <li key={item} className="flex items-center gap-2">
                {item}
                {i < project.scope!.length - 1 && (
                  <span aria-hidden className="text-text-secondary/40">
                    ·
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technologyId) => {
            const technology = getTechnology(technologyId);
            if (!technology) return null;
            return <TechnologyNode key={technology.id} technology={technology} size="sm" />;
          })}
        </div>

        <div className="flex flex-wrap items-center gap-3">
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
          {project.hasCaseStudy && (
            <Link
              href={`/projects/${project.slug}`}
              className="text-emerald-light hover:text-emerald text-body-sm font-medium underline-offset-4 transition-colors hover:underline"
              data-cursor="special"
              data-cursor-text="Read case study ↗"
            >
              {labels.caseStudyLink}
            </Link>
          )}
        </div>
      </div>
    </GlassCard>
  );
}
