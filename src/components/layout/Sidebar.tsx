"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, X } from "lucide-react";
import type { FileNode } from "@/data/portfolio";
import FileTreeIcon from "./FileTreeIcon";

type Props = {
  tree: FileNode[];
  onOpenFile: (name: string) => void;
  activeFile: string;
  open: boolean;
  onClose: () => void;
};

function TreeNode({
  node,
  depth,
  onOpenFile,
  activeFile,
}: {
  node: FileNode;
  depth: number;
  onOpenFile: (name: string) => void;
  activeFile: string;
}) {
  const [expanded, setExpanded] = useState(true);
  const padding = { paddingLeft: `${depth * 12 + 8}px` };

  if (node.type === "folder") {
    return (
      <>
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex w-full items-center gap-1 py-1 text-[13px] text-tn-muted transition-colors hover:bg-tn-bg-hover hover:text-tn-fg sm:py-0.5"
          style={padding}
        >
          {expanded ? (
            <ChevronDown size={14} className="shrink-0" />
          ) : (
            <ChevronRight size={14} className="shrink-0" />
          )}
          <span className="truncate text-tn-blue">{node.name}</span>
        </button>
        {expanded &&
          node.children?.map((child) => (
            <TreeNode
              key={child.name}
              node={child}
              depth={depth + 1}
              onOpenFile={onOpenFile}
              activeFile={activeFile}
            />
          ))}
      </>
    );
  }

  return (
    <button
      onClick={() => onOpenFile(node.name)}
      className={`flex w-full items-center gap-2 py-1 text-[13px] transition-colors hover:bg-tn-bg-hover sm:py-0.5 ${
        activeFile === node.name
          ? "bg-tn-bg-hover text-tn-fg"
          : "text-tn-muted"
      }`}
      style={padding}
    >
      <FileTreeIcon filename={node.name} />
      <span className="truncate">{node.name}</span>
    </button>
  );
}

export default function Sidebar({
  tree,
  onOpenFile,
  activeFile,
  open,
  onClose,
}: Props) {
  return (
    <aside
      className={`fixed top-0 bottom-0 left-0 z-50 flex w-[min(16rem,85vw)] flex-col border-r border-tn-border bg-tn-bg-panel shadow-xl transition-transform duration-200 ease-out md:static md:z-auto md:w-60 md:translate-x-0 md:shadow-none ${
        open ? "translate-x-0" : "-translate-x-full md:flex"
      } ${open ? "flex" : "hidden md:flex"}`}
    >
      <div className="flex items-center justify-between border-b border-tn-border px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-tn-muted md:border-b-0">
        <span>Explorer</span>
        <div className="flex items-center gap-2">
          <span className="hidden text-[10px] normal-case tracking-normal sm:inline">
            ⎇ main
          </span>
          <button
            type="button"
            onClick={onClose}
            className="rounded p-1 text-tn-muted transition-colors hover:bg-tn-bg-hover hover:text-tn-fg md:hidden"
            aria-label="Close explorer"
          >
            <X size={14} />
          </button>
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto overscroll-contain pb-4">
        {tree.map((node) => (
          <TreeNode
            key={node.name}
            node={node}
            depth={0}
            onOpenFile={onOpenFile}
            activeFile={activeFile}
          />
        ))}
      </nav>
    </aside>
  );
}
