"use client";

import { useEffect, useState } from "react";
import { AIProvider } from "@prisma/client";
import { toast } from "sonner";

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

import { Input } from "@/src/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";


const PROVIDERS = [
  {
    id: AIProvider.OPENAI,
    name: "OpenAI",
  },
  {
    id: AIProvider.OPENROUTER,
    name: "OpenRouter",
  },
  {
    id: AIProvider.GOOGLE,
    name: "Google Gemini",
  },
  {
    id: AIProvider.ANTHROPIC,
    name: "Anthropic",
  },
  {
    id: AIProvider.VOYAGE,
    name: "Voyage AI",
  },
  {
    id: AIProvider.COHERE,
    name: "Cohere",
  },
];


export function APIKeysCard() {
  const [keys, setKeys] = useState<
    {
      provider: AIProvider;
      createdAt: Date;
    }[]
  >([]);

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


  async function save() {
    try {
      await saveAPIKey(
        provider,
        apiKey,
      );

      toast.success(
        "API key saved",
      );

      setApiKey("");

      loadKeys();

    } catch {
      toast.error(
        "Failed to save API key",
      );
    }
  }


  async function remove(
    provider: AIProvider,
  ) {
    try {
      await deleteAPIKey(
        provider,
      );

      toast.success(
        "API key removed",
      );

      loadKeys();

    } catch {
      toast.error(
        "Failed to remove key",
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


  return (
    <Card>
      <CardHeader>
        <CardTitle>
          API Keys
        </CardTitle>
      </CardHeader>


      <CardContent className="space-y-6">

        <div className="space-y-3">

          <Select
            value={provider}
            onValueChange={(value) =>
              setProvider(
                value as AIProvider,
              )
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              {PROVIDERS.map(
                (item) => (
                  <SelectItem
                    key={item.id}
                    value={item.id}
                  >
                    {item.name}
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
            className="w-full"
          >
            Save API Key
          </Button>

        </div>



        <div className="space-y-3">

          <h3 className="text-sm font-medium">
            Connected Providers
          </h3>


          {PROVIDERS.map(
            (item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border rounded-lg p-3"
              >

                <div>
                  <p className="font-medium">
                    {item.name}
                  </p>

                  <p className="text-xs text-muted-foreground">
                    {
                      isConnected(
                        item.id,
                      )
                        ? "Connected"
                        : "Not configured"
                    }
                  </p>
                </div>


                {isConnected(item.id) && (
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() =>
                      remove(item.id)
                    }
                  >
                    Delete
                  </Button>
                )}

              </div>
            ),
          )}

        </div>

      </CardContent>
    </Card>
  );
}