"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, SquareTerminal, X } from "lucide-react";
import { bio, contact } from "@/data/portfolio";

type Props = {
  open: boolean;
  onClose: () => void;
  onNavigate: (file: string) => void;
};

type Line = {
  type: "input" | "output";
  text: string;
};

const HELP_TEXT = [
  "Available commands:",
  "  help          show this message",
  "  whoami        about me",
  "  open <file>   open a tab (home, about, projects, skills, experience, contact)",
  "  resume        open resume PDF",
  "  socials       list social links",
  "  clear         clear the terminal",
];

const FILE_ALIASES: Record<string, string> = {
  home: "home.tsx",
  about: "about.html",
  projects: "projects.js",
  skills: "skills.json",
  experience: "experience.ts",
  contact: "contact.css",
};

export default function TerminalPanel({ open, onClose, onNavigate }: Props) {
  const [history, setHistory] = useState<Line[]>([
    { type: "output", text: `Welcome to ${bio.name}'s portfolio shell. Type "help" to get started.` },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [history]);

  function run(raw: string) {
    const cmd = raw.trim();
    if (!cmd) return;

    const [name, ...args] = cmd.toLowerCase().split(/\s+/);
    const next: Line[] = [{ type: "input", text: cmd }];

    switch (name) {
      case "help":
        next.push(...HELP_TEXT.map((t) => ({ type: "output" as const, text: t })));
        break;
      case "whoami":
        next.push({ type: "output", text: `${bio.name} — ${bio.roles.join(" / ")}` });
        break;
      case "socials":
        contact.socials.forEach((s) =>
          next.push({ type: "output", text: `${s.label}: ${s.handle}` }),
        );
        break;
      case "resume":
        next.push({ type: "output", text: "Opening resume.pdf..." });
        window.open("/resume.pdf", "_blank");
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "open": {
        const target = args[0];
        const file = target ? FILE_ALIASES[target] : undefined;
        if (file) {
          next.push({ type: "output", text: `Opening ${file}...` });
          onNavigate(file);
        } else {
          next.push({
            type: "output",
            text: `open: file not found: "${target ?? ""}". Try: ${Object.keys(FILE_ALIASES).join(", ")}`,
          });
        }
        break;
      }
      default:
        next.push({ type: "output", text: `command not found: ${name}. Type "help" for a list of commands.` });
    }

    setHistory((h) => [...h, ...next]);
    setInput("");
  }

  if (!open) return null;

  return (
    <div className="flex h-48 shrink-0 flex-col border-t border-tn-border bg-tn-bg-dark sm:h-56">
      <div className="flex h-8 shrink-0 items-center justify-between border-b border-tn-border px-3 text-[11px] text-tn-muted">
        <div className="flex items-center gap-2">
          <SquareTerminal size={14} />
          <span className="font-semibold tracking-wide text-tn-fg">TERMINAL</span>
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={onClose}
            className="rounded p-1 transition-colors hover:bg-tn-bg-hover hover:text-tn-fg"
            aria-label="Minimize terminal"
            title="Hide panel"
          >
            <ChevronDown size={14} />
          </button>
          <button
            type="button"
            onClick={onClose}
            className="rounded p-1 transition-colors hover:bg-tn-bg-hover hover:text-tn-fg"
            aria-label="Close terminal"
          >
            <X size={14} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        onClick={() => inputRef.current?.focus()}
        className="flex-1 overflow-y-auto overscroll-contain px-3 py-2 font-mono text-[12px] leading-relaxed sm:text-[13px]"
      >
        {history.map((line, i) =>
          line.type === "input" ? (
            <div key={i} className="flex gap-2 text-tn-fg">
              <span className="text-tn-green">➜</span>
              <span className="text-tn-cyan">~/portfolio</span>
              <span>{line.text}</span>
            </div>
          ) : (
            <div key={i} className="whitespace-pre-wrap text-tn-muted">
              {line.text}
            </div>
          ),
        )}

        <div className="flex gap-2 text-tn-fg">
          <span className="text-tn-green">➜</span>
          <span className="text-tn-cyan">~/portfolio</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && run(input)}
            spellCheck={false}
            autoComplete="off"
            autoCapitalize="off"
            className="min-w-0 flex-1 bg-transparent outline-none"
            aria-label="Terminal input"
          />
        </div>
      </div>
    </div>
  );
}
