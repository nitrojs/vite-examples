import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [react(), nitro()],
  environments: {
    client: {
      build: { rollupOptions: { input: "./src/client.tsx" } },
      consumer: "client",
    },
  },
});
