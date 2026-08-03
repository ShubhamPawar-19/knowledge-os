"use client";

import { useEffect, useState } from "react";
import { AIProvider } from "@prisma/client";

import { AI_CATALOG } from "@/src/lib/ai/catalog";
import { getAIConfig, updateAIConfig } from "../actions/ai-config";

import { Button } from "@/src/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/src/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/src/components/ui/select";
import { toast } from "sonner";


export function AIConfigCard() {
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
        AI_CATALOG[embeddingProvider]
            .embeddingModels;

    useEffect(() => {
        async function loadConfig() {
            const config = await getAIConfig();

            if (!config) return;

            setChatProvider(config.chatProvider);
            setChatModel(config.chatModel);

            setEmbeddingProvider(
                config.embeddingProvider,
            );
            setEmbeddingModel(
                config.embeddingModel,
            );
        }

        loadConfig();
    }, []);

    async function save() {
        try {
            await updateAIConfig({
                chatProvider,
                chatModel,
                embeddingProvider,
                embeddingModel,
            });

            toast.success("Configuration saved.");
        } catch {
            toast.error("Failed to save configuration.");
        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    AI Configuration
                </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
                {/* Chat Provider */}

                <div className="space-y-2">
                    <p className="text-sm font-medium">
                        Chat Provider
                    </p>

                    <Select
                        value={chatProvider}
                        onValueChange={(value) => {
                            const provider =
                                value as AIProvider;

                            setChatProvider(provider);

                            const models = AI_CATALOG[provider].chatModels;

                            setChatModel(models[0] ?? "");
                        }}
                    >
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>

                        <SelectContent>
                            {Object.values(AIProvider).map(
                                (provider) => (
                                    <SelectItem
                                        key={provider}
                                        value={provider}
                                    >
                                        {AI_CATALOG[provider].label}
                                    </SelectItem>
                                ),
                            )}
                        </SelectContent>
                    </Select>
                </div>

                {/* Chat Model */}

                <div className="space-y-2">
                    <p className="text-sm font-medium">
                        Chat Model
                    </p>

                    <Select
                        value={chatModel}
                        disabled={chatModels.length < 1}
                        onValueChange={(value) => {
                            if (value === null) return;
                            setChatModel(value);
                        }}
                    >
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>

                        <SelectContent>
                            {chatModels.map((model) => (
                                <SelectItem
                                    key={model}
                                    value={model}
                                >
                                    {model}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* Embedding Provider */}

                <div className="space-y-2">
                    <p className="text-sm font-medium">
                        Embedding Provider
                    </p>

                    <Select
                        value={embeddingProvider}
                        onValueChange={(value) => {
                            const provider =
                                value as AIProvider;

                            setEmbeddingProvider(
                                provider,
                            );

                            const models = AI_CATALOG[provider].embeddingModels;

                            setEmbeddingModel(
                                models[0] ?? "",
                            );
                        }}
                    >
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>

                        <SelectContent>
                            {Object.entries(AI_CATALOG)
                                .filter(
                                    ([, provider]) =>
                                        provider.embeddingModels.length > 0,
                                )
                                .map(([provider]) => (
                                    <SelectItem
                                        key={provider}
                                        value={provider}
                                    >
                                        {
                                            AI_CATALOG[
                                                provider as AIProvider
                                            ].label
                                        }
                                    </SelectItem>
                                ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* Embedding Model */}

                <div className="space-y-2">
                    <p className="text-sm font-medium">
                        Embedding Model
                    </p>

                    <Select
                        value={embeddingModel}
                        disabled={embeddingModels.length < 1}
                        onValueChange={(value) => {
                            if (value !== null) {
                                setEmbeddingModel(value);
                            }
                        }}
                    >
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>

                        <SelectContent>
                            {embeddingModels.map(
                                (model) => (
                                    <SelectItem
                                        key={model}
                                        value={model}
                                    >
                                        {model}
                                    </SelectItem>
                                ),
                            )}
                        </SelectContent>
                    </Select>
                </div>

                <Button
                    onClick={save}
                    className="w-full"
                >
                    Save Configuration
                </Button>
            </CardContent>
        </Card>
    );
}