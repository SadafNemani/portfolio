import type { Technology } from "./technologies";

export interface CaseStudyData {
  slug: string;
  category: string;
  technologies: Technology["id"][];
  liveUrl?: string;
  githubUrl?: string;
  year: string;
  gallery: { key: string; image: string; orientation?: "desktop" | "mobile" }[];
  designTokens?: {
    colors: { name: string; hex: string }[];
    type: string;
  };
}

export interface CaseStudyMessage {
  hero: {
    title: string;
    tagline: string;
  };
  facts: {
    role: string;
    timeline: string;
    pages: string;
  };
  overview: {
    problem: string;
    solution: string;
  };
  features: {
    heading: string;
    items: { title: string; description: string }[];
  };
  process: {
    heading: string;
    steps: { title: string; description: string }[];
  };
  stack: {
    heading: string;
    reasons: { name: string; reason: string }[];
  };
  decisions: {
    heading: string;
    items: { title: string; text: string }[];
  };
  gallery: {
    heading: string;
    labels: Record<string, string>;
  };
  reflection: {
    text: string;
  };
}
