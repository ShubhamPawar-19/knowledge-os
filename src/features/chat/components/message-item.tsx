import { MessageRole } from "@prisma/client";
import { cn } from "@/src/lib/utils";

interface MessageItemProps {
  role: MessageRole;
  content: string;
}

export function MessageItem({
  role,
  content,
}: MessageItemProps) {
  const isUser = role === "USER";

  return (
    <div
      className={cn(
        "flex",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "max-w-3xl rounded-xl px-4 py-3",
          isUser
            ? "bg-primary text-primary-foreground"
            : "bg-muted"
        )}
      >
        <p className="whitespace-pre-wrap">
          {content}
        </p>
      </div>
    </div>
  );
}