import type { IncomingMessage, ServerResponse } from "node:http";
import Express from "express";

const app = Express();

app.use("/api/hello", (req, res) => {
  res.end("API Works!");
});

app.get("/", (req, res) => {
  res.end("🟢 Hello from Express!");
});

export default app;
