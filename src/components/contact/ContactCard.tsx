import { getTranslations } from "next-intl/server";

import { cn } from "@/lib/utils";

import GlassCard from "../ui/GlassCard";
import ContactForm from "./ContactForm";
import { richText } from "@/lib/richText";

type ContactCardProps = React.ComponentProps<typeof GlassCard>;

export default async function ContactCard({ className, ...props }: ContactCardProps) {
  const t = await getTranslations("contact");

  return (
    <GlassCard className={cn("flex flex-col gap-6 p-5", className)} {...props}>
      <div className="flex items-start justify-end">
        <div className="text-emerald-light text-section-label flex items-baseline gap-2 font-medium whitespace-pre-line">
          <span className="bg-emerald-light relative flex h-2 w-2">
            <span className="bg-emerald-light absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
            <span className="bg-emerald-light relative inline-flex h-2 w-2 rounded-full" />
          </span>
          {t.rich("contactDetail", richText)}
        </div>
      </div>

      <ContactForm />
    </GlassCard>
  );
}
