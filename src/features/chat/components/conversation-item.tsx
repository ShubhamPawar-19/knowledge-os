"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  MessageSquare,
  MoreHorizontal,
  Pencil,
  Trash2,
} from "lucide-react";

import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/src/components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";

import { useDeleteConversation } from "../hooks/use-delete-conversation";
import { useRenameConversation } from "../hooks/use-rename-conversation";

interface ConversationItemProps {
  id: string;
  title: string;
}

export function ConversationItem({
  id,
  title,
}: ConversationItemProps) {
  const { remove } = useDeleteConversation();
  const { rename } = useRenameConversation();

  const inputRef = useRef<HTMLInputElement>(null);

  const [deleteOpen, setDeleteOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(title);

  useEffect(() => {
    setValue(title);
  }, [title]);

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
      inputRef.current?.select();
    }
  }, [editing]);

  async function save() {
    const next = value.trim();

    if (!next) {
      setValue(title);
      setEditing(false);
      return;
    }

    if (next !== title) {
      await rename(id, next);
    }

    setEditing(false);
  }

  function cancel() {
    setValue(title);
    setEditing(false);
  }

  async function onDelete() {
    await remove(id);
    setDeleteOpen(false);
  }

  return (
    <>
      <div className="group flex items-center gap-2 rounded-lg hover:bg-accent">
        {editing ? (
          <div className="flex flex-1 items-center gap-2 px-3 py-2">
            <MessageSquare className="h-4 w-4 shrink-0" />

            <Input
              ref={inputRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onBlur={save}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  void save();
                }

                if (e.key === "Escape") {
                  cancel();
                }
              }}
              className="h-7"
            />
          </div>
        ) : (
          <Link
            href={`/dashboard/chat/${id}`}
            className="flex min-w-0 flex-1 items-center gap-2 px-3 py-2 text-sm"
          >
            <MessageSquare className="h-4 w-4 shrink-0" />

            <span className="truncate">{title}</span>
          </Link>
        )}

        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="mr-1 h-8 w-8 opacity-0 transition-opacity duration-150 group-hover:opacity-100 focus:opacity-100"
              />
            }
          >
            <MoreHorizontal className="h-4 w-4" />
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => setEditing(true)}
            >
              <Pencil className="h-4 w-4" />
              Rename
            </DropdownMenuItem>

            <DropdownMenuItem
              variant="destructive"
              onClick={() => setDeleteOpen(true)}
            >
              <Trash2 className="h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <AlertDialog
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Delete Conversation?
            </AlertDialogTitle>

            <AlertDialogDescription>
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>
              Cancel
            </AlertDialogCancel>

            <AlertDialogAction
              variant="destructive"
              onClick={onDelete}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}