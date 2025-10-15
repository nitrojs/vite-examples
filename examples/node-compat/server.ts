import type { IncomingMessage, ServerResponse } from "node:http";
import { toReqRes, toFetchResponse } from "fetch-to-node";

const nodeHandler = (req: IncomingMessage, res: ServerResponse) => {
  if (req.url === "/api/hello") {
    res.end("API Works!");
    return;
  }
  if (req.url === "/") {
    res.end("🟢 Hello from Node.js handler!");
    return;
  }
  res.statusCode = 404;
  res.end("Not Found");
};

export default {
  fetch: async (webReq: Request) => {
    const { req, res } = toReqRes(webReq);
    nodeHandler(req as IncomingMessage, res as ServerResponse);
    return toFetchResponse(res as ServerResponse);
  },
};
