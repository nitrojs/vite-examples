import { createQwikRouter } from "./qwik-fetch-adapter";
import render from "./entry.ssr";

const { router, notFound } = createQwikRouter({ render });

export default {
  fetch: async (req: Request) => {
    console.log(`[${req.method}] ${req.url}`);
    const qwikRouterResponse = await router(req);
    if (qwikRouterResponse) {
      return qwikRouterResponse;
    }

    // Path not found
    return notFound(req);
  },
};
