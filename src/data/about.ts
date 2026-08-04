import { Characteristic } from "@/types/about";
import { BadgeCheck, BookOpen, Puzzle, Sparkles } from "lucide-react";

export const characteristics: Characteristic[] = [
  {
    key: "attentionToDetail",
    icon: Sparkles,
  },
  {
    key: "problemSolver",
    icon: Puzzle,
  },
  {
    key: "continuousLearner",
    icon: BookOpen,
  },
  {
    key: "reliable",
    icon: BadgeCheck,
  },
];
