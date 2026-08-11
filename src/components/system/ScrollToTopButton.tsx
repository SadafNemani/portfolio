"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useTranslations } from "next-intl";

const SHOW_THRESHOLD = 500;

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations("navigation");

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > SHOW_THRESHOLD);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <m.button
          type="button"
          onClick={handleClick}
          aria-label={t("scrollToTop")}
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.94 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-pill border-border bg-glass shadow-button hover:border-emerald/30 fixed right-6 bottom-6 z-40 flex h-12 w-12 cursor-pointer items-center justify-center border backdrop-blur-2xl transition-colors duration-300 sm:right-8 sm:bottom-8"
        >
          <ArrowUp size={20} className="text-emerald" strokeWidth={2.25} />
        </m.button>
      )}
    </AnimatePresence>
  );
}
