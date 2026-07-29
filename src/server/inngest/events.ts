import { inngest } from "./client";

export const InngestEvents = {
  PROCESS_DOCUMENT: "document/process",
} as const;

export type ProcessDocumentEvent = {
  documentId: string;
};