// ============================================================
//  TODO EL CONTENIDO DEL SITIO VIVE ACÁ. Editá textos, links y proyectos.
//  Imágenes: ponelas en /public/images y referenciálas como "/images/archivo.jpg".
//  Si una imagen es null se muestra un recuadro gris con el título.
// ============================================================

export const person = {
  name: "Eloísa Bosch",
  role: "Multidisciplinary Designer",
  location: "Buenos Aires, Argentina",
availability: "Available for full-time positions and freelance projects.",
  mapIntro:
    "I am an integrated design student from Universidad Torcuato Di Tella with exchange program experience at Universidad Carlos III. I bridge graphic, UX/UI, and industrial design to build coherent, purposeful narratives. I specialize in turning complex research into strategic systems, and I am eager to contribute critical thinking and technical depth to impactful, forward-thinking team.",
  aboutLong: [
    "I understand design as a strategic and cultural tool to investigate, question and detect tensions, and to turn them into coherent systems with a conceptual foundation.",
    "I work across graphic, UX/UI and industrial design to build identities, brands and experiences with depth. I study Design at Universidad Torcuato Di Tella in Buenos Aires, and spent an Erasmus exchange in Film, Television and Media Studies at Universidad Carlos III de Madrid.",
  
  ],
  portrait: "/images/polaroid.jpg", // "/images/eloisa.jpg"
  education: [
    "Universidad Torcuato Di Tella — Bachelor in Design (2023–2026)",
    "Universidad Carlos III de Madrid — Erasmus, Film, Television and Media Studies (2025–2026)",
  
  ],
  skills: ["Adobe Photoshop", "Adobe Illustrator", "Rhino 7", "Adobe After Effects", "Keyshot", "Figma", "Framer", "Visual Code"],
  languages: ["Spanish (Native)", "English (Advanced)"],
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/eloisa-bosch-816562241/" },
    { label: "Instagram", href: "https://www.instagram.com/eloisa.portfolio/" },
    { label: "Behance", href: "https://www.behance.net/eloisabosch" },
    { label: "Email", href: "mailto:eloisabosch5@gmail.com" },
  ],
  resume: { label: "Resume", href: "/" },
  email: "eloisabosch5@gmail.com",
  phone: "+54 9 11 35005389",
  siteCredit: { label: "Eloísa Bosch", href: "#" },
};

export const contact = {
  title: "If my work speaks to yours",
  intro:
    "I’m a freelance designer and student looking for cool projects, collaborations, or positions. Drop a line below or send an email to ",
  steps: [
    { title: "Your Information", fields: [
      { name: "name", label: "What is your name?", required: true, error: "Please share your name." },
      { name: "email", label: "Email address", type: "email", required: true, error: "Please share your email." },
      { name: "link", label: "Portfolio or Instagram (optional)" },
      { name: "org", label: "Company or Studio (optional)" } ] },
    { title: "What are you looking for?", fields: [
      { name: "type", label: "Freelance project, part-time role, collaboration…", required: true, error: "Please tell me what you have in mind." },
      { name: "timing", label: "Timeline (optional)" } ] },
    { title: "About the project", fields: [
      { name: "about", label: "Tell me a bit about it", required: true, error: "Please add a few words." },
      { name: "budget", label: "Budget range (optional)" } ] },
    { title: "Anything else?", fields: [
      { name: "message", label: "Final message (optional)" } ] },
  ],
};

// x,y: posición en un mundo de 1600 x 1100. w: ancho del nodo. links: slugs conectados con una línea.
// Para agregar un proyecto: copiá un objeto, cambiá slug/coords y listo.
export const projects = [
  { id: 1, slug: "a-donde-voy-llevo-mi-bandera", title: "A dónde voy llevo mi bandera", category: "UX/UI & Product Design", year: "2025",
    context: "University · MUNTREF", collaborators: "n/a", guidance: "n/a", accent: "#e0a526",
    description: "Reimagining the Argentine diaspora through “exacerbated argentinidad”. A phygital museum system that represents the tensions of contemporary migration without clichés: a QR “Track & Collect” game, tactile stations, PIR-sensor viewers, an interactive map and a sticker printing station.",
    longDescription: "A donde voy llevo mi bandera is an immersive, phygital museum exhibition that explores the contemporary Argentine diaspora. By bridging physical artifacts with digital interactivity, the project investigates how national identity is reconstructed, performed, and preserved far from home, As a UX UI and product design project, it blends history with technology to turn the traditional museum-going experience into a narrative game, inviting visitors to uncover the stories, objects, and cultural tensions that define what it means to be Argentine in a globalized world.",
    mainImage: "/images/ADVYMB9.png", galleryImages: ["/images/ADVYMB10.png", "/images/ADVYMB11.png", "/images/ADVYMB12.png", "/images/ADVYMB13.png", "/images/ADVYMB14.png", "/images/ADVYMB15.png", "/images/ADVYMB16.png", "/images/ADVYMB17.png", "/images/ADVYMB18.png", "/images/ADVYMB1.png", "/images/ADVYMB2.jpg",  "/images/ADVYMB4.jpg", "/images/ADVYMB7.png"],  x: 420, y: 300, w: 120, links: ["financity", "pulse"] },
  { id: 2, slug: "financity", title: "Financity", category: "UX/UI Design", year: "2025",
    context: "University", collaborators: "n/a", guidance: "n/a", accent: "#4caf6e",
    longDescription: "Financity is an interactive mobile application that transforms financial education into an immersive simulation game. By bridging the gap between young adults and personal finance, the project replaces complex jargon with a visual, gamified ecosystem where users manage money, invest, and save through an interactive avatar experience. It is a learning-by-doing tool designed to build healthy financial habits in a safe, risk-free environment.",
    description: "Learn by doing, not explaining. A gamified financial simulation app for 16–23 year-olds, with an avatar that reflects each decision through The Arcade (mini-games), The Bank (risk-free investing) and The Shop (conscious spending).",
    mainImage: "/images/financity1.avif", galleryImages: [ "/images/financity2.avif", "/images/financity3.avif", "/images/financity4.avif"], x: 760, y: 220, w: 110, links: ["pulse", "sobremesa"] },
  { id: 3, slug: "pulse", title: "Pulse", category: "Branding, App UX/UI & Communication", year: "2025",
    context: "Client · Pulse", collaborators: "Eloísa Bosch", guidance: "n/a", accent: "#3a8fd9",
    description: "A platform that connects users, organizers and ambassadors with outdoor adventure sports. Complete visual brand, logotype, app UX/UI and communication strategy.",
    longDescription: "Developed the full brand identity for the company, including the name, logo, visual system, and app design, as well as all the elements required to launch, the platform that connects you with life’s greatest adventures. an app designed to make experiencing adventure as easy as a click",
    mainImage: "/images/pulse1.jpg", galleryImages: [ "/images/pulse3.jpg", "/images/pulse4.jpg", "/images/pulse5.jpg"], x: 640, y: 520, w: 130, links: ["arke", "condor-ai"] },
  { id: 4, slug: "sobremesa", title: "Sobremesa", category: "Branding & Packaging", year: "2026",
    context: "Self-initiated", collaborators: "Eloísa Bosch", guidance: "n/a", accent: "#c8553d",
    description: "Reinterpreting the Spanish sobremesa through collectible art on 250ml glass bottles. Ready-to-drink beverages are dominated by massive, impersonal graphics; these bottles are conceived as oil paintings, with handmade strokes and organic typography.",
    longDescription: "Brand identity and packaging design for a bottled ready-to-drink Tinto de Verano, celebrating shared moments, casual gatherings, and contemporary artistic aesthetics.The belief that beauty should inhabit everyday rituals. Reinterpreting the relaxed Spanish sobremesa through the lens of collectible art, bringing tactile intimacy to casual daytime drinking.A series of bottled wines conceived as tangible, pocket-sized art objects. Featuring expressive oil-paint brushstrokes and painterly warmth, each bottle invites contemplation and celebrates art as a natural, accessible part of daily life.",
    mainImage: "/images/Sobremesa10.jpg", galleryImages: [ "/images/Sobremesa1.jpeg",   "/images/Sobremesa6.jpeg", "/images/Sobremesa7.jpg", "/images/Sobremesa9.jpg", "/images/Sobremesa12.png" , "/images/Sobremesa4.png", "/images/Sobremesa5.png",], x: 1060, y: 330, w: 110, links: ["gentle-encounters"] },
  { id: 5, slug: "arke", title: "Arké", category: "Product & Social Media Design", year: "2025",
    context: "Client · Arké, Barcelona", collaborators: "n/a", guidance: "n/a", accent: "#8a6bd1",
    description: "Minimalist barefoot and ergonomic footwear. Visual identity, shoe boxes and packaging, color palette, a Kickstarter campaign (July 2025) and social media management.",
    longDescription: "Arké designs barefoot shoes for everyday life, combining ergonomic biomechanics with thoughtful, minimalist design. Based in Barcelona, their approach focuses on creating footwear that allows people to move naturally without compromising style or comfort. I contributed to the brand by developing the visual identity, designing the sneaker boxes, defining the color palette, and managing the social media design and strategy.",
    mainImage: "/images/arke1.jpg", galleryImages: [ "/images/arke2.png", "/images/arke3.jpg", "/images/arke6.jpg"], x: 940, y: 640, w: 120, links: ["condor-ai", "gahan-pettit"] },
  { id: 6, slug: "condor-ai", title: "Condor.ai", category: "Branding & Visual Design", year: "2025",
    context: "Client · Condor.ai", collaborators: "n/a", guidance: "n/a", accent: "#2bb3b3",
    description: "A visual system and brand identity for an AI-powered platform.",
    longDescription: "Developed the end-to-end brand identity system for Condor.ai to build an institutional, authoritative visual presence aimed at expanding their client base. The project encompassed the creation of a original logotype, a refined color palette, and clear visual guidelines engineered to drive consistency and trust across all strategic touchpoints.",
    mainImage: "/images/condorlogo.jpg", galleryImages: [ "/images/condor2.png", "/images/condor3.png", "/images/condor4.png", "/images/condor5.png"], x: 520, y: 800, w: 110, links: ["gentle-encounters"] },
  { id: 7, slug: "gentle-encounters", title: "Gentle Encounters", category: "Print & Illustration", year: "2026",
    context: "Private commission", collaborators: "Eloísa Bosch", guidance: "n/a", accent: "#e07aa5",
    description: "A limited series of ink postcards on handcrafted textured paper, exploring childhood memories and everyday tenderness.",
    longDescription: "A custom series of illustrated postcards exploring childhood memories, warmth, and companionship through expressive ink-style drawings.Translating everyday tender moments into timeless stationery pieces, focusing on tactile paper textures and raw, handcrafted linework.A limited, personalized set of postcards blending expressive traditional aesthetics with thoughtful, clean editorial packaging ready to send or collect.",
    mainImage: "/images/postcard4.jpg", galleryImages: ["/images/postcard2.jpg" , "/images/Postcard5.jpg", "/images/postcard3.jpg"], x: 1180, y: 840, w: 110, links: [] },
  { id: 8, slug: "gahan-pettit", title: "Gahan Pettit", category: "Textile & Graphic Design", year: "2024",
    context: "Client · @gahanpettit", collaborators: "n/a", guidance: "n/a", accent: "#e0a526",
    description: "A series of playful prints and illustrations for children's clothing.",
   longDescription: "The project focuses on creating unique prints for children’s clothing under the Gahan Pettit brand, emphasizing playful and artistic visuals.I developed a series of designs and prints for children’s apparel, drawing inspiration from vibrant and imaginative themes that would resonate with both kids and parents.Using Adobe Illustrator and Photoshop, I created multiple designs that were playful yet elegant. The designs were carefully crafted to align with the brand’s identity while making the clothing visually appealing to children.",
    mainImage: "/images/Gahanpetit1.jpg", galleryImages: ["/images/Gahanpetit4.jpg", "/images/Gahanpetit5.jpg" , "/images/Gahanpetit7.jpg" , "/images/Gahanpetit8.jpg", "/images/Gahanpetit9.jpg" ,"/images/Gahanpetit10.jpg"  , "/images/Gahanpetit12.jpg"], x: 260, y: 640, w: 110, links: ["pulse"] },
  { id: 9, slug: "catalizadores", title: "Catalizadores", category: "Experimental Fashion, 3D Morphology & Generative AI", year: "2026",
    context: "University · VirtualLab, E_02", collaborators: "Eloísa Bosch", guidance: "n/a", accent: "#e3262e",
    description: "An experimental collection and short haute-couture campaign: sculptural garments inspired by the fluidity of water, taken from nothing to everything, from the unreal to the concrete, with 3D modeling and generative AI.",
    longDescription: "Sintonía Biomórfica is a collection and short haute-couture campaign developed from scratch at the crossing of experimental fashion (Schiaparelli, Loewe), the rigor of product design and contemporary fabrication technologies. I conceived and designed sculptural garments inspired by the fluidity and movement of water, materialized through 3D modeling and AI generation. The process integrates the creation of the garments, their resolution as viable three-dimensional products, and the creative direction of a hyperrealistic editorial campaign built with an iterative workflow in generative tools such as Google Flow, taking the pieces out of the studio and into a natural setting. The project shows that AI does not end at ephemeral images: radial folds and organic structures conceived digitally become 3D meshes, vector geometries and models ready to be manufactured, through additive manufacturing and technical pattern-making. AI acts as a catalyst that accelerates morphological exploration and turns the designer from a sketch artist into a curator of formal rule systems, in a territory where the digital and the tactile stop competing and merge into a new language of contemporary luxury.",
    mainImage: "/images/Catalizadores1.jpg", galleryImages: ["/images/Catalizadores2.jpg", "/images/Catalizadores3.jpg", "/images/Catalizadores4.jpg", "/images/Catalizadores5.jpg", "/images/Catalizadores6.jpg", "/images/Catalizadores7.jpg", "/images/Catalizadores8.jpg"], x: 1280, y: 560, w: 120, links: ["sobremesa", "arke"] },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
