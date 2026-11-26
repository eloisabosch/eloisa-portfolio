import { notFound } from "next/navigation";
import WorkView from "../../../components/WorkView";
import { projects, getProject } from "../../../data/portfolioData";

// Cada proyecto se genera como página estática con su propio título e imagen para compartir.
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const p = getProject(params.slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.description,
    openGraph: { title: p.title, description: p.description, images: [{ url: p.mainImage }] },
  };
}

export default function Work({ params }) {
  if (!getProject(params.slug)) notFound();
  return <WorkView slug={params.slug} />;
}
