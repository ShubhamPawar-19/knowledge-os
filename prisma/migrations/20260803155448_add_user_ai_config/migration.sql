-- CreateTable
CREATE TABLE "public"."UserAIConfig" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "provider" TEXT NOT NULL DEFAULT 'openrouter',
    "model" TEXT NOT NULL DEFAULT 'google/gemma-3-27b-it',
    "encryptedApiKey" TEXT,
    "temperature" DOUBLE PRECISION NOT NULL DEFAULT 0.7,
    "maxTokens" INTEGER NOT NULL DEFAULT 2048,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserAIConfig_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserAIConfig_userId_key" ON "public"."UserAIConfig"("userId");

-- AddForeignKey
ALTER TABLE "public"."UserAIConfig" ADD CONSTRAINT "UserAIConfig_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
