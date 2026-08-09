import { getTranslations } from "next-intl/server";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionDescription from "@/components/typography/SectionDescription";
import SectionHeading from "@/components/typography/SectionHeading";
import SectionLabel from "@/components/typography/SectionLabel";
import { richText } from "@/lib/richText";
import SectionHeader from "../layout/SectionHeader";
import TechnologyNode from "../technologies/TechnologyNode";
import { technologies, technologyCategories } from "@/data/technologies";
import Reveal from "../motion/Reveal";
import WordReveal from "../motion/WordReveal";
import PillReveal from "../motion/PillReveal";

export default async function Technologies() {
  const t = await getTranslations("technologies");

  return (
    <Section id="technologies" className="relative flex min-h-dvh flex-col overflow-hidden">
      <Container className="grid gap-12 py-16 sm:py-24 lg:grid-cols-[4fr_6fr] lg:py-36">
        <SectionHeader className="items-start justify-center">
          <Reveal gate={false} delay={0}>
            <SectionLabel>{t("sectionTitle")}</SectionLabel>
          </Reveal>

          <SectionHeading>
            <WordReveal gate={false} delay={0.1}>
              {t.rich("title", richText)}
            </WordReveal>
          </SectionHeading>

          <Reveal gate={false} delay={0.3}>
            <SectionDescription>{t("subtitle")}</SectionDescription>
          </Reveal>
        </SectionHeader>

        <div className="flex flex-col gap-10">
          {technologyCategories.map((category, categoryIndex) => {
            const categoryTechnologies = technologies.filter(
              (technology) => technology.category === category
            );

            return (
              <div key={category} className="flex flex-col gap-4">
                <div className="flex flex-col items-center gap-4">
                  <Reveal gate={false} delay={categoryIndex * 0.1} y={12}>
                    <span className="text-text-secondary border-b-border text-section-description border-b font-semibold">
                      {t.rich(`categories.${category}`, richText)}
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
      </Container>
    </Section>
  );
}
