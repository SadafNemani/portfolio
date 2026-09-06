import type { CaseStudyData } from "@/types/case-study";

export const caseStudies: CaseStudyData[] = [
  {
    slug: "bun-and-fire",
    category: "Concept · Food & Beverage",
    technologies: ["nextjs", "typescript", "tailwind", "framer"],
    liveUrl: "https://bunandfire.netlify.app",
    githubUrl: "https://github.com/SadafNemani/bun-fire-ordering",
    year: "2026",
    gallery: [
      {
        key: "home-desktop",
        image: "/projects/bun-and-fire/home-desktop.webp",
        orientation: "desktop",
      },
      {
        key: "home-mobile",
        image: "/projects/bun-and-fire/home-mobile.webp",
        orientation: "mobile",
      },
      {
        key: "about",
        image: "/projects/bun-and-fire/about-desktop.webp",
        orientation: "desktop",
      },
      { key: "menu", image: "/projects/bun-and-fire/menu-mobile.webp", orientation: "mobile" },
      { key: "cart", image: "/projects/bun-and-fire/cart-mobile.webp", orientation: "mobile" },
      {
        key: "checkout",
        image: "/projects/bun-and-fire/checkout-mobile.webp",
        orientation: "mobile",
      },
      {
        key: "confirmation",
        image: "/projects/bun-and-fire/confirmation-mobile.webp",
        orientation: "mobile",
      },
    ],
    designTokens: {
      colors: [
        { name: "Primary Orange", hex: "#FF5A1F" },
        { name: "Cheese Yellow", hex: "#FFC857" },
        { name: "Charcoal", hex: "#1F1F1F" },
        { name: "Cream Background", hex: "#FFF8F0" },
      ],
      type: "Bricolage Grotesque (headings) · Plus Jakarta Sans (body) · Kaushan Script (script)",
    },
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
