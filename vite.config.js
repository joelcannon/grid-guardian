// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import pkg from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  root: "./src",
  plugins: [vue()],
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version),
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: "index.html",
        map: "map.html",
        install: "install.html",
      },
    },
  },
});
