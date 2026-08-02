import {
  FileText,
  Database,
  MessageSquare,
  HardDrive,
} from "lucide-react";

import { DashboardStats } from "../types";
import { StatsCard } from "./stats-card";
import { formatBytes } from "@/src/lib/utils/format-bytes";

interface DashboardCardsProps {
  stats: DashboardStats;
}

export function DashboardCards({
  stats,
}: DashboardCardsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <StatsCard
        title="Documents"
        value={stats.documents}
        icon={<FileText className="text-muted-foreground h-4 w-4" />}
      />

      <StatsCard
        title="Chunks"
        value={stats.chunks}
        icon={<Database className="text-muted-foreground h-4 w-4" />}
      />

      <StatsCard
        title="Chats"
        value={stats.chats}
        icon={<MessageSquare className="text-muted-foreground h-4 w-4" />}
      />

      <StatsCard
        title="Storage"
        value={formatBytes(stats.storage)}
        icon={<HardDrive className="text-muted-foreground h-4 w-4" />}
      />
    </div>
  );
}