import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://omarsolisdev.com/",
  integrations: [
    tailwind(),
    sitemap({
      // Esta función permite ajustar los datos de cada página individualmente
      serialize(item) {
        if (/index/.test(item.url)) {
          item.priority = 1.0;
          item.changefreq = "weekly";
        } else if (/proyectos/.test(item.url)) {
          item.priority = 0.9;
          item.changefreq = "weekly";
        } else {
          item.priority = 0.7;
          item.changefreq = "yearly";
        }
        item.lastmod = new Date("2026-02-28").toISOString();
        return item;
      },
    }),
  ],
});
