// features/auth/components/auth-layout.tsx

import { APP_NAME, APP_TAGLINE } from "@/lib/constants";
import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-md space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-semibold tracking-tight">
           {APP_NAME}
          </h1>

          <p className="text-muted-foreground text-sm">
            {APP_TAGLINE}
          </p>
        </div>

        {children}
      </div>
    </main>
  );
}