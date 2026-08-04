import { socials } from "@/data/socials";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yoursite.com";

export default function PersonJsonLd() {
  const sameAs = socials
    .filter((social) => social.href.startsWith("http"))
    .map((social) => social.href);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sadaf Nemani",
    jobTitle: "Frontend Developer",
    url: siteUrl,
    sameAs,
    knowsAbout: ["React", "Next.js", "TypeScript", "Tailwind CSS", "WordPress", "Web Design"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
