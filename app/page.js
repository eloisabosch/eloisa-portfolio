"use client";
import ProjectCarousel from "../components/ProjectCarousel";
import Footer from "../components/Footer";
import { useContent } from "../components/Lang";
import "./home.css";

// HOME = proyectos. Texto de presentación arriba + carrusel de proyectos abajo.
// El párrafo es person.mapIntro (portfolioData.js / translations.js).
// Si querés otro texto solo para acá, agregá person.projectsIntro en portfolioData.js.
export default function Home() {
  const { projects, person, ui } = useContent();
  const intro = person.projectsIntro ?? person.mapIntro;
  return (
    <>
      <main className="page proj">
        <p className="proj-intro">{intro}</p>
        <div className="proj-bottom">
          <p className="proj-label">{ui.selectedWork}</p>
          <ProjectCarousel projects={projects} />
        </div>
      </main>
      <Footer />
    </>
  );
}
