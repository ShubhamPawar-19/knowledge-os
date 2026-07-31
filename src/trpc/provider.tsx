"use client";

import { useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";

import { makeQueryClient } from "./query-client";
import {  trpcClient, TRPCProvider } from "./client";

interface Props {
  children: React.ReactNode;
}

export function Providers({ children }: Props) {
  const [queryClient] = useState(makeQueryClient);

  return (
    <QueryClientProvider client={queryClient}>
      <TRPCProvider
        trpcClient={trpcClient}
        queryClient={queryClient}
      >
        {children}
      </TRPCProvider>
    </QueryClientProvider>
  );
}