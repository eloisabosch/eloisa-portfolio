'use client';

import { useState } from "react";
import { notFound } from "next/navigation";
import Footer from "../../../components/Footer";
import { getProject } from "../../../data/portfolioData";
import { esProjects } from "../../../data/translations";
import { useLang } from "../../../components/Lang"; // Ajusta la ruta a Lang.js si es diferente

export default function Work({ params }) {
  const baseP = getProject(params.slug);
  if (!baseP) notFound();

  // Obtenemos el idioma actual ('es' o 'en')
  const { lang } = useLang();

  // Si el idioma es español y existen traducciones para este slug, las sobreescribimos
  const p = lang === "es" && esProjects[params.slug] 
    ? { ...baseP, ...esProjects[params.slug] }
    : baseP;

  const [isOpen, setIsOpen] = useState(false);
  const [fullscreenIndex, setFullscreenIndex] = useState(null); // Índice de la foto abierta en pantalla completa

  const imgs = [p.mainImage, ...p.galleryImages].filter(Boolean);

  const nextImage = () => {
    setFullscreenIndex((prev) => (prev + 1) % imgs.length);
  };

  const prevImage = () => {
    setFullscreenIndex((prev) => (prev - 1 + imgs.length) % imgs.length);
  };

  return (
    <>
      <main className="page">
        {/* ENCABEZADO */}
        <div className="grid2">
          <p>{p.title}</p>
          <p style={{ maxWidth: 640 }}>{p.description}</p>
        </div>

        {/* GALERÍA DE IMÁGENES */}
        {imgs.length ? (
          <div className="gal">
            {imgs.map((src, idx) => (
              <img
                key={src}
                src={src}
                alt={p.title}
                onClick={() => setFullscreenIndex(idx)}
                style={{ cursor: "pointer" }}
              />
            ))}
          </div>
        ) : (
          <div className="ph" style={{ aspectRatio: "16/9", margin: "50px 0" }}>
            Add images in portfolioData.js
          </div>
        )}

        {/* DETALLES Y DESPLEGABLE ABOUT THE PROJECT */}
        <div className="grid2">
          <div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
                fontSize: "inherit",
                fontFamily: "inherit",
                color: "inherit",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span>{lang === "es" ? "Sobre el proyecto" : "About the project"}</span>
              <span style={{ fontSize: "1.1em", fontWeight: 300 }}>
                {isOpen ? "×" : "+"}
              </span>
            </button>

            {isOpen && (
              <p style={{ marginTop: "12px", maxWidth: 640, lineHeight: 1.6 }}>
                {p.longDescription}
              </p>
            )}
          </div>

          <dl className="meta" style={{ margin: 0 }}>
            <div>
              <dt>{lang === "es" ? "Año" : "Year"}</dt>
              <dd>{p.year}</dd>
              <dt>{lang === "es" ? "Colaboradores" : "Collaborators"}</dt>
              <dd>{p.collaborators}</dd>
            </div>
            <div>
              <dt>{lang === "es" ? "Contexto" : "Context"}</dt>
              <dd>{p.context}</dd>
              <dt>{lang === "es" ? "Tutoría / Guía" : "Guidance"}</dt>
              <dd>{p.guidance}</dd>
            </div>
            <div>
              <dt>{lang === "es" ? "Categoría" : "Category"}</dt>
              <dd>{p.category}</dd>
            </div>
          </dl>
        </div>
      </main>

      {/* MODAL PANTALLA COMPLETA / LIGHTBOX */}
      {fullscreenIndex !== null && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "#000000",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Botón de cerrar arriba a la derecha */}
          <button
            onClick={() => setFullscreenIndex(null)}
            style={{
              position: "absolute",
              top: "24px",
              right: "32px",
              background: "none",
              border: "none",
              color: "#ffffff",
              fontSize: "14px",
              fontFamily: "inherit",
              cursor: "pointer",
              zIndex: 10000,
            }}
          >
            {lang === "es" ? "Cerrar [ × ]" : "Close [ × ]"}
          </button>

          {/* Flecha Izquierda */}
          {imgs.length > 1 && (
            <button
              onClick={prevImage}
              style={{
                position: "absolute",
                left: "24px",
                background: "none",
                border: "none",
                color: "#ffffff",
                fontSize: "24px",
                cursor: "pointer",
                padding: "20px",
                zIndex: 10000,
              }}
            >
              ‹
            </button>
          )}

          {/* Imagen Actual */}
          <img
            src={imgs[fullscreenIndex]}
            alt={p.title}
            onClick={nextImage}
            style={{
              maxHeight: "90vh",
              maxWidth: "90vw",
              objectFit: "contain",
              cursor: "pointer",
            }}
          />

          {/* Flecha Derecha */}
          {imgs.length > 1 && (
            <button
              onClick={nextImage}
              style={{
                position: "absolute",
                right: "24px",
                background: "none",
                border: "none",
                color: "#ffffff",
                fontSize: "24px",
                cursor: "pointer",
                padding: "20px",
                zIndex: 10000,
              }}
            >
              ›
            </button>
          )}

          {/* Indicador numérico (ej. 1/5) */}
          <div
            style={{
              position: "absolute",
              bottom: "24px",
              color: "#ffffff",
              fontSize: "12px",
              opacity: 0.7,
            }}
          >
            {fullscreenIndex + 1} / {imgs.length}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}