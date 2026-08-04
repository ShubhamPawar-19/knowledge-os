"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AIProvider } from "@prisma/client";
import { toast } from "sonner";

import { AI_CATALOG } from "@/src/lib/ai/catalog";

import {
  getAPIKeys,
  saveAPIKey,
  deleteAPIKey,
} from "../actions/api-keys";

import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/src/components/ui/collapsible";
import { Input } from "@/src/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import {
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Badge } from "@/src/components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/src/components/ui/alert-dialog";


export function APIKeysCard() {
  const [open, setOpen] =
    useState(false);

  useEffect(() => {
    loadKeys();
  }, []);

  const [keys, setKeys] = useState<
    {
      provider: AIProvider;
      createdAt: Date;
    }[]
  >([]);


  useEffect(() => {
    if (keys.length === 0) {
      setOpen(true);
    }
  }, [keys]);

  const [provider, setProvider] =
    useState<AIProvider>(
      AIProvider.OPENAI,
    );

  const [apiKey, setApiKey] =
    useState("");

  async function loadKeys() {
    const data = await getAPIKeys();
    setKeys(data);
  }

  useEffect(() => {
    loadKeys();
  }, []);

  const [saving, setSaving] = useState(false);

async function save() {
  try {
    setSaving(true);

    await saveAPIKey(
      provider,
      apiKey,
    );

    toast.success("API key saved");

    setApiKey("");

    await loadKeys();
  } catch {
    toast.error(
      "Failed to save API key",
    );
  } finally {
    setSaving(false);
  }
}
  async function remove(
    provider: AIProvider,
  ) {
    try {
      setDeletingProvider(
        provider,
      );

      await deleteAPIKey(
        provider,
      );

      toast.success(
        "API key removed",
      );

      await loadKeys();

    } catch {
      toast.error(
        "Failed to remove key",
      );
    } finally {
      setDeletingProvider(
        null,
      );
    }
  }
  function isConnected(
    provider: AIProvider,
  ) {
    return keys.some(
      (key) =>
        key.provider === provider,
    );
  }

  function getStatus(provider: AIProvider) {
    return isConnected(provider)
      ? {
        label: "Connected",
        variant: "default" as const,
      }
      : {
        label: "Not Connected",
        variant: "secondary" as const,
      };
  }


  const [
    deletingProvider,
    setDeletingProvider,
  ] = useState<AIProvider | null>(
    null,
  );
  return (
    <Card>
      <Collapsible
        open={open}
        onOpenChange={setOpen}
      >
        <CardHeader className="pb-4">
          <CollapsibleTrigger className="w-full rounded-2xl p-2">
            <div className="flex w-full items-center justify-between rounded-2xl p-2 transition-colors hover:bg-muted/50">
              <div className="text-left">
                <h3 className="text-lg font-semibold">
                  API Keys
                </h3>
                <p className="text-sm text-muted-foreground">
                  Connect your own provider API keys
                </p>
              </div>

              {open ? (
                <ChevronUp className="h-5 w-5 text-muted-foreground" />
              ) : (
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              )}
            </div>
          </CollapsibleTrigger>
        </CardHeader>

        <CollapsibleContent>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <Select
                value={provider}
                onValueChange={(
                  value,
                ) =>
                  setProvider(
                    value as AIProvider,
                  )
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>

                <SelectContent>
                  {Object.values(
                    AIProvider,
                  ).map(
                    (provider) => (
                      <SelectItem
                        key={provider}
                        value={provider}
                      >
                        <div className="flex items-center gap-2">
                          <Image
                            src={
                              AI_CATALOG[
                                provider
                              ].logo
                            }
                            alt={
                              AI_CATALOG[
                                provider
                              ].label
                            }
                            width={18}
                            height={18}
                            className="object-contain"
                          />

                          <span>
                            {
                              AI_CATALOG[
                                provider
                              ].label
                            }
                          </span>
                        </div>
                      </SelectItem>
                    ),
                  )}
                </SelectContent>
              </Select>

              <Input
                type="password"
                placeholder="Enter API key"
                value={apiKey}
                onChange={(e) =>
                  setApiKey(
                    e.target.value,
                  )
                }
              />

              <Button
                onClick={save}
                disabled={
                  saving ||
                  apiKey.trim() === ""
                }
                className="w-full"
              >
                {saving
                  ? "Saving..."
                  : "Save API Key"}
              </Button>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-medium">
                Connected Providers ({keys.length})
              </h3>

              {Object.values(
                AIProvider,
              ).map(
                (provider) => (
                  <div
                    key={provider}
                    className="flex items-center justify-between rounded-lg border p-3"
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        src={AI_CATALOG[provider].logo}
                        alt={AI_CATALOG[provider].label}
                        width={22}
                        height={22}
                        className="object-contain"
                      />

                      <div>
                        <p className="font-medium">
                          {AI_CATALOG[provider].label}
                        </p>

                        <Badge
                          variant={getStatus(provider).variant}
                          className="mt-1"
                        >
                          {getStatus(provider).label}
                        </Badge>
                      </div>
                    </div>

                    {
                      isConnected(
                        provider,
                      ) && (
                        <AlertDialog>
                          <AlertDialogTrigger>
                            <Button
                              variant="destructive"
                              size="sm"
                              disabled={deletingProvider === provider}
                            >
                              {deletingProvider === provider
                                ? "Deleting..."
                                : "Delete"}
                            </Button>
                          </AlertDialogTrigger>

                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>
                                Delete API Key?
                              </AlertDialogTitle>

                              <AlertDialogDescription>
                                This will permanently remove your{" "}
                                <strong>
                                  {AI_CATALOG[provider].label}
                                </strong>{" "}
                                API key from KnowledgeOS.
                              </AlertDialogDescription>
                            </AlertDialogHeader>

                            <AlertDialogFooter>
                              <AlertDialogCancel>
                                Cancel
                              </AlertDialogCancel>

                              <AlertDialogAction
                                onClick={() => remove(provider)}
                              >
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      )}
                  </div>
                ),
              )}
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card >
  );
}