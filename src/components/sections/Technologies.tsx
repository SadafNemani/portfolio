import { getTranslations } from "next-intl/server";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionDescription from "@/components/typography/SectionDescription";
import SectionHeading from "@/components/typography/SectionHeading";
import SectionLabel from "@/components/typography/SectionLabel";
import BackgroundHalos from "@/components/ui/BackgroundHalos";
import { richText } from "@/lib/richText";
import SectionHeader from "../layout/SectionHeader";
import TechnologyNode from "../technologies/TechnologyNode";
import { technologies, technologyCategories } from "@/data/technologies";

export default async function Technologies() {
  const t = await getTranslations("technologies");

  return (
    <Section id="technologies" className="relative flex min-h-dvh flex-col overflow-hidden">
      <BackgroundHalos />

      <Container className="grid gap-12 py-16 sm:py-24 lg:grid-cols-[4fr_6fr] lg:py-36">
        <SectionHeader className="items-start justify-center">
          <SectionLabel>{t("sectionTitle")}</SectionLabel>

          <SectionHeading>{t.rich("title", richText)}</SectionHeading>

          <SectionDescription>{t("subtitle")}</SectionDescription>
        </SectionHeader>

        <div className="flex flex-col gap-10">
          {technologyCategories.map((category) => {
            const categoryTechnologies = technologies.filter(
              (technology) => technology.category === category
            );

            return (
              <div key={category} className="flex flex-col gap-4">
                <div className="flex flex-col items-center gap-4">
                  <span className="text-text-secondary border-b-border text-section-description border-b font-semibold">
                    {t.rich(`categories.${category}`, richText)}
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  {categoryTechnologies.map((technology) => (
                    <TechnologyNode key={technology.id} technology={technology} />
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
