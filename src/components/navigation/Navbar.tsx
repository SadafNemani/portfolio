"use client";

import { cn } from "@/lib/utils";

import { NAVIGATION_ITEMS } from "@/constants";

import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";
import { useActiveSection } from "@/hooks/useActiveSection";
import { motion } from "framer-motion";

import Image from "next/image";
import { useTranslations } from "next-intl";

type NavbarProps = React.ComponentProps<"header">;

export default function Navbar({ className, ...props }: NavbarProps) {
  const t = useTranslations("navigation");
  const activeId = useActiveSection([...NAVIGATION_ITEMS]);

  const navItems = NAVIGATION_ITEMS.map((item) => ({
    href: `#${item}`,
    id: item,
    label: t(item),
  }));

  return (
    <header
      className={cn(
        "rounded-pill border-border bg-glass shadow-card fixed top-6 left-1/2 z-50 flex w-[min(880px,calc(100%-3rem))] -translate-x-1/2 items-center justify-between overflow-visible border px-4 py-2.5 ring-1 ring-white/6 backdrop-blur-2xl ring-inset sm:px-6 lg:grid lg:grid-cols-[1fr_auto_1fr]",
        className
      )}
      {...props}
    >
      <div className="flex shrink-0 items-center justify-start">
        <Image
          src="/logos/SadafLogo.svg"
          alt="Sadaf Nemani initials logo"
          width={60}
          height={54}
          className="h-9 w-auto cursor-pointer transition-transform duration-300 select-none hover:scale-[1.03] lg:h-13.5"
        />
      </div>

      <nav className="hidden items-center justify-center gap-7 px-4 lg:flex">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={cn(
              "text-body relative font-medium tracking-[-0.02em] transition-colors duration-300",
              activeId === item.id
                ? "text-text-primary"
                : "text-text-secondary hover:text-text-primary"
            )}
          >
            {item.label}
            {activeId === item.id && (
              <motion.span
                layoutId="navbar-underline"
                className="bg-emerald absolute bottom-0 left-0 h-px w-full"
                transition={{ type: "spring", stiffness: 280, damping: 32 }}
              />
            )}
          </a>
        ))}
      </nav>

      <div className="flex shrink-0 items-center justify-end gap-2 overflow-visible">
        <LanguageSwitcher />
        <MobileMenu items={navItems.map(({ href, label }) => ({ href, label }))} />
      </div>
    </header>
  );
}
