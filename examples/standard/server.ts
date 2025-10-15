export default {
  fetch: (req: Request) => {
    const url = new URL(req.url);
    if (url.pathname === "/api/hello") {
      return new Response("API Works!");
    }
    if (url.pathname === "/") {
      return new Response("Hello World!");
    }
  },
};
