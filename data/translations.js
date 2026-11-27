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
  intro: "Soy diseñadora y estoy abierta a proyectos, colaboraciones y posiciones full-time. Escribime abajo o mandame un mail a ",
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
    description: "Una exposición phygital sobre la diáspora argentina contemporánea, construida desde la “argentinidad exacerbada”: lo que los argentinos llevan con ellos, exageran y sostienen cuando viven lejos de casa.",
    longDescription: "Pensada como proyecto de facultad para el Museo de la Inmigración del MUNTREF, la exposición convierte la visita en un juego narrativo. El público colecciona historias con un juego “Track & Collect” por QR y recorre estaciones táctiles, visores con sensores, un mapa interactivo y una estación de impresión de stickers.\n\nTodo el sistema visual nace de la ilustración: estampillas, altares y objetos cotidianos que toman un estereotipo conocido y lo vuelven algo para coleccionar. Dibujé todas las ilustraciones y trabajé en la narrativa, las ideas y el modelado 3D del espacio.",
  },
  pam: {
    category: "Identidad de marca · UX/UI de app · Web responsive",
    context: "Proyecto académico",
    role: "Identidad de marca, arquitectura UX, design system, UI de app y web, prototipo animado",
    description: "Identidad, app y sitio web responsive para un museo público de arte contemporáneo: descubrir qué hay, planificar la visita y reservarla en cinco pasos.",
    longDescription: "La consigna pedía una app y un sitio web responsive para un museo público de arte: comunicar exposiciones y eventos, dar información práctica y permitir reservar una visita. Empecé por construir la institución: PAM, un museo que dice “el arte es para todos”.\n\nLa identidad, Open Door, dibuja el logotipo con tres módulos: un semicírculo, un triángulo y un arco. La A lleva una puerta abierta como contraforma, porque un museo público siempre está abierto. Los mismos módulos se vuelven patrones, pictogramas, máscaras para la fotografía y movimiento, y cada exposición toma su propio color de una paleta verificada con contraste WCAG AA.\n\nLa app es editorial donde puede y predecible donde tiene que serlo: afiches superpuestos y títulos serif para descubrir, y una reserva en cinco pasos sin cuenta, con el progreso visible y cada elección editable antes de confirmar. La diseñé en Figma con variables, componentes interactivos y un prototipo animado, y después la adapté a tablet y desktop.\n\nPAM, su programación y sus obras son ficticios; la fotografía está generada con IA.",
  },
  sobremesa: {
    category: "Branding · Packaging · Ilustración digital",
    context: "Proyecto propio",
    role: "Concepto, pinturas digitales, branding y packaging",
    description: "Un tinto de verano que trata cada botella como una pequeña pintura para coleccionar: una mirada más lenta y personal sobre la góndola de bebidas listas para tomar.",
    longDescription: "Las bebidas listas para tomar suelen apoyarse en gráficas ruidosas e impersonales. Sobremesa va por el camino contrario: toma la sobremesa española, ese rato sin apuro en la mesa después de comer, y convierte cada botella de 250 ml en una pieza de arte.\n\nLas etiquetas son pinturas digitales con pinceladas expresivas, cercanas al óleo, y una tipografía orgánica. Cada una funciona sola y como parte de una serie para coleccionar. Un proyecto independiente de autoexploración en el que desarrollé el concepto, las pinturas, la marca y el packaging.",
  },
  pasito: {
    category: "Packaging",
    context: "Producto real · producido en China",
    role: "Packaging: comunicación, materiales y diseño",
    description: "Packaging para Pasito Health Band, una pulsera de actividad. La caja se produjo en China en noviembre de 2026.",
    longDescription: "Pasito necesitaba una caja amigable y clara, incluso antes de tener el producto en la mano. Definí qué tenía que transmitir el packaging, elegí sus materiales y lo diseñé como un cajón deslizable: una funda verde profundo, una bandeja de cartón que sostiene la pulsera, el módulo y el cable, y una cinta amarilla para abrirla.\n\nEl frente muestra el dibujo de línea de la pulsera; el dorso resume sus funciones con íconos simples y un QR para descargar la app. La frase “Cada pasito cuenta.” une todo.",
  },
  "espacio-hila": {
    category: "Redes · Afiches · Sistema de plantillas",
    context: "Freelance · Espacio Hila, Madrid",
    role: "Sistema de plantillas editables en Canva, piezas para redes y afiches",
    description: "Redes y afiches para un espacio de salud mental en Madrid creado por dos psicólogas argentinas.",
    longDescription: "Espacio Hila ofrece terapia y acompañamiento para terapeutas. Diseñé un sistema de plantillas editables en Canva para stories, posts y afiches, para que el equipo pueda publicar sus actividades por su cuenta sin perder una imagen coherente.\n\nEl tono es cálido, cercano y profesional. La fotografía de archivo, el collage y las preguntas abiertas transmiten su mirada sobre los vínculos, el cuidado y la comunidad, para que cada pieza nueva hable con la misma voz.",
  },
  pulse: {
    category: "Branding · UX/UI de app · Comunicación",
    context: "Cliente · Pulse",
    role: "Identidad de marca, UX/UI de la app y comunicación de lanzamiento",
    description: "Marca y app para una plataforma que conecta a las personas con deportes de aventura al aire libre. La app está publicada en la App Store.",
    longDescription: "Pulse reúne a usuarios, organizadores y embajadores de deportes de aventura al aire libre. Creé la marca completa (nombre, logo y sistema visual), diseñé el UX/UI de la app y produje las piezas para su lanzamiento.\n\nEl objetivo era que sumarse a una aventura fuera tan fácil como tocar un botón: una gráfica en negro y verde lima, fotografía real y un recorrido claro desde encontrar un evento hasta inscribirse. La app se desarrolló y se lanzó en la App Store.",
  },
  arke: {
    category: "Packaging · Redes · Campaña",
    context: "Cliente · Arké, Barcelona",
    role: "Packaging, paleta de color, campaña de Kickstarter y redes",
    description: "Packaging, paleta de color, redes y una campaña de Kickstarter para una marca de calzado barefoot de Barcelona.",
    longDescription: "Arké hace zapatillas barefoot minimalistas para el día a día, pensadas para moverse de forma natural. El nombre y el logo ya estaban definidos; yo me ocupé de todo lo que se construyó a su alrededor.\n\nDiseñé las cajas y el packaging de las zapatillas, definí la paleta de color y llevé el diseño y la estrategia de las redes y de la campaña de Kickstarter, lanzada en julio de 2025, a la que le fue bien.\n\nLa caja lleva un patrón de líneas topográficas que habla del terreno y del movimiento; lo dibujé y armé los troqueles para producción. Para la campaña diseñé las piezas que llevaron frases como “Back to the origin” y “Coming soon” a la fotografía de lanzamiento, entre el bosque y la ciudad.",
  },
  catalizadores: {
    category: "Moda experimental · Campaña con IA",
    context: "Universidad · VirtualLab, E_02",
    role: "Concepto, dirección de arte, generación de imágenes con IA y modelado 3D",
    description: "Una campaña corta de moda hecha con IA generativa: prendas escultóricas inspiradas en el movimiento del agua.",
    longDescription: "Una exploración de la IA como herramienta para la dirección de arte de moda. Generé las prendas y las imágenes de la campaña con herramientas como Google Flow, ubicando las piezas en paisajes naturales, y después las modelé en 3D para estudiar sus curvas y pliegues.",
  },
  "gahan-pettit": {
    category: "Estampas textiles · Diseño gráfico",
    context: "Freelance · @gahanpettit",
    role: "Estampas textiles y piezas gráficas",
    description: "Estampas textiles y piezas gráficas para una marca de ropa infantil.",
    longDescription: "Una colaboración freelance de ida y vuelta con Gahan Pettit, entre piezas gráficas y estampas textiles. Pequeños personajes ilustrados, hongos y rayas con un tono lúdico pero delicado, pensados para funcionar en prendas para chicos y conquistar también a los grandes.\n\nEn noviembre de 2025 diseñé una nueva colección de estampas: patrones más densos y con más color, hechos de flores, rombos, estrellas y cuadros.",
  },
  "gentle-encounters": {
    category: "Impresión · Ilustración",
    context: "Encargo privado",
    role: "Ilustración y packaging editorial",
    description: "Una serie limitada de postales ilustradas sobre recuerdos de la infancia y la ternura cotidiana.",
    longDescription: "Un encargo privado: un set de postales dibujadas con una línea de tinta expresiva e impresas sobre papel con textura. Cada una guarda un momento chico y tierno, como una nena con flores o un chico jugando con un gato, y la serie viene en un packaging editorial limpio, lista para enviar o para guardar.",
  },
  financity: {
    category: "UX/UI",
    context: "Universidad",
    description: "Aprender haciendo, no explicando. Una app de simulación financiera gamificada para jóvenes de 16 a 23 años.",
    longDescription: "La educación financiera para jóvenes suele estar llena de jerga. Financity la reemplaza por un juego de simulación: se administra dinero, se invierte y se ahorra a través de un avatar que reacciona a cada decisión, en tres espacios: The Arcade (minijuegos), The Bank (inversión sin riesgo) y The Shop (consumo consciente).",
  },
  "condor-ai": {
    category: "Branding · Plantillas",
    context: "Cliente · Condor.ai",
    role: "Identidad de marca y sistema de plantillas",
    description: "Identidad de marca y un set de plantillas para una plataforma de IA.",
    longDescription: "Condor.ai necesitaba una presencia institucional y confiable para ampliar su cartera de clientes. Diseñé el logotipo, la paleta de color y las guías visuales, además de un set de plantillas que el equipo completa con su propio contenido; por eso algunas todavía muestran texto de relleno.",
  },
};
