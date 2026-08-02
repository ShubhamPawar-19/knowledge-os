import { DocumentStatus } from "@prisma/client";
import { Loader2, CheckCircle2, CircleDashed, XCircle } from "lucide-react";

import { Badge } from "@/src/components/ui/badge";

interface DocumentStatusBadgeProps {
  status: DocumentStatus;
}

export function DocumentStatusBadge({
  status,
}: DocumentStatusBadgeProps) {
  switch (status) {
    case DocumentStatus.UPLOADED:
      return (
        <Badge variant="secondary">
          <CircleDashed className="mr-1 h-3.5 w-3.5" />
          Uploaded
        </Badge>
      );

    case DocumentStatus.PROCESSING:
      return (
        <Badge className="bg-yellow-500 hover:bg-yellow-500">
          <Loader2 className="mr-1 h-3.5 w-3.5 animate-spin" />
          Processing
        </Badge>
      );

    case DocumentStatus.READY:
      return (
        <Badge className="bg-green-600 hover:bg-green-600">
          <CheckCircle2 className="mr-1 h-3.5 w-3.5" />
          Ready
        </Badge>
      );

    case DocumentStatus.FAILED:
      return (
        <Badge variant="destructive">
          <XCircle className="mr-1 h-3.5 w-3.5" />
          Failed
        </Badge>
      );

    default:
      return null;
  }
}