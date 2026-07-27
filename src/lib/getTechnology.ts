import { technologies } from "@/data/technologies";

export function getTechnology(id: string) {
  return technologies.find((technology) => technology.id === id);
}
