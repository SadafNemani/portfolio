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
  hasCaseStudy?: boolean;
}

export interface ProjectContent extends Project {
  title: string;
  category: string;
  description: string;
  scope?: string[];
}
