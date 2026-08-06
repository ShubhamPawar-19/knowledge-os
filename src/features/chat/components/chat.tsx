"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react"; import { useRouter } from "next/navigation";
import {
  DefaultChatTransport,
  type UIMessage,
} from "ai";
import { useChat } from "@ai-sdk/react";
import { ChatInput } from "./chat-input";
import { MessageItem } from "./message-item";
import { ThinkingIndicator } from "./thinking-indicator";

interface Props {
  conversationId: string;
  initialMessages: UIMessage[];
}

export function Chat({
  conversationId,
  initialMessages,
}: Props) {
  const router = useRouter();

  const [input, setInput] = useState("");
  const bottomRef =
    useRef<HTMLDivElement>(null);
  const [hasRefreshed, setHasRefreshed] =
    useState(false);

  const {
    messages,
    sendMessage,
    stop,
    status,
  } = useChat({
    messages: initialMessages,

    transport: new DefaultChatTransport({
      api: "/api/chat",
      body: {
        conversationId,
      },
    }),
  });

  useEffect(() => {
    if (
      hasRefreshed ||
      initialMessages.length !== 0 ||
      status !== "ready" ||
      messages.length < 2
    ) {
      return;
    }

    setHasRefreshed(true);

    router.refresh();
  }, [
    status,
    messages.length,
    initialMessages.length,
    hasRefreshed,
    router,
  ]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, status]);

  async function handleSubmit() {
    if (
      !input.trim() ||
      status === "streaming"
    ) {
      return;
    }

    const text = input;
    setInput("");
    await sendMessage({
      text,
    });
  }
  const isThinking =
    status === "submitted" ||
    status === "streaming";

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 overflow-y-auto space-y-6 p-6">
        {messages.length === 0 ? (
          <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
            Ask anything about your documents.
          </div>
        ) : (
          messages.map((message) => (
            <MessageItem
              key={message.id}
              message={message}
            />
          ))
        )}
        {isThinking && (
          <ThinkingIndicator />
        )}
        <div ref={bottomRef} />
      </div>

      <ChatInput
        input={input}
        onInputChange={setInput}
        status={status}
        onStop={stop}
        onSubmit={handleSubmit}
      />

    </div>
  );
}