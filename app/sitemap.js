import { projects } from "../data/portfolioData";

const SITE = "https://eloisa-portfolio.vercel.app";

export default function sitemap() {
  return [
    { url: `${SITE}/` },
    { url: `${SITE}/about` },
    { url: `${SITE}/contact` },
    ...projects.map((p) => ({ url: `${SITE}/work/${p.slug}` })),
  ];
}
