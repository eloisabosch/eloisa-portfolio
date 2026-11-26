// ============================================================
//  TODO EL CONTENIDO DEL SITIO VIVE ACÁ (inglés). El español está en translations.js.
//  Imágenes: los originales quedan en /public/images. El sitio usa las versiones
//  livianas de /public/img (webp). Para regenerarlas: node scripts/optimize-images.mjs
//  En los textos, *palabra* se muestra en itálica serif.
//  Un campo vacío ("" o sin poner) no se muestra en la ficha del proyecto.
// ============================================================

const I = (name) => `/img/${name}.webp`;

export const person = {
  name: "Eloísa Bosch",
  role: "Multidisciplinary Designer",
  location: "Buenos Aires, Argentina",
  availability: "Available for full-time positions and freelance projects.",
  projectsIntro:
    "I’m a multidisciplinary designer. I work in branding, build *narratives* and design from the first idea to the final object. I want to keep growing alongside new teams.",
  aboutLong: [
    "I understand design as a strategic and cultural tool to investigate, question and detect tensions, and to turn them into coherent systems with a conceptual foundation.",
    "I work across graphic, UX/UI and industrial design to build identities, brands and experiences with depth. I’m finishing my degree in Design at Universidad Torcuato Di Tella in Buenos Aires, and spent an Erasmus exchange in Film, Television and Media Studies at Universidad Carlos III de Madrid.",
  ],
  portrait: "/images/polaroid.jpg",
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
  resume: { label: "Resume", href: "/images/CV-Eloisa-Bosch.pdf" },
  email: "eloisabosch5@gmail.com",
  phone: "+54 9 11 35005389",
  siteCredit: { label: "Eloísa Bosch", href: "/" },
};

export const contact = {
  title: "If my work speaks to yours",
  intro:
    "I’m a designer open to projects, collaborations and full-time positions. Write to me below or send an email to ",
  steps: [
    { title: "Your Information", fields: [
      { name: "name", label: "What is your name?", required: true, error: "Please share your name." },
      { name: "email", label: "Email address", type: "email", required: true, error: "Please share your email." },
      { name: "link", label: "Portfolio or Instagram (optional)" },
      { name: "org", label: "Company or Studio (optional)" } ] },
    { title: "What are you looking for?", fields: [
      { name: "type", label: "Freelance project, full-time role, collaboration…", required: true, error: "Please tell me what you have in mind." },
      { name: "timing", label: "Timeline (optional)" } ] },
    { title: "About the project", fields: [
      { name: "about", label: "Tell me a bit about it", required: true, error: "Please add a few words." },
      { name: "budget", label: "Budget range (optional)" } ] },
    { title: "Anything else?", fields: [
      { name: "message", label: "Final message (optional)" } ] },
  ],
};

// Orden = orden en el carrusel de la home.
// Campos de la ficha: year, context, category (disciplinas), role, team.
export const projects = [
  { slug: "a-donde-voy-llevo-mi-bandera", title: "A dónde voy llevo mi bandera", category: "Exhibition & Experience Design · Illustration", year: "2025",
    context: "University · Universidad Torcuato Di Tella, for MUNTREF", team: "Bosch · Mirazon · Saráchaga",
    role: "Illustration (all illustrations are mine), narrative, concept and 3D modeling",
    description: "A phygital exhibition about the contemporary Argentine diaspora, built around “exacerbated argentinidad”: what Argentines carry with them, exaggerate and hold on to when they live far from home.",
    longDescription: "Designed as a university project for MUNTREF’s Museo de la Inmigración, the exhibition turns the visit into a narrative game. Visitors collect stories with a QR “Track & Collect” game and move through tactile stations, sensor viewers, an interactive map and a sticker printing station.\n\nThe whole visual system grows out of illustration: stamps, altars and everyday objects that take a familiar stereotype and turn it into something to collect. I drew all the illustrations and worked on the narrative, the concept and the 3D modeling of the space.",
    mainImage: I("ADVYMB9"),
    galleryImages: ["ADVYMB10", "ADVYMB11", "ADVYMB12", "ADVYMB13", "ADVYMB14", "ADVYMB15", "ADVYMB16", "ADVYMB17", "ADVYMB18", "ADVYMB1", "ADVYMB2", "ADVYMB4", "ADVYMB7"].map(I) },

  { slug: "sobremesa", title: "Sobremesa", category: "Branding · Packaging · Digital illustration", year: "2026",
    context: "Self-initiated project", role: "Concept, digital paintings, branding and packaging",
    description: "A tinto de verano that treats every bottle as a small, collectible painting: a slower, more personal take on the ready-to-drink shelf.",
    longDescription: "Ready-to-drink beverages usually rely on loud, impersonal graphics. Sobremesa goes the other way. It borrows the Spanish sobremesa, the unhurried time spent at the table after a meal, and turns each 250 ml bottle into a piece of art.\n\nThe labels are digital paintings with expressive, oil-like brushstrokes and organic lettering. Each one works on its own and as part of a series to collect. An independent, self-exploratory project in which I developed the concept, the paintings, the brand and the packaging.",
    mainImage: I("Sobremesa10"),
    galleryImages: ["Sobremesa1-jpeg", "Sobremesa6-jpeg", "Sobremesa7", "Sobremesa9", "Sobremesa12", "Sobremesa4", "Sobremesa5"].map(I) },

  { slug: "pasito", title: "Pasito", category: "Packaging · App design", year: "2026",
    context: "Real product · produced in China", role: "Packaging (communication, materials and design) and app design",
    description: "Packaging and app for Pasito Health Band, an activity tracker. The box was produced in China in November 2026.",
    longDescription: "Pasito needed a box that felt friendly and clear before the product was even in your hand. I defined what the packaging had to communicate, chose its materials and designed it as a sliding drawer: a deep green sleeve, a cardboard tray that holds the band, the module and the cable, and a yellow pull tab.\n\nThe front shows a line drawing of the band; the back sums up its features with simple icons and a QR code to download the app. The line “Cada pasito cuenta.” (every little step counts) ties it all together. I also designed the Pasito app.",
    mainImage: I("pasito-render-1"),
    galleryImages: ["pasito-render-2", "pasito-render-3"].map(I) },

  { slug: "espacio-hila", title: "Espacio Hila", category: "Social media · Posters · Template system", year: "2026",
    context: "Freelance · Espacio Hila, Madrid", role: "Editable template system in Canva, social media pieces and posters",
    description: "Social media and posters for a mental health space in Madrid founded by two Argentine psychologists.",
    longDescription: "Espacio Hila offers therapy and support for therapists. I designed a system of editable Canva templates for stories, posts and posters, so the team can publish its activities on its own while keeping a coherent image.\n\nThe tone is warm, close and professional. Archive photography, collage and open questions carry their way of looking at relationships, care and community, so that every new piece speaks with the same voice.",
    mainImage: I("hila-post-3"),
    galleryImages: ["hila-story-1", "hila-story-2", "hila-story-3", "hila-story-4", "hila-post-1", "hila-post-5", "hila-post-6"].map(I) },

  { slug: "pulse", title: "Pulse", category: "Branding · App UX/UI · Communication", year: "2025",
    context: "Client · Pulse", role: "Brand identity, app UX/UI and launch communication",
    description: "Brand and app for a platform that connects people with outdoor adventure sports. The app is live on the App Store.",
    longDescription: "Pulse brings together users, organizers and ambassadors of outdoor adventure sports. I created the whole brand (name, logo and visual system), designed the app’s UX/UI and produced the pieces needed for its launch.\n\nThe goal was to make joining an adventure as easy as a tap: bold black and lime visuals, real photography and a clear path from finding an event to signing up. The app was developed and launched on the App Store.",
    mainImage: I("pulse1"),
    galleryImages: ["pulse3", "pulse4", "pulse5"].map(I) },

  { slug: "arke", title: "Arké", category: "Packaging · Social media · Campaign", year: "2025",
    context: "Client · Arké, Barcelona", role: "Packaging, color palette, Kickstarter campaign and social media",
    description: "Packaging, color palette, social media and a Kickstarter campaign for a barefoot footwear brand from Barcelona.",
    longDescription: "Arké makes minimalist barefoot shoes for everyday life, designed around natural movement. The name and logo were already defined; I took care of everything built around them.\n\nI designed the shoe boxes and packaging, defined the color palette and led the design and strategy of the brand’s social media and its Kickstarter campaign, launched in July 2025, which did well.",
    mainImage: I("arke1"),
    galleryImages: ["arke2", "arke3", "arke6"].map(I) },

  { slug: "catalizadores", title: "Catalizadores", category: "Experimental fashion · AI campaign", year: "2026",
    context: "University · VirtualLab, E_02", role: "Concept, art direction, AI image generation and 3D modeling",
    description: "A short fashion campaign made with generative AI: sculptural garments inspired by the movement of water.",
    longDescription: "An exploration of AI as a tool for fashion art direction. I generated the garments and the campaign images with tools such as Google Flow, placing the pieces in natural landscapes, and then modeled them in 3D to study their curves and folds.",
    mainImage: I("Catalizadores2"),
    galleryImages: ["Catalizadores1", "Catalizadores3", "Catalizadores4", "Catalizadores5", "Catalizadores6", "Catalizadores7", "Catalizadores8"].map(I) },

  { slug: "gahan-pettit", title: "Gahan Pettit", category: "Textile prints · Graphic design", year: "2023–2025",
    context: "Freelance · @gahanpettit", role: "Textile prints and graphic pieces",
    description: "Textile prints and graphic pieces for a children’s clothing brand.",
    longDescription: "An ongoing freelance collaboration with Gahan Pettit, moving back and forth between graphic pieces and textile prints. Small illustrated characters, mushrooms and stripes with a playful but delicate tone, designed to work on children’s garments and to win over their parents too.",
    mainImage: I("Gahanpetit1"),
    galleryImages: ["Gahanpetit4", "Gahanpetit5", "Gahanpetit7", "Gahanpetit8", "Gahanpetit9", "Gahanpetit10", "Gahanpetit12"].map(I) },

  { slug: "gentle-encounters", title: "Gentle Encounters", category: "Print · Illustration", year: "2026",
    context: "Private commission", role: "Illustration and editorial packaging",
    description: "A limited series of illustrated postcards about childhood memories and everyday tenderness.",
    longDescription: "A private commission: a set of postcards drawn with an expressive ink line and printed on textured paper. Each card holds a small, tender moment, like a girl carrying flowers or a child playing with a cat, and the series comes in a clean editorial packaging, ready to send or to keep.",
    mainImage: I("postcard4"),
    galleryImages: ["postcard2", "Postcard5", "postcard3"].map(I) },

  { slug: "financity", title: "Financity", category: "UX/UI", year: "2025",
    context: "University",
    description: "Learn by doing, not by explaining. A gamified financial simulation app for 16 to 23 year-olds.",
    longDescription: "Financial education for young people is usually full of jargon. Financity replaces it with a simulation game: users manage money, invest and save through an avatar that reacts to every decision, across three spaces: The Arcade (mini-games), The Bank (risk-free investing) and The Shop (conscious spending).",
    mainImage: I("financity1"),
    galleryImages: ["financity2", "financity3", "financity4"].map(I) },

  { slug: "condor-ai", title: "Condor.ai", category: "Branding · Templates", year: "2025",
    context: "Client · Condor.ai", role: "Brand identity and template system",
    description: "Brand identity and a set of templates for an AI platform.",
    longDescription: "Condor.ai needed an institutional, trustworthy presence to grow its client base. I designed the logotype, the color palette and the visual guidelines, plus a set of templates that the team fills in with its own content, which is why some of them still show placeholder text.",
    mainImage: I("condorlogo"),
    galleryImages: ["condor2", "condor3", "condor4", "condor5"].map(I) },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
