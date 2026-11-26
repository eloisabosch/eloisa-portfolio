// Muestra un texto donde *palabra* va en itálica serif (el acento tipográfico del sitio).
export default function Rich({ text }) {
  if (!text) return null;
  return text.split(/(\*[^*]+\*)/g).map((part, i) =>
    part.startsWith("*") && part.endsWith("*") ? <em key={i}>{part.slice(1, -1)}</em> : part
  );
}
