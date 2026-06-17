"use client";

import {
  Blocks,
  Files,
  GitBranch,
  Menu,
  Search,
  X,
} from "lucide-react";

type Props = {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
  onOpenCommandPalette: () => void;
};

const items = [
  { id: "explorer", icon: Files, active: true, mobile: true },
  { id: "search", icon: Search, active: false, mobile: false },
  { id: "git", icon: GitBranch, active: false, mobile: false },
  { id: "extensions", icon: Blocks, active: false, mobile: false },
];

export default function ActivityBar({
  sidebarOpen,
  onToggleSidebar,
  onOpenCommandPalette,
}: Props) {
  return (
    <aside className="relative z-40 hidden w-10 shrink-0 flex-col items-center gap-0.5 border-r border-tn-border bg-tn-bg-dark py-2 sm:flex sm:w-12 sm:gap-1">

      {items.map((item) => {
        const Icon = item.icon;
        const handleClick =
          item.id === "explorer"
            ? onToggleSidebar
            : item.id === "search"
              ? onOpenCommandPalette
              : undefined;

        return (
          <button
            key={item.id}
            onClick={handleClick}
            disabled={!handleClick}
            className={`relative hidden h-9 w-9 items-center justify-center rounded transition-all duration-200 sm:flex sm:h-10 sm:w-10 ${
              item.mobile ? "flex" : "hidden sm:flex"
            } ${
              item.active
                ? "text-tn-blue drop-shadow-[0_0_6px_rgba(122,162,247,0.5)]"
                : handleClick
                  ? "text-tn-muted hover:text-tn-cyan hover:bg-tn-bg-hover hover:shadow-[0_0_16px_-2px_rgba(125,207,255,0.35)]"
                  : "text-tn-muted/40 cursor-default"
            }`}
            aria-label={item.id}
            title={item.id === "search" ? "Go to file (Ctrl/Cmd+P)" : undefined}
          >
            {item.active && (
              <span className="absolute left-0 h-5 w-0.5 rounded-r bg-tn-blue shadow-[0_0_8px_rgba(122,162,247,0.8)] sm:h-6" />
            )}
            <Icon size={20} strokeWidth={1.5} className="sm:h-[22px] sm:w-[22px]" />
          </button>
        );
      })}
    </aside>
  );
}
