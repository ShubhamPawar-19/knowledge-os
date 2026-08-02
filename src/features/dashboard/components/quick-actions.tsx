import Link from "next/link";
import { Plus, Upload } from "lucide-react";

import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-3 sm:flex-row">
        <Link href="/dashboard/chat/new" className="flex-1">
          <Button className="w-full">
            <Plus className="mr-2 h-4 w-4" />
            New Chat
          </Button>
        </Link>

        <Link href="/dashboard/documents" className="flex-1">
          <Button variant="outline" className="w-full">
            <Upload className="mr-2 h-4 w-4" />
            Upload Document
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}