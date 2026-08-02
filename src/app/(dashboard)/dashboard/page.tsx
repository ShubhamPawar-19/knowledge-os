import { DashboardCards } from "@/src/features/dashboard/components/dashboard-cards";
import { RecentChats } from "@/src/features/dashboard/components/recent-chats";
import { RecentDocuments } from "@/src/features/dashboard/components/recent-documents";
import { getDashboardData } from "@/src/features/dashboard/queries/get-dashboard";
import { QuickActions } from "@/src/features/dashboard/components/quick-actions";

export default async function DashboardPage() {
  const data = await getDashboardData();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Dashboard
        </h1>

        <p className="text-muted-foreground">
          Welcome back! Here's an overview of your workspace.
        </p>
      </div>

      <DashboardCards stats={data.stats} />

      <div className="grid gap-6 lg:grid-cols-2">
        <RecentDocuments documents={data.recentDocuments} />
        <RecentChats chats={data.recentChats} />
      </div>

      <QuickActions />
      
    </div>
  );
}