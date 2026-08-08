"use server";

import { Resend } from "resend";
import { getTranslations } from "next-intl/server";
import { createContactSchema } from "@/lib/validation/contact";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: Partial<Record<"name" | "email" | "subject" | "message", string>>;
};

export async function sendContactEmail(
  _prevState: ContactFormState | null,
  formData: FormData
): Promise<ContactFormState> {
  const locale = (formData.get("locale") as string) || "en";
  const t = await getTranslations({ locale, namespace: "contact" });

  // --- Spam protection: honeypot ---
  const honeypot = formData.get("website");
  if (honeypot) {
    return { success: true, message: t("successMessage") };
  }

  // --- Spam protection: time trap ---
  const startTime = Number(formData.get("formStartTime"));
  if (startTime && Date.now() - startTime < 1500) {
    return { success: true, message: t("successMessage") };
  }

  // --- Validation ---
  const contactSchema = createContactSchema(t);
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: NonNullable<ContactFormState["errors"]> = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0] as keyof NonNullable<ContactFormState["errors"]>;
      if (field && !fieldErrors[field]) fieldErrors[field] = issue.message;
    }
    return { success: false, message: t("validationErrorMessage"), errors: fieldErrors };
  }

  const { name, email, subject, message } = parsed.data;

  if (!resend || !process.env.CONTACT_EMAIL) {
    console.error("Resend is not configured = missing RESEND_API_KEY or CONTACT_EMAIL");
    return { success: false, message: t("serverErrorMessage") };
  }

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `[Sadaf's Portfolio] ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, message: t("sendErrorMessage") };
    }

    return { success: true, message: t("successMessage") };
  } catch (err) {
    console.error("Unexpected error sending contact email:", err);
    return { success: false, message: t("sendErrorMessage") };
  }
}
