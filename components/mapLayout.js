// Acomoda todas las imágenes del mapa SIN que se pisen y con el MISMO tamaño.
// Para cambiar el tamaño de todas: NODE_W / NODE_H. Para más aire entre ellas: GAP.
export const W = 2400, H = 1500;          // tamaño del "mundo" del mapa
export const NODE_W = 150, NODE_H = 188;  // todas las imágenes miden esto (proporción 4:5)
const GAP = 30;                           // espacio mínimo entre imágenes
const SX = 1.5, SY = 1.4;                 // escala de las coordenadas x,y de portfolioData.js
const OPACITIES = [0.7, 0.55, 0.8, 0.5, 0.65];

const MINX = NODE_W / 2 + 40, MAXX = W - NODE_W / 2 - 40;
const MINY = NODE_H / 2 + 110, MAXY = H - NODE_H / 2 - 40;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

export function buildLayout(projects) {
  const placed = [];
  const free = (x, y) =>
    x >= MINX && x <= MAXX && y >= MINY && y <= MAXY &&
    placed.every((q) => Math.abs(q.x - x) >= NODE_W + GAP || Math.abs(q.y - y) >= NODE_H + GAP);

  // busca en espiral el lugar libre más cercano al lugar deseado
  const place = (x0, y0) => {
    x0 = clamp(x0, MINX, MAXX); y0 = clamp(y0, MINY, MAXY);
    for (let r = 0; r < 4000; r += 16) {
      const steps = r === 0 ? 1 : Math.max(8, Math.round((2 * Math.PI * r) / 32));
      for (let i = 0; i < steps; i++) {
        const a = (i / steps) * 2 * Math.PI + r * 0.35;
        const x = x0 + Math.cos(a) * r, y = y0 + Math.sin(a) * r * 0.75;
        if (free(x, y)) { placed.push({ x, y }); return { x, y }; }
      }
    }
    placed.push({ x: x0, y: y0 }); return { x: x0, y: y0 };
  };

  const nodes = [], lines = [], mains = {};
  const info = projects.map((p) => ({ p, srcs: [...new Set([p.mainImage, ...(p.galleryImages || [])].filter(Boolean))].slice(0, 3) }));
  // 1) imágenes principales (cerca de las coordenadas de portfolioData.js)
  info.forEach(({ p, srcs }) => {
    const pos = place((p.x || 500) * SX, (p.y || 400) * SY);
    const m = { key: p.slug + "-main", p, ...pos, w: NODE_W, h: NODE_H, opacity: 1, src: srcs[0] || null, main: true };
    mains[p.slug] = m; nodes.push(m);
  });

  // 2) imágenes secundarias: en anillos alrededor de la principal
  const most = Math.max(0, ...info.map((i) => i.srcs.length - 1));
  for (let j = 0; j < most; j++) {
    info.forEach(({ p, srcs }, i) => {
      if (!srcs[j + 1]) return;
      const m = mains[p.slug], ring = Math.floor(j / 6) + 1;
      const a = ((j % 6) * 60 + i * 25) * (Math.PI / 180);
      const pos = place(m.x + Math.cos(a) * ring * 240, m.y + Math.sin(a) * ring * 240 * 0.85);
      const n = { key: `${p.slug}-sat-${j}`, p, ...pos, w: NODE_W, h: NODE_H, opacity: OPACITIES[j % OPACITIES.length], src: srcs[j + 1], main: false };
      nodes.push(n); lines.push({ a: m, b: n, owner: p, other: null, s: (i + j) % 2 ? 1 : -1 });
    });
  }

  projects.forEach((p, i) => (p.links || []).forEach((slug, j) => {
    if (mains[slug]) lines.push({ a: mains[p.slug], b: mains[slug], owner: p, other: mains[slug].p, s: (i + j) % 2 ? 1 : -1 });
  }));
  return { nodes, lines };
}
