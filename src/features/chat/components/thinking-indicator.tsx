"use client";

export function ThinkingIndicator() {
  return (
    <div className="flex w-full justify-start">
      <div className="max-w-5xl">
        <div className="flex items-center gap-3 rounded-2xl px-4 py-3">

          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <span
                className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground"
                style={{
                  animationDelay: "0ms",
                }}
              />

              <span
                className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground"
                style={{
                  animationDelay: "150ms",
                }}
              />

              <span
                className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground"
                style={{
                  animationDelay: "300ms",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}