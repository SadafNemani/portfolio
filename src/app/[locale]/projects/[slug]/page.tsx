import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { caseStudies, getCaseStudy } from "@/data/projects/case-studies";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import {
  QuickFacts,
  Overview,
  FeatureGrid,
  ProcessTimeline,
  TechStack,
  Reflection,
  CaseStudyCTA,
  Decisions,
} from "@/components/case-study/CaseStudySections";
import Gallery from "@/components/case-study/Gallery";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const data = getCaseStudy(slug);
  if (!data) return {};

  const t = await getTranslations({ locale, namespace: `caseStudy.${slug}` });

  return {
    title: `${t("hero.tagline")} — Sadaf Nemani`,
    description: t("hero.tagline"),
    openGraph: {
      title: t("hero.tagline"),
      description: t("overview.problem"),
      images: [{ url: data.gallery[0]?.image ?? "/og-image.png", width: 1200, height: 630 }],
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const data = getCaseStudy(slug);

  if (!data) notFound();

  return (
    <main>
      <CaseStudyHero slug={slug} liveUrl={data.liveUrl} githubUrl={data.githubUrl} />
      <QuickFacts slug={slug} data={data} />
      <Overview slug={slug} />
      <FeatureGrid slug={slug} />
      <ProcessTimeline slug={slug} />
      <TechStack slug={slug} data={data} />
      <Decisions slug={slug} />
      <Gallery slug={slug} data={data} />
      <Reflection slug={slug} />
      <CaseStudyCTA />
    </main>
  );
}
