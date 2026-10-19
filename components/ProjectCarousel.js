import ProjectCard from "./ProjectCard";
import "../app/carousel.css";

// Carrusel infinito: la lista se repite dos veces y se desplaza -50% para que el loop sea continuo.
// Si hay pocos proyectos, se repiten hasta llenar la pantalla.
export default function ProjectCarousel({ projects }) {
  if (!projects.length) return null;
  const reps = Math.max(1, Math.ceil(6 / projects.length));
  const set = Array.from({ length: reps }).flatMap(() => projects);
  return (
    <div className="rail">
      <div className="track" style={{ "--dur": `${set.length * 6}s` }}>
        {[0, 1].map((h) => set.map((p, i) => <ProjectCard key={`${h}-${i}`} project={p} hidden={h === 1} />))}
      </div>
    </div>
  );
}
