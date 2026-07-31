import { notFound } from "next/navigation";

import { getConversation } from "@/src/features/chat/queries/get-conversation";

interface Props {
  params: Promise<{
    conversationId: string;
  }>;
}

export default async function ConversationPage({
  params,
}: Props) {
  const { conversationId } = await params;

  const conversation = await getConversation(conversationId);

  if (!conversation) {
    notFound();
  }

  return (
    <div className="flex h-full flex-col">
      <h1 className="border-b p-6 text-xl font-semibold">
        {conversation.title}
      </h1>

      <div className="flex-1 p-6">
        {conversation.messages.length === 0 ? (
          <p className="text-muted-foreground">
            Start a conversation...
          </p>
        ) : (
          conversation.messages.map((message) => (
            <div key={message.id}>
              <strong>{message.role}</strong>

              <p>{message.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}