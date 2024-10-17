export interface Project {
  titulo: string;
  categoria: string;
  demoLink?: string;
  repoLink?: string;
  tecnologias: string[];
  descripcion: string;
}
export const projects: Project[] = [
  {
    titulo: "Dev-Coctail.com",
    categoria: "Frontend",
    descripcion: "Web App que permite buscar recetas de cocteles",
    demoLink: "https://dev-coctail.vercel.app/",
    repoLink: "https://github.com/Dev-socar/dev-Coctail",
    tecnologias: ["vue", "vercel", "vite", "tailwind"],
  },
  {
    titulo: "CRM-Dev.com",
    categoria: "FullStack",
    descripcion: "CRM para administrar empleados, agendar citas, roles, etc",
    demoLink: "http://devomar-crmdev.x10.mx/",
    repoLink: "https://github.com/Dev-socar/CRM-Dev",
    tecnologias: ["php", "mysql", "javascript", "tailwind", "html", "godaddy"],
  },
  {
    titulo: "APV.com",
    categoria: "Frontend",
    descripcion: "Web App para administrar pacientes de una Veterinaria",
    demoLink: "https://apv-frontend-smoky.vercel.app/",
    repoLink: "https://github.com/Dev-socar/apv-frontend",
    tecnologias: ["react", "vite", "tailwind", "vercel"],
  },
  {
    titulo: "APV.com",
    categoria: "Backend",
    descripcion: "Backend de la aplicacion APV.",
    repoLink: "https://github.com/Dev-socar/apv-backend",
    tecnologias: ["mongodb", "nodejs", "javascript", "express"],
  },
  {
    titulo: "CorpesaInmobiliaria.com",
    categoria: "FullStack",
    descripcion:
      "Sitio web para una empresa de Yucatan, encargada de la venta de terrenos y propiedades.",
    demoLink: "https://corpesainmobiliaria.com/",
    tecnologias: ["html", "javascript", "css", "php", "mysql", "godaddy"],
  },
  {
    titulo: "DevWebCamp.com",
    categoria: "FullStack",
    descripcion:
      "Web App para gestionar una pagina de platicas, roles, pasarela de pagos, etc.",
    repoLink: "https://github.com/Dev-socar/DevWebCamp",
    tecnologias: ["php", "mysql", "javascript", "css", "html", "godaddy"],
  },
  {
    titulo: "Vet-MVC.com",
    categoria: "FullStack",
    descripcion:
      "Web App para administrar y agendar citas al veterinario, usando MVC.",
    repoLink: "https://github.com/Dev-socar/VET_MVC",
    tecnologias: ["php", "mysql", "javascript", "css", "html", "godaddy"],
  },
  {
    titulo: "administrador-empleados.com",
    categoria: "Frontend",
    descripcion: "Web App para llevar control de ciertos empleados",
    demoLink: "https://devomar-administrador-empleados-vue.vercel.app/",
    repoLink: "https://github.com/Dev-socar/administrador-empleados-vue",
    tecnologias: ["vue", "vercel", "vite", "tailwind"],
  },
  {
    titulo: "CarShop.com",
    categoria: "Frontend",
    descripcion:
      "Web App para investigar sobre autos, sus detalles y agregarlos a tus autos favoritos",
    demoLink: "https://devomar-carshop.netlify.app/",
    repoLink: "https://github.com/Dev-socar/CarShop",
    tecnologias: ["html", "css", "javascript", "netlify"],
  },
  {
    titulo: "Agencia-Viajes.com",
    categoria: "FullStack",
    descripcion: "Sitio Web para mostrar los viajes de una pagina",
    repoLink: "https://github.com/Dev-socar/agenciaviajesnode",
    tecnologias: ["sequilize", "express", "javascript", "html", "css", "mysql"],
  },
  {
    titulo: "TiendaMuebles.com",
    categoria: "Frontend Maquetacion",
    descripcion: "Sitio Web para una ecommerce de venta de muebles.",
    demoLink: "https://mueblearte.netlify.app",
    repoLink: "https://github.com/Dev-socar/TiendaMuebles",
    tecnologias: ["javascript", "html", "css", "netlify"],
  },
  {
    titulo: "BlogCafe.com",
    categoria: "Frontend Maquetacion",
    descripcion: "Esta pagina web es para promocionar una cafeteria.",
    demoLink: "https://devomar-cafeteria.netlify.app/",
    repoLink: "https://github.com/Dev-socar/BlogCafe",
    tecnologias: ["javascript", "html", "css", "netlify"],
  },
  {
    titulo: "Inmobiliaria-Horizonte.com",
    categoria: "Frontend",
    descripcion:
      "Sitio Web de una Inmobiliaria, cuenta con peticiones a una API usando JSON-Server, se agregan animaciones asi como librerias externas.",
    repoLink: "https://github.com/Dev-socar/InmobiliariaHorizonte",
    tecnologias: ["javascript", "html", "css", "netlify"],
  },
  {
    titulo: "GuitarLA.com",
    categoria: "Frontend Maquetacion",
    descripcion: "Sitio Web de una tienda que pretende vender guitarras.",
    demoLink: "https://devomar-guitarla.netlify.app/",
    repoLink: "https://github.com/Dev-socar/GuitarLA",
    tecnologias: ["javascript", "html", "css", "netlify"],
  },
  {
    titulo: "Travles.com",
    categoria: "Frontend Maquetacion",
    descripcion:
      "Esta página web es un clon de Airbnb, con el fin de poner en funcionamiento mis conocimientos en el desarrollo web",
    demoLink: "https://devomar-travels.netlify.app/",
    repoLink: "https://github.com/Dev-socar/Travels",
    tecnologias: ["javascript", "html", "css", "netlify"],
  },
  {
    titulo: "Escuela-cocina.com",
    categoria: "Frontend Maquetacion",
    descripcion: "Esta página web es para promocionar una escuela de cocina",
    demoLink: "https://devomar-escuelacomida.netlify.app",
    repoLink: "https://github.com/Dev-socar/EscuelaCocina",
    tecnologias: ["javascript", "html", "css", "netlify"],
  },
  {
    titulo: "Meeti.com",
    categoria: "Frontend Maquetacion",
    descripcion: "Esta pagina web es para una empresa de Meetings",
    demoLink: "https://devomar-meeti.netlify.app",
    repoLink: "https://github.com/Dev-socar/Meeti",
    tecnologias: ["javascript", "html", "css", "netlify"],
  },
  {
    titulo: "CarolinaSpa.com",
    categoria: "Frontend Maquetacion",
    descripcion:
      "Esta pagina web es para una empresa de Spa y cuidados, se implementaron animaciones y sliders con Swiper.js",
    demoLink: "https://devomar-carolinaspa.netlify.app",
    repoLink: "https://github.com/Dev-socar/SpaWebsite",
    tecnologias: ["javascript", "html", "css", "netlify"],
  },
  {
    titulo: "Realstate.com",
    categoria: "Frontend Maquetacion",
    descripcion:
      "Esta pagina web es el Home Page de una empresa que se dedica a la inmobiliaria.",
    demoLink: "https://devomar-realstate.netlify.app",
    repoLink: "https://github.com/Dev-socar/RealState",
    tecnologias: ["javascript", "html", "css", "netlify"],
  },
  {
    titulo: "Podcast.com",
    categoria: "Frontend Maquetacion",
    descripcion: "Esta pagina web es para promocionar un Podcast.",
    demoLink: "https://devomar-podcastfm.netlify.app/",
    repoLink: "https://github.com/Dev-socar/PodcastApp",
    tecnologias: ["javascript", "html", "css", "netlify"],
  },
  {
    titulo: "AppComida.com",
    categoria: "Frontend Maquetacion",
    descripcion:
      "Esta pagina web es para promocionar una empresa de venta de comida.",
    demoLink: "https://devomar-appcomida.netlify.app",
    repoLink: "https://github.com/Dev-socar/AppComida",
    tecnologias: ["javascript", "html", "css", "netlify"],
  },
];

export const iconos: { [key: string]: string } = {
  vue: "/icons/Vue.svg",
  vite: "/icons/Vite.svg",
  react: "/icons/React.svg",
  php: "/icons/Php.svg",
  tailwind: "/icons/Tailwind.svg",
  javascript: "/icons/JS.svg",
  css: "/icons/CSS.svg",
  html: "/icons/HTML.svg",
  mysql: "/icons/Mysql.svg",
  nodejs: "/icons/Nodejs.svg",
  express: "/icons/Express.svg",
  mongodb: "/icons/Mongo.svg",
  sequilize: "/icons/Sequelize.svg",
  vercel: "/icons/Vercel.svg",
  netlify: "/icons/Netlify.svg",
  laravel: "/icons/Laravel.svg",
  godaddy: "/icons/Godaddy.svg",
};
