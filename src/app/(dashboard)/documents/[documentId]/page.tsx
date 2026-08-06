import { notFound } from "next/navigation";

import { db } from "@/src/server/db";

interface Props {
  params: Promise<{
    documentId: string;
  }>;

  searchParams: Promise<{
    page?: string;
  }>;
}


export default async function DocumentPage({
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
      include:{
        chunks:{
          orderBy:{
            chunkIndex:"asc",
          },
        },
      },
    });


  if(!document){
    notFound();
  }


  const selectedPage =
    page ? Number(page) : undefined;


  const filteredChunks =
    selectedPage
      ? document.chunks.filter(
          (chunk)=>{

            const metadata =
              chunk.metadata as {
                pageNumber?: number;
              };

            return (
              metadata?.pageNumber === selectedPage
            );
          }
        )
      : document.chunks;



  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold">
          {document.name}
        </h1>

        <p className="text-muted-foreground">
          {selectedPage
            ? `Page ${selectedPage}`
            : "Document viewer"}
        </p>
      </div>


      <div className="space-y-4">

        {filteredChunks.map((chunk)=>(
          <div
            key={chunk.id}
            className="
              rounded-xl
              border
              p-4
              bg-muted/30
            "
          >

            {chunk.content}

          </div>
        ))}

      </div>

    </div>
  );
}