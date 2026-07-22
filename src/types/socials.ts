import type { LucideIcon } from "lucide-react";

export interface Social {
  id: string;
  name: string;
  lucideIcon?: LucideIcon;
  logo?: string;
  href: string;
}
