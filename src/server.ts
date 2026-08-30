import { createStartHandler, defaultStreamHandler } from "@tanstack/react-start/server";

const fetchHandler = createStartHandler(defaultStreamHandler);

export default {
  async fetch(request: Request, env?: unknown, ctx?: unknown) {
    return await fetchHandler(request);
  },
};
