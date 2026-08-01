import { Mail } from "lucide-react";

import type { Social } from "@/types/socials";

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
    lucideIcon: Mail,
    href: "mailto:sedefnemani@gmail.com",
  },
];
