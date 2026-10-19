"use client";
import { CurtainLink } from "./Shell";
import { useContent, useLang } from "./Lang";

export default function Header({ path }) {
  const { person, ui } = useContent();
  const { lang, setLang } = useLang();
  const nav = [[ui.about, "/about"], [ui.projects, "/projects"], [ui.contact, "/contact"]];
  return (
    <header className="header">
      <CurtainLink href="/">{person.name}</CurtainLink>
      <nav>
        {nav.map(([label, href]) => (
          <CurtainLink key={href} href={href} className={path === href ? "dim" : ""}>{label}</CurtainLink>
        ))}
        <span className="lang">
          {["es", "en"].map((l, i) => (
            <span key={l}>
              {i > 0 && " / "}
              <button className={lang === l ? "on" : ""} aria-pressed={lang === l} onClick={() => setLang(l)}>{l.toUpperCase()}</button>
            </span>
          ))}
        </span>
      </nav>
    </header>
  );
}
