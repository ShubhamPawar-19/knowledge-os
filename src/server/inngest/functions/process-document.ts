import { inngest } from "../client";
import { processDocumentPipeline } from "../../processing/documents/process-document";

export const processDocument = inngest.createFunction(
  {
    id: "process-document",
    retries: 3,
    triggers: [
      {
        event: "document/process",
      },
    ],
  },
  async ({ event }) => {
    const { documentId } = event.data as {
      documentId: string;
    };

    await processDocumentPipeline(documentId);
  }
);