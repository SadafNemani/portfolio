import { Characteristic, Statistic } from "@/types/about";
import { BadgeCheck, BookOpen, Puzzle, Sparkles } from "lucide-react";

export const statistics: Statistic[] = [
  {
    key: "projects",
    value: "15+",
  },
  {
    key: "experience",
    value: "2+",
  },
  {
    key: "clients",
    value: "10+",
  },
];

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
