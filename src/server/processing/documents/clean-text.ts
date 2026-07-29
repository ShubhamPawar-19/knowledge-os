// src/server/processing/documents/clean-text.ts

export function cleanText(text: string): string {
  return (
    text
      // Normalize line endings
      .replace(/\r\n/g, "\n")
      .replace(/\r/g, "\n")

      // Replace tabs with spaces
      .replace(/\t/g, " ")

      // Remove trailing spaces
      .replace(/[ \t]+$/gm, "")

      // Collapse multiple spaces
      .replace(/ {2,}/g, " ")

      // Collapse excessive blank lines
      .replace(/\n{3,}/g, "\n\n")

      // Trim the final result
      .trim()
  );
}