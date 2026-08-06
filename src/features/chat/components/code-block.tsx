"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

import { cn } from "@/src/lib/utils";

interface CodeBlockProps {
  className?: string;
  children?: React.ReactNode;
}

export function CodeBlock({
  className,
  children,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const code = String(children).replace(
    /\n$/,
    "",
  );

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      // ignore
    }
  }

  return (
    <div className="group relative my-6 overflow-hidden rounded-lg border bg-muted/30">
      <button
        onClick={handleCopy}
        className="
          absolute
          right-3
          top-3
          rounded-md
          border
          bg-background/90
          p-2
          opacity-0
          transition-opacity
          group-hover:opacity-100
        "
      >
        {copied ? (
          <Check className="size-4" />
        ) : (
          <Copy className="size-4" />
        )}
      </button>

      <pre
        className={cn(
          "overflow-x-auto p-4 text-sm",
          className,
        )}
      >
        <code>{children}</code>
      </pre>
    </div>
  );
}