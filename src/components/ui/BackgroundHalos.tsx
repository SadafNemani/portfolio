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
      {/* Main emerald halo */}
      <div className="absolute top-1/2 left-1/2 h-[min(900px,90%)] w-[min(900px,90%)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,color-mix(in_srgb,var(--color-emerald)_22%,transparent)_0%,transparent_68%)] blur-[120px]" />

      {/* Inner emerald glow */}
      <div className="absolute top-1/2 left-1/2 h-[min(600px,70%)] w-[min(600px,70%)] -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-full bg-[radial-gradient(circle_at_center,color-mix(in_srgb,var(--color-emerald)_18%,transparent)_0%,transparent_65%)] blur-[90px]" />

      {/* Cyan accent halo */}
      <div className="absolute top-1/2 left-1/2 h-[min(760px,80%)] w-[min(760px,80%)] -translate-x-1/2 -translate-y-1/2 -rotate-12 rounded-full bg-[radial-gradient(circle_at_center,color-mix(in_srgb,#22d3ee_10%,transparent)_0%,transparent_70%)] blur-[150px]" />

      {/* Soft center light */}
      <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,color-mix(in_srgb,var(--color-emerald)_20%,transparent)_0%,transparent_60%)] blur-[80px]" />
    </div>
  );
}
