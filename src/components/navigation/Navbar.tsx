import { getTranslations } from "next-intl/server";

import { cn } from "@/lib/utils";

import { NAVIGATION_ITEMS } from "@/constants";

import LanguageSwitcher from "./LanguageSwitcher";

import Image from "next/image";

type NavbarProps = React.ComponentProps<"header">;

export default async function Navbar({ className, ...props }: NavbarProps) {
  const t = await getTranslations("navigation");

  return (
    <header
      className={cn(
        "rounded-pill border-border bg-glass shadow-card fixed top-6 left-1/2 z-50 grid w-[min(880px,calc(100%-3rem))] -translate-x-1/2 grid-cols-[1fr_auto_1fr] items-center overflow-visible border px-6 py-2.5 ring-1 ring-white/6 backdrop-blur-2xl ring-inset",
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
          className="cursor-pointer transition-transform duration-300 select-none hover:scale-[1.03]"
        />
      </div>

      <nav className="flex items-center justify-center gap-7 px-4">
        {NAVIGATION_ITEMS.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className="text-body text-text-secondary after:bg-emerald/50 hover:text-text-primary active:text-emerald-light relative font-medium tracking-[-0.02em] transition-colors duration-300 after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-0 after:-translate-x-1/2 after:transition-all after:duration-300 hover:after:w-full active:font-semibold"
          >
            {t(item)}
          </a>
        ))}
      </nav>

      <div className="relative flex shrink-0 items-center justify-end overflow-visible">
        <LanguageSwitcher />
      </div>
    </header>
  );
}
