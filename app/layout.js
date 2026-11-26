import localFont from "next/font/local";
import Shell from "../components/Shell";
import { person } from "../data/portfolioData";
import "./globals.css";
import "./uniform.css";

// Tipografía: Instrument Sans para todo el sitio + Newsreader itálica como acento.
// Para volver a la serif original en todo el sitio: cambiá --font por --serif en globals.css.
// Fuentes servidas desde el propio sitio (app/fonts), licencia SIL Open Font License.
const sans = localFont({ src: "./fonts/InstrumentSans-Variable.woff2", weight: "400 700", variable: "--font", display: "swap" });
const serif = localFont({
  src: [
    { path: "./fonts/Newsreader-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Newsreader-Italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--serif", display: "swap",
});

const SITE = "https://eloisa-portfolio.vercel.app";

export const metadata = {
  metadataBase: new URL(SITE),
  title: { default: `${person.name} — ${person.role}`, template: `%s — ${person.name}` },
  description: "Multidisciplinary designer based in Buenos Aires: branding, art direction, packaging, product and experience design.",
  openGraph: {
    title: `${person.name} — ${person.role}`,
    description: "Branding, art direction, packaging, product and experience design.",
    url: SITE, siteName: person.name, type: "website",
    images: [{ url: "/img/Sobremesa10.webp", width: 1493, height: 2000 }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body><Shell>{children}</Shell></body>
    </html>
  );
}
