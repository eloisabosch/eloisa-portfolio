"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { projects } from "../data/portfolioData";
import { useContent } from "./Lang";
import { useCurtain } from "./Shell";
import { buildLayout, W, H } from "./mapLayout";
import "../app/map.css";

const LEVELS = [0.6, 0.85, 1, 1.3, 1.6];
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

// Curva suave para líneas SVG (corregido)
const wave = (a, b, s) => {
  const dx = b.x - a.x, dy = b.y - a.y, len = Math.hypot(dx, dy) || 1;
  const nx = (-dy / len) * len * 0.16 * s, ny = (dx / len) * len * 0.16 * s;
  return `M${a.x},${a.y} C${a.x + dx * 0.33 + nx},${a.y + dy * 0.33 + ny} ${a.x + dx * 0.66 - nx},${a.y + dy * 0.66 - ny} ${b.x},${b.y}`;
};

const build = () => buildLayout(projects);

export default function InteractiveMap() {
  const { go } = useCurtain();
  const { person, ui } = useContent();
  const ref = useRef(null);
  const lvlRef = useRef(2);
  const [t, setT] = useState({ x: 0, y: 0, k: 1 });
  const [lvl, setLvl] = useState(2);
  const [hover, setHover] = useState(null);
  const [drag, setDrag] = useState(false);
  const d = useRef({ down: false, moved: 0, sx: 0, sy: 0, ox: 0, oy: 0 });

  const { nodes, lines } = useMemo(build, []);

  const zoomTo = (i, cx, cy) => {
    const idx = clamp(i, 0, LEVELS.length - 1), k2 = LEVELS[idx];
    const r = ref.current.getBoundingClientRect();
    cx = cx ?? r.width / 2;
    cy = cy ?? r.height / 2;
    lvlRef.current = idx;
    setLvl(idx);
    setT((p) => ({ k: k2, x: cx - ((cx - p.x) / p.k) * k2, y: cy - ((cy - p.y) / p.k) * k2 }));
  };

  useEffect(() => {
    const r = ref.current.getBoundingClientRect();
    const fit = Math.min(r.width / W, r.height / H) * 1.35;
    let idx = 0;
    LEVELS.forEach((lv, i) => { if (lv <= fit) idx = i; });
    const k = LEVELS[idx];
    lvlRef.current = idx;
    setLvl(idx);
    setT({ k, x: r.width / 2 - (W / 2) * k, y: r.height / 2 - (H / 2) * k });
  }, []);

  useEffect(() => {
    const el = ref.current;
    let lock = false;
    const onWheel = (e) => {
      e.preventDefault();
      if (lock) return;
      lock = true;
      setTimeout(() => (lock = false), 120);
      zoomTo(lvlRef.current + (e.deltaY < 0 ? 1 : -1), e.clientX, e.clientY);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const onDown = (e) => {
    d.current = { down: true, moved: 0, sx: e.clientX, sy: e.clientY, ox: t.x, oy: t.y };
    setDrag(true);
  };

  const onMove = (e) => {
    const s = d.current;
    if (!s.down) return;
    const dx = e.clientX - s.sx, dy = e.clientY - s.sy;
    s.moved = Math.max(s.moved, Math.abs(dx) + Math.abs(dy));
    setT((p) => ({ ...p, x: s.ox + dx, y: s.oy + dy }));
  };

  const onUp = () => {
    d.current.down = false;
    setDrag(false);
  };

  const open = (slug) => {
    if (d.current.moved < 6) go(`/work/${slug}`);
  };

  return (
    <>
      <div
        ref={ref}
        className={`map ${drag ? "drag" : ""}`}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerLeave={onUp}
      >
        <div className="world" style={{ width: W, height: H, willChange: "transform", transform: `translate(${t.x}px,${t.y}px) scale(${t.k})` }}>
          <svg width={W} height={H}>
            {lines.map((l, i) => {
              const on = hover && (hover === l.owner.slug || hover === l.other?.slug);
              return (
                <path
                  key={i}
                  d={wave(l.a, l.b, l.s)}
                  style={{
                    stroke: l.owner.accent,
                    strokeOpacity: on ? 0.8 : 0, // 0 oculta las líneas por defecto
                    strokeWidth: on ? 1.5 : 0,
                    transition: "stroke-opacity 0.3s ease",
                  }}
                />
              );
            })}
          </svg>

          {nodes.map((n) => {
            const isHovered = hover === n.p.slug;
            return (
              <div
                key={n.key}
                className="node"
                style={{
                  left: n.x,
                  top: n.y,
                  width: n.w,
                  height: n.h,
                  cursor: "pointer",
                  opacity: isHovered ? 1 : n.opacity,
                  zIndex: isHovered ? 50 : n.main ? 20 : 10,
                  transform: `translate(-50%, -50%) scale(${isHovered ? 1.08 : 1})`,
                }}
                onMouseEnter={() => setHover(n.p.slug)}
                onMouseLeave={() => setHover(null)}
                onClick={() => open(n.p.slug)}
              >
                {n.src ? (
                  <img src={n.src} alt={n.p.title} draggable={false} loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  <div className="ph" style={{ opacity: n.opacity, height: "100%", aspectRatio: "auto" }}>
                    {n.main ? n.p.title : ""}
                  </div>
                )}
                <span className="view">{ui.view}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="edge edge-t" />
      <div className="edge edge-l" />
      <div className="edge edge-r" />

      <p className="blurb">{person.mapIntro}</p>

      {/* Control de Zoom refinado y sutil */}
      <div className="zoom">
        <div className="zbox">
          <button aria-label="Zoom in" disabled={lvl === LEVELS.length - 1} onClick={() => zoomTo(lvl + 1)}>
            +
          </button>
        </div>
        <div className="zbox zticks">
          {[...LEVELS].reverse().map((k) => (
            <i key={k} className={`tick ${LEVELS[lvl] === k ? "on" : ""}`} />
          ))}
        </div>
        <div className="zbox">
          <button aria-label="Zoom out" disabled={lvl === 0} onClick={() => zoomTo(lvl - 1)}>
            −
          </button>
        </div>
      </div>
    </>
  );
}