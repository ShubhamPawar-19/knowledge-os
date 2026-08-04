/*
  Warnings:

  - You are about to drop the column `encryptedApiKey` on the `UserAIConfig` table. All the data in the column will be lost.
  - You are about to drop the column `model` on the `UserAIConfig` table. All the data in the column will be lost.
  - You are about to drop the column `provider` on the `UserAIConfig` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "public"."AIProvider" AS ENUM ('OPENAI', 'OPENROUTER', 'GOOGLE', 'ANTHROPIC', 'VOYAGE', 'COHERE', 'OLLAMA');

-- AlterTable
ALTER TABLE "public"."UserAIConfig" DROP COLUMN "encryptedApiKey",
DROP COLUMN "model",
DROP COLUMN "provider",
ADD COLUMN     "chatModel" TEXT NOT NULL DEFAULT 'google/gemma-3-27b-it',
ADD COLUMN     "chatProvider" "public"."AIProvider" NOT NULL DEFAULT 'OPENROUTER',
ADD COLUMN     "embeddingModel" TEXT NOT NULL DEFAULT 'gemini-embedding-001',
ADD COLUMN     "embeddingProvider" "public"."AIProvider" NOT NULL DEFAULT 'GOOGLE';

-- CreateTable
CREATE TABLE "public"."UserAPIKey" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "provider" "public"."AIProvider" NOT NULL,
    "encryptedKey" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserAPIKey_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "UserAPIKey_userId_idx" ON "public"."UserAPIKey"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserAPIKey_userId_provider_key" ON "public"."UserAPIKey"("userId", "provider");

-- AddForeignKey
ALTER TABLE "public"."UserAPIKey" ADD CONSTRAINT "UserAPIKey_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
