import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { visualizer } from 'rollup-plugin-visualizer'; // Import the visualizer plugin

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true }) // Add the visualizer plugin here
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
