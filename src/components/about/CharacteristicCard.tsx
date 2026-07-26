"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { Characteristic } from "@/types/about";

import GlassCard from "../ui/GlassCard";

import { useTranslations } from "next-intl";
import React from "react";

interface CharacteristicCardProps extends React.ComponentProps<typeof GlassCard> {
  charactertic: Characteristic;
}

export default function CharacteristicCard({
  charactertic,
  className,
  ...props
}: CharacteristicCardProps) {
  const t = useTranslations("about.characteristics");

  const Icon = charactertic.icon;

  return (
    <GlassCard className={cn("flex h-28 items-start gap-4.5 p-5")} {...props}>
      <div className="rounded-button bg-[rgba(49, 214, 142, 0.06)] border-border shadow-emerald h-6.5 w-6.5 border backdrop-blur-2xl">
        <Icon size={26} className="text-emerald-light" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-section-description text-text-primary font-semibold">
          {t(`${charactertic.key}.title`)}
        </h3>

        <p className="text-text-secondary text-section-label font-regular">
          {t(`${charactertic.key}.subtitle`)}
        </p>
      </div>
    </GlassCard>
  );
}
