import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const srcPath = fileURLToPath(new URL("./src", import.meta.url));

export default defineConfig({
  // ✅ Custom domain uses root path
  base: "/",

  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(srcPath),
    },
  },
  assetsInclude: ["**/*.svg", "**/*.csv"],
});
