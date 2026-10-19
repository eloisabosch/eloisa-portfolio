import { Newsreader } from "next/font/google";
import Shell from "../components/Shell";
import { person } from "../data/portfolioData";
import "./globals.css";
import "./uniform.css";

const font = Newsreader({ subsets: ["latin"], variable: "--font" });

export const metadata = { title: `${person.name} — ${person.role}`, description: person.availability };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={font.variable}>
      <body><Shell>{children}</Shell></body>
    </html>
  );
}
