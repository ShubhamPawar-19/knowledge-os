import { DocumentSourceType } from "@prisma/client";

import type { ExtractedDocument } from "../documents/types";

import { extractPdf } from "./pdf";
import { extractMarkdown } from "./markdown";
import { extractWebsite } from "./website";
import { extractNotion } from "./notion";
import { extractPlainText } from "./text";

export async function extractText(
  sourceType: DocumentSourceType,
  file: Buffer,
): Promise<ExtractedDocument> {
  switch (sourceType) {
    case DocumentSourceType.PDF:
      return extractPdf(file);

    case DocumentSourceType.MARKDOWN:
      return extractMarkdown(file);

    case DocumentSourceType.WEBSITE:
      return extractWebsite(file);

    case DocumentSourceType.NOTION:
      return extractNotion(file);

    case DocumentSourceType.TEXT:
      return extractPlainText(file);

    default: {
      const exhaustiveCheck: never = sourceType;
      throw new Error(`Unsupported source type: ${exhaustiveCheck}`);
    }
  }
}