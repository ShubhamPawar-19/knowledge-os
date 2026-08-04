import { Users } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

import { Badge } from "@/src/components/ui/badge";

interface MembersCardProps {
  members: {
    id: string;
    role: string;
    user: {
      id: string;
      name: string | null;
      email: string;
      image: string | null;
    };
  }[];
}

function formatRole(role: string) {
  return (
    role.charAt(0).toUpperCase() +
    role.slice(1).toLowerCase()
  );
}

export function MembersCard({
  members,
}: MembersCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-muted-foreground" />

          <CardTitle>
            Members
          </CardTitle>
        </div>

        <CardDescription>
          Manage people who have access to this workspace.
        </CardDescription>
      </CardHeader>

      <CardContent>
        {members.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-10 text-center">
            <Users className="mb-3 h-8 w-8 text-muted-foreground" />

            <p className="font-medium">
              No members yet
            </p>

            <p className="text-muted-foreground mt-1 text-sm">
              Workspace members will appear here.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {members.map((member) => {
              const displayName =
                member.user.name ??
                member.user.email;

              const initials =
                displayName
                  .charAt(0)
                  .toUpperCase();

              return (
                <div
                  key={member.id}
                  className="
                    flex flex-col gap-3 rounded-xl border p-4
                    transition-colors
                    hover:bg-muted/50
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  "
                >
                  <div className="flex items-center gap-3">
                    {member.user.image ? (
                      <img
                        src={member.user.image}
                        alt={`${displayName} avatar`}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    ) : (
                      <div
                        className="
                          flex h-10 w-10 items-center
                          justify-center rounded-full
                          bg-primary/10
                          text-sm font-semibold
                          text-primary
                        "
                      >
                        {initials}
                      </div>
                    )}

                    <div className="min-w-0">
                      <p className="truncate font-medium">
                        {displayName}
                      </p>

                      <p className="truncate text-sm text-muted-foreground">
                        {member.user.email}
                      </p>
                    </div>
                  </div>


                  <Badge
                    variant={
                      member.role === "OWNER"
                        ? "default"
                        : "secondary"
                    }
                    className="w-fit"
                  >
                    {formatRole(member.role)}
                  </Badge>
                </div>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
}