"use client";

import { useEffect, useRef, useState } from "react";
import FileTreeIcon from "@/components/layout/FileTreeIcon";

type Props = {
  open: boolean;
  files: string[];
  onSelect: (file: string) => void;
  onClose: () => void;
};

export default function CommandPalette({
  open,
  files,
  onSelect,
  onClose,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const filtered = files.filter((f) =>
    f.toLowerCase().includes(query.toLowerCase()),
  );

  useEffect(() => {
    if (open) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 p-4 pt-[10vh] sm:pt-[15vh]"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-lg border border-tn-border bg-tn-bg-panel shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search files by name..."
          className="w-full border-b border-tn-border bg-transparent px-4 py-3 text-[13px] text-tn-fg outline-none placeholder:text-tn-muted"
        />
        <ul className="max-h-[50vh] overflow-y-auto py-1 sm:max-h-64">
          {filtered.length === 0 && (
            <li className="px-4 py-2 text-[13px] text-tn-muted">
              No files found
            </li>
          )}
          {filtered.map((file) => (
            <li key={file}>
              <button
                onClick={() => {
                  onSelect(file);
                  onClose();
                }}
                className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-[13px] text-tn-fg transition-colors hover:bg-tn-bg-hover active:bg-tn-bg-hover sm:py-2"
              >
                <FileTreeIcon filename={file} />
                <span className="truncate">{file}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
