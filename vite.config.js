import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// Tailwind CSS is processed via postcss.config.cjs
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    // tailwindcss() removed; using PostCSS config for Tailwind processing
  ],
  // Include uppercase JPG assets
  assetsInclude: ["**/*.JPG"],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
