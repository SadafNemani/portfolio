"use client";

import { useActionState, useEffect, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";

import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import PrimaryButton from "../ui/PrimaryButton";
import { sendContactEmail, type ContactFormState } from "@/app/actions/contact";

const initialState: ContactFormState = { success: false, message: "" };

export default function ContactForm() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const [state, formAction, isPending] = useActionState(sendContactEmail, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const startTimeInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (startTimeInputRef.current) {
      startTimeInputRef.current.value = String(Date.now());
    }
  }, []);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className="flex flex-col gap-6">
      <div className="absolute left-[-9999px] opacity-0" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <input type="hidden" name="formStartTime" ref={startTimeInputRef} defaultValue="" />
      <input type="hidden" name="locale" value={locale} />

      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        <Input
          type="text"
          name="name"
          autoComplete="name"
          placeholder={t("namePlaceholder")}
          error={state.errors?.name}
        />
        <Input
          type="email"
          name="email"
          autoComplete="email"
          placeholder={t("emailPlaceholder")}
          error={state.errors?.email}
        />
      </div>

      <Input
        type="text"
        name="subject"
        placeholder={t("subjectPlaceholder")}
        error={state.errors?.subject}
      />
      <Textarea
        name="message"
        placeholder={t("messagePlaceholder")}
        error={state.errors?.message}
      />

      <PrimaryButton type="submit" disabled={isPending}>
        {isPending ? t("sendingButton") : t("sendButton")}
      </PrimaryButton>

      {state.message && (
        <p
          role="status"
          className={state.success ? "text-emerald-light text-sm" : "text-sm text-red-400"}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
