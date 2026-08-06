import { extractText } from "../extractors/extract-text";

import { chunkDocument } from "./chunk-text";
import { cleanText } from "./clean-text";
import { downloadDocument } from "./download-document";
import { embedChunks } from "./embed-chunks";
import { getDocument } from "./get-document";
import { saveChunks } from "./save-chunks";
import { markFailed, markProcessing, markReady } from "./document-status";

export async function processDocumentPipeline(
    documentId: string,
) {
    try {
        const document = await getDocument(documentId);

        await markProcessing(document.id);

        const file = await downloadDocument(document);

        const extracted = await extractText(
            document.sourceType,
            file,
        );

        // Clean every page
        const cleaned = {
            ...extracted,
            text: cleanText(extracted.text),
            pages: extracted.pages.map((page) => ({
                ...page,
                text: cleanText(page.text),
            })),
        };

        // Chunk
        const chunks = chunkDocument(cleaned);

        // Embed
        const embeddedChunks = await embedChunks(
            document.workspace.ownerId,
            chunks,
        );

        // Save
        await saveChunks(
            document.id,
            document.workspaceId,
            embeddedChunks,
        );

        await markReady(
            document.id,
            embeddedChunks.length,
        );
    } catch (error) {
        await markFailed(
            documentId,
            error instanceof Error
                ? error.message
                : "Unknown error",
        );

        throw error;
    }
}