import { defineConfig } from "vite";
import { resolve, basename, extname } from "node:path";
import { readdirSync } from "node:fs";


export default defineConfig({
  base: "/",
  build: {
    manifest: true,
    rollupOptions: {
      input,
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "chunks/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
});