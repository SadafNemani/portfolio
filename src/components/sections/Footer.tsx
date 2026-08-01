import { getTranslations } from "next-intl/server";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import BackgroundHalos from "@/components/ui/BackgroundHalos";
import { NAVIGATION_ITEMS } from "@/constants";
import Image from "next/image";
import { socials } from "@/data/socials";
import SocialLink from "@/components/ui/SocialLink";
import { richText } from "@/lib/richText";

export default async function Footer() {
  const t = await getTranslations();

  return (
    <Section
      id="footer"
      className="bg-surface-secondary/15 rounded-t-card relative bottom-0 my-0 py-0"
    >
      <BackgroundHalos />

      <Container>
        <div className="backdrop-blur-3xl">
          <div className="via-emerald-light mb-6 h-px w-full bg-linear-to-r from-transparent to-transparent" />

          <div className="flex justify-between py-2.5">
            <div className="flex gap-2.5">
              <Image
                src="/logos/SadafLogo.svg"
                alt="Sadaf Nemani initials logo"
                width={80}
                height={72}
                className="cursor-pointer transition-transform duration-300 select-none hover:scale-[1.03]"
              />
              <div className="flex flex-col">
                <span className="text-text-primary text-[25px] font-bold">
                  {t("footer.myName")}
                </span>
                <span className="text-text-secondary text-[18px] font-medium">
                  {t("footer.mySpecialty")}
                </span>
              </div>
            </div>

            <nav className="flex items-center justify-center gap-7 px-4">
              {NAVIGATION_ITEMS.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="text-body text-text-secondary hover:text-text-primary relative font-medium tracking-[-0.02em] transition-colors duration-300"
                >
                  {t(`navigation.${item}`)}
                </a>
              ))}
            </nav>

            <div className="flex gap-2.5">
              {socials.map((social) => {
                const Icon = social.lucideIcon;

                return (
                  <SocialLink
                    key={social.id}
                    href={social.href}
                    aria-label={social.name}
                    icon={
                      social.logo ? (
                        <Image src={social.logo} alt={social.name} width={22} height={22} />
                      ) : Icon ? (
                        <Icon size={22} />
                      ) : null
                    }
                  />
                );
              })}
            </div>
          </div>

          <div className="via-emerald-light/10 my-2.5 mb-6 h-px w-full bg-linear-to-r from-transparent to-transparent" />

          <div className="text-text-secondary/50 flex items-center justify-between py-2.5 text-[15px] font-medium">
            <span>{t.rich("footer.footerDetails", richText)}</span>
            <span>{t("footer.copyright")}</span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
