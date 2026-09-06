"use client";

import { useTranslations } from "next-intl";

import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionHeader from "../layout/SectionHeader";
import SectionLabel from "../typography/SectionLabel";
import SectionHeading from "../typography/SectionHeading";
import Reveal from "../motion/Reveal";
import ScrollingScreenshot from "./ScrollingScreenshot";
import type { CaseStudyData } from "@/types/case-study";

interface GalleryProps {
  slug: string;
  data: CaseStudyData;
}

function ChromeFrame({
  image,
  alt,
  index,
  label,
  heightClassName = "h-[420px]",
}: {
  image: string;
  alt: string;
  index: number;
  label: string;
  heightClassName?: string;
}) {
  return (
    <div className="rounded-card border-border bg-surface shadow-card group overflow-hidden border">
      <div className="border-border flex items-center gap-1.5 border-b px-4 py-3">
        <span className="size-2 rounded-full bg-white/15" />
        <span className="size-2 rounded-full bg-white/15" />
        <span className="size-2 rounded-full bg-white/15" />
        <span className="size-2 rounded-full bg-white/15" />
      </div>

      <div className="relative">
        <ScrollingScreenshot src={image} alt={alt} className={heightClassName} />

        <div className="bg-surface/80 border-border rounded-pill pointer-events-none absolute bottom-3 left-3 flex items-center gap-2 border px-3 py-1.5 backdrop-blur-md">
          <span className="text-emerald-light text-body-sm font-semibold">
            {String(index).padStart(2, "0")}
          </span>
          <span className="text-text-secondary text-body-sm">{label}</span>
        </div>
      </div>
    </div>
  );
}

export default function Gallery({ slug, data }: GalleryProps) {
  const t = useTranslations(`caseStudy.${slug}`);
  const shared = useTranslations("caseStudy.shared");
  const labels = t.raw("gallery.labels") as Record<string, string>;

  const [featured, ...rest] = data.gallery;

  return (
    <Section>
      <Container>
        <Reveal gate={false} once={false} amount={0.4} margin="0px 0px -10% 0px">
          <SectionHeader className="mb-10">
            <SectionLabel>{shared("galleryLabel")}</SectionLabel>
            <SectionHeading>{t("gallery.heading")}</SectionHeading>
          </SectionHeader>
        </Reveal>

        {featured && (
          <Reveal gate={false} once={false} amount={0.3} className="mb-5">
            <ChromeFrame
              image={featured.image}
              alt={labels[featured.key] ?? featured.key}
              index={1}
              label={labels[featured.key] ?? featured.key}
              heightClassName="h-[520px]"
            />
          </Reveal>
        )}

        <div className="grid gap-5 sm:grid-cols-3">
          {rest.map((g, i) => (
            <Reveal key={g.key} gate={false} once={false} delay={i * 0.1} amount={0.3}>
              <ChromeFrame
                image={g.image}
                alt={labels[g.key] ?? g.key}
                index={i + 2}
                label={labels[g.key] ?? g.key}
                heightClassName="h-[420px]"
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
