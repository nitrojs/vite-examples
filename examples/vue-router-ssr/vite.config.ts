import { assetsPlugin } from "@hiogawa/vite-plugin-fullstack";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import devtoolsJson from "vite-plugin-devtools-json";
import { nitro } from "nitro/vite";

export default defineConfig((_env) => ({
  clearScreen: false,
  plugins: [
    vue(),
    devtoolsJson(),
    assetsPlugin(),
    nitro(),
  ],
  environments: {
    client: {
      build: {
        rollupOptions: {
          input: "./src/framework/entry.client.tsx",
        }
      }
    },
    ssr: {
      build: {
        rollupOptions: {
          input: "./src/framework/entry.server.tsx",
        }
      }
    },
  },
  builder: {
    async buildApp(builder) {
      await builder.build(builder.environments["ssr"]!);
      await builder.build(builder.environments["client"]!);
    },
  },
}));
