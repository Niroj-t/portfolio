"use client";

import { SquareTerminal } from "lucide-react";
import { useClock } from "@/hooks/useClock";

type Props = {
  activeFile: string;
  terminalOpen: boolean;
  onToggleTerminal: () => void;
};

function getLanguage(filename: string) {
  if (filename.endsWith(".js")) return "JavaScript";
  if (filename.endsWith(".json")) return "JSON";
  if (filename.endsWith(".html")) return "HTML";
  if (filename.endsWith(".md")) return "Markdown";
  if (filename.endsWith(".css")) return "CSS";
  if (filename.endsWith(".sh")) return "Shell";
  if (filename.endsWith(".ts") || filename.endsWith(".tsx"))
    return "TypeScript React";
  return "Plain Text";
}

export default function StatusBar({
  activeFile,
  terminalOpen,
  onToggleTerminal,
}: Props) {
  const time = useClock();

  return (
    <footer className="flex h-[22px] shrink-0 items-center justify-between gap-2 overflow-x-auto bg-tn-blue px-2 text-[10px] text-tn-bg-dark sm:gap-4 sm:px-3 sm:text-[11px]">
      <div className="flex shrink-0 items-center gap-2 sm:gap-4">
        <span>⎇ main</span>
        <span className="hidden sm:inline">⚠ 0</span>
        <span className="hidden sm:inline">⊗ 0</span>
        <span className="hidden sm:inline">↻ Portfolio</span>
        <button
          type="button"
          onClick={onToggleTerminal}
          className={`flex items-center gap-1 rounded px-1.5 py-px transition-colors hover:bg-black/10 ${
            terminalOpen ? "bg-black/15 font-semibold" : ""
          }`}
          aria-pressed={terminalOpen}
          aria-label="Toggle terminal"
          title="Toggle terminal (Ctrl/Cmd+`)"
        >
          <SquareTerminal size={12} />
          <span className="hidden sm:inline">Terminal</span>
        </button>
      </div>
      <div className="flex shrink-0 items-center gap-2 sm:gap-4">
        <span className="hidden max-w-[8rem] truncate md:inline">{activeFile}</span>
        <span className="hidden lg:inline">UTF-8</span>
        <span className="hidden sm:inline">{getLanguage(activeFile)}</span>
        <span className="hidden xl:inline">Prettier</span>
        <span className="hidden min-[400px]:inline">Tokyo Night</span>
        <span>{time}</span>
      </div>
    </footer>
  );
}
