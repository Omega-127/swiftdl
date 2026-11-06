import { defineConfig } from "vite";
import { resolve } from "node:path";

// The UI lives in ui/; Tauri loads the built pages from dist/.
export default defineConfig({
  root: "ui",
  base: "./",
  clearScreen: false,
  server: { port: 5179, strictPort: true, host: "127.0.0.1" },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    target: "es2022",
    rollupOptions: {
      input: { main: resolve(__dirname, "ui/index.html"), download: resolve(__dirname, "ui/download.html") },
    },
  },
});
