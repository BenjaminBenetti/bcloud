import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import deno from "@deno/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), deno()],
  cacheDir: ".vite", // don't make a node_modules directory! It will mess up the deno vscode plugin's intellisense.
});
