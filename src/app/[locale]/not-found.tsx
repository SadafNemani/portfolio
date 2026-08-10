import { getTranslations } from "next-intl/server";

import Container from "@/components/layout/Container";
import SectionDescription from "@/components/typography/SectionDescription";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Reveal from "@/components/motion/Reveal";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <main className="mt-30 mb-15 flex min-h-[calc(100svh-...)] items-center">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <span className="text-[clamp(7rem,20vw,14rem)] leading-none font-extrabold text-white/10">
              404
            </span>
          </Reveal>

          <div className="-mt-8 flex flex-col items-center">
            <Reveal delay={0.2}>
              <h1 className="text-text-primary text-section-heading ...">{t("title")}</h1>
            </Reveal>

            <Reveal delay={0.35}>
              <SectionDescription className="max-w-[46ch]">{t("description")}</SectionDescription>
            </Reveal>

            <Reveal delay={0.5}>
              <PrimaryButton href="/">{t("homeButton")}</PrimaryButton>
            </Reveal>
          </div>
        </div>
      </Container>
    </main>
  );
}
