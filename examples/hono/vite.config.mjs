import { defineConfig } from "vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [
    nitro({
      services: { ssr: { entry: "./server.ts" } },
    }),
  ],
});
