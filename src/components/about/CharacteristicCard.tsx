import { getTranslations } from "next-intl/server";

import { cn } from "@/lib/utils";

import { Characteristic } from "@/types/about";

import GlassCard from "../ui/GlassCard";

import React from "react";

interface CharacteristicCardProps extends React.ComponentProps<typeof GlassCard> {
  characteristic: Characteristic;
}

export default async function CharacteristicCard({
  characteristic,
  className,
  ...props
}: CharacteristicCardProps) {
  const t = await getTranslations("about.characteristics");

  const Icon = characteristic.icon;

  return (
    <GlassCard
      className={cn("rounded-button! flex h-28 w-auto items-start gap-4.5 p-3", className)}
      {...props}
    >
      <div className="rounded-button bg-[rgba(49, 214, 142, 0.06)] border-emerald-light max-h-15 max-w-15 border p-4.25 backdrop-blur-2xl">
        <Icon size={26} className="text-emerald-light" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-text-primary text-section-description font-semibold">
          {t(`${characteristic.key}.title`)}
        </h3>

        <p className="text-text-secondary text-body-sm font-regular">
          {t(`${characteristic.key}.subtitle`)}
        </p>
      </div>
    </GlassCard>
  );
}
