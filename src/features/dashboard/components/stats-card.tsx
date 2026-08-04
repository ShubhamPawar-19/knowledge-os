import { ReactNode } from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

interface StatsCardProps {
  title: string;
  value: ReactNode;
  description?: string;
  icon: ReactNode;
}

export function StatsCard({
  title,
  value,
  description,
  icon,
}: StatsCardProps) {
  return (
    <Card className="group hover:border-primary/20 hover:shadow-md transition-all duration-200 hover:-translate-y-1">
      <CardHeader className="flex flex-row items-start justify-between pb-3">
        <div className="space-y-1">
          <CardTitle className="text-muted-foreground text-sm font-medium">
            {title}
          </CardTitle>
        </div>

        <div className="bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-200">
          {icon}
        </div>
      </CardHeader>

      <CardContent className="space-y-2">
        <div className="text-3xl font-bold tracking-tight">
          {value}
        </div>

        {description && (
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
}