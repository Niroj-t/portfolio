"use client";

import { Menu, Search } from "lucide-react";
import WindowControls from "./WindowControls";

type Props = {
  onOpenCommandPalette: () => void;
  onToggleSidebar: () => void;
  activeFile: string;
};

export default function TitleBar({
  onOpenCommandPalette,
  onToggleSidebar,
  activeFile,
}: Props) {
  return (
    <header className="flex h-10 shrink-0 items-center justify-between border-b border-tn-border bg-tn-bg-dark px-2 text-[11px] sm:h-8 sm:px-3 sm:text-[12px]">
      <button
        type="button"
        onClick={onToggleSidebar}
        className="flex h-9 w-9 items-center justify-center rounded text-tn-muted transition-colors hover:bg-tn-bg-hover hover:text-tn-fg lg:hidden"
        aria-label="Open explorer"
      >
        <Menu size={18} />
      </button>

      <div className="hidden sm:block">
        <WindowControls />
      </div>

      <div className="flex min-w-0 flex-1 items-center justify-center gap-2 text-tn-fg">
        <span className="text-tn-muted">~</span>
        <span className="truncate">niroj-thapa | Portfolio</span>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onOpenCommandPalette}
          className="flex h-9 w-9 items-center justify-center rounded text-tn-muted transition-colors hover:bg-tn-bg-hover hover:text-tn-fg"
          aria-label="Search"
        >
        </button>
      </div>
    </header>
  );
}
