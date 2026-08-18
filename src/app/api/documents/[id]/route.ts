import { NextResponse } from "next/server";

import { auth } from "@/src/server/auth";
import { deleteDocument } from "@/src/server/services/documents/delete-document";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE DOCUMENT ERROR:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}