import { createTRPCRouter } from "./trpc";

import { healthRouter } from "./routers/health";
import { documentsRouter } from "./routers/documents";
import { workspacesRouter } from "./routers/workspaces";
import { chatRouter } from "./routers/chat";
import { settingsRouter } from "./routers/settings";

export const appRouter = createTRPCRouter({
  health: healthRouter,
  documents: documentsRouter,
  workspaces: workspacesRouter,
  chat: chatRouter,
  settings: settingsRouter,
});

export type AppRouter = typeof appRouter;