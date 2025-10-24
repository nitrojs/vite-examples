import vue from "@vitejs/plugin-vue";
import { defineConfig, type Plugin } from "vite";
import devtoolsJson from "vite-plugin-devtools-json";
import { nitro } from "nitro/vite";

export default defineConfig((_env) => ({
  clearScreen: false,
  plugins: [patchVueExclude(vue(), /\?assets/), devtoolsJson(), nitro()],
  environments: {
    client: {
      build: {
        rollupOptions: { input: "./src/entry-client.ts" },
      },
    },
    ssr: {
      build: {
        rollupOptions: { input: "./src/entry-server.ts" },
      },
    },
  },
}));

// Workaround https://github.com/vitejs/vite-plugin-vue/issues/677
function patchVueExclude(plugin: Plugin, exclude: RegExp) {
  const original = (plugin.transform as any).handler;
  (plugin.transform as any).handler = function (this: any, ...args: any[]) {
    if (exclude.test(args[1])) return;
    return original.call(this, ...args);
  };
  return plugin;
}
