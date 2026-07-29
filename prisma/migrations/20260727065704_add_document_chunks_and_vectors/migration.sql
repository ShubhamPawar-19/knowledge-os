CREATE EXTENSION IF NOT EXISTS vector;
-- CreateEnum
CREATE TYPE "public"."DocumentSourceType" AS ENUM ('PDF', 'MARKDOWN', 'WEBSITE', 'NOTION', 'TEXT');

-- DropIndex
DROP INDEX "public"."Document_status_idx";

-- DropIndex
DROP INDEX "public"."Document_workspaceId_idx";

-- AlterTable
ALTER TABLE "public"."Document" ADD COLUMN     "chunkCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "processedAt" TIMESTAMP(3),
ADD COLUMN     "processingStartedAt" TIMESTAMP(3),
ADD COLUMN     "sourceType" "public"."DocumentSourceType" NOT NULL DEFAULT 'PDF';

-- CreateTable
CREATE TABLE "public"."DocumentChunk" (
    "id" TEXT NOT NULL,
    "documentId" TEXT NOT NULL,
    "workspaceId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "chunkIndex" INTEGER NOT NULL,
    "tokenCount" INTEGER NOT NULL,
    "metadata" JSONB,
    "embedding" vector(1536) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DocumentChunk_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "DocumentChunk_documentId_idx" ON "public"."DocumentChunk"("documentId");

-- CreateIndex
CREATE INDEX "DocumentChunk_workspaceId_idx" ON "public"."DocumentChunk"("workspaceId");

-- CreateIndex
CREATE INDEX "DocumentChunk_workspaceId_documentId_idx" ON "public"."DocumentChunk"("workspaceId", "documentId");

-- CreateIndex
CREATE UNIQUE INDEX "DocumentChunk_documentId_chunkIndex_key" ON "public"."DocumentChunk"("documentId", "chunkIndex");

-- CreateIndex
CREATE INDEX "Document_workspaceId_status_idx" ON "public"."Document"("workspaceId", "status");

-- AddForeignKey
ALTER TABLE "public"."DocumentChunk" ADD CONSTRAINT "DocumentChunk_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "public"."Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DocumentChunk" ADD CONSTRAINT "DocumentChunk_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "public"."Workspace"("id") ON DELETE CASCADE ON UPDATE CASCADE;
