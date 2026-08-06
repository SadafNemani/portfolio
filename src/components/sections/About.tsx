import { getTranslations } from "next-intl/server";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionDescription from "@/components/typography/SectionDescription";
import SectionHeading from "@/components/typography/SectionHeading";
import SectionLabel from "@/components/typography/SectionLabel";
import BackgroundHalos from "@/components/ui/BackgroundHalos";
import CharacteristicCard from "@/components/about/CharacteristicCard";
import { richText } from "@/lib/richText";
import { characteristics } from "@/data/about";
import SectionHeader from "../layout/SectionHeader";
import Image from "next/image";

export default async function About() {
  const t = await getTranslations("about");

  return (
    <Section id="about" className="relative flex min-h-dvh flex-col overflow-hidden">
      <BackgroundHalos />

      <Container className="grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[7fr_3fr] lg:py-36">
        <SectionHeader className="items-start">
          <SectionLabel>{t("sectionTitle")}</SectionLabel>

          <SectionHeading>{t.rich("title", richText)}</SectionHeading>

          <SectionDescription>{t("subtitle")}</SectionDescription>

          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
            {characteristics.map((characteristic) => (
              <CharacteristicCard key={characteristic.key} characteristic={characteristic} />
            ))}
          </div>
        </SectionHeader>
        <div className="rounded-card border-border relative h-80 w-full overflow-hidden border sm:h-96 lg:h-130">
          <Image
            src="/images/sadaf_nemani.jpg"
            alt={t("imageAlt")}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </div>
      </Container>
    </Section>
  );
}
