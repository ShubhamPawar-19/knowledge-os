"use client";

import { ArrowUp, Square } from "lucide-react";

import { Button } from "@/src/components/ui/button";
import { Textarea } from "@/src/components/ui/textarea";

interface ChatInputProps {
  input: string;
  onInputChange: (value: string) => void;
  onSubmit: () => void;
  onStop: () => void;
  status: "submitted" | "streaming" | "ready" | "error";
}

export function ChatInput({
  input,
  onInputChange,
  onSubmit,
  onStop,
  status,
}: ChatInputProps) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="border-t bg-background p-4"
    >
      <div className="flex items-end gap-2 rounded-2xl border bg-background p-2">
        <Textarea
          value={input}
          onChange={(e) =>
            onInputChange(e.target.value)
          }
          placeholder="Ask about your documents..."
          className="min-h-13 resize-none border-0 shadow-none focus-visible:ring-0"
          onKeyDown={(e) => {
            if (
              e.key === "Enter" &&
              !e.shiftKey
            ) {
              e.preventDefault();
              onSubmit();
            }
          }}
        />

        <Button
          type="button"
          size="icon"
          className="h-10 w-10 rounded-full"
          disabled={
            status !== "streaming" &&
            !input.trim()
          }
          onClick={() => {
            if (status === "streaming") {
              onStop();
            } else {
              onSubmit();
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
  );
}