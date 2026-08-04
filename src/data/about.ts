import { Characteristic } from "@/types/about";
import { BadgeCheck, BookOpen, Puzzle, Sparkles } from "lucide-react";

export const characteristics: Characteristic[] = [
  {
    key: "designDriven",
    icon: Sparkles,
  },
  {
    key: "detailOriented",
    icon: Puzzle,
  },
  {
    key: "alwaysGrowing",
    icon: BookOpen,
  },
  {
    key: "reliable",
    icon: BadgeCheck,
  },
];
