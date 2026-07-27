"use client";

import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";

import { NAVIGATION_ITEMS } from "@/constants";

import LanguageSwitcher from "./LanguageSwitcher";

import Image from "next/image";

type NavbarProps = React.ComponentProps<"header">;

export default function Navbar({ className, ...props }: NavbarProps) {
  const t = useTranslations("navigation");

  return (
    <header
      className={cn(
        "rounded-pill bg-glass shadow-button fixed top-8 left-1/2 z-50 flex w-full max-w-300 -translate-x-1/2 items-center justify-between border border-emerald-900 px-5 py-3 backdrop-blur-2xl",
        className
      )}
      {...props}
    >
      <Image
        src="/logos/SadafLogo.svg"
        alt="Sadaf Nemani initials logo"
        width={60}
        className="cursor-pointer transition-transform duration-300 select-none hover:scale-105"
      />

      <nav className="flex items-center gap-8">
        {NAVIGATION_ITEMS.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className="text-body text-text-secondary hover:text-text-primary active:text-emerald-light font-medium transition-all duration-300 hover:-translate-y-0.5 active:font-semibold"
          >
            {t(item)}
          </a>
        ))}
      </nav>

      <LanguageSwitcher />
    </header>
  );
}
