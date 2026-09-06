import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const buttonClassName =
  "text-body text-text-secondary hover:text-emerald-light inline-flex cursor-pointer items-center justify-center px-7 py-4 leading-6 font-semibold tracking-[-0.03em] underline-offset-4 transition-colors hover:underline";

interface GhostButtonBaseProps {
  children: ReactNode;
  className?: string;
}

interface GhostButtonAsButton
  extends
    GhostButtonBaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> {
  href?: undefined;
  type?: "button" | "submit" | "reset";
}

interface GhostButtonAsLink
  extends
    GhostButtonBaseProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "className"> {
  href: string;
}

type GhostButtonProps = GhostButtonAsButton | GhostButtonAsLink;

export default function GhostButton({ children, className, ...props }: GhostButtonProps) {
  if (props.href) {
    const { href, ...linkProps } = props as GhostButtonAsLink;

    return (
      <a href={href} className={cn(buttonClassName, className)} {...linkProps}>
        {children}
      </a>
    );
  }

  const { type = "button", ...buttonProps } = props as GhostButtonAsButton;

  return (
    <button type={type} className={cn(buttonClassName, className)} {...buttonProps}>
      {children}
    </button>
  );
}
