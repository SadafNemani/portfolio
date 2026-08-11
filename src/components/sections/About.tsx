import { getTranslations } from "next-intl/server";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionDescription from "@/components/typography/SectionDescription";
import SectionHeading from "@/components/typography/SectionHeading";
import SectionLabel from "@/components/typography/SectionLabel";
import CharacteristicCard from "@/components/about/CharacteristicCard";
import { richText } from "@/lib/richText";
import { characteristics } from "@/data/about";
import SectionHeader from "../layout/SectionHeader";
import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import WordReveal from "@/components/motion/WordReveal";
import ImageReveal from "@/components/motion/ImageReveal";

export default async function About() {
  const t = await getTranslations("about");

  return (
    <Section id="about" className="relative flex min-h-dvh flex-col overflow-hidden">
      <Container className="grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[7fr_3fr] lg:py-36">
        <SectionHeader className="items-start">
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

          <div className="mt-6 grid w-full grid-cols-1 gap-6 sm:mt-8 sm:grid-cols-2">
            {characteristics.map((characteristic, index) => (
              <Reveal key={characteristic.key} gate={false} delay={0.45 + index * 0.1} y={16}>
                <CharacteristicCard characteristic={characteristic} />
              </Reveal>
            ))}
          </div>
        </SectionHeader>

        <ImageReveal className="rounded-card border-emerald/20 shadow-emerald relative h-130 w-full border">
          <Image
            src="/images/sadaf_nemani.jpg"
            alt={t("imageAlt")}
            fill
            quality={90}
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 344px"
          />
        </ImageReveal>
      </Container>
    </Section>
  );
}
