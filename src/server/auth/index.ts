import { createPersonalWorkspace } from "@/src/features/workspaces/mutations";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { db } from "../db";


export const auth = betterAuth({
  database: prismaAdapter(db, {
  provider: "postgresql",
}),
  emailAndPassword: {
    enabled: true,
  },
  baseURL: process.env.BETTER_AUTH_URL,
  trustedOrigins: [
  process.env.BETTER_AUTH_URL!,
],

databaseHooks: {
  user: {
    create: {
      after: async (user) => {
        await createPersonalWorkspace({
          id: user.id,
          name: user.name,
        });
      },
    },
  },
},

});