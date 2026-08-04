import {
  Database,
  FileText,
  HardDrive,
  MessageSquare,
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
        description="Knowledge sources uploaded"
        icon={<FileText className="h-5 w-5" />}
      />

      <StatsCard
        title="Conversations"
        value={stats.chats}
        description="AI chat sessions"
        icon={<MessageSquare className="h-5 w-5" />}
      />

      <StatsCard
        title="Indexed Chunks"
        value={stats.chunks}
        description="Searchable knowledge"
        icon={<Database className="h-5 w-5" />}
      />

      <StatsCard
        title="Storage"
        value={formatBytes(stats.storage)}
        description="Workspace storage used"
        icon={<HardDrive className="h-5 w-5" />}
      />
    </div>
  );
}