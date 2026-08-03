import { getTranslations } from "next-intl/server";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/typography/SectionHeading";
import SectionLabel from "@/components/typography/SectionLabel";
import BackgroundHalos from "@/components/ui/BackgroundHalos";
import { richText } from "@/lib/richText";
import SectionHeader from "../layout/SectionHeader";
import ProjectShowcase from "../projects/ProjectShowcase";
import { projects } from "@/data/projects";

export default async function Projects() {
  const t = await getTranslations("projects");

  const translatedProjects = projects.map((project) => ({
    ...project,
    title: t(`items.${project.slug}.title`),
    category: t(`items.${project.slug}.category`),
    description: t(`items.${project.slug}.description`),
  }));

  const projectLabels = {
    liveButton: t("items.liveButton"),
    githubButton: t("items.githubButton"),
  };

  return (
    <Section id="projects" className="relative">
      <BackgroundHalos />

      <div className="relative h-[400vh]">
        <div className="sticky top-0 h-dvh">
          <Container className="flex h-full flex-col py-32 sm:py-36">
            <SectionHeader className="items-start justify-center">
              <SectionLabel>{t("sectionTitle")}</SectionLabel>

              <SectionHeading className="leading-[105%]">
                {t.rich("title", richText)}
              </SectionHeading>
            </SectionHeader>

            <div className="relative mt-7.5 flex-1">
              <ProjectShowcase projects={translatedProjects} labels={projectLabels} />
            </div>
          </Container>
        </div>
      </div>
    </Section>
  );
}
