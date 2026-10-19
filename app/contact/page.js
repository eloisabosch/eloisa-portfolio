"use client";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";
import { useContent } from "../../components/Lang";

export default function Contact() {
  const { contact, person } = useContent();
  return (
    <>
      <main className="page"><div className="contact">
        <p>{contact.title}</p>
        <p className="intro">{contact.intro} {person.email}</p>
        <ContactForm />
      </div></main>
      <Footer />
    </>
  );
}
