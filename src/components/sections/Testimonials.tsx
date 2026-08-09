import { getTranslations } from "next-intl/server";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionDescription from "@/components/typography/SectionDescription";
import SectionHeading from "@/components/typography/SectionHeading";
import SectionLabel from "@/components/typography/SectionLabel";
import { richText } from "@/lib/richText";
import SectionHeader from "../layout/SectionHeader";
import { QuoteIcon } from "lucide-react";
import TestimonialCarousel from "../testimonials/TestimonialCarousel";
import { testimonials } from "@/data/testimonials";
import Reveal from "../motion/Reveal";
import WordReveal from "../motion/WordReveal";
import QuoteMarkReveal from "../motion/QuoteMarkReveal";

export default async function Testimonials() {
  const t = await getTranslations("testimonials");

  const translatedTestimonials = testimonials.map((testimonial) => ({
    ...testimonial,
    name: t(`items.${testimonial.slug}.name`),
    review: t(`items.${testimonial.slug}.review`),
    workType: t(`items.${testimonial.slug}.workType`),
  }));

  return (
    <Section id="testimonials" className="relative flex min-h-dvh flex-col overflow-hidden">
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

          <div className="flex items-baseline-last gap-2.5">
            <QuoteMarkReveal delay={0.3}>
              <QuoteIcon
                className="text-emerald/50 size-14 fill-current sm:size-20 lg:size-25"
                strokeWidth={0}
              />
            </QuoteMarkReveal>

            <Reveal gate={false} delay={0.4}>
              <SectionDescription>{t("subtitle")}</SectionDescription>
            </Reveal>
          </div>
        </SectionHeader>

        <div className="flex items-center justify-center">
          <TestimonialCarousel testimonials={translatedTestimonials} />
        </div>
      </Container>
    </Section>
  );
}
