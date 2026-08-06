import Link from "next/link";
import { documentRoute } from "../../documents/routes/documents";



interface Citation {
  documentId: string;
  documentName: string;
  pageNumber?: number;
}


interface CitationsProps {
  citations?: Citation[];
}


export function Citations({
  citations,
}: CitationsProps) {

  if (!citations?.length) {
    return null;
  }


  return (
    <div className="mt-4 border-t pt-3 text-sm text-muted-foreground">

      <p className="mb-2 font-medium">
        Sources
      </p>


      <div className="space-y-1">

        {citations.map((citation, index) => (

          <Link
            key={index}
            href={documentRoute(
              citation.documentId,
              citation.pageNumber,
            )}
            className="
              flex
              items-center
              gap-2
              rounded-md
              px-2
              py-1
              transition
              hover:bg-muted
              hover:text-foreground
            "
          >

            <span>
              📄 {citation.documentName}
            </span>


            {citation.pageNumber && (
              <span>
                (Page {citation.pageNumber})
              </span>
            )}

          </Link>

        ))}

      </div>

    </div>
  );
}