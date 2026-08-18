import Link from "next/link";
import {
  ArrowRight,
  Plus,
  Upload,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>

        <CardDescription>
          Frequently used workspace actions.
        </CardDescription>
      </CardHeader>

      <CardContent className="grid gap-4 md:grid-cols-2">
        <Link
          href="/chats/"
          className="group hover:border-primary/30 hover:bg-muted/50 rounded-xl border p-5 transition-all duration-200 hover:-translate-y-1"
        >
          <div className="flex items-start justify-between">
            <div className="bg-primary/10 text-primary flex h-11 w-11 items-center justify-center rounded-xl">
              <Plus className="h-5 w-5" />
            </div>

            <ArrowRight className="text-muted-foreground h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </div>

          <div className="mt-5">
            <h3 className="font-semibold">
              New Conversation
            </h3>

            <p className="text-muted-foreground mt-1 text-sm">
              Start chatting with your knowledge base.
            </p>
          </div>
        </Link>

        <Link
          href="/documents/"
          className="group hover:border-primary/30 hover:bg-muted/50 rounded-xl border p-5 transition-all duration-200 hover:-translate-y-1"
        >
          <div className="flex items-start justify-between">
            <div className="bg-primary/10 text-primary flex h-11 w-11 items-center justify-center rounded-xl">
              <Upload className="h-5 w-5" />
            </div>

            <ArrowRight className="text-muted-foreground h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </div>

          <div className="mt-5">
            <h3 className="font-semibold">
              Upload Documents
            </h3>

            <p className="text-muted-foreground mt-1 text-sm">
              Add new knowledge for AI-powered search.
            </p>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
}