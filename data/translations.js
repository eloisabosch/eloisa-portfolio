// ============================================================
//  TRADUCCIONES. El inglés vive en portfolioData.js; acá está el español.
//  Si un texto no está acá, se muestra el de portfolioData.js (inglés).
//  Para cada proyecto nuevo: agregá una entrada con su slug en esProjects.
// ============================================================

export const ui = {
  en: {
    about: "About Me", projects: "Projects", contact: "Contact", selectedWork: "Selected Work", view: "View project →",
    aboutProject: "About the project", year: "Year", team: "Team", context: "Context", role: "My role",
    category: "Disciplines", close: "Close", continue: "Continue", back: "Back", send: "Send",
    next: "Next project", index: "All projects", prev: "Previous image", nextImg: "Next image",
    thanks: "Thank you — I'll answer you soon.", invalidEmail: "Please enter a valid email.",
    copyright: "Copyright", websiteBy: "Website by", resume: "Resume", dragHint: "Drag or scroll",
  },
  es: {
    about: "Sobre mí", projects: "Proyectos", contact: "Contacto", selectedWork: "Trabajos seleccionados", view: "Ver proyecto →",
    aboutProject: "Sobre el proyecto", year: "Año", team: "Equipo", context: "Contexto", role: "Mi rol",
    category: "Disciplinas", close: "Cerrar", continue: "Continuar", back: "Atrás", send: "Enviar",
    next: "Siguiente proyecto", index: "Todos los proyectos", prev: "Imagen anterior", nextImg: "Imagen siguiente",
    thanks: "Gracias — te respondo pronto.", invalidEmail: "Ingresá un email válido.",
    copyright: "Copyright", websiteBy: "Sitio por", resume: "CV", dragHint: "Arrastrá o hacé scroll",
  },
};

export const esPerson = {
  role: "Diseñadora integral",
  availability: "Disponible para posiciones full-time y proyectos freelance.",
  projectsIntro:
    "Soy diseñadora integral. Hago branding, construyo *narrativas* y diseño desde la idea hasta el objeto. Quiero seguir creciendo con nuevos equipos.",
  aboutLong: [
    "Entiendo el diseño como una herramienta estratégica y cultural para investigar, cuestionar y detectar tensiones, transformándolas en sistemas coherentes con fundamento conceptual.",
    "Trabajo desde el diseño gráfico, UX/UI e industrial para construir identidades, marcas y experiencias con profundidad. Estoy terminando la Licenciatura en Diseño en la Universidad Torcuato Di Tella, en Buenos Aires, e hice un intercambio Erasmus en Cine, Televisión y Estudios de Medios en la Universidad Carlos III de Madrid.",
  ],
  education: [
    "Universidad Torcuato Di Tella — Licenciatura en Diseño (2023–2026)",
    "Universidad Carlos III de Madrid — Erasmus, Cine, Televisión y Estudios de Medios (2025–2026)",
  ],
  languages: ["Español (Nativo)", "Inglés (Avanzado)"],
};

export const esContact = {
  title: "Si te gusta mi manera de pensar",
  intro: "Soy diseñadora y busco proyectos, colaboraciones y posiciones. Escribime abajo o mandame un mail a ",
  steps: [
    { title: "Tus datos", fields: [
      { name: "name", label: "¿Cómo te llamás?", required: true, error: "Contame tu nombre." },
      { name: "email", label: "Email", type: "email", required: true, error: "Contame tu email." },
      { name: "link", label: "Portfolio o Instagram (opcional)" },
      { name: "org", label: "Empresa o estudio (opcional)" } ] },
    { title: "¿Qué estás buscando?", fields: [
      { name: "type", label: "Proyecto freelance, puesto full-time, colaboración…", required: true, error: "Contame qué tenés en mente." },
      { name: "timing", label: "Plazo (opcional)" } ] },
    { title: "Sobre el proyecto", fields: [
      { name: "about", label: "Contame un poco más", required: true, error: "Agregá unas palabras." },
      { name: "budget", label: "Rango de presupuesto (opcional)" } ] },
    { title: "¿Algo más?", fields: [
      { name: "message", label: "Mensaje final (opcional)" } ] },
  ],
};

export const esProjects = {
  "a-donde-voy-llevo-mi-bandera": {
    category: "Diseño de exposición y experiencia · Ilustración",
    context: "Universidad · Universidad Torcuato Di Tella, para el MUNTREF",
    role: "Ilustración (todas las ilustraciones son mías), narrativa, ideas y modelado 3D",
    description: "Reimaginar la diáspora argentina a través de la “argentinidad exacerbada”. Un sistema museográfico phygital que representa las tensiones de la migración contemporánea sin clichés: juego “Track & Collect” por QR, estaciones táctiles, visores con sensores, mapa interactivo y estación de impresión de stickers.",
    longDescription: "Una exposición inmersiva y phygital sobre la diáspora argentina contemporánea. Al unir objetos físicos con interacción digital, el proyecto mira cómo se reconstruye, se actúa y se sostiene la identidad nacional lejos de casa. La visita al museo se vuelve un juego narrativo que invita a descubrir las historias, los objetos y las tensiones culturales detrás de lo que significa ser argentino en un mundo globalizado.",
  },
  sobremesa: {
    category: "Branding · Packaging · Ilustración digital",
    context: "Proyecto propio · autoexploración independiente",
    role: "Concepto, pinturas digitales, branding y packaging",
    description: "Reinterpretar la sobremesa española a través del arte coleccionable en botellas de vidrio de 250 ml. Las bebidas listas para tomar están dominadas por gráficas ruidosas e impersonales; estas etiquetas son pinturas digitales con pinceladas expresivas y tipografía orgánica.",
    longDescription: "Identidad de marca y packaging para un Tinto de Verano embotellado que celebra los momentos compartidos y los encuentros tranquilos de día. Cada botella se piensa como un pequeño objeto de arte coleccionable: las etiquetas son pinturas digitales con un trazo pictórico, cercano al óleo, para que el arte forme parte natural de un ritual cotidiano.",
  },
  pasito: {
    category: "Packaging · Diseño de app",
    context: "Proyecto real · producido en China",
    role: "Packaging (comunicación, materiales y diseño) y diseño de la app",
    description: "Packaging para Pasito Health Band, una pulsera de actividad. La caja se mandó a producir a China.",
    longDescription: "Diseñé el packaging de Pasito Health Band y trabajé en la app de Pasito. Para la caja definí qué tenía que transmitir el packaging, sus materiales y su diseño: un cajón deslizable con una bandeja de cartón para la pulsera, el módulo y el cable; un frente con el dibujo de línea del producto; un dorso que resume las funciones y lleva a la app, y la frase “Cada pasito cuenta.”",
  },
  "espacio-hila": {
    category: "Redes · Afiches · Sistema de plantillas",
    context: "Freelance · Espacio Hila, Madrid",
    role: "Sistema de plantillas editables en Canva, piezas para redes y afiches",
    description: "Un espacio de salud mental creado por dos psicólogas argentinas en Madrid, que ofrece terapia y acompañamiento para terapeutas.",
    longDescription: "Diseñé un sistema de plantillas editables en Canva para que el equipo comunique sus actividades con una identidad coherente, cercana y profesional. Fotografía de archivo, collage y preguntas abiertas transmiten su mirada sobre los vínculos, el cuidado y la comunidad en stories, posts y afiches.",
  },
  pulse: {
    category: "Branding · UX/UI de app · Comunicación",
    context: "Cliente · Pulse",
    role: "Identidad de marca, UX/UI de la app y comunicación de lanzamiento",
    description: "Una plataforma que conecta usuarios, organizadores y embajadores con deportes de aventura al aire libre. Marca, logotipo, UX/UI de la app y comunicación. La app está publicada en la App Store.",
    longDescription: "Desarrollé la identidad de marca completa de Pulse —nombre, logo y sistema visual— y diseñé la app, junto con las piezas necesarias para su lanzamiento. El objetivo: que sumarse a una aventura al aire libre sea tan fácil como tocar un botón. La app se desarrolló y se lanzó en la App Store.",
  },
  arke: {
    category: "Packaging · Redes · Campaña",
    context: "Cliente · Arké, Barcelona",
    role: "Packaging, paleta de color, campaña de Kickstarter y redes (el nombre y el logo los definió la marca)",
    description: "Calzado barefoot y ergonómico de diseño minimalista, de Barcelona. Cajas y packaging, paleta de color, campaña de Kickstarter (julio 2025) y redes sociales.",
    longDescription: "Arké diseña zapatillas barefoot para el día a día, combinando biomecánica ergonómica con un diseño minimalista. Trabajé en las cajas y el packaging de las zapatillas, definí la paleta de color y me encargué del diseño y la estrategia de la campaña de Kickstarter y de las redes. La campaña salió en julio de 2025 y le fue bien.",
  },
  catalizadores: {
    category: "Moda experimental · Campaña con IA",
    context: "Universidad · VirtualLab, E_02",
    role: "Concepto, dirección de arte, generación de imágenes con IA y modelado 3D",
    description: "Una campaña de moda generada con IA: prendas escultóricas inspiradas en la fluidez del agua, en paisajes naturales.",
    longDescription: "Una campaña corta de prendas escultóricas inspiradas en el agua, generada con herramientas de IA como Google Flow. Después modelé las piezas en 3D para estudiar sus curvas y pliegues.",
  },
  "gahan-pettit": {
    category: "Estampas textiles · Diseño gráfico",
    context: "Freelance · @gahanpettit",
    role: "Estampas textiles y piezas gráficas",
    description: "Estampas e ilustraciones para una marca de ropa infantil.",
    longDescription: "Una colaboración freelance de ida y vuelta con la marca de ropa infantil Gahan Pettit, diseñando estampas textiles y piezas gráficas. Motivos dibujados, lúdicos, que funcionan para chicos y grandes y respetan la identidad de la marca.",
  },
  "gentle-encounters": {
    category: "Impresión · Ilustración",
    context: "Encargo privado",
    role: "Ilustración y packaging editorial",
    description: "Una serie limitada de postales en tinta sobre papel de textura artesanal, sobre recuerdos de la infancia y la ternura cotidiana.",
    longDescription: "Una serie de postales ilustradas sobre los recuerdos de infancia, la calidez y la compañía, dibujadas con una línea de tinta expresiva. Momentos tiernos de todos los días convertidos en papelería, con foco en la textura del papel y un packaging editorial limpio, listo para enviar o coleccionar.",
  },
  financity: {
    category: "UX/UI",
    context: "Universidad",
    description: "Aprender haciendo, no explicando. Una app de simulación financiera gamificada para jóvenes de 16 a 23 años, con un avatar que refleja cada decisión a través de The Arcade (minijuegos), The Bank (inversión sin riesgo) y The Shop (consumo consciente).",
    longDescription: "Financity convierte la educación financiera en un juego de simulación. En lugar de jerga, los jóvenes administran dinero, invierten y ahorran a través de un avatar en un mundo visual y gamificado: una herramienta para aprender haciendo y construir hábitos sanos sin riesgo.",
  },
  "condor-ai": {
    category: "Branding · Plantillas",
    context: "Cliente · Condor.ai",
    role: "Identidad de marca y sistema de plantillas",
    description: "Identidad de marca y un set de plantillas para una plataforma de IA.",
    longDescription: "Una identidad visual para Condor.ai —logotipo, paleta de color y guías visuales— y un set de plantillas que el equipo completa con su propio contenido (por eso algunas todavía muestran texto de relleno).",
  },
};
