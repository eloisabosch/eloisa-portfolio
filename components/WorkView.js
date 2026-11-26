"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import { CurtainLink } from "./Shell";
import { useContent } from "./Lang";
import sizes from "../data/imageSizes.json";
import "../app/work/work.css";

// Página de cada proyecto: título + resumen, imagen principal sin recortar, ficha,
// texto del proyecto, galería (cada imagen en su proporción real) y siguiente proyecto.
export default function WorkView({ slug }) {
  const { projects, ui } = useContent();
  const i = projects.findIndex((x) => x.slug === slug);
  const p = projects[i];
  const next = projects[(i + 1) % projects.length];
  const imgs = [p.mainImage, ...(p.galleryImages || [])].filter(Boolean);
  const [open, setOpen] = useState(null);
  const hero = useRef(null);
  // imagen principal vertical: se muestra entera (sin recortar), horizontal: a sangre
  const orient = () => { const t = hero.current; if (t && t.naturalWidth) t.dataset.o = t.naturalHeight > t.naturalWidth ? "p" : "l"; };
  useEffect(orient, [slug]);

  const go = useCallback((d) => setOpen((o) => (o === null ? o : (o + d + imgs.length) % imgs.length)), [imgs.length]);
  useEffect(() => {
    if (open === null) return;
    const k = (e) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", k);
    document.documentElement.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", k); document.documentElement.style.overflow = ""; };
  }, [open, go]);

  const facts = [[ui.year, p.year], [ui.context, p.context], [ui.category, p.category], [ui.role, p.role], [ui.team, p.team]].filter(([, v]) => v);

  return (
    <>
      <main className="page case">
        <div className="case-top">
          <CurtainLink href="/" className="mute">← {ui.index}</CurtainLink>
          <span className="mute">{String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
        </div>

        <header className="case-head">
          <h1>{p.title}</h1>
          <p>{p.description}</p>
        </header>

        {p.mainImage && (
          <button className="case-hero" onClick={() => setOpen(0)} aria-label={p.title}>
            <img ref={hero} src={p.mainImage} alt={p.title} fetchPriority="high" onLoad={orient} />
          </button>
        )}

        <dl className="case-facts">
          {facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
        </dl>

        {p.longDescription && (
          <section className="case-about">
            <h2>{ui.aboutProject}</h2>
            <div>{p.longDescription.split("\n\n").map((t, n) => <p key={n}>{t}</p>)}</div>
          </section>
        )}

        {imgs.length > 1 && (
          <div className="case-gal">
            {imgs.slice(1).map((src, n) => {
              const [w, h] = sizes[src] || [4, 5];
              return (
                <button key={src} className={w > h * 1.15 ? "wide" : ""} onClick={() => setOpen(n + 1)} aria-label={`${p.title} — ${n + 2}`}>
                  <img src={src} alt="" width={w} height={h} loading="lazy" decoding="async" />
                </button>
              );
            })}
          </div>
        )}

        {next && next.slug !== p.slug && (
          <CurtainLink href={`/work/${next.slug}`} className="case-next">
            <span className="mute">{ui.next}</span>
            <span className="case-next-title">{next.title}</span>
            {next.mainImage && <img src={next.mainImage} alt="" loading="lazy" />}
          </CurtainLink>
        )}
      </main>

      {open !== null && (
        <div className="lb" role="dialog" aria-modal="true" aria-label={p.title}>
          <button className="lb-close" onClick={() => setOpen(null)} autoFocus>{ui.close} [ × ]</button>
          {imgs.length > 1 && <button className="lb-nav l" onClick={() => go(-1)} aria-label={ui.prev}>‹</button>}
          <img src={imgs[open]} alt={p.title} onClick={() => go(1)} />
          {imgs.length > 1 && <button className="lb-nav r" onClick={() => go(1)} aria-label={ui.nextImg}>›</button>}
          <span className="lb-count">{open + 1} / {imgs.length}</span>
        </div>
      )}

      <Footer />
    </>
  );
}
