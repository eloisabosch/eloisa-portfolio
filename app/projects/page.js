"use client";
import ProjectCarousel from "../../components/ProjectCarousel";
import Footer from "../../components/Footer";
import { useContent } from "../../components/Lang";

export default function Projects() {
  const { projects, person, ui } = useContent();
  // Texto de arriba: podés agregar person.projectsIntro en portfolioData.js; si no existe usa person.availability
  const intro = person.projectsIntro ?? person.availability;
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
