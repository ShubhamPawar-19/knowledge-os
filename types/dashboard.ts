export interface DashboardUser {
  id: string;
  name: string;
  email: string;
  image?: string | null;
}

export interface DashboardWorkspace {
  id: string;
  name: string;
  slug: string;
}