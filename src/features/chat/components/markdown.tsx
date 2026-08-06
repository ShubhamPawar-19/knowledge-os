"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn } from "@/src/lib/utils";

import { CodeBlock } from "./code-block";

interface MarkdownProps {
  children: string;
}

export function Markdown({
  children,
}: MarkdownProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => (
          <h1 className="mb-4 mt-8 text-3xl font-bold">
            {children}
          </h1>
        ),

        h2: ({ children }) => (
          <h2 className="mb-3 mt-6 text-2xl font-semibold">
            {children}
          </h2>
        ),

        h3: ({ children }) => (
          <h3 className="mb-2 mt-5 text-xl font-semibold">
            {children}
          </h3>
        ),

        p: ({ children }) => (
          <p className="leading-7 not-first:mt-4">
            {children}
          </p>
        ),

        ul: ({ children }) => (
          <ul className="my-4 ml-6 list-disc space-y-2">
            {children}
          </ul>
        ),

        ol: ({ children }) => (
          <ol className="my-4 ml-6 list-decimal space-y-2">
            {children}
          </ol>
        ),

        li: ({ children }) => (
          <li>{children}</li>
        ),

        blockquote: ({ children }) => (
          <blockquote className="my-4 border-l-4 border-muted-foreground/30 pl-4 italic text-muted-foreground">
            {children}
          </blockquote>
        ),

        table: ({ children }) => (
          <div className="my-6 overflow-x-auto rounded-lg border">
            <table className="w-full border-collapse">
              {children}
            </table>
          </div>
        ),

        thead: ({ children }) => (
          <thead className="bg-muted">
            {children}
          </thead>
        ),

        th: ({ children }) => (
          <th className="border px-4 py-2 text-left font-semibold">
            {children}
          </th>
        ),

        td: ({ children }) => (
          <td className="border px-4 py-2">
            {children}
          </td>
        ),

        hr: () => (
          <hr className="my-6 border-border" />
        ),

        a: ({ href, children }) => (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="text-primary underline underline-offset-4"
          >
            {children}
          </a>
        ),

        code({
          className,
          children,
          ...props
        }) {
          const isBlock =
            className?.includes("language-");

          if (!isBlock) {
            return (
              <code
                className={cn(
                  "rounded bg-muted px-1.5 py-0.5 font-mono text-sm",
                  className,
                )}
                {...props}
              >
                {children}
              </code>
            );
          }

          return (
            <CodeBlock className={className}>
              {children}
            </CodeBlock>
          );
        },
      }}
    >
      {children}
    </ReactMarkdown>
  );
}