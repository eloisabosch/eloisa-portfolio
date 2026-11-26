"use client";
import { useEffect } from "react";
import ProjectCarousel from "../components/ProjectCarousel";
import Footer from "../components/Footer";
import Rich from "../components/Rich";
import { useContent } from "../components/Lang";
import "./home.css";

// HOME = una sola pantalla fija: frase arriba, carrusel de proyectos abajo y pie.
// La página no scrollea: la rueda del mouse mueve el carrusel.
// El texto es person.projectsIntro (portfolioData.js / translations.js).
export default function Home() {
  const { projects, person, ui } = useContent();

  useEffect(() => {
    document.documentElement.classList.add("lock");
    return () => document.documentElement.classList.remove("lock");
  }, []);

  return (
    <div className="home">
      <main className="page proj">
        <h1 className="proj-intro"><Rich text={person.projectsIntro} /></h1>
        <div className="proj-bottom">
          <p className="proj-label">{ui.selectedWork}</p>
          <ProjectCarousel projects={projects} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
