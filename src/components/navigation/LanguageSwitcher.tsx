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
        className="rounded-pill text-text-primary text-body gradient-button-background flex h-12.5 w-fit items-center justify-center gap-1 p-3.75 font-medium"
      >
        {currentLanguage?.label}
        <ChevronDown
          size={18}
          className={cn("transition-transform duration-200", isOpen && "rotate-180")}
        />
      </button>

      {isOpen && (
        <div className="bg-glass border-border shadow-card rounded-card absolute top-full right-0 z-50 mt-2 min-w-full overflow-hidden border backdrop-blur-2xl">
          {languages.map((language) => (
            <button
              key={language.code}
              type="button"
              onClick={() => handleLanguageChange(language.code)}
              className={cn(
                "text-body flex w-full items-center justify-center gap-1 px-4 py-3 text-left transition-colors hover:bg-white/5",
                language.code === locale ? "text-emerald font-semibold" : "text-text-primary"
              )}
            >
              {language.code === locale && <Check size={16} />}
              <span>{language.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
