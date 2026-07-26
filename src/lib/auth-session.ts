
import { headers } from "next/headers";
import { auth } from "@/src/server/auth";

export async function getCurrentSession() {
  return auth.api.getSession({
    headers: await headers(),
  });
}