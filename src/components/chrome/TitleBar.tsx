"use client";

import WindowControls from "./WindowControls";

type Props = {
  onOpenCommandPalette: () => void;
};

export default function TitleBar({ onOpenCommandPalette }: Props) {
  return (
    <header className="flex h-8 shrink-0 items-center justify-between border-b border-tn-border bg-tn-bg-dark text-[11px] sm:text-[12px]">
      <div className="hidden sm:block">
        <WindowControls />
      </div>
      <button
        onClick={onOpenCommandPalette}
        className="flex min-w-0 flex-1 items-center justify-center gap-1 px-2 text-tn-muted transition-colors hover:text-tn-fg sm:gap-2 sm:px-0"
      >
        <span className="truncate text-tn-fg">niroj-thapa</span>
        <span className="shrink-0 text-tn-muted">:</span>
        <span className="hidden truncate sm:inline">Portfolio</span>
        <span className="shrink-0 rounded border border-tn-border px-1 py-0.5 text-[9px] text-tn-muted sm:ml-4 sm:px-1.5 sm:text-[10px]">
          <span className="hidden sm:inline">Ctrl+P</span>
          <span className="sm:hidden">⌘P</span>
        </span>
      </button>
      <div className="w-2 shrink-0 sm:w-72px" />
    </header>
  );
}
