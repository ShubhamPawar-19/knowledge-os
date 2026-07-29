import { serve } from "inngest/next";

import { inngest } from "./client";
import { processDocument } from "./functions/process-document";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    processDocument,
  ],
});