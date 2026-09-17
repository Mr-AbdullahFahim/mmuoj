import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

import fs from "node:fs";

const srcPath = fileURLToPath(new URL("./src", import.meta.url));

export default defineConfig({
  // ✅ Custom domain uses root path
  base: "/",

  plugins: [
    react(), 
    tailwindcss(),
    {
      name: 'copy-index-to-404',
      closeBundle() {
        const distPath = path.resolve(process.cwd(), 'dist');
        const indexPath = path.join(distPath, 'index.html');
        const errorPath = path.join(distPath, '404.html');
        if (fs.existsSync(indexPath)) {
          fs.copyFileSync(indexPath, errorPath);
        }
      }
    }
  ],
  resolve: {
    alias: {
      "@": path.resolve(srcPath),
    },
  },
  assetsInclude: ["**/*.svg", "**/*.csv"],
});
