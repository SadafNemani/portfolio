import { getTranslations } from "next-intl/server";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionDescription from "@/components/typography/SectionDescription";
import SectionHeading from "@/components/typography/SectionHeading";
import SectionLabel from "@/components/typography/SectionLabel";
import BackgroundHalos from "@/components/ui/BackgroundHalos";
import CharacteristicCard from "@/components/about/CharacteristicCard";
import StatisticCard from "@/components/about/StatisticCard";
import { richText } from "@/lib/richText";
import { characteristics, statistics } from "@/data/about";
import SectionHeader from "../layout/SectionHeader";
import Image from "next/image";

export default async function About() {
  const t = await getTranslations("about");

  return (
    <Section id="about" className="relative flex min-h-dvh flex-col overflow-hidden py-0">
      <BackgroundHalos />

      <Container className="relative mx-auto grid w-full flex-1 grid-cols-3 items-center gap-5 py-32 sm:gap-6 sm:py-36">
        <SectionHeader className="items-start">
          <SectionLabel>{t("sectionTitle")}</SectionLabel>

          <SectionHeading className="text-[37px]">{t.rich("title", richText)}</SectionHeading>

          <SectionDescription className="max-w-96.25">{t("subtitle")}</SectionDescription>

          <div className="grid max-w-96.25 grid-cols-3 gap-2 pt-4">
            {statistics.map((statistic) => (
              <StatisticCard key={statistic.key} statistic={statistic} />
            ))}
          </div>
        </SectionHeader>
        <div className="rounded-card border-border relative h-130 w-full overflow-hidden border">
          <Image
            src="/images/about.png"
            alt={t("imageAlt")}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </div>
        <div className="flex w-full flex-col gap-6">
          {characteristics.map((characteristic) => (
            <CharacteristicCard key={characteristic.key} characteristic={characteristic} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
