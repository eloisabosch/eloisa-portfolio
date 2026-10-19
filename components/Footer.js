"use client";
import { useContent } from "./Lang";

export default function Footer() {
  const { person, ui } = useContent();
  return (
    <footer className="footer">
      <span>{ui.copyright} {person.name} {new Date().getFullYear()}</span>
      <a href={person.siteCredit.href}>{ui.websiteBy} {person.siteCredit.label}</a>
    </footer>
  );
}
