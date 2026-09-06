"use client";

import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionHeader from "../layout/SectionHeader";
import SectionLabel from "../typography/SectionLabel";
import SectionHeading from "../typography/SectionHeading";
import GlassCard from "../ui/GlassCard";
import PrimaryButton from "../ui/PrimaryButton";
import TechnologyNode from "../technologies/TechnologyNode";
import { getTechnology } from "@/lib/getTechnology";
import Reveal from "../motion/Reveal";
import PillReveal from "../motion/PillReveal";
import type { CaseStudyData } from "@/types/case-study";

interface SectionProps {
  slug: string;
  data: CaseStudyData;
}

export function QuickFacts({ slug }: SectionProps) {
  const t = useTranslations(`caseStudy.${slug}`);
  const shared = useTranslations("caseStudy.shared");

  const facts = [
    { label: shared("factsRole"), value: t("facts.role") },
    { label: shared("factsTimeline"), value: t("facts.timeline") },
    { label: shared("factsPages"), value: t("facts.pages") },
  ];

  return (
    <Section className="border-border border-y py-8">
      <Container className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {facts.map((f, i) => (
          <Reveal key={f.label} gate={false} once={false} delay={i * 0.05} y={10}>
            <div>
              <p className="text-text-secondary text-body-sm tracking-widest uppercase">
                {f.label}
              </p>
              <p className="text-text-primary text-body mt-1 font-semibold">{f.value}</p>
            </div>
          </Reveal>
        ))}
      </Container>
    </Section>
  );
}

export function Overview({ slug }: { slug: string }) {
  const t = useTranslations(`caseStudy.${slug}`);
  const shared = useTranslations("caseStudy.shared");

  return (
    <Section>
      <Container className="grid gap-10 sm:grid-cols-2">
        <Reveal gate={false} once={false}>
          <div className="flex flex-col gap-3">
            <SectionLabel>{shared("problemLabel")}</SectionLabel>
            <p className="text-text-secondary text-section-description leading-[170%] font-medium">
              {t("overview.problem")}
            </p>
          </div>
        </Reveal>

        <Reveal gate={false} once={false} delay={0.1}>
          <div className="flex flex-col gap-3">
            <SectionLabel>{shared("approachLabel")}</SectionLabel>
            <p className="text-text-secondary text-section-description leading-[170%] font-medium">
              {t("overview.solution")}
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export function FeatureGrid({ slug }: { slug: string }) {
  const t = useTranslations(`caseStudy.${slug}`);
  const shared = useTranslations("caseStudy.shared");
  const items = t.raw("features.items") as { title: string; description: string }[];

  return (
    <Section>
      <Container>
        <Reveal gate={false} once={false} amount={0.4} margin="0px 0px -10% 0px">
          <SectionHeader className="mb-10">
            <SectionLabel>{shared("featuresLabel")}</SectionLabel>
            <SectionHeading>{t("features.heading")}</SectionHeading>
          </SectionHeader>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f, i) => (
            <PillReveal key={f.title} delay={i * 0.06}>
              <GlassCard
                key={f.title}
                className="hover:border-emerald/20 border-transparent p-6 transition-colors"
              >
                <h3 className="text-text-primary text-body mb-2 font-bold">{f.title}</h3>
                <p className="text-text-secondary text-body-sm leading-[170%] font-medium">
                  {f.description}
                </p>
              </GlassCard>
            </PillReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function ProcessTimeline({ slug }: { slug: string }) {
  const t = useTranslations(`caseStudy.${slug}`);
  const steps = t.raw("process.steps") as { title: string; description: string }[];

  return (
    <Section>
      <Container className="max-w-3xl">
        <Reveal gate={false} once={false} amount={0.4} margin="0px 0px -10% 0px">
          <SectionHeader className="mb-10">
            <SectionHeading>{t("process.heading")}</SectionHeading>
          </SectionHeader>
        </Reveal>

        <ol className="flex flex-col gap-8">
          {steps.map((step, i) => (
            <Reveal key={step.title} gate={false} once={false} delay={i * 0.08} y={16}>
              <li key={step.title} className="flex gap-5">
                <span className="border-emerald/40 text-emerald text-body-sm mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border font-semibold">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-text-primary text-body font-bold">{step.title}</h3>
                  <p className="text-text-secondary text-body-sm mt-1 leading-[170%] font-medium">
                    {step.description}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

export function TechStack({ slug, data }: SectionProps) {
  const t = useTranslations(`caseStudy.${slug}`);
  const shared = useTranslations("caseStudy.shared");
  const reasons = t.raw("stack.reasons") as { name: string; reason: string }[];

  return (
    <Section>
      <Container>
        <Reveal gate={false} once={false} amount={0.4} margin="0px 0px -10% 0px">
          <SectionHeader className="mb-10">
            <SectionLabel>{shared("stackLabel")}</SectionLabel>
            <SectionHeading>{t("stack.heading")}</SectionHeading>
          </SectionHeader>
        </Reveal>

        <div className="mb-4 flex flex-wrap gap-2">
          {data.technologies.map((id, i) => {
            const technology = getTechnology(id);
            if (!technology) return null;
            return (
              <PillReveal key={technology.id} delay={i * 0.05}>
                <TechnologyNode technology={technology} size="sm" />
              </PillReveal>
            );
          })}
        </div>

        <Reveal gate={false} once={false} delay={0.15}>
          <div className="border-border divide-border mb-12 flex flex-col divide-y">
            {reasons.map((r) => (
              <div key={r.name} className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-6">
                <span className="text-text-primary text-body w-44 shrink-0 font-semibold">
                  {r.name}
                </span>
                <span className="text-text-secondary text-body-sm">{r.reason}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {data.designTokens && (
          <Reveal gate={false} once={false} delay={0.2}>
            <div>
              <p className="text-text-secondary text-body-sm mb-3 tracking-widest uppercase">
                {shared("tokensLabel")}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {data.designTokens.colors.map((c, i) => (
                  <PillReveal key={c.hex} delay={i * 0.05}>
                    <div className="border-border rounded-pill flex items-center gap-2 border py-1 pr-3 pl-1">
                      <span
                        className="border-border size-5 rounded-full border"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span className="text-text-secondary text-body-sm">{c.name}</span>
                    </div>
                  </PillReveal>
                ))}
              </div>
              <p className="text-text-secondary text-body-sm mt-3">{data.designTokens.type}</p>
            </div>
          </Reveal>
        )}
      </Container>
    </Section>
  );
}

export function Decisions({ slug }: { slug: string }) {
  const t = useTranslations(`caseStudy.${slug}`);
  const items = t.raw("decisions.items") as { title: string; text: string }[];

  return (
    <Section>
      <Container className="max-w-3xl">
        <Reveal gate={false} once={false} amount={0.4} margin="0px 0px -10% 0px">
          <SectionHeader className="mb-10">
            <SectionHeading>{t("decisions.heading")}</SectionHeading>
          </SectionHeader>
        </Reveal>

        <div className="flex flex-col gap-5">
          {items.map((d, i) => (
            <Reveal key={d.title} gate={false} once={false} delay={i * 0.08} y={16}>
              <GlassCard className="border-transparent p-6">
                <h3 className="text-text-primary text-body mb-2 font-bold">{d.title}</h3>
                <p className="text-text-secondary text-body-sm leading-[170%] font-medium">
                  {d.text}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function Reflection({ slug }: { slug: string }) {
  const t = useTranslations(`caseStudy.${slug}`);
  const shared = useTranslations("caseStudy.shared");

  return (
    <Section>
      <Container className="max-w-3xl">
        <Reveal gate={false} once={false} amount={0.4} margin="0px 0px -10% 0px">
          <SectionLabel>{shared("reflectionLabel")}</SectionLabel>
          <p className="text-text-primary text-section-description mt-3 leading-[170%] font-medium">
            {t("reflection.text")}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}

export function CaseStudyCTA() {
  const shared = useTranslations("caseStudy.shared");

  return (
    <Section className="py-20 text-center">
      <Container className="mx-auto flex max-w-lg flex-col items-center">
        <Reveal gate={false} once={false} amount={0.4} margin="0px 0px -10% 0px">
          <SectionHeading>{shared("ctaHeading")}</SectionHeading>
          <p className="text-text-secondary text-body mt-3">{shared("ctaDescription")}</p>
          <Link href="/#contact" className="mt-8">
            <PrimaryButton type="button">{shared("ctaButton")}</PrimaryButton>
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
}
