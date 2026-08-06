import { NextResponse } from "next/server";

import { listConversations } from "@/src/features/chat/queries/list-conversations";


export async function GET(req: Request) {

  try {

    const url = new URL(req.url);

    const workspaceId =
      url.searchParams.get("workspaceId");


    if (!workspaceId) {
      return NextResponse.json(
        {
          error: "Missing workspaceId",
        },
        {
          status: 400,
        }
      );
    }


    const conversations =
      await listConversations(workspaceId);

console.log("API conversations:", conversations);

    return NextResponse.json(conversations);


  } catch(error) {

    console.error(
      "LIST CONVERSATIONS ERROR:",
      error
    );


    return NextResponse.json(
      {
        error:"Failed to fetch conversations",
      },
      {
        status:500,
      }
    );

  }
}