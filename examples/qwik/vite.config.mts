import { qwikVite } from "@qwik.dev/core/optimizer";
import { defineConfig, type UserConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { nitro } from "nitro/vite";

export default defineConfig((config): UserConfig => {
  return {
    plugins: [qwikVite({ csr: true }),
    tsconfigPaths({ root: "." }),
    config.mode === "development" &&
    viteStaticCopy({
      targets: [
        {
          src: "./node_modules/@qwik.dev/core/dist/qwikloader.js",
          dest: "@qwik.dev/core",
        },
      ],
    }), nitro()],
    environments: {
      client: {
        build: { rollupOptions: { input: "./src/client.tsx" } },
        consumer: "client",
      },
    },
  }
});

