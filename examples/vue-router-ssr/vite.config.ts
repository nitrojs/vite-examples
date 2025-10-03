import fullstack from "@hiogawa/vite-plugin-fullstack";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import devtoolsJson from "vite-plugin-devtools-json";
import { nitro } from "nitro/vite";

export default defineConfig((_env) => ({
  clearScreen: false,
  plugins: [
    vue(),
    devtoolsJson(),
    fullstack({ serverHandler: false }),
    nitro(),
  ],
  optimizeDeps: {
    entries: ["./src/framework/entry.client.tsx"],
  },
  builder: {
    async buildApp(builder) {
      await builder.build(builder.environments["ssr"]!);
      await builder.build(builder.environments["client"]!);
    },
  },
}));
