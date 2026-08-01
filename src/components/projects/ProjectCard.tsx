import { getTranslations } from "next-intl/server";

import { cn } from "@/lib/utils";

import GlassCard from "../ui/GlassCard";
import { Project } from "@/types/projects";
import TechnologyNode from "../technologies/TechnologyNode";

import { getTechnology } from "@/lib/getTechnology";
import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";

import Image from "next/image";

interface ProjectCardProps extends React.ComponentProps<typeof GlassCard> {
  project: Project;
}

export default async function ProjectCard({ project, className, ...props }: ProjectCardProps) {
  const t = await getTranslations("projects.items");

  return (
    <GlassCard className={cn("flex gap-10 p-5", className)} {...props}>
      <div className="flex flex-1 flex-col gap-8">
        <span className="text-emerald-light text-section-description font-medium">
          {t(`${project.slug}.category`)}
        </span>

        <h3 className="text-text-primary text-project-title font-bold">
          {t(`${project.slug}.title`)}
        </h3>

        <p className="text-text-secondary text-body font-medium">
          {t(`${project.slug}.description`)}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technologyId) => {
            const technology = getTechnology(technologyId);

            if (!technology) return null;

            return <TechnologyNode key={technology.id} technology={technology} />;
          })}
        </div>

        <div className="flex gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("liveButton")}
            >
              <PrimaryButton type="button">{t("liveButton")}</PrimaryButton>
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("githubButton")}
            >
              <SecondaryButton type="button">{t("githubButton")}</SecondaryButton>
            </a>
          )}
        </div>
      </div>

      <div className="bg-glass rounded-card shadow-button relative h-full flex-1 overflow-hidden px-6 py-2.5 backdrop-blur-2xl">
        <Image
          src={project.thumbnail}
          alt={t(`${project.slug}.title`)}
          width={700}
          height={500}
          className="rounded-card h-full w-full object-cover"
        />
      </div>
    </GlassCard>
  );
}
