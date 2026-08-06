import { getTranslations } from "next-intl/server";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/typography/SectionHeading";
import SectionLabel from "@/components/typography/SectionLabel";
import BackgroundHalos from "@/components/ui/BackgroundHalos";
import { richText } from "@/lib/richText";
import SectionHeader from "../layout/SectionHeader";
import ContactCard from "../contact/ContactCard";
import SocialLink from "../ui/SocialLink";
import { socials } from "@/data/socials";
import Image from "next/image";

export default async function Contact() {
  const t = await getTranslations("contact");
  const tSocials = await getTranslations("socials");

  return (
    <Section id="contact" className="relative flex min-h-dvh flex-col overflow-hidden">
      <BackgroundHalos />

      <Container className="grid gap-12 py-16 sm:py-24 lg:grid-cols-[5fr_5fr] lg:py-36">
        <SectionHeader className="items-start justify-center">
          <SectionLabel>{t("sectionTitle")}</SectionLabel>

          <SectionHeading>{t.rich("title", richText)}</SectionHeading>

          <div className="mt-10 flex flex-wrap gap-2.5">
            {socials.map((social) => {
              const Icon = social.lucideIcon;
              const label = tSocials(social.id);

              return (
                <SocialLink
                  key={social.id}
                  href={social.href}
                  aria-label={label}
                  icon={
                    social.logo ? (
                      <Image src={social.logo} alt={label} width={22} height={22} />
                    ) : Icon ? (
                      <Icon size={22} />
                    ) : null
                  }
                  label={label}
                />
              );
            })}
          </div>
        </SectionHeader>

        <div className="flex flex-col gap-10">
          <ContactCard />
        </div>
      </Container>
    </Section>
  );
}
