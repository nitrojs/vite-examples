import { assetsPlugin } from "@hiogawa/vite-plugin-fullstack";
import vue from "@vitejs/plugin-vue";
import { defineConfig, type Plugin } from "vite";
import devtoolsJson from "vite-plugin-devtools-json";
import { nitro } from "nitro/vite";

export default defineConfig((_env) => ({
  clearScreen: false,
  plugins: [
    patchVueExclude(vue(), /\?assets/),
    devtoolsJson(),
    patchAssets(assetsPlugin()),
    nitro(),
  ],
  environments: {
    client: {
      build: {
        rollupOptions: { input: "./src/entry-client.ts" },
      },
    },
    ssr: {
      build: {
        rollupOptions: { input: "./src/entry-server.ts" },
        outDir: ".nitro/vite/services/ssr",
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

// Ensure order: Client => SSR => [manifest] => Nitro
function patchAssets(plugin: any[]): any {
  const assetsPlugin = plugin.find((p) => p.name === "fullstack:assets") as any;

  const buildAppHook = assetsPlugin.buildApp.handler;
  assetsPlugin.buildApp = async (builder: any) => {
    await builder.build(builder.environments.client);
    await builder.build(builder.environments.ssr);
    await buildAppHook(builder);
  };

  return plugin;
}
