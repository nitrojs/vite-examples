import { defineConfig } from "vite";
import { nitro } from "nitro/vite";

import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    nitro({
      services: { ssr: { entry: "./src/server.tsx" } },
    }),
  ],
  environments: {
    client: {
      build: { rollupOptions: { input: "./src/client.tsx" } },
    },
  },
});
