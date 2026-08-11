import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";
import { montserrat, ibmPlex } from "@/lib/fonts";

import type { Locale } from "@/types/locale";

import "@/app/globals.css";
import PersonJsonLd from "@/components/seo/PersonJsonLd";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/sections/Footer";
import CustomCursor from "@/components/system/CustomCursor";
import BackgroundHalos from "@/components/ui/BackgroundHalos";
import ScrollToTopButton from "@/components/system/ScrollToTopButton";

import MotionProvider from "@/components/system/MotionProvider";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yoursite.com";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo" });

  const title = t("title");
  const description = t("description");

  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        en: `${siteUrl}/en`,
        ar: `${siteUrl}/ar`,
        fa: `${siteUrl}/fa`,
        "x-default": `${siteUrl}/en`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}`,
      siteName: "Sadaf Nemani",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
        },
      ],
      locale: locale === "ar" ? "ar_SA" : locale === "fa" ? "fa_IR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  const isRTL = locale === "ar" || "fa";

  return (
    <html
      lang={locale}
      dir={isRTL ? "rtl" : "ltr"}
      className={`${montserrat.variable} ${ibmPlex.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <MotionProvider>
          <CustomCursor />
          <BackgroundHalos className="fixed inset-0 z-0 overflow-hidden" />
          <PersonJsonLd />
          <NextIntlClientProvider messages={messages}>
            <Navbar />
            {children}
            <Footer />
            <ScrollToTopButton />
          </NextIntlClientProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
