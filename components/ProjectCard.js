import { CurtainLink } from "./Shell";

// Tarjeta redondeada del carrusel de /projects.
// Hover: si el proyecto tiene galleryImages, la primera aparece de a poco sobre la principal.
export default function ProjectCard({ project, hidden = false }) {
  const alt = project.galleryImages?.[0];
  return (
    <CurtainLink href={`/work/${project.slug}`} className="card" aria-hidden={hidden || undefined} tabIndex={hidden ? -1 : undefined}>
      <div className="thumb">
        {project.mainImage ? <img className="a" src={project.mainImage} alt={hidden ? "" : project.title} draggable={false} /> : <div className="ph">{project.title}</div>}
        {alt && <img className="b" src={alt} alt="" draggable={false} />}
      </div>
      <span className="cap">{project.title}</span>
    </CurtainLink>
  );
}
