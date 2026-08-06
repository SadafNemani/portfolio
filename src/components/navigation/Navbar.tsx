import { getTranslations } from "next-intl/server";

import { cn } from "@/lib/utils";

import { NAVIGATION_ITEMS } from "@/constants";

import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";

import Image from "next/image";

type NavbarProps = React.ComponentProps<"header">;

export default async function Navbar({ className, ...props }: NavbarProps) {
  const t = await getTranslations("navigation");

  const navItems = NAVIGATION_ITEMS.map((item) => ({
    href: `#${item}`,
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
          className="h-9 w-auto cursor-pointer transition-transform duration-300 select-none hover:scale-[1.03] lg:h-[54px]"
        />
      </div>

      <nav className="hidden items-center justify-center gap-7 px-4 lg:flex">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-body text-text-secondary after:bg-emerald/50 hover:text-text-primary active:text-emerald-light relative font-medium tracking-[-0.02em] transition-colors duration-300 after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-0 after:-translate-x-1/2 after:transition-all after:duration-300 hover:after:w-full active:font-semibold"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex shrink-0 items-center justify-end gap-2 overflow-visible">
        <LanguageSwitcher />
        <MobileMenu items={navItems} />
      </div>
    </header>
  );
}
