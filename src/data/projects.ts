import { Project } from "@/types/projects";

export const projects: Project[] = [
  {
    slug: "bun-and-fire",
    technologies: ["nextjs", "typescript", "tailwind", "framer"],
    thumbnail: "/projects/bun-and-fire/home-desktop.webp",
    github: "https://github.com/SadafNemani/bun-fire-ordering",
    live: "https://bunandfire.netlify.app",
    featured: true,
    order: 1,
    hasCaseStudy: true,
  },
  {
    slug: "noor-dental",
    technologies: ["nextjs", "typescript", "tailwind", "gsap", "framer"],
    thumbnail: "/projects/noor-dental-studio/home-desktop.webp",
    github: "https://github.com/SadafNemani/noor-dental-studio",
    live: "https://noor-dental.netlify.app/",
    featured: true,
    order: 2,
    hasCaseStudy: true,
  },
];
