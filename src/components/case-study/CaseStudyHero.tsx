"use client";

import { useTranslations } from "next-intl";
import { ArrowLeft } from "lucide-react";

import { Link } from "@/i18n/navigation";
import Container from "../layout/Container";
import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";
import { richText } from "@/lib/richText";
import Reveal from "../motion/Reveal";
import WordReveal from "../motion/WordReveal";

interface CaseStudyHeroProps {
  slug: string;
  liveUrl?: string;
  githubUrl?: string;
}

export default function CaseStudyHero({ slug, liveUrl, githubUrl }: CaseStudyHeroProps) {
  const t = useTranslations(`caseStudy.${slug}`);
  const shared = useTranslations("caseStudy.shared");

  return (
    <section className="relative pt-32 pb-16 sm:pt-40">
      <Container className="max-w-3xl">
        <Reveal gate={false} triggerOnView={false} y={12}>
          <Link
            href="/#projects"
            className="text-text-secondary hover:text-text-primary text-body-sm mb-8 inline-flex items-center gap-2 transition-colors"
          >
            <ArrowLeft className="rtl:rotate-180" size={16} />
            {shared("backlink")}
          </Link>
        </Reveal>

        <h1 className="text-text-primary text-hero-title font-extrabold tracking-[0.03em]">
          <WordReveal gate={false} triggerOnView={false} wordStagger={0.6}>
            {t.rich("hero.title", richText)}
          </WordReveal>
        </h1>

        <Reveal gate={false} triggerOnView={false} delay={0.3} y={12}>
          <p className="text-text-secondary text-section-description mt-4 max-w-xl font-medium">
            {t("hero.tagline")}
          </p>
        </Reveal>

        <Reveal gate={false} triggerOnView={false} delay={0.4} y={12}>
          <div className="mt-8 flex flex-wrap gap-3">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={shared("liveButton")}
                data-cursor="special"
                data-cursor-text="View project ↗"
              >
                <PrimaryButton type="button">{shared("liveButton")}</PrimaryButton>
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={shared("githubButton")}
              >
                <SecondaryButton type="button">{shared("githubButton")}</SecondaryButton>
              </a>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
