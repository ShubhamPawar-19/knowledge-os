import { PrismaClient } from "@prisma/client";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { createPersonalWorkspace } from "@/features/workspace/server";

const prisma = new PrismaClient();

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
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