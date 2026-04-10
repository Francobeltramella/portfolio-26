import { defineConfig } from "vite";
import fs from "node:fs";
import path from "node:path";

const scriptsDir = path.resolve(__dirname, "src/scripts");

const input = Object.fromEntries(
  fs.readdirSync(scriptsDir)
    .filter((file) => file.endsWith(".js"))
    .map((file) => [
      file.replace(".js", ""),
      path.resolve(scriptsDir, file),
    ])
);

export default defineConfig({
  appType: "custom",
  base: "/",
  build: {
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