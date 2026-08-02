import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/dashboard"
      className="text-xl font-semibold tracking-tight"
    >
      KnowledgeOS
    </Link>
  );
}