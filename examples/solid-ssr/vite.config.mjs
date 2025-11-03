import solid from "vite-plugin-solid";
import { defineConfig } from "vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [solid({ ssr: true }), nitro()],
  nitro: { serverDir: "." },
  esbuild: {
    jsx: "preserve",
    jsxImportSource: "solid-js",
  },
  environments: {
    client: {
      build: { rollupOptions: { input: "./src/client.tsx" } },
    },
  },
});
