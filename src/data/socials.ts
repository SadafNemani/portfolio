import { Mail, Mailbox } from "lucide-react";

import type { Social } from "@/types/socials";

import { SOCIAL_LINKS } from "@/constants";

export const socials: Social[] = [
  {
    id: "github",
    name: "GitHub",
    logo: "/logos/github.svg",
    href: "https://github.com/SadafNemani",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    logo: "/logos/linkedin.svg",
    href: "https://linkedin.com/in/sadaf-nemani-59b839291",
  },
  {
    id: "email",
    name: "Email",
    lucideIcon: Mailbox,
    href: "mailto:sedefnemani@gmail.com",
  },
];
