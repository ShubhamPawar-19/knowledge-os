"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";import { useRouter } from "next/navigation";
import {
  DefaultChatTransport,
  type UIMessage,
} from "ai";
import { useChat } from "@ai-sdk/react";
import { ArrowUp, Square } from "lucide-react";

import { Button } from "@/src/components/ui/button";
import { Textarea } from "@/src/components/ui/textarea";

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

  async function onSubmit(
    e: React.FormEvent<HTMLFormElement>,
  ) {
    e.preventDefault();

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

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 overflow-y-auto space-y-6 p-6">
        {messages.length === 0 ? (
          <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
            Ask anything about your documents.
          </div>
        ) : (
          messages.map((message) => (
            <div key={message.id}>
              <strong>
                {message.role === "user"
                  ? "You"
                  : "AI"}
              </strong>

              {message.parts.map(
                (part, index) => {
                  if (part.type !== "text") {
                    return null;
                  }

                  return (
                    <p
                      key={index}
                      className="whitespace-pre-wrap"
                    >
                      {part.text}
                    </p>
                  );
                },
              )}
            </div>
          ))
        )}
        <div ref={bottomRef} />
      </div>

      <form
        onSubmit={onSubmit}
        className="border-t p-4"
      >
        <div className="flex items-end gap-2 rounded-2xl border p-2">
          <Textarea
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
            placeholder="Ask about your documents..."
            className="min-h-13 resize-none border-0 shadow-none focus-visible:ring-0"
            onKeyDown={(e) => {
              if (
                e.key === "Enter" &&
                !e.shiftKey
              ) {
                e.preventDefault();
                (
                  e.currentTarget
                    .form as HTMLFormElement
                )?.requestSubmit();
              }
            }}
          />

          <Button
            type={
              status === "streaming"
                ? "button"
                : "submit"
            }
            size="icon"
            className="h-10 w-10 rounded-full"
            disabled={
              status !== "streaming" &&
              !input.trim()
            }
            onClick={() => {
              if (status === "streaming") {
                stop();
              }
            }}
          >
            {status === "streaming" ? (
              <Square
                size={16}
                fill="currentColor"
              />
            ) : (
              <ArrowUp size={18} />
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}