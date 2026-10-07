import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

const root = import.meta.dirname;

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(root, "client", "src"),
    },
  },
  root: path.resolve(root, "client"),
  build: {
    outDir: path.resolve(root, "dist", "public"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(root, "client", "index.html"),
        resources: path.resolve(root, "client", "resources", "index.html"),
        museGuide: path.resolve(root, "client", "resources", "muse", "index.html"),
      },
    },
  },
  server: {
    port: 3000,
    strictPort: false,
    host: "0.0.0.0",
  },
});
