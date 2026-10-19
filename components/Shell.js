"use client";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Header from "./Header";
import { LangProvider } from "./Lang";

const Ctx = createContext({ go: () => {} });
export const useCurtain = () => useContext(Ctx);

// Link que baja la cortina oscura, navega, y la sube.
export function CurtainLink({ href, children, ...rest }) {
  const { go } = useCurtain();
  return (
    <a href={href} {...rest} onClick={(e) => { if (e.metaKey || e.ctrlKey) return; e.preventDefault(); go(href); }}>
      {children}
    </a>
  );
}

export default function Shell({ children }) {
  const [phase, setPhase] = useState("idle");
  const path = usePathname();
  const router = useRouter();
  const busy = useRef(false);

  const go = (href) => {
    if (busy.current || href === path) return;
    busy.current = true;
    setPhase("in");
    setTimeout(() => router.push(href), 650);
  };

  useEffect(() => {
    if (!busy.current) return;
    window.scrollTo(0, 0);
    setPhase("out");
    const t = setTimeout(() => { setPhase("idle"); busy.current = false; }, 650);
    return () => clearTimeout(t);
  }, [path]);

  return (
    <LangProvider>
      <Ctx.Provider value={{ go }}>
        <Header path={path} />
        {children}
        <div className={`curtain ${phase === "idle" ? "" : phase}`} />
      </Ctx.Provider>
    </LangProvider>
  );
}
