import { defineConfig } from "vite";
import { nitro } from "nitro/vite";

export default {
  routes: { "/**": { handler: "./server", format: "node" } },
  cloudflare: { nodeCompat: true, deployConfig: true },
  minify: false,
};
