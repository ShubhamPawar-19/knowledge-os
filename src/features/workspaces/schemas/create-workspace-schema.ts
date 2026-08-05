import { z } from "zod";

export const createWorkspaceSchema =
  z.object({
    name: z
      .string()
      .min(2, "Workspace name is too short")
      .max(50),
  });

export type CreateWorkspaceInput =
  z.infer<
    typeof createWorkspaceSchema
  >;