import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type BackgroundHalosProps = HTMLAttributes<HTMLDivElement>;

export default function BackgroundHalos({ className, ...props }: BackgroundHalosProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}
      {...props}
    >
      <div className="absolute top-[-28%] left-[-18%] h-[min(900px,92%)] w-[min(820px,88%)] rounded-full bg-[radial-gradient(circle_at_center,color-mix(in_srgb,var(--color-emerald)_16%,transparent)_0%,transparent_70%)] blur-[120px]" />

      <div className="absolute right-[-16%] bottom-[-22%] h-[min(880px,88%)] w-[min(860px,86%)] rounded-full bg-[radial-gradient(circle_at_center,color-mix(in_srgb,var(--color-emerald)_12%,transparent)_0%,transparent_72%)] blur-[140px]" />
    </div>
  );
}
