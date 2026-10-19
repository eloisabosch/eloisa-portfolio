"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { person, projects, contact } from "../data/portfolioData";
import { ui, esPerson, esProjects, esContact } from "../data/translations";
import "../app/lang.css";

const Ctx = createContext({ lang: "en", setLang: () => {} });

export function LangProvider({ children }) {
  const [lang, setLangState] = useState("en");
  // al abrir: idioma guardado; si no hay, el del navegador (español si empieza con "es")
  useEffect(() => {
    let l = null;
    try { l = localStorage.getItem("lang"); } catch {}
    if (l !== "es" && l !== "en") l = (navigator.language || "").toLowerCase().startsWith("es") ? "es" : "en";
    setLangState(l);
  }, []);
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  const setLang = (l) => { setLangState(l); try { localStorage.setItem("lang", l); } catch {} };
  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);

// Devuelve todo el contenido en el idioma elegido: { lang, ui, person, projects, contact }
export function useContent() {
  const { lang } = useLang();
  return useMemo(() => {
    if (lang === "en") return { lang, ui: ui.en, person, projects, contact };
    return {
      lang,
      ui: { ...ui.en, ...ui.es },
      person: { ...person, ...esPerson },
      projects: projects.map((p) => ({ ...p, ...(esProjects[p.slug] || {}) })),
      contact: { ...contact, ...esContact },
    };
  }, [lang]);
}
