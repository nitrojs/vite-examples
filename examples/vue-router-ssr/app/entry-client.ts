import { createSSRApp } from "vue";
import { RouterView, createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";

async function main() {
  const app = createSSRApp(RouterView);
  const router = createRouter({ history: createWebHistory(), routes });
  app.use(router);

  await router.isReady();
  app.mount("#root");
}

main();
