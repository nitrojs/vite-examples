import { qwikVite } from "@qwik.dev/core/optimizer";
import { qwikRouter } from "@qwik.dev/router/vite";
import { defineConfig, type UserConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

export default defineConfig(() => {
  return {
    plugins: [qwikRouter(), qwikVite(), tsconfigPaths({ root: "." }), nitro()],
    build: { rollupOptions: { external: [/^node/] } },
  };
});
