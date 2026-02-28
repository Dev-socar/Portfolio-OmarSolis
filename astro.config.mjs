import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import { fileURLToPath } from "node:url";

export default defineConfig({
  site: "https://omarsolisdev.com",
  integrations: [tailwind(), sitemap()],
  vite: {
    resolve: {
      alias: {
        "@src": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
});
