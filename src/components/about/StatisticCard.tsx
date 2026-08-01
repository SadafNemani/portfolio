"use client";

import { cn } from "@/lib/utils";

import { Statistic } from "@/types/about";

import GlassCard from "../ui/GlassCard";

import { useTranslations } from "next-intl";
import React from "react";

interface StatisticCardProps extends React.ComponentProps<typeof GlassCard> {
  statistic: Statistic;
}

export default function StatisticCard({ statistic, className, ...props }: StatisticCardProps) {
  const t = useTranslations("about.statistics");

  return (
    <GlassCard
      className={cn("flex flex-col items-center justify-center gap-2.5 p-4", className)}
      {...props}
    >
      <p className="text-emerald-light text-statistic font-extrabold">{statistic.value}</p>
      <p className="text-text-secondary text-body font-medium">{t(`${statistic.key}`)}</p>
    </GlassCard>
  );
}
