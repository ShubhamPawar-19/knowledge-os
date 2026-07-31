import { createTRPCRouter } from "./trpc";

import { healthRouter } from "./routers/health";
import { documentsRouter } from "./routers/documents";
import { workspacesRouter } from "./routers/workspaces";
import { settingsRouter } from "./routers/settings";
import { chatRouter } from "@/src/features/chat/server/router";

export const appRouter = createTRPCRouter({
  health: healthRouter,
  documents: documentsRouter,
  workspaces: workspacesRouter,
  chat: chatRouter,
  settings: settingsRouter,
});

export type AppRouter = typeof appRouter;