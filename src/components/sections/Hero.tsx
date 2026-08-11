import { ChevronDown } from "lucide-react";
import { getTranslations } from "next-intl/server";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionDescription from "@/components/typography/SectionDescription";
import SectionHeading from "@/components/typography/SectionHeading";
import SectionLabel from "@/components/typography/SectionLabel";
import PrimaryButton from "@/components/ui/PrimaryButton";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import SecondaryButton from "@/components/ui/SecondaryButton";
import { richText } from "@/lib/richText";
import SectionHeader from "../layout/SectionHeader";
import Reveal from "../motion/Reveal";
import WordReveal from "../motion/WordReveal";

export default async function Hero() {
  const t = await getTranslations("hero");

  return (
    <Section id="home" className="relative flex min-h-dvh flex-col overflow-hidden py-0">
      <Container className="relative flex flex-1 flex-col">
        <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center gap-10 px-2 py-16 text-center sm:gap-12 sm:py-24 lg:py-36">
          <SectionHeader className="items-center">
            <Reveal delay={0} gate={false} triggerOnView={false}>
              <SectionLabel>{t("sectionTitle")}</SectionLabel>
            </Reveal>

            <SectionHeading className="text-hero-title! max-w-[18ch]">
              <WordReveal
                delay={0.05}
                wordStagger={0.03}
                duration={0.5}
                gate={false}
                triggerOnView={false}
              >
                {t.rich("title", richText)}
              </WordReveal>
            </SectionHeading>

            <Reveal delay={0.3} duration={0.5} gate={false} triggerOnView={false}>
              <SectionDescription className="max-w-[52ch]">{t("subtitle")}</SectionDescription>
            </Reveal>
          </SectionHeader>

          <Reveal delay={0.5} gate={false} triggerOnView={false}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <PrimaryButton type="button" href="#projects">
                {t("primaryButton")}
              </PrimaryButton>
              <SecondaryButton type="button" href="#contact">
                {t("secondaryButton")}
              </SecondaryButton>
            </div>
          </Reveal>

          <Reveal delay={0.7} gate={false} triggerOnView={false}>
            <ScrollIndicator href="#about" icon={<ChevronDown size={22} strokeWidth={2} />}>
              {t("scrollIndicator")}
            </ScrollIndicator>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
