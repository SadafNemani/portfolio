"use client";

import { useState } from "react";

import { Check, ChevronDown } from "lucide-react";
import { useLocale } from "next-intl";

import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "@/i18n/navigation";
import { languages } from "@/constants/languages";
import type { Locale } from "@/types/locale";

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);

  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const currentLanguage = languages.find((language) => language.code === locale);

  function handleLanguageChange(locale: Locale) {
    router.replace(pathname, {
      locale,
    });
    setIsOpen(false);
  }

  return (
    <div className="relative inline-block">
      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        className={cn(
          "rounded-pill border-border bg-glass shadow-button flex h-9 w-fit cursor-pointer items-center justify-center gap-2.5 border px-3 py-1 ring-1 ring-white/6 backdrop-blur-2xl ring-inset",
          "text-text-primary text-xs font-medium tracking-[-0.02em] select-none",
          "transition-all duration-300 ease-out",
          "hover:border-white/12 hover:bg-white/6",
          "active:scale-[0.98] active:bg-white/8",
          isOpen && "border-emerald/20 bg-white/6"
        )}
      >
        {currentLanguage?.label}
        <ChevronDown
          size={12}
          strokeWidth={2}
          className={cn(
            "text-text-secondary shrink-0 opacity-50 transition-transform duration-300 ease-out",
            isOpen && "rotate-180 opacity-70"
          )}
        />
      </button>

      {isOpen && (
        <div className="bg-glass border-border shadow-card rounded-button absolute top-full right-0 z-50 mt-1.5 min-w-full overflow-hidden border p-1 ring-1 ring-white/6 backdrop-blur-2xl ring-inset">
          {languages.map((language) => (
            <button
              key={language.code}
              type="button"
              onClick={() => handleLanguageChange(language.code)}
              className={cn(
                "flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-[14px] px-3 py-1.5 text-xs font-medium tracking-[-0.02em] transition-all duration-200",
                language.code === locale
                  ? "bg-emerald/10 text-emerald-light"
                  : "text-text-secondary hover:text-text-primary hover:bg-white/6 active:bg-white/8"
              )}
            >
              {language.code === locale && (
                <Check size={11} strokeWidth={2.5} className="text-emerald shrink-0" />
              )}
              <span>{language.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
