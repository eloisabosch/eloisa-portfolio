# Portfolio — Eloísa Bosch
1. `npm install` y `npm run dev` → http://localhost:3000
2. Textos y proyectos: `data/portfolioData.js` (inglés) y `data/translations.js` (español). En los textos, `*palabra*` va en itálica serif.
3. Imágenes: los originales van en `public/images/`. El sitio usa versiones livianas en `public/img/` (webp, máx. 2000 px).
   Después de agregar imágenes: `node scripts/optimize-images.mjs` (también actualiza `data/imageSizes.json`).
4. Nuevo proyecto: copiar un objeto de `projects` en portfolioData.js y su traducción en translations.js (mismo `slug`).
