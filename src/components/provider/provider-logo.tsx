import Image from "next/image";
import { AIProvider } from "@prisma/client";

const PROVIDER_LOGOS: Record<AIProvider, string> = {
  [AIProvider.OPENAI]: "/providers/openai.svg",
  [AIProvider.OPENROUTER]: "/providers/openrouter.svg",
  [AIProvider.GOOGLE]: "/providers/google.svg",
  [AIProvider.ANTHROPIC]: "/providers/anthropic.svg",
  [AIProvider.COHERE]: "/providers/cohere.svg",
  [AIProvider.VOYAGE]: "/providers/voyage.svg",
  [AIProvider.OLLAMA]: "/providers/ollama.png",
};

interface ProviderLogoProps {
  provider: AIProvider;
  size?: number;
}

export function ProviderLogo({
  provider,
  size = 18,
}: ProviderLogoProps) {
  return (
    <Image
      src={PROVIDER_LOGOS[provider]}
      alt={`${provider} logo`}
      width={size}
      height={size}
      className="shrink-0 object-contain"
    />
  );
}