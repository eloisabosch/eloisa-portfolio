"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useContent } from "./Lang";
import { CurtainLink } from "./Shell";
import "../app/map.css";
import "./homeGrid.css";

// Home: grilla ordenada. Un cuadrado por proyecto con el nombre abajo.
// Para agregar un proyecto, solo sumalo en portfolioData.js: aparece solo en la grilla.
const COLS = [6, 5, 4, 3, 2]; // niveles del zoom (+ / −): cantidad de columnas

function Tile({ p, priority }) {
  const alt = p.galleryImages && p.galleryImages[0];
  const sizes = "(max-width: 700px) 50vw, (max-width: 1100px) 33vw, 22vw";
  return (
    <CurtainLink href={`/work/${p.slug}`} className="tile">
      <div className="sq">
        {p.mainImage
          ? <Image className="a" src={p.mainImage} alt={p.title} fill sizes={sizes} priority={priority} />
          : <div className="ph">{p.title}</div>}
        {alt && <Image className="b" src={alt} alt="" fill sizes={sizes} />}
      </div>
      <span className="nm">{p.title}</span>
    </CurtainLink>
  );
}

export default function InteractiveMap() {
  const { projects, person } = useContent();
  const [lvl, setLvl] = useState(2);
  useEffect(() => {
    const w = window.innerWidth;
    setLvl(w < 700 ? 4 : w < 1100 ? 3 : 2);
  }, []);

  return (
    <>
      <main className="home">
        <p className="blurb home-blurb">{person.mapIntro}</p>
        <div className="hgrid" style={{ "--cols": COLS[lvl] }}>
          {projects.map((p, i) => <Tile key={p.slug} p={p} priority={i < 4} />)}
        </div>
      </main>
      <div className="edge edge-t" />
      <div className="zoom">
        <div className="zbox"><button aria-label="Zoom in" disabled={lvl === COLS.length - 1} onClick={() => setLvl(lvl + 1)}>+</button></div>
        <div className="zbox zticks">{COLS.map((_, i) => COLS.length - 1 - i).map((i) => <i key={i} className={`tick ${i === lvl ? "on" : ""}`} />)}</div>
        <div className="zbox"><button aria-label="Zoom out" disabled={lvl === 0} onClick={() => setLvl(lvl - 1)}>−</button></div>
      </div>
    </>
  );
}
