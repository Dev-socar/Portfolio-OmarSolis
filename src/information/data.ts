export interface Certificaciones {
  titulo: string;
  fecha: string;
  empresa: string;
  url: string;
}

export interface Habilidades {
  habilidad: string;
}
export interface Tecnologias {
  tecnologia: string;
}

export const certificaciones: Certificaciones[] = [
  {
    titulo: "JavaScript Moderno Guia Definitiva Construye +20 Proyectos",
    fecha: "10 de Julio de 2024",
    empresa: "Udemy",
    url: "/JavaScriptModerno.jpg",
  },
  {
    titulo: "CSS La Guia Completa - Flexbox, CSS Grid, SASS + 20 proyectos",
    fecha: "24 de Abril de 2024",
    empresa: "Udemy",
    url: "/CSSGuiaCompleta.jpeg",
  },
  {
    titulo: "Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL",
    fecha: "25 de Enero de 2024",
    empresa: "Udemy",
    url: "/DesarrolloWeb.jpeg",
  }
];

export const habilidades: Habilidades[] = [
  { habilidad: "Comunicación efectiva" },
  { habilidad: "Resolución de problemas" },
  { habilidad: "Adaptabilidad" },
  { habilidad: "Trabajo en equipo" },
  { habilidad: "Persistente" },
  { habilidad: "Autodidacta" },
  { habilidad: "Gestión del tiempo" },
  { habilidad: "Atención al detalle" },
];

export const tecnologias: Tecnologias[] = [
  { tecnologia: "Vue" },
  { tecnologia: "Vite" },
  { tecnologia: "Pinia" },
  { tecnologia: "Tailwind" },
  { tecnologia: "JS" },
  { tecnologia: "CSS" },
  { tecnologia: "HTML" },
  { tecnologia: "Php" },
  { tecnologia: "Mysql" },
  { tecnologia: "Git" },
  { tecnologia: "Github" },
];
