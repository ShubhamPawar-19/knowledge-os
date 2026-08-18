import "server-only";
import { createClient } from "@supabase/supabase-js";

const {
  SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY,
  SUPABASE_STORAGE_BUCKET,
} = process.env;

if (
  !SUPABASE_URL ||
  !SUPABASE_SERVICE_ROLE_KEY ||
  !SUPABASE_STORAGE_BUCKET
) {
  throw new Error("Supabase Storage environment variables are missing.");
}

export const storageClient = createClient(
  SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY
);

export const STORAGE_BUCKET = SUPABASE_STORAGE_BUCKET;