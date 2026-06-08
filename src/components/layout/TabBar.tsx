"use client";

import { X } from "lucide-react";
import FileTreeIcon from "@/components/layout/FileTreeIcon";

type Props = {
  tabs: string[];
  activeTab: string;
  onSelect: (tab: string) => void;
  onClose: (tab: string) => void;
};

export default function TabBar({ tabs, activeTab, onSelect, onClose }: Props) {
  return (
    <div className="hidden h-9 shrink-0 overflow-x-auto overscroll-x-contain border-b border-tn-border bg-tn-bg-dark [-webkit-overflow-scrolling:touch] sm:flex">
      {tabs.map((tab) => (
        <div
          key={tab}
          role="tab"
          tabIndex={0}
          aria-selected={activeTab === tab}
          className={`group flex max-w-[45vw] shrink-0 cursor-pointer items-center gap-1.5 border-r border-tn-border px-2 text-[12px] sm:max-w-none sm:gap-2 sm:px-3 sm:text-[13px] ${
            activeTab === tab
              ? "border-t-2 border-t-tn-blue bg-tn-bg text-tn-fg"
              : "bg-tn-bg-dark text-tn-muted hover:bg-tn-bg-hover hover:text-tn-fg"
          }`}
          onClick={() => onSelect(tab)}
          onKeyDown={(e) => e.key === "Enter" && onSelect(tab)}
        >
          <FileTreeIcon filename={tab} size={12} />
          <span className="truncate">{tab}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose(tab);
            }}
            className="ml-0.5 shrink-0 rounded p-0.5 opacity-100 transition-opacity hover:bg-tn-bg-hover hover:text-tn-fg sm:opacity-0 sm:group-hover:opacity-100"
            aria-label={`Close ${tab}`}
          >
            <X size={14} />
          </button>
        </div>
      ))}
    </div>
  );
}
