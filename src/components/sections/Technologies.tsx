import dynamic from "next/dynamic";
import LazyMount from "../system/LazyMount";

import { getTranslations } from "next-intl/server";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionDescription from "@/components/typography/SectionDescription";
import SectionHeading from "@/components/typography/SectionHeading";
import SectionLabel from "@/components/typography/SectionLabel";
import { richText } from "@/lib/richText";
import SectionHeader from "../layout/SectionHeader";
import { technologies, technologyCategories } from "@/data/technologies";
import Reveal from "../motion/Reveal";
import WordReveal from "../motion/WordReveal";
import { TechnologyCategory } from "@/types/technologies";
import { ReactNode } from "react";

const TechnologyGrid = dynamic(() => import("../technologies/TechnologyGrid"));

export default async function Technologies() {
  const t = await getTranslations("technologies");

  const categoryLabels = Object.fromEntries(
    technologyCategories.map((category) => [category, t.rich(`categories.${category}`, richText)])
  ) as Record<TechnologyCategory, ReactNode>;

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

        <LazyMount minHeight="30rem">
          <TechnologyGrid
            categories={technologyCategories}
            technologies={technologies}
            categoryLabels={categoryLabels}
          />
        </LazyMount>
      </Container>
    </Section>
  );
}
