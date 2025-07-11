import { defineConfig } from "vite";
import { nitro } from "nitro/vite";

import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue(),
    nitro({
      services: { ssr: { entry: "./src/server.ts" } },
    }),
  ],
  environments: {
    client: {
      build: { rollupOptions: { input: "./src/client.ts" } },
    },
  },
});
