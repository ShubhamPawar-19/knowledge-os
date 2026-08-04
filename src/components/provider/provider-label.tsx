import { AIProvider } from "@prisma/client";

import { AI_CATALOG } from "@/src/lib/ai/catalog";
import { ProviderLogo } from "./provider-logo";

interface ProviderLabelProps {
  provider: AIProvider;
}

export function ProviderLabel({
  provider,
}: ProviderLabelProps) {
  return (
    <div className="flex items-center gap-2">
      <ProviderLogo provider={provider} />

      <span>{AI_CATALOG[provider].label}</span>
    </div>
  );
}