-- AlterTable
ALTER TABLE "public"."Conversation" ADD COLUMN     "titleGenerated" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE INDEX "Workspace_ownerId_idx" ON "public"."Workspace"("ownerId");
