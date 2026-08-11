"use client";

import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface MobileMenuProps {
  items: { href: string; label: string }[];
}

export default function MobileMenu({ items }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("navigation");

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-label={isOpen ? t("closeMenu") : t("openMenu")}
        aria-expanded={isOpen}
        className={cn(
          "rounded-pill border-border bg-glass flex h-9 w-9 cursor-pointer items-center justify-center border ring-1 ring-white/6 backdrop-blur-2xl transition-all duration-300 ring-inset",
          "hover:border-white/12 hover:bg-white/6 active:scale-[0.96]",
          isOpen && "border-emerald/20 bg-white/6"
        )}
      >
        {isOpen ? (
          <X size={16} className="text-text-primary" />
        ) : (
          <Menu size={16} className="text-text-primary" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            <m.nav
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="border-border bg-surface/95 shadow-card 2-[min(320px,calc(100%-3rem))] rounded-card fixed top-24 left-1/2 z-50 flex -translate-x-1/2 flex-col gap-1 border p-3 backdrop-blur-2xl"
            >
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-text-secondary hover:text-text-primary text-body rounded-button px-4 py-3 text-center font-medium transition-colors duration-200 hover:bg-white/6"
                >
                  {item.label}
                </a>
              ))}
            </m.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
