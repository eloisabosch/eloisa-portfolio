"use client";
import { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import "../app/carousel.css";

// Carrusel infinito de la home.
// - Gira solo y despacio.
// - La rueda del mouse / trackpad no baja la página: empuja el carrusel (más rápido) y después vuelve a su ritmo.
// - Se puede arrastrar con mouse o dedo (con inercia) y con las flechas del teclado.
// - Se pausa al pasar el mouse por encima. Con "reducir movimiento" queda quieto y se usa a mano.
const SPEED = 40; // px por segundo del giro automático

export default function ProjectCarousel({ projects, wheelTarget = true }) {
  const rail = useRef(null);
  const track = useRef(null);

  useEffect(() => {
    const r = rail.current, t = track.current;
    if (!r || !t) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let x = 0, v = 0, hover = false, drag = null, moved = 0, last = performance.now(), raf;
    const half = () => t.scrollWidth / 2;
    const wrap = () => { const h = half(); if (h > 0) { x %= h; if (x > 0) x -= h; } };

    const tick = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000); last = now;
      if (!drag) {
        const base = reduce || hover ? 0 : SPEED;
        x -= (base + v) * dt;
        v *= Math.pow(0.04, dt); // la inercia se apaga en ~1 s
        if (Math.abs(v) < 1) v = 0;
      }
      wrap();
      t.style.transform = `translate3d(${x}px,0,0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onWheel = (e) => {
      const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (!d) return;
      e.preventDefault();
      v = Math.max(-4000, Math.min(4000, v + d * (e.deltaMode === 1 ? 40 : 2.2)));
    };
    const target = wheelTarget ? window : r;
    target.addEventListener("wheel", onWheel, { passive: false });

    const down = (e) => {
      if (e.button !== undefined && e.button !== 0) return;
      drag = { x0: e.clientX, start: x, lastX: e.clientX, lastT: performance.now(), vel: 0 };
      moved = 0; v = 0;
    };
    const move = (e) => {
      if (!drag) return;
      const dx = e.clientX - drag.x0; moved = Math.max(moved, Math.abs(dx));
      if (moved > 5) { r.classList.add("dragging"); if (r.setPointerCapture && !r.hasPointerCapture?.(e.pointerId)) r.setPointerCapture(e.pointerId); }
      x = drag.start + dx;
      const now = performance.now(), dtm = Math.max(1, now - drag.lastT);
      drag.vel = (e.clientX - drag.lastX) / dtm * 1000; drag.lastX = e.clientX; drag.lastT = now;
    };
    const up = () => {
      if (!drag) return;
      v = -drag.vel * 0.9; drag = null;
      setTimeout(() => r.classList.remove("dragging"), 0);
    };
    // un arrastre no abre el proyecto
    const click = (e) => { if (moved > 5) { e.preventDefault(); e.stopPropagation(); moved = 0; } };
    const enter = () => { hover = true; }, leave = () => { hover = false; up(); };
    const key = (e) => {
      if (e.key === "ArrowRight") { v += 900; e.preventDefault(); }
      if (e.key === "ArrowLeft") { v -= 900; e.preventDefault(); }
    };

    r.addEventListener("pointerdown", down);
    r.addEventListener("pointermove", move);
    r.addEventListener("pointerup", up);
    r.addEventListener("pointercancel", up);
    r.addEventListener("click", click, true);
    r.addEventListener("mouseenter", enter);
    r.addEventListener("mouseleave", leave);
    r.addEventListener("keydown", key);
    return () => {
      cancelAnimationFrame(raf);
      target.removeEventListener("wheel", onWheel);
      r.removeEventListener("pointerdown", down);
      r.removeEventListener("pointermove", move);
      r.removeEventListener("pointerup", up);
      r.removeEventListener("pointercancel", up);
      r.removeEventListener("click", click, true);
      r.removeEventListener("mouseenter", enter);
      r.removeEventListener("mouseleave", leave);
      r.removeEventListener("keydown", key);
    };
  }, [wheelTarget]);

  if (!projects.length) return null;
  const reps = Math.max(1, Math.ceil(8 / projects.length));
  const set = Array.from({ length: reps }).flatMap(() => projects);
  return (
    <div className="rail" ref={rail} tabIndex={0} aria-roledescription="carousel">
      <div className="track" ref={track}>
        {[0, 1].map((h) => set.map((p, i) => (
          <ProjectCard key={`${h}-${i}`} project={p} hidden={h === 1 || i >= projects.length} />
        )))}
      </div>
    </div>
  );
}
