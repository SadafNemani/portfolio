"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import SubmitButton from "@/components/motion/SubmitButton";
import { sendContactEmail, type ContactFormState } from "@/app/actions/contact";

const initialState: ContactFormState = { success: false, message: "" };
const SUCCESS_ICON_DURATION = 2000;

export default function ContactForm() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const [state, formAction, isPending] = useActionState(sendContactEmail, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const startTimeInputRef = useRef<HTMLInputElement>(null);

  const [showSuccessIcon, setShowSuccessIcon] = useState(false);
  const [previousSuccess, setPreviousSuccess] = useState(false);

  if (state.success !== previousSuccess) {
    setPreviousSuccess(state.success);
    if (state.success) {
      setShowSuccessIcon(true);
    }
  }

  useEffect(() => {
    if (startTimeInputRef.current) {
      startTimeInputRef.current.value = String(Date.now());
    }
  }, []);

  useEffect(() => {
    if (!showSuccessIcon) return;

    const timer = setTimeout(() => {
      setShowSuccessIcon(false);
      formRef.current?.reset();
    }, SUCCESS_ICON_DURATION);

    return () => clearTimeout(timer);
  }, [showSuccessIcon]);

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

      <SubmitButton
        type="submit"
        disabled={isPending}
        isPending={isPending}
        isSuccess={showSuccessIcon}
      >
        {isPending ? t("sendingButton") : t("sendButton")}
      </SubmitButton>

      <AnimatePresence>
        {state.message && (
          <motion.p
            key={state.message}
            role="status"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={state.success ? "text-emerald-light text-sm" : "text-sm text-red-400"}
          >
            {state.message}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
