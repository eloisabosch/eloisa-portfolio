"use client";
import Footer from "../../components/Footer";
import { useContent } from "../../components/Lang";

export default function About() {
  const { person, ui } = useContent();
  return (
    <>
      <main className="page about">
        <div>
          <p>{person.role}</p><p className="mute">{person.location}</p>
        </div>
        <div>
          {person.aboutLong.map((t, i) => <p key={i}>{t}</p>)}
          <ul>{person.links.map((l) => <li key={l.label}><a href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{l.label}</a></li>)}</ul>
          <p className="mute" style={{ marginTop: 14 }}><a href={person.resume.href} target="_blank" rel="noopener noreferrer">{ui.resume} ↗</a></p>
          <p style={{ marginTop: 30 }}>{person.education.map((e) => <span key={e} style={{ display: "block" }}>{e}</span>)}</p>
          <p className="mute">{person.skills.join(", ")}</p>
          <p className="mute">{person.languages.join(" · ")}</p>
        </div>
        <div>{person.portrait ? <img src={person.portrait} alt={person.name} /> : <div className="ph" style={{ aspectRatio: "3/4" }}>Add portrait</div>}</div>
      </main>
      <Footer />
    </>
  );
}
