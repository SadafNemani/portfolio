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

  {
    slug: "noor-dental",
    category: "Concept · Healthcare",
    technologies: ["nextjs", "typescript", "tailwind", "gsap", "framer"],
    liveUrl: "https://noor-dental.netlify.app/",
    githubUrl: "https://github.com/SadafNemani/noor-dental-studio",
    year: "2026",
    gallery: [
      {
        key: "home-desktop",
        image: "/projects/noor-dental-studio/home-desktop.webp",
        orientation: "desktop",
      },
      {
        key: "home-mobile",
        image: "/projects/noor-dental-studio/home-mobile.webp",
        orientation: "mobile",
      },
      {
        key: "home-arabic",
        image: "/projects/noor-dental-studio/home-arabic-desktop.webp",
        orientation: "desktop",
      },
      {
        key: "your-care",
        image: "/projects/noor-dental-studio/your-care-desktop.webp",
        orientation: "desktop",
      },
      {
        key: "invisalign",
        image: "/projects/noor-dental-studio/invisalign-desktop.webp",
        orientation: "desktop",
      },
      {
        key: "compare",
        image: "/projects/noor-dental-studio/compare-desktop.webp",
        orientation: "desktop",
      },
      {
        key: "first-visit",
        image: "/projects/noor-dental-studio/first-visit-desktop.webp",
        orientation: "desktop",
      },
      {
        key: "about",
        image: "/projects/noor-dental-studio/about-desktop.webp",
        orientation: "desktop",
      },
      {
        key: "booking",
        image: "/projects/noor-dental-studio/booking-mobile.webp",
        orientation: "mobile",
      },
      {
        key: "contact",
        image: "/projects/noor-dental-studio/contact-desktop.webp",
        orientation: "desktop",
      },
    ],
    designTokens: {
      colors: [
        { name: "Pine", hex: "#2F4A3E" },
        { name: "Sand Gold", hex: "#B98D4F" },
        { name: "Warm Ivory", hex: "#FAF6F1" },
        { name: "Warm Charcoal", hex: "#26241F" },
      ],
      type: "Fraunces (headings) · Inter (body) · Markazi Text & IBM Plex Sans Arabic (Arabic)",
    },
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
