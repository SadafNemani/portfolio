import { cn } from "@/lib/utils";

import { Statistic } from "@/types/about";

import GlassCard from "../ui/GlassCard";
import { getTranslations } from "next-intl/server";

interface StatisticCardProps extends React.ComponentProps<typeof GlassCard> {
  statistic: Statistic;
}

export default async function StatisticCard({
  statistic,
  className,
  ...props
}: StatisticCardProps) {
  const t = await getTranslations("about.statistics");

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
