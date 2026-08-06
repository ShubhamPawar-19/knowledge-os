import type { UIMessage } from "ai";
import { FileText } from "lucide-react";
import Link from "next/link";

import { cn } from "@/src/lib/utils";
import { Markdown } from "./markdown";
import { documentRoute } from "../../documents/routes/documents";

interface Citation {
  documentId: string;
  documentName: string;
  pageNumber?: number;
}

interface MessageItemProps {
  message: UIMessage;
}

export function MessageItem({
  message,
}: MessageItemProps) {
  const isUser = message.role === "user";

  const citations: Citation[] =
    Array.isArray(
      (message.metadata as {
        citations?: Citation[];
      })?.citations,
    )
      ? (
          message.metadata as {
            citations: Citation[];
          }
        ).citations
      : [];

  const groupedCitations = Object.values(
    citations.reduce(
      (acc, citation) => {
        if (!acc[citation.documentId]) {
          acc[citation.documentId] = {
            documentId: citation.documentId,
            documentName: citation.documentName,
            pages: [],
          };
        }

        if (
          citation.pageNumber &&
          !acc[citation.documentId].pages.includes(
            citation.pageNumber,
          )
        ) {
          acc[citation.documentId].pages.push(
            citation.pageNumber,
          );
        }

        return acc;
      },
      {} as Record<
        string,
        {
          documentId: string;
          documentName: string;
          pages: number[];
        }
      >,
    ),
  );

  return (
    <div
      className={cn(
        "flex w-full",
        isUser
          ? "justify-end"
          : "justify-start",
      )}
    >
      <div
        className={cn(
          "rounded-2xl px-4 py-3 text-[15px] leading-7",
          isUser
            ? "max-w-2xl bg-primary text-primary-foreground shadow-sm"
            : "max-w-5xl",
        )}
      >
        {message.parts.map((part, index) => {
          if (part.type !== "text") {
            return null;
          }

          if (isUser) {
            return (
              <p
                key={index}
                className="whitespace-pre-wrap wrap-break-words"
              >
                {part.text}
              </p>
            );
          }

          return (
            <div key={index}>
              <div
                className="
                  prose
                  prose-neutral
                  dark:prose-invert
                  max-w-none
                "
              >
                <Markdown>
                  {part.text}
                </Markdown>
              </div>


              {groupedCitations.length > 0 && (
                <div className="mt-6 border-t pt-4">
                  <p
                    className="
                      mb-3
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wide
                      text-muted-foreground
                    "
                  >
                    Sources
                  </p>


                  <div className="space-y-2">
                    {groupedCitations.map(
                      (citation) => (
                        <Link
                          key={citation.documentId}
                          href={documentRoute(
                            citation.documentId,
                            citation.pages[0],
                          )}
                          className="
                            flex
                            items-center
                            gap-3
                            rounded-lg
                            border
                            bg-muted/40
                            px-3
                            py-2
                            text-sm
                            transition
                            hover:bg-muted
                          "
                        >
                          <FileText
                            className="
                              h-4
                              w-4
                              shrink-0
                              text-muted-foreground
                            "
                          />

                          <div>
                            <p className="font-medium">
                              {citation.documentName}
                            </p>

                            {citation.pages.length > 0 && (
                              <p className="text-muted-foreground">
                                Pages:{" "}
                                {citation.pages.join(", ")}
                              </p>
                            )}
                          </div>
                        </Link>
                      ),
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}