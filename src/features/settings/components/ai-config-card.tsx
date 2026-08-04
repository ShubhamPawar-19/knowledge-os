"use client";

import { useEffect, useState } from "react";
import { AIProvider } from "@prisma/client";
import {
    ChevronDown,
    ChevronUp,
} from "lucide-react";
import { toast } from "sonner";

import { AI_CATALOG } from "@/src/lib/ai/catalog";
import {
    getAIConfig,
    updateAIConfig,
} from "../actions/ai-config";

import { ProviderLabel } from "@/src/components/provider/provider-label";

import { Button } from "@/src/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
} from "@/src/components/ui/card";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/src/components/ui/collapsible";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/src/components/ui/select";
export function AIConfigCard() {
    const [open, setOpen] = useState(false);

    const [saving, setSaving] = useState(false);

    const [initialConfig, setInitialConfig] = useState<{
        chatProvider: AIProvider;
        chatModel: string;
        embeddingProvider: AIProvider;
        embeddingModel: string;
    } | null>(null);

    const [chatProvider, setChatProvider] =
        useState<AIProvider>(AIProvider.OPENROUTER);

    const [chatModel, setChatModel] =
        useState("google/gemma-3-27b-it");

    const [embeddingProvider, setEmbeddingProvider] =
        useState<AIProvider>(AIProvider.GOOGLE);

    const [embeddingModel, setEmbeddingModel] =
        useState("gemini-embedding-001");

    const chatModels =
        AI_CATALOG[chatProvider].chatModels;

    const embeddingModels =
        AI_CATALOG[embeddingProvider].embeddingModels;

    const hasChanges =
        !initialConfig ||
        chatProvider !== initialConfig.chatProvider ||
        chatModel !== initialConfig.chatModel ||
        embeddingProvider !== initialConfig.embeddingProvider ||
        embeddingModel !== initialConfig.embeddingModel;

    useEffect(() => {
        async function loadConfig() {
            const config = await getAIConfig();

            if (!config) {
                setOpen(true);
                return;
            }

            setChatProvider(config.chatProvider);
            setChatModel(config.chatModel);

            setEmbeddingProvider(config.embeddingProvider);
            setEmbeddingModel(config.embeddingModel);

            setInitialConfig({
                chatProvider: config.chatProvider,
                chatModel: config.chatModel,
                embeddingProvider: config.embeddingProvider,
                embeddingModel: config.embeddingModel,
            });
        }

        loadConfig();
    }, []);

    async function save() {
        try {
            setSaving(true);

            await updateAIConfig({
                chatProvider,
                chatModel,
                embeddingProvider,
                embeddingModel,
            });

            setInitialConfig({
                chatProvider,
                chatModel,
                embeddingProvider,
                embeddingModel,
            });

            toast.success("Configuration saved.");
        } catch {
            toast.error("Failed to save configuration.");
        } finally {
            setSaving(false);
        }
    }

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
                                    AI Configuration
                                </h3>

                                <p className="mt-1 text-sm text-muted-foreground">
                                    {AI_CATALOG[chatProvider].label} • {chatModel}
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
                    <CardContent className="space-y-8">
                        <div className="space-y-5 rounded-xl border p-5">
                            <div>
                                <h4 className="font-medium">
                                    Chat Model
                                </h4>

                                <p className="text-sm text-muted-foreground">
                                    Choose the LLM used
                                    for conversations.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">
                                    Provider
                                </label>

                                <Select
                                    value={
                                        chatProvider
                                    }
                                    onValueChange={(
                                        value,
                                    ) => {
                                        const provider =
                                            value as AIProvider;

                                        setChatProvider(
                                            provider,
                                        );

                                        const models =
                                            AI_CATALOG[
                                                provider
                                            ].chatModels;

                                        setChatModel(
                                            models[0] ??
                                            "",
                                        );
                                    }}
                                >
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>

                                    <SelectContent>
                                        {Object.values(
                                            AIProvider,
                                        ).map(
                                            (
                                                provider,
                                            ) => (
                                                <SelectItem
                                                    key={
                                                        provider
                                                    }
                                                    value={
                                                        provider
                                                    }
                                                >
                                                    <ProviderLabel
                                                        provider={
                                                            provider
                                                        }
                                                    />
                                                </SelectItem>
                                            ),
                                        )}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">
                                    Model
                                </label>

                                <Select
                                    value={chatModel}
                                    onValueChange={(value) => {
                                        if (value) {
                                            setChatModel(value);
                                        }
                                    }}
                                >
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>

                                    <SelectContent>
                                        {chatModels.map(
                                            (
                                                model,
                                            ) => (
                                                <SelectItem
                                                    key={
                                                        model
                                                    }
                                                    value={
                                                        model
                                                    }
                                                >
                                                    {model}
                                                </SelectItem>
                                            ),
                                        )}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="space-y-5 rounded-xl border p-5">
                            <div>
                                <h4 className="font-medium">
                                    Embeddings
                                </h4>

                                <p className="text-sm text-muted-foreground">
                                    Used for document
                                    search and retrieval.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">
                                    Provider
                                </label>

                                <Select
                                    value={
                                        embeddingProvider
                                    }
                                    onValueChange={(
                                        value,
                                    ) => {
                                        const provider =
                                            value as AIProvider;

                                        setEmbeddingProvider(
                                            provider,
                                        );

                                        const models =
                                            AI_CATALOG[
                                                provider
                                            ]
                                                .embeddingModels;

                                        setEmbeddingModel(
                                            models[0] ??
                                            "",
                                        );
                                    }}
                                >
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>

                                    <SelectContent>
                                        {Object.entries(
                                            AI_CATALOG,
                                        )
                                            .filter(
                                                (
                                                    [, value],
                                                ) =>
                                                    value
                                                        .embeddingModels
                                                        .length >
                                                    0,
                                            )
                                            .map(
                                                (
                                                    [
                                                        provider,
                                                    ],
                                                ) => (
                                                    <SelectItem
                                                        key={
                                                            provider
                                                        }
                                                        value={
                                                            provider
                                                        }
                                                    >
                                                        <ProviderLabel
                                                            provider={
                                                                provider as AIProvider
                                                            }
                                                        />
                                                    </SelectItem>
                                                ),
                                            )}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">
                                    Model
                                </label>

                                <Select
                                    value={embeddingModel}
                                    onValueChange={(value) => {
                                        if (value) {
                                            setEmbeddingModel(value);
                                        }
                                    }}
                                >
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>

                                    <SelectContent>
                                        {embeddingModels.map(
                                            (
                                                model,
                                            ) => (
                                                <SelectItem
                                                    key={
                                                        model
                                                    }
                                                    value={
                                                        model
                                                    }
                                                >
                                                    {model}
                                                </SelectItem>
                                            ),
                                        )}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <Button
                                onClick={save}
                                disabled={!hasChanges || saving}
                            >
                                {saving ? "Saving..." : "Save Configuration"}
                            </Button>
                        </div>
                    </CardContent>
                </CollapsibleContent>
            </Collapsible>
        </Card>
    );
}