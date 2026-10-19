"use client";
import { useState } from "react";
import { useContent } from "./Lang";

export default function ContactForm() {
  const { contact, person, ui } = useContent();
  const [step, setStep] = useState(0);
  const [vals, setVals] = useState({});
  const [errs, setErrs] = useState({});   // guarda "req" o "mail"; el texto se arma en el idioma actual
  const [done, setDone] = useState(false);
  const s = contact.steps[step];

  const validate = () => {
    const e = {};
    s.fields.forEach((f) => {
      const v = (vals[f.name] || "").trim();
      if (f.required && !v) e[f.name] = "req";
      else if (f.type === "email" && v && !/^\S+@\S+\.\S+$/.test(v)) e[f.name] = "mail";
    });
    setErrs(e); return !Object.keys(e).length;
  };
  const next = () => {
    if (!validate()) return;
    if (step < contact.steps.length - 1) return setStep(step + 1);
    // Envío: abre el mail del usuario con las respuestas. Reemplazalo por Formspree/Resend si querés.
    const body = Object.entries(vals).map(([k, v]) => `${k}: ${v}`).join("\n");
    window.location.href = `mailto:${person.email}?subject=${encodeURIComponent("Portfolio contact")}&body=${encodeURIComponent(body)}`;
    setDone(true);
  };

  if (done) return <p style={{ margin: "40px 0" }}>{ui.thanks}</p>;
  return (
    <div>
      <p>{step + 1}/{contact.steps.length}</p><p>{s.title}</p>
      {s.fields.map((f) => (
        <div className="field" key={f.name}>
          <input placeholder={f.label} type={f.type || "text"} value={vals[f.name] || ""} aria-invalid={!!errs[f.name]}
            onChange={(e) => { setVals({ ...vals, [f.name]: e.target.value }); setErrs({ ...errs, [f.name]: null }); }} />
          {errs[f.name] && <div className="err">{errs[f.name] === "mail" ? ui.invalidEmail : f.error}</div>}
        </div>
      ))}
      <div className="dots">{contact.steps.map((_, i) => <i key={i} className={i === step ? "on" : ""} />)}</div>
      {step > 0 && <button className="btn" onClick={() => setStep(step - 1)}>{ui.back}</button>}
      <button className="btn" onClick={next}>{step === contact.steps.length - 1 ? ui.send : ui.continue}</button>
    </div>
  );
}
