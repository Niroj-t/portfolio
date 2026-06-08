"use client";

import { useCallback, useEffect, useState } from "react";
import MenuBar from "@/components/chrome/MenuBar";
import StatusBar from "@/components/chrome/StatusBar";
import TitleBar from "@/components/chrome/TitleBar";
import EditorPane from "@/components/editor/EditorPane";
import ActivityBar from "@/components/layout/ActivityBar";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Sidebar from "@/components/layout/Sidebar";
import TabBar from "@/components/layout/TabBar";
import CommandPalette from "@/components/ui/CommandPalette";
import { allFiles, fileTree } from "@/data/portfolio";

export default function IdeShell() {
  const [openTabs, setOpenTabs] = useState<string[]>(["home.tsx"]);
  const [activeTab, setActiveTab] = useState("home.tsx");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  const openFile = useCallback((filename: string) => {
    setOpenTabs((tabs) =>
      tabs.includes(filename) ? tabs : [...tabs, filename],
    );
    setActiveTab(filename);
    setSidebarOpen(false);
  }, []);

  const closeTab = useCallback(
    (filename: string) => {
      setOpenTabs((tabs) => {
        const next = tabs.filter((t) => t !== filename);
        const fallback = next.length === 0 ? ["home.tsx"] : next;

        if (activeTab === filename) {
          setActiveTab(fallback[fallback.length - 1]);
        }

        return fallback;
      });
    },
    [activeTab],
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "p") {
        e.preventDefault();
        setCommandPaletteOpen(true);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (!sidebarOpen) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSidebarOpen(false);
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [sidebarOpen]);

  useEffect(() => {
    if (!sidebarOpen) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prev;
    };
  }, [sidebarOpen]);

  return (
    <div className="flex h-dvh flex-col bg-tn-bg text-tn-fg">
      <TitleBar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />
      <MenuBar />

      <div className="relative flex min-h-0 flex-1">
        {sidebarOpen && (
          <button
            type="button"
            aria-label="Close sidebar"
            className="fixed inset-0 z-30 bg-black/60 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <ActivityBar
          sidebarOpen={sidebarOpen}
          onToggleSidebar={() => setSidebarOpen((o) => !o)}
        />
        <Sidebar
          tree={fileTree}
          onOpenFile={openFile}
          activeFile={activeTab}
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <div className="flex min-w-0 flex-1 flex-col">
          <TabBar
            tabs={openTabs}
            activeTab={activeTab}
            onSelect={setActiveTab}
            onClose={closeTab}
          />
          <Breadcrumb activeFile={activeTab} />
          <EditorPane activeFile={activeTab} onNavigate={openFile} />
        </div>
      </div>

      <StatusBar activeFile={activeTab} />

      <CommandPalette
        open={commandPaletteOpen}
        files={allFiles}
        onSelect={openFile}
        onClose={() => setCommandPaletteOpen(false)}
      />
    </div>
  );
}
