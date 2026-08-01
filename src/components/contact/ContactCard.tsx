import { getTranslations } from "next-intl/server";

import { cn } from "@/lib/utils";

import GlassCard from "../ui/GlassCard";

import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import PrimaryButton from "../ui/PrimaryButton";

type ContactCardProps = React.ComponentProps<typeof GlassCard>;

export default async function ContactCard({ className, ...props }: ContactCardProps) {
  const t = await getTranslations("contact");

  return (
    <GlassCard className={cn("flex flex-col gap-6 p-5", className)} {...props}>
      <div className="flex items-start justify-end">
        <div className="text-emerald-light text-section-label font-medium whitespace-pre-line">
          {t("contactDetail")}
        </div>
      </div>
      <form className="flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-2.5">
          <Input type="text" autoComplete="name" placeholder={t("namePlaceholder")} />
          <Input type="email" autoComplete="email" placeholder={t("emailPlaceholder")} />
        </div>

        <Input type="text" placeholder={t("subjectPlaceholder")} />
        <Textarea placeholder={t("messagePlaceholder")} />

        <PrimaryButton type="submit">{t("sendButton")}</PrimaryButton>
      </form>
    </GlassCard>
  );
}
