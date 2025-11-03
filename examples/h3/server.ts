import { H3 } from "h3";

const app = new H3()
  .get("/api/hello", () => "API Works!")
  .get("/", () => "⚡️ Hello from H3!");

export default app;
