export type TechnologyCategory = "frontend" | "backend" | "cms" | "design";

export interface Technology {
  id: string;
  name: string;
  logo: string;
  category: TechnologyCategory;
}
