import { AIProvider } from "@prisma/client";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { getProviderApiKey } from "@/src/features/settings/actions/api-keys";


export async function getChatModel(
  userId: string,
  provider: AIProvider,
  model: string,
) {
  const apiKey = await getProviderApiKey(
    userId,
    provider,
  );

  if (!apiKey) {
    throw new Error(
      `No API key configured for ${provider}`,
    );
  }

  switch (provider) {
    case AIProvider.OPENROUTER: {
      const openrouter = createOpenRouter({
        apiKey,
      });

      return openrouter.chat(model);
    }

    case AIProvider.GOOGLE: {
      const google = createGoogleGenerativeAI({
        apiKey,
      });

      return google(model);
    }

    default:
      throw new Error(
        `Unsupported provider: ${provider}`,
      );
  }
}