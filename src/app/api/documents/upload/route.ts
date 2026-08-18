import { NextResponse } from "next/server";

import { auth } from "@/src/server/auth";
import { uploadDocument } from "@/src/server/services/documents/upload-document";
export async function POST(request: Request) {
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

    const formData = await request.formData();

    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json(
        { error: "File is required." },
        { status: 400 }
      );
    }

    const document = await uploadDocument({
      workspaceId: session.user.id,
      file,
    });

    return NextResponse.json(document);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Upload failed." },
      { status: 500 }
    );
  }
}