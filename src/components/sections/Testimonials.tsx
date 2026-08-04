import { getTranslations } from "next-intl/server";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionDescription from "@/components/typography/SectionDescription";
import SectionHeading from "@/components/typography/SectionHeading";
import SectionLabel from "@/components/typography/SectionLabel";
import BackgroundHalos from "@/components/ui/BackgroundHalos";
import { richText } from "@/lib/richText";
import SectionHeader from "../layout/SectionHeader";
import { QuoteIcon } from "lucide-react";
import TestimonialCarousel from "../testimonials/TestimonialCarousel";
import { testimonials } from "@/data/testimonials";

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
      <BackgroundHalos />

      <Container className="grid gap-12 py-32 sm:py-36 lg:grid-cols-[4fr_6fr]">
        <SectionHeader className="items-start justify-center">
          <SectionLabel>{t("sectionTitle")}</SectionLabel>

          <SectionHeading className="leading-[105%]">{t.rich("title", richText)}</SectionHeading>

          <div className="flex items-baseline-last gap-2.5">
            <QuoteIcon className="text-emerald/50 size-25 fill-current" strokeWidth={0} />
            <SectionDescription>{t("subtitle")}</SectionDescription>
          </div>
        </SectionHeader>

        <div className="flex items-center justify-center">
          <TestimonialCarousel testimonials={translatedTestimonials} />
        </div>
      </Container>
    </Section>
  );
}
