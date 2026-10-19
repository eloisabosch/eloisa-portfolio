// ============================================================
//  TRADUCCIONES. El inglés vive en portfolioData.js; acá está el español.
//  Si un texto no está acá, se muestra el de portfolioData.js (inglés).
//  Para cada proyecto nuevo: agregá una entrada con su slug en esProjects.
// ============================================================

export const ui = {
  en: {
    about: "About Me", projects: "Projects", contact: "Contact", selectedWork: "Selected Work", view: "View project →",
    aboutProject: "About the project", year: "Year", collaborators: "Collaborators", context: "Context", guidance: "Guidance",
    category: "Category", close: "Close [ × ]", continue: "Continue", back: "Back", send: "Send",
    thanks: "Thank you — I'll answer you soon.", invalidEmail: "Please enter a valid email.",
    copyright: "Copyright", websiteBy: "Website by", resume: "Resume",
  },
  es: {
    about: "Sobre mí", projects: "Proyectos", contact: "Contacto", selectedWork: "Trabajos seleccionados", view: "Ver proyecto →",
    aboutProject: "Sobre el proyecto", year: "Año", collaborators: "Colaboradores", context: "Contexto", guidance: "Guía",
    category: "Categoría", close: "Cerrar [ × ]", continue: "Continuar", back: "Atrás", send: "Enviar",
    thanks: "Gracias — te respondo pronto.", invalidEmail: "Ingresá un email válido.",
    copyright: "Copyright", websiteBy: "Sitio por", resume: "CV",
  },
};

export const esPerson = {
  role: "Diseñadora multidisciplinar",
  availability: "Disponible para posiciones full-time y proyectos freelance.",
  mapIntro:
    "Soy diseñadora integral en formación en la Universidad Torcuato Di Tella, con experiencia de intercambio en la Universidad Carlos III. Uno el diseño gráfico, UX/UI e industrial para construir narrativas coherentes y con propósito. Me especializo en convertir investigaciones complejas en sistemas estratégicos, y quiero aportar pensamiento crítico y profundidad técnica a un equipo de impacto y con visión de futuro.",
  aboutLong: [
    "Entiendo el diseño como una herramienta estratégica y cultural para investigar, cuestionar y detectar tensiones, transformándolas en sistemas coherentes con fundamento conceptual.",
    "Trabajo desde el diseño gráfico, UX/UI e industrial para construir identidades, marcas y experiencias con profundidad. Estudio Diseño en la Universidad Torcuato Di Tella en Buenos Aires, e hice un intercambio Erasmus en Cine, Televisión y Estudios de Medios en la Universidad Carlos III de Madrid.",
  ],
  education: [
    "Universidad Torcuato Di Tella — Licenciatura en Diseño (2023–2026)",
    "Universidad Carlos III de Madrid — Erasmus, Cine, Televisión y Estudios de Medios (2025–2026)",
  ],
  languages: ["Español (Nativo)", "Inglés (Avanzado)"],
};

export const esContact = {
  title: "Si te gusta mi manera de pensar",
  intro: "Soy diseñadora freelance y estudiante, y busco proyectos, colaboraciones o posiciones interesantes. Escribime abajo o mandame un mail a ",
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
    category: "UX/UI y Diseño de Producto", context: "Universidad · MUNTREF",
    description: "Reimaginando la diáspora argentina a través de la “argentinidad exacerbada”. Un sistema phygital en un museo que representa las tensiones de la migración contemporánea sin clichés: juego “Track & Collect” por QR, estaciones táctiles, visores con sensores PIR, mapa interactivo y estación de impresión de stickers.",
    longDescription: "A dónde voy llevo mi bandera es una exposición museográfica phygital e inmersiva que explora la diáspora argentina contemporánea. Al unir objetos físicos con interactividad digital, el proyecto investiga cómo se reconstruye, se performa y se preserva la identidad nacional lejos de casa. Como proyecto de UX/UI y diseño de producto, combina historia y tecnología para convertir la visita al museo en un juego narrativo, e invita a descubrir las historias, objetos y tensiones culturales que definen qué significa ser argentino en un mundo globalizado.",
  },
  financity: {
    category: "Diseño UX/UI", context: "Universidad",
    description: "Aprender haciendo, no explicando. Una app de simulación financiera gamificada para jóvenes de 16 a 23 años, con un avatar que refleja cada decisión a través de The Arcade (minijuegos), The Bank (inversión sin riesgo) y The Shop (consumo consciente).",
    longDescription: "Financity es una aplicación móvil interactiva que transforma la educación financiera en un juego de simulación inmersivo. Al acercar a los jóvenes a las finanzas personales, el proyecto reemplaza la jerga compleja por un ecosistema visual y gamificado donde se administra dinero, se invierte y se ahorra a través de un avatar interactivo. Es una herramienta de aprendizaje haciendo, pensada para construir hábitos financieros saludables en un entorno seguro y sin riesgo.",
  },
  pulse: {
    category: "Branding, UX/UI de App y Comunicación", context: "Cliente · Pulse",
    description: "Una plataforma que conecta usuarios, organizadores y embajadores con deportes de aventura al aire libre. Marca gráfica completa, logotipo, UX/UI de la app y estrategia de comunicación.",
    longDescription: "Desarrollé la identidad de marca completa de la empresa: nombre, logo, sistema visual y diseño de la app, además de todos los elementos necesarios para el lanzamiento de la plataforma que te conecta con las mayores aventuras de la vida. Una app pensada para que vivir la aventura sea tan fácil como un clic.",
  },
  sobremesa: {
    category: "Branding y Packaging", context: "Proyecto personal",
    description: "Reinterpretar la sobremesa española a través del arte coleccionable en botellas de vidrio de 250 ml. Las bebidas ready-to-drink están dominadas por gráficas masivas e impersonales; estas botellas se conciben como obras al óleo, con trazos artesanales y tipografía orgánica.",
    longDescription: "Identidad de marca y packaging para un Tinto de Verano embotellado, que celebra los momentos compartidos, los encuentros casuales y la estética artística contemporánea. La convicción de que la belleza debe habitar los rituales cotidianos. Reinterpreta la relajada sobremesa española desde el arte coleccionable, llevando una intimidad táctil al consumo casual durante el día. Una serie de vinos embotellados concebidos como objetos de arte tangibles, del tamaño de un bolsillo. Con expresivas pinceladas al óleo y calidez pictórica, cada botella invita a la contemplación y celebra el arte como una parte natural y accesible de la vida diaria.",
  },
  arke: {
    category: "Diseño de Producto y Redes Sociales", context: "Cliente · Arké, Barcelona",
    description: "Calzado barefoot y ergonómico de diseño minimalista. Identidad visual, cajas y packaging de zapatillas, paleta de colores, campaña de Kickstarter (julio 2025) y gestión de redes sociales.",
    longDescription: "Arké diseña zapatillas barefoot para el día a día, combinando biomecánica ergonómica con un diseño minimalista y cuidado. Con base en Barcelona, su propuesta busca calzado que permita moverse de forma natural sin resignar estilo ni comodidad. Contribuí a la marca desarrollando la identidad visual, diseñando las cajas de las zapatillas, definiendo la paleta de colores y encargándome del diseño y la estrategia de redes sociales.",
  },
  "condor-ai": {
    category: "Branding y Diseño Visual", context: "Cliente · Condor.ai",
    description: "Un sistema visual e identidad de marca para una plataforma con IA.",
    longDescription: "Desarrollé el sistema de identidad de marca integral de Condor.ai para construir una presencia visual institucional y de autoridad, orientada a ampliar su cartera de clientes. El proyecto incluyó la creación de un logotipo original, una paleta de colores refinada y guías visuales claras, pensadas para dar consistencia y confianza en todos los puntos de contacto estratégicos.",
  },
  "gentle-encounters": {
    category: "Impresión e Ilustración", context: "Encargo privado",
    description: "Una serie limitada de postales en tinta sobre papel de textura artesanal, para explorar recuerdos de la infancia y la ternura cotidiana.",
    longDescription: "Una serie personalizada de postales ilustradas que explora los recuerdos de infancia, la calidez y la compañía a través de dibujos expresivos al estilo tinta. Traduce momentos tiernos de lo cotidiano en piezas de papelería atemporales, con foco en las texturas táctiles del papel y en un trazo crudo y artesanal. Un set limitado y personalizado que combina una estética tradicional expresiva con un packaging editorial cuidado y limpio, listo para enviar o coleccionar.",
  },
  "gahan-pettit": {
    category: "Diseño Textil y Gráfico", context: "Cliente · @gahanpettit",
    description: "Una serie de estampas e ilustraciones lúdicas para indumentaria infantil.",
    longDescription: "El proyecto se centra en crear estampas únicas para la ropa infantil de la marca Gahan Pettit, con una impronta lúdica y artística. Desarrollé una serie de diseños y estampas para indumentaria infantil, inspirados en temas vibrantes e imaginativos que conectan tanto con los chicos como con sus padres. Usando Adobe Illustrator y Photoshop, creé múltiples diseños divertidos pero elegantes, alineados con la identidad de la marca y atractivos para los niños.",
  },
  catalizadores: {
    category: "Moda Experimental, Morfología 3D y Campañas Generativas por IA", context: "Universidad · VirtualLab, E_02",
    description: "Una colección experimental y una corta campaña de alta costura: prendas escultóricas inspiradas en la fluidez del agua, llevadas de la nada a todo, de lo irreal a lo concreto, con modelado 3D e inteligencia artificial generativa.",
    longDescription: "Sintonía Biomórfica es una colección y corta campaña de alta costura desarrollada desde cero a partir del cruce entre la moda experimental (Schiaparelli, Loewe), la rigurosidad del diseño de producto y las tecnologías de fabricación contemporáneas. Ideé y diseñé piezas de indumentaria escultórica inspiradas en la fluidez y el movimiento del agua, materializadas mediante modelado 3D y generación con inteligencia artificial. El flujo integra la creación de las prendas, su resolución como productos tridimensionales viables y la dirección creativa de una campaña editorial hiperrealista, construida con un flujo iterativo en herramientas generativas como Google Flow, que sitúa las piezas fuera del estudio, en un entorno natural. El proyecto demuestra que la IA no se agota en imágenes efímeras: los volúmenes, pliegues radiales y estructuras orgánicas concebidos digitalmente se traducen en mallas tridimensionales, geometrías vectoriales y modelos listos para fabricar, mediante manufactura aditiva y patronaje técnico. La IA actúa como un catalizador que acelera la exploración morfológica y vuelve al diseñador un curador de sistemas de reglas formales, en un territorio donde lo digital y lo táctil dejan de competir para fundirse en un nuevo lenguaje de lujo contemporáneo.",
  },
};
