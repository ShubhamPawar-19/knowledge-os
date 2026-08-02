export interface DashboardStats {
  documents: number;
  chunks: number;
  chats: number;
  storage: number;
}

export interface DashboardData {
  stats: DashboardStats;
  recentDocuments: Awaited<
    ReturnType<typeof import("@/src/features/dashboard/queries/get-dashboard").getDashboardData>
  >["recentDocuments"];
  recentChats: Awaited<
    ReturnType<typeof import("@/src/features/dashboard/queries/get-dashboard").getDashboardData>
  >["recentChats"];
}