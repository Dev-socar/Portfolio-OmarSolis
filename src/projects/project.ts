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
    titulo: "ERRE Recubrimientos",
    categoria: "Frontend",
    descripcion:
      "Sitio web para una empresa de recubrimientos industriales en Mérida, Yucatan.",
    demoLink: "https://errerecubrimientos.com",
    repoLink: "",
    tecnologias: ["astro", "typescript", "resend", "tailwind", "gsap"],
  },
  {
    titulo: "Grupo RH",
    categoria: "Frontend",
    descripcion:
      "Sitio web para una empresa de desarrollo inmobiliario en Mérida, Yucatan.",
    demoLink: "https://gruporh.mx/",
    repoLink: "",
    tecnologias: ["astro", "vue", "tailwind", "gsap"],
  },
  {
    titulo: "RHEVO Fractionals",
    categoria: "Frontend",
    descripcion:
      "Sitio web de un desarrollo enfocado a la venta de propiedades fractionals.",
    demoLink: "https://www.rhevofractionals.com/",
    repoLink: "",
    tecnologias: ["astro", "vue", "tailwind", "gsap"],
  },
  {
    titulo: "Sunriize",
    categoria: "Frontend",
    descripcion: "Landingpage para un fandom de Kpop.",
    demoLink: "https://www.sunriize.mx/",
    repoLink: "",
    tecnologias: ["astro", "vue", "vercel", "tailwind"],
  },
  {
    titulo: "Gran Verona",
    categoria: "Frontend",
    descripcion: "Sitio web de un desarrollo inmobiliario en Yucatan.",
    demoLink: "https://granverona.mx/",
    repoLink: "",
    tecnologias: ["astro", "vue", "tailwind", "gsap"],
  },
  {
    titulo: "fake-store-vue.com",
    categoria: "Frontend",
    descripcion: "Ecommerce con funcionalidad de carrito y pago por Paypal",
    demoLink: "https://fake-store-vue.vercel.app/",
    repoLink: "https://github.com/Dev-socar/fake-store-vue",
    tecnologias: ["vue", "vercel", "vite", "tailwind", "pinia", "paypal"],
  },
  {
    titulo: "Centro Integral Veterinario",
    categoria: "Frontend",
    descripcion: "Sitio web para un centro veterinario.",
    demoLink: "https://centro-integral-veterinario.vercel.app/",
    repoLink: "https://github.com/Dev-socar/Centro-Integral-Veterinario",
    tecnologias: ["astro", "tailwind"],
  },
  {
    titulo: "Devstagram",
    categoria: "FullStack",
    descripcion: "Clon de la aplicacion de instagram.",
    demoLink: "https://devomar-devstagram.mnz.dom.my.id/",
    repoLink: "https://github.com/Dev-socar/devstagram",
    tecnologias: ["laravel", "php", "vite", "tailwind"],
  },
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
    descripcion: "CRM para administrar empleados, agendar citas, roles, etc.",
    demoLink: "",
    repoLink: "https://github.com/Dev-socar/CRM-Dev",
    tecnologias: ["php", "mysql", "javascript", "tailwind", "html"],
  },
  {
    titulo: "CorpesaInmobiliaria.com",
    categoria: "FullStack",
    descripcion:
      "Sitio web para una empresa de Yucatan, encargada de la venta de terrenos y propiedades.",
    demoLink: "https://corpesainmobiliaria.com/",
    tecnologias: ["html", "javascript", "css", "php", "mysql"],
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
    titulo: "Inmobiliaria-Horizonte.com",
    categoria: "Frontend",
    descripcion:
      "Sitio Web de una Inmobiliaria, cuenta con peticiones a una API usando JSON-Server, se agregan animaciones asi como librerias externas.",
    repoLink: "https://github.com/Dev-socar/InmobiliariaHorizonte",
    tecnologias: ["javascript", "html", "css", "netlify"],
  },
];

export const iconos: { [key: string]: string } = {
  astro: "/icons/Astro.svg",
  gsap: "/icons/gsap.svg",
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
  pinia: "/icons/Pinia.svg",
  paypal: "/icons/Paypal.svg",
  typescript: "/icons/Typescript.svg",
  resend: "/icons/Resend.svg",
};
