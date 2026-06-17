"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { accentMap, projects, type ProjectCategory } from "@/data/portfolio";

function ProjectLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-[11px] text-tn-muted transition-colors hover:text-tn-fg"
    >
      {label}
      <ExternalLink size={11} strokeWidth={1.5} />
    </a>
  );
}

const categoryHexMap: Record<string, string> = {
  blue: "#7aa2f7",
  cyan: "#7dcfff",
  green: "#9ece6a",
  purple: "#bb9af7",
  yellow: "#e0af68",
  orange: "#ff9e64",
  red: "#f7768e",
};

function ProjectCard({
  icon,
  title,
  categoryColor,
  description,
  stack,
  github,
  sheet,
  live,
  index,
}: (typeof projects)[number] & { index: number }) {
  const categoryClass = accentMap[categoryColor];
  const accentHex = categoryHexMap[categoryColor] ?? "#7aa2f7";

  return (
    <article
      className="project-card group relative flex flex-col overflow-hidden rounded-lg border border-tn-border bg-tn-bg-panel p-4 transition-all duration-300 hover:-translate-y-1.5 sm:p-5"
      style={{
        animationDelay: `${index * 100}ms`,
        "--accent": accentHex,
      } as React.CSSProperties}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${accentHex}66`;
        e.currentTarget.style.boxShadow = `0 12px 36px -12px ${accentHex}4d`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(180deg, ${accentHex}22, transparent)`,
        }}
        aria-hidden
      />
      <div className="mb-4 flex items-start justify-between">
        <span
          className="text-xl transition-transform duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_var(--accent)]"
          role="img"
          aria-hidden
        >
          {icon}
        </span>
        <div className="flex items-center gap-3">
          {github && <ProjectLink href={github} label="GitHub" />}
          {live && <ProjectLink href={live} label="Live" />}
          {sheet && <ProjectLink href={sheet} label="Sheet" />}
        </div>
      </div>

      <h3 className={`font-[family-name:var(--font-display)] text-base font-bold uppercase tracking-wide sm:text-lg ${categoryClass} transition-colors duration-300`}>
        {title}
      </h3>

      <p className="mt-3 flex-1 font-sans text-[12px] leading-relaxed text-tn-muted">
        {description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span
            key={tech}
            className="rounded border border-tn-border bg-tn-bg px-2 py-1 text-[11px] text-tn-fg/80 transition-all duration-300 group-hover:border-[var(--accent)]/40 group-hover:text-tn-fg group-hover:shadow-[0_0_12px_-4px_var(--accent)]"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}

const TABS: ProjectCategory[] = ["Dev", "QA"];

export default function ProjectsView() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("Dev");

  const counts: Record<ProjectCategory, number> = {
    Dev: projects.filter((p) => p.category === "Dev").length,
    QA: projects.filter((p) => p.category === "QA").length,
  };
  const visibleProjects = projects.filter((p) => p.category === activeTab);

  return (
    <section className="w-full max-w-4xl">
      <p className="text-[12px] text-tn-comment sm:text-[13px]">
        // projects.js : things I&apos;ve built &amp; shipped
      </p>

      <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-extrabold uppercase tracking-wide text-tn-fg sm:mt-6 sm:text-4xl">
        Projects
      </h2>

      <p className="mt-2 text-[12px] text-tn-muted sm:text-[13px]">
        <span className="text-tn-purple">const</span>{" "}
        <span className="text-tn-cyan">projects</span>{" "}
        <span className="text-tn-fg">= [</span>{" "}
        <span className="text-tn-green">...shipped</span>,{" "}
        <span className="text-tn-orange">...building</span>{" "}
        <span className="text-tn-fg">];</span>
      </p>

      <div role="tablist" aria-label="Project category" className="mt-6 flex items-center gap-1 border-b border-tn-border sm:mt-8">
        {TABS.map((tab) => {
          const isActive = tab === activeTab;
          return (
            <button
              key={tab}
              role="tab"
              type="button"
              aria-selected={isActive}
              onClick={() => setActiveTab(tab)}
              className={`relative flex items-center gap-2 px-3 py-2.5 text-[12px] font-medium transition-colors sm:px-4 sm:text-[13px] ${
                isActive ? "text-tn-fg" : "text-tn-muted hover:text-tn-fg"
              }`}
            >
              <span aria-hidden className="text-tn-purple">&lt;</span>
              {tab}
              <span aria-hidden className="text-tn-purple">/&gt;</span>
              <span
                className={`rounded-full px-1.5 py-px text-[10px] tabular-nums ${
                  isActive ? "bg-tn-bg-hover text-tn-fg" : "bg-tn-bg-panel text-tn-comment"
                }`}
              >
                {counts[tab]}
              </span>
              {isActive && (
                <span aria-hidden className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-tn-blue" />
              )}
            </button>
          );
        })}
      </div>

      {visibleProjects.length > 0 ? (
        <div className="mt-6 pb-6 grid grid-cols-1 gap-3 sm:mt-8 sm:gap-4 md:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.id} {...project} index={index} />
          ))}
        </div>
      ) : (
        <div className="mt-6 pb-6 rounded-lg border border-dashed border-tn-border bg-tn-bg-panel/40 px-4 py-12 text-center sm:mt-8">
          <p className="font-mono text-[12px] text-tn-comment sm:text-[13px]">
            // no {activeTab.toLowerCase()} projects yet — more on the way
          </p>
        </div>
      )}
    </section>
  );
}
