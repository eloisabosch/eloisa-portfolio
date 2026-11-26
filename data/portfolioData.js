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
    "I’m a designer looking for projects, collaborations and positions. Drop a line below or send an email to ",
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
    description: "Reimagining the Argentine diaspora through “exacerbated argentinidad”. A phygital museum system that represents the tensions of contemporary migration without clichés: a QR “Track & Collect” game, tactile stations, sensor viewers, an interactive map and a sticker printing station.",
    longDescription: "An immersive, phygital exhibition about the contemporary Argentine diaspora. By joining physical objects with digital interaction, the project looks at how national identity is rebuilt, performed and kept alive far from home. The museum visit becomes a narrative game that invites visitors to discover the stories, objects and cultural tensions behind what it means to be Argentine in a globalized world.",
    mainImage: I("ADVYMB9"),
    galleryImages: ["ADVYMB10", "ADVYMB11", "ADVYMB12", "ADVYMB13", "ADVYMB14", "ADVYMB15", "ADVYMB16", "ADVYMB17", "ADVYMB18", "ADVYMB1", "ADVYMB2", "ADVYMB4", "ADVYMB7"].map(I) },

  { slug: "sobremesa", title: "Sobremesa", category: "Branding · Packaging · Digital illustration", year: "2026",
    context: "Self-initiated · independent self-exploration", role: "Concept, digital paintings, branding and packaging",
    description: "Reinterpreting the Spanish sobremesa through collectible art on 250 ml glass bottles. Ready-to-drink beverages are dominated by loud, impersonal graphics; these labels are digital paintings with expressive brushstrokes and organic typography.",
    longDescription: "Brand identity and packaging for a bottled ready-to-drink Tinto de Verano that celebrates shared moments and slow daytime gatherings. Each bottle is treated as a small, collectible art object: the labels are digital paintings with a painterly, oil-like stroke, so that art becomes a natural part of an everyday ritual.",
    mainImage: I("Sobremesa10"),
    galleryImages: ["Sobremesa1-jpeg", "Sobremesa6-jpeg", "Sobremesa7", "Sobremesa9", "Sobremesa12", "Sobremesa4", "Sobremesa5"].map(I) },

  { slug: "pasito", title: "Pasito", category: "Packaging · App design", year: "2026",
    context: "Real project · produced in China", role: "Packaging (communication, materials and design) and app design",
    description: "Packaging for Pasito Health Band, an activity wristband. The box was sent to production in China.",
    longDescription: "I designed the packaging for Pasito Health Band and worked on the Pasito app. For the box I defined what the packaging had to communicate, its materials and its design: a sliding drawer with a cardboard tray that holds the band, the module and the cable, a front with the line drawing of the product, a back that sums up the features and links to the app, and the line “Cada pasito cuenta.” (Every little step counts).",
    mainImage: I("pasito-render-1"),
    galleryImages: ["pasito-render-2", "pasito-render-3"].map(I) },

  { slug: "espacio-hila", title: "Espacio Hila", category: "Social media · Posters · Template system", year: "2026",
    context: "Freelance · Espacio Hila, Madrid", role: "Editable template system in Canva, social media pieces and posters",
    description: "A mental health space created by two Argentine psychologists in Madrid, offering therapy and support for therapists.",
    longDescription: "I designed a system of editable Canva templates so the team can communicate their activities with a coherent, warm and professional identity. Archive photography, collage and open questions carry their way of looking at relationships, care and community across stories, posts and posters.",
    mainImage: I("hila-post-3"),
    galleryImages: ["hila-story-1", "hila-story-2", "hila-story-3", "hila-story-4", "hila-post-1", "hila-post-5", "hila-post-6", "hila-poster"].map(I) },

  { slug: "pulse", title: "Pulse", category: "Branding · App UX/UI · Communication", year: "2025",
    context: "Client · Pulse", role: "Brand identity, app UX/UI and launch communication",
    description: "A platform that connects users, organizers and ambassadors with outdoor adventure sports. Visual brand, logotype, app UX/UI and communication. The app is live on the App Store.",
    longDescription: "I developed the full brand identity for Pulse — name, logo and visual system — and designed the app, along with the pieces needed for its launch. The goal: make getting into an outdoor adventure as easy as a tap. The app was developed and launched on the App Store.",
    mainImage: I("pulse1"),
    galleryImages: ["pulse3", "pulse4", "pulse5"].map(I) },

  { slug: "arke", title: "Arké", category: "Packaging · Social media · Campaign", year: "2025",
    context: "Client · Arké, Barcelona", role: "Packaging, color palette, Kickstarter campaign and social media (the name and logo were defined by the brand)",
    description: "Minimalist barefoot and ergonomic footwear from Barcelona. Shoe boxes and packaging, color palette, a Kickstarter campaign (July 2025) and social media.",
    longDescription: "Arké designs barefoot shoes for everyday life, combining ergonomic biomechanics with minimalist design. I worked on the shoe boxes and packaging, defined the color palette, and handled the design and strategy of the Kickstarter campaign and social media. The campaign was launched in July 2025 and did well.",
    mainImage: I("arke1"),
    galleryImages: ["arke2", "arke3", "arke6"].map(I) },

  { slug: "catalizadores", title: "Catalizadores", category: "Experimental fashion · AI campaign", year: "2026",
    context: "University · VirtualLab, E_02", role: "Concept, art direction, AI image generation and 3D modeling",
    description: "An AI-generated fashion campaign: sculptural garments inspired by the fluidity of water, placed in natural settings.",
    longDescription: "A short campaign of sculptural garments inspired by water, generated with AI tools such as Google Flow. The images were then modeled in 3D to study the curves and folds of the pieces.",
    mainImage: I("Catalizadores2"),
    galleryImages: ["Catalizadores1", "Catalizadores3", "Catalizadores4", "Catalizadores5", "Catalizadores6", "Catalizadores7", "Catalizadores8"].map(I) },

  { slug: "gahan-pettit", title: "Gahan Pettit", category: "Textile prints · Graphic design", year: "2023–2025",
    context: "Freelance · @gahanpettit", role: "Textile prints and graphic pieces",
    description: "Prints and illustrations for a children's clothing brand.",
    longDescription: "An ongoing freelance collaboration with the children's clothing brand Gahan Pettit, designing textile prints and graphic pieces. Playful, hand-drawn motifs that work for kids and parents and stay true to the brand.",
    mainImage: I("Gahanpetit1"),
    galleryImages: ["Gahanpetit4", "Gahanpetit5", "Gahanpetit7", "Gahanpetit8", "Gahanpetit9", "Gahanpetit10", "Gahanpetit12"].map(I) },

  { slug: "gentle-encounters", title: "Gentle Encounters", category: "Print · Illustration", year: "2026",
    context: "Private commission", role: "Illustration and editorial packaging",
    description: "A limited series of ink postcards on handcrafted textured paper, exploring childhood memories and everyday tenderness.",
    longDescription: "A custom series of illustrated postcards about childhood memories, warmth and companionship, drawn with an expressive ink line. Everyday tender moments turned into stationery, with attention to paper texture and a clean editorial packaging, ready to send or collect.",
    mainImage: I("postcard4"),
    galleryImages: ["postcard2", "Postcard5", "postcard3"].map(I) },

  { slug: "financity", title: "Financity", category: "UX/UI", year: "2025",
    context: "University",
    description: "Learn by doing, not explaining. A gamified financial simulation app for 16–23 year-olds, with an avatar that reflects each decision through The Arcade (mini-games), The Bank (risk-free investing) and The Shop (conscious spending).",
    longDescription: "Financity turns financial education into a simulation game. Instead of jargon, young people manage money, invest and save through an avatar in a visual, gamified world — a learning-by-doing tool to build healthy habits in a risk-free environment.",
    mainImage: I("financity1"),
    galleryImages: ["financity2", "financity3", "financity4"].map(I) },

  { slug: "condor-ai", title: "Condor.ai", category: "Branding · Templates", year: "2025",
    context: "Client · Condor.ai", role: "Brand identity and template system",
    description: "Brand identity and a set of templates for an AI platform.",
    longDescription: "A visual identity for Condor.ai — logotype, color palette and visual guidelines — and a set of templates the team fills in with its own content (that’s why some of them still show placeholder text).",
    mainImage: I("condorlogo"),
    galleryImages: ["condor2", "condor3", "condor4", "condor5"].map(I) },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
