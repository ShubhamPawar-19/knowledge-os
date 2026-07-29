"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface Props {
  hasProcessing: boolean;
}

export function DocumentsPolling({ hasProcessing }: Props) {
  const router = useRouter();

  useEffect(() => {
    if (!hasProcessing) return;

    const interval = setInterval(() => {
      router.refresh();
    }, 3000);

    return () => clearInterval(interval);
  }, [hasProcessing, router]);

  return null;
}