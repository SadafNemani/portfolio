import { ChevronDown } from "lucide-react";
import { getTranslations } from "next-intl/server";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import HeroCodeCard from "@/components/hero/HeroCodeCard";
import SectionDescription from "@/components/typography/SectionDescription";
import SectionHeading from "@/components/typography/SectionHeading";
import SectionLabel from "@/components/typography/SectionLabel";
import BackgroundHalos from "@/components/ui/BackgroundHalos";
import PrimaryButton from "@/components/ui/PrimaryButton";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import SecondaryButton from "@/components/ui/SecondaryButton";

export default async function Hero() {
  const t = await getTranslations("hero");

  return (
    <Section id="home" className="relative flex min-h-dvh flex-col overflow-hidden py-0">
      <BackgroundHalos />

      <Container className="relative flex flex-1 flex-col">
        <div className="pointer-events-none absolute inset-s-0 top-24 z-0 hidden lg:block">
          <HeroCodeCard />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center gap-10 px-2 py-32 text-center sm:gap-12 sm:py-36">
          <div className="flex flex-col items-center gap-6">
            <SectionLabel>{t("sectionTitle")}</SectionLabel>

            <SectionHeading className="max-w-[18ch]">{t("title")}</SectionHeading>

            <SectionDescription className="max-w-[52ch]">{t("subtitle")}</SectionDescription>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <PrimaryButton type="button">{t("primaryButton")}</PrimaryButton>
            <SecondaryButton type="button">{t("secondaryButton")}</SecondaryButton>
          </div>

          <ScrollIndicator href="#about" icon={<ChevronDown size={22} strokeWidth={2} />}>
            {t("scrollIndicator")}
          </ScrollIndicator>
        </div>
      </Container>
    </Section>
  );
}
