interface ChatHeaderProps {
  title: string;
}

export function ChatHeader({
  title,
}: ChatHeaderProps) {
  return (
    <div className="border-b px-6 py-4">
      <h1 className="text-lg font-semibold truncate">
        {title}
      </h1>
    </div>
  );
}