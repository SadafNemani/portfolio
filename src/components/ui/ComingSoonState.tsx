"use client";

import { ReactNode } from "react";
import { m } from "framer-motion";
import { useTranslations } from "next-intl";

import Container from "../layout/Container";
import GlassCard from "./GlassCard";

interface ComingSoonStateProps {
  heading: ReactNode;
}

export default function ComingSoonState({ heading }: ComingSoonStateProps) {
  const t = useTranslations("projects.comingSoon");

  return (
    <Container className="flex flex-col py-16 sm:py-24 lg:py-36">
      {heading}

      <m.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mt-7.5"
      >
        <GlassCard className="relative flex flex-col items-center gap-6 overflow-hidden px-8 py-16 text-center sm:py-20">
          <PulsingIcon />

          <div className="bg-emerald/20 pointer-events-none absolute top-1/2 left-1/2 h-70 w-70 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]" />

          <div className="relative flex max-w-xl flex-col gap-4">
            <h3 className="text-text-primary text-project-title font-bold">{t("title")}</h3>
            <p className="text-text-secondary text-body font-medium">{t("description")}</p>
          </div>

          <div className="text-text-secondary relative flex items-center gap-2 text-sm font-medium">
            <span className="bg-emerald-light relative flex h-2 w-2">
              <span className="bg-emerald-light absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
              <span className="bg-emerald-light relative inline-flex h-2 w-2 rounded-full" />
            </span>
            {t("status")}
          </div>
        </GlassCard>
      </m.div>
    </Container>
  );
}

function PulsingIcon() {
  return (
    <m.div
      animate={{ scale: [1, 1.06, 1] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="border-border bg-glass relative flex h-16 w-16 items-center justify-center rounded-full border backdrop-blur-2xl"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-emerald-light"
      >
        <path
          d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.75" />
      </svg>
    </m.div>
  );
}
