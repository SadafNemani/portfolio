import type { Locale } from "@/types/locale";

export interface Language {
  code: Locale;
  label: string;
}

export const languages: Language[] = [
  {
    code: "en",
    label: "EN",
  },
  {
    code: "fa",
    label: "فا",
  },
];
