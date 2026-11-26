import { CurtainLink } from "./Shell";

// Tarjeta del carrusel de la home.
// Hover: la primera imagen de galleryImages aparece de a poco sobre la principal.
export default function ProjectCard({ project, hidden = false }) {
  const alt = project.galleryImages?.[0];
  return (
    <CurtainLink href={`/work/${project.slug}`} className="card" aria-hidden={hidden || undefined} tabIndex={hidden ? -1 : undefined} draggable={false}>
      <div className="thumb">
        {project.mainImage
          ? <img className="a" src={project.mainImage} alt={hidden ? "" : project.title} draggable={false} loading={hidden ? "lazy" : "eager"} decoding="async" />
          : <div className="ph">{project.title}</div>}
        {alt && <img className="b" src={alt} alt="" draggable={false} loading="lazy" decoding="async" />}
      </div>
      <span className="cap">{project.title}</span>
      <span className="cat">{project.category}</span>
    </CurtainLink>
  );
}
