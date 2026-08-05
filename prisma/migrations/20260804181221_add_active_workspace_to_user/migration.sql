-- AlterTable
ALTER TABLE "public"."user" ADD COLUMN     "activeWorkspaceId" TEXT;

-- AddForeignKey
ALTER TABLE "public"."user" ADD CONSTRAINT "user_activeWorkspaceId_fkey" FOREIGN KEY ("activeWorkspaceId") REFERENCES "public"."Workspace"("id") ON DELETE SET NULL ON UPDATE CASCADE;
