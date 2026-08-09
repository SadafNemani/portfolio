import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

const buttonClassName =
  "rounded-button bg-glass border-border shadow-button text-body hover:border-emerald/20 inline-flex cursor-pointer items-center justify-center border px-7 py-4 leading-6 font-semibold tracking-[-0.03em] text-white backdrop-blur-2xl transition-all hover:bg-white/8";

interface SecondaryButtonBaseProps {
  children: ReactNode;
  className?: string;
}

interface SecondaryButtonAsButton
  extends
    SecondaryButtonBaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> {
  href?: undefined;
  type?: "button" | "submit" | "reset";
}

interface SecondaryButtonAsLink
  extends
    SecondaryButtonBaseProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "className"> {
  href: string;
}

type SecondaryButtonProps = SecondaryButtonAsButton | SecondaryButtonAsLink;

export default function SecondaryButton({ children, className, ...props }: SecondaryButtonProps) {
  if (props.href) {
    const { href, ...linkProps } = props as SecondaryButtonAsLink;

    return (
      <a href={href} className={cn(buttonClassName, className)} {...linkProps}>
        {children}
      </a>
    );
  }

  const { type = "button", ...buttonProps } = props as SecondaryButtonAsButton;

  return (
    <button type={type} className={cn(buttonClassName, className)} {...buttonProps}>
      {children}
    </button>
  );
}
