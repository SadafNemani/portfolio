import { z } from "zod";
import type { useTranslations } from "next-intl";

type ContactTranslations = ReturnType<typeof useTranslations<"conatct">>;

export function createContactSchema(t: ContactTranslations) {
  return z.object({
    name: z.string().trim().min(2, t("validation.nameMin")).max(100, t("validation.nameMax")),

    email: z.string().trim().email(t("validation.emailInvalid")),

    subject: z
      .string()
      .trim()
      .min(3, t("validation.subjectMin"))
      .max(150, t("validation.subjectMax")),

    message: z
      .string()
      .trim()
      .min(10, t("validation.messageMin"))
      .max(2000, t("validation.messageMax")),
  });
}

export type ContactFormDate = z.infer<ReturnType<typeof createContactSchema>>;
