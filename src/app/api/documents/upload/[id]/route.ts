import { NextResponse } from "next/server";

import { auth } from "@/src/server/auth";
import { deleteDocument } from "@/src/server/services/documents";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  if (!session) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const { id } = await params;

  await deleteDocument(id);

  return NextResponse.json({
    success: true,
  });
}