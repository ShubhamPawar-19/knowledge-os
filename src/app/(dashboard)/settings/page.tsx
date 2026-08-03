import Link from "next/link";

import { Button } from "@/src/components/ui/button";


export default function SettingsPage() {
  return (
    <div className="max-w-3xl space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Settings
        </h1>

        <p className="mt-2 text-muted-foreground">
          Manage your account and AI configuration.
        </p>
      </div>


      <div className="rounded-xl border p-6 space-y-4">

        <div>
          <h2 className="text-lg font-semibold">
            AI Models
          </h2>

          <p className="text-sm text-muted-foreground">
            Configure your chat models, embedding models,
            and API credentials.
          </p>
        </div>


        <Link href="/settings/credentials">
          <Button
            variant="outline"
            className="h-12 w-full text-base"
          >
            Model Configuration
          </Button>
        </Link>

      </div>

    </div>
  );
}