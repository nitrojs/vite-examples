export default {
  fetch: (req: Request): Response | Promise<Response> => {
    return new Response("Hello from Nitro Vite Basic Service!");
  },
};
