import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // alias set
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  // proxy set
  server: {
    port: 3000,
  },
});
