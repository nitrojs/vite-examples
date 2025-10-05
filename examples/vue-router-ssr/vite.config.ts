import fullstack from "@hiogawa/vite-plugin-fullstack";
import vue from "@vitejs/plugin-vue";
import { defineConfig, type Plugin } from "vite";
import devtoolsJson from "vite-plugin-devtools-json";
import { nitro } from "nitro/vite";

export default defineConfig((_env) => ({
  clearScreen: false,
  plugins: [
    patchVueExclude(vue(), /\?assets/),
    devtoolsJson(),
    nitro(),
    // NOTE: fullstack needs to come after nitro since
    // it uses `buildApp` to output assets manifest file.
    fullstack({ serverHandler: false, serverEnvironments: ["nitro"] }),
  ],
  environments: {
    client: {
      build: {
        rollupOptions: {
          // NOTE:
          // fullstack plugin's client entry discovery is not supported
          // since Nitro build order is `client` environment -> `nitro` environment.
          input: "./src/framework/entry.client.ts",
        },
      },
    },
    nitro: {
      build: {
        // TODO: Nitro doesn't set this up?
        outDir: ".output/server",
      },
    },
  },
}));

// workaround https://github.com/vitejs/vite-plugin-vue/issues/677
function patchVueExclude(plugin: Plugin, exclude: RegExp) {
  const original = (plugin.transform as any).handler;
  (plugin.transform as any).handler = function (this: any, ...args: any[]) {
    if (exclude.test(args[1])) return;
    return original.call(this, ...args);
  };
  return plugin;
}
