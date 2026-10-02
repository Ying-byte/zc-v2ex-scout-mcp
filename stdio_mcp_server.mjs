#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "v2ex",
  boardId: "v2ex-official",
  domain: "v2ex.com",
  npmName: "zc-v2ex-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
