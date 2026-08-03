import type { Technology } from "./technologies";

export interface Project {
  slug: string;
  technologies: Technology["id"][];
  thumbnail: string;
  video?: string;
  github?: string;
  live?: string;
  featured: boolean;
  order: number;
}

export interface ProjectContent extends Project {
  title: string;
  category: string;
  description: string;
}
