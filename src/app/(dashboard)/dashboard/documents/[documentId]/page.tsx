import { notFound } from "next/navigation";

import { db } from "@/src/server/db";
import { createDownloadUrl } from "@/src/lib/storage/url";


interface Props {
  params: Promise<{
    documentId: string;
  }>;

  searchParams: Promise<{
    page?: string;
  }>;
}


export default async function DocumentViewerPage({
  params,
  searchParams,
}: Props) {

  const { documentId } = await params;
  const { page } = await searchParams;


  const document =
    await db.document.findUnique({
      where:{
        id: documentId,
      },
    });


  if(!document){
    notFound();
  }


  const url =
    await createDownloadUrl(
      document.storageKey
    );


  return (
    <div className="flex h-full flex-col gap-6">


      <div>
        <h1 className="text-3xl font-bold">
          {document.originalName}
        </h1>


        {page && (
          <p className="text-muted-foreground">
            Jumping to page {page}
          </p>
        )}

      </div>


      <div className="flex-1">

        <iframe
          src={`${url}#page=${page ?? 1}`}
          className="h-[80vh] w-full rounded-xl border"
        />

      </div>


    </div>
  );
}