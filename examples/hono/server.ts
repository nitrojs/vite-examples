import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.text("🔥 Hello from Hono!"));

app.get("/api/hello", (c) => c.text("API Works!"));

export default app;
