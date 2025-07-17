import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [vue(), nitro()],
  environments: {
    client: { build: { rollupOptions: { input: "./src/client.ts" } } },
  },
});
