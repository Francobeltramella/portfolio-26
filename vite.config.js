import { defineConfig } from "vite";
import { resolve, basename, extname } from "node:path";
import { readdirSync } from "node:fs";

const scriptsDir = resolve(import.meta.dirname, "src/scripts");

const input = Object.fromEntries(
  readdirSync(scriptsDir)
    .filter((file) => file.endsWith(".js"))
    .map((file) => [
      basename(file, extname(file)),
      resolve(scriptsDir, file),
    ])
);

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