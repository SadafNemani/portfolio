import { getTranslations } from "next-intl/server";

import Section from "@/components/layout/Section";
import SectionHeading from "@/components/typography/SectionHeading";
import SectionLabel from "@/components/typography/SectionLabel";
import { richText } from "@/lib/richText";
import SectionHeader from "../layout/SectionHeader";
import ProjectShowcase from "../projects/ProjectShowcase";
import { projects } from "@/data/projects";
import ComingSoonState from "../ui/ComingSoonState";
import Reveal from "../motion/Reveal";
import WordReveal from "../motion/WordReveal";

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

  const heading = (
    <SectionHeader className="items-start justify-center">
      <Reveal gate={false} delay={0}>
        <SectionLabel>{t("sectionTitle")}</SectionLabel>
      </Reveal>

      <SectionHeading className="leading-[105%]">
        <WordReveal gate={false} delay={0.1}>
          {t.rich("title", richText)}
        </WordReveal>
      </SectionHeading>
    </SectionHeader>
  );

  return (
    <Section id="projects" className="relative">
      {translatedProjects.length > 0 ? (
        <ProjectShowcase projects={translatedProjects} labels={projectLabels} heading={heading} />
      ) : (
        <ComingSoonState heading={heading} />
      )}
    </Section>
  );
}
