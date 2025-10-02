import { createHead } from "@unhead/vue/client";
import { createSSRApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Root from "../root.vue";
import { routes } from "../routes";

async function main() {
  const app = createSSRApp(Root);

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  app.use(router);

  const head = createHead();
  app.use(head);

  await router.isReady();
  app.mount("#root");
}

main();
