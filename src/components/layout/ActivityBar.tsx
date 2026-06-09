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
};

const items = [
  { id: "explorer", icon: Files, active: true, mobile: true },
  { id: "search", icon: Search, active: false, mobile: false },
  { id: "git", icon: GitBranch, active: false, mobile: false },
  { id: "extensions", icon: Blocks, active: false, mobile: false },
];

export default function ActivityBar({ sidebarOpen, onToggleSidebar }: Props) {
  return (
    <aside className="relative z-40 hidden w-10 shrink-0 flex-col items-center gap-0.5 border-r border-tn-border bg-tn-bg-dark py-2 sm:flex sm:w-12 sm:gap-1">
      <button
        onClick={onToggleSidebar}
        className="mb-1 hidden h-9 w-9 items-center justify-center rounded text-tn-muted transition-colors hover:bg-tn-bg-hover hover:text-tn-fg sm:flex sm:mb-2 sm:h-10 sm:w-10 lg:hidden"
        aria-label={sidebarOpen ? "Close explorer" : "Open explorer"}
        aria-expanded={sidebarOpen}
      >
        {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {items.map((item) => {
        const Icon = item.icon;

        return (
          <button
            key={item.id}
            onClick={item.id === "explorer" ? onToggleSidebar : undefined}
            className={`relative hidden h-9 w-9 items-center justify-center rounded transition-colors sm:flex sm:h-10 sm:w-10 ${
              item.mobile ? "flex" : "hidden sm:flex"
            } ${
              item.active
                ? "text-tn-fg"
                : "text-tn-muted hover:text-tn-fg"
            }`}
            aria-label={item.id}
          >
            {item.active && (
              <span className="absolute left-0 h-5 w-0.5 rounded-r bg-tn-fg sm:h-6" />
            )}
            <Icon size={20} strokeWidth={1.5} className="sm:h-22px sm:w-22px" />
          </button>
        );
      })}
    </aside>
  );
}
