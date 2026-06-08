import { ExternalLink } from "lucide-react";
import { accentMap, projects } from "@/data/portfolio";

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

function ProjectCard({
  icon,
  title,
  category,
  categoryColor,
  description,
  stack,
  github,
  live,
  index,
}: (typeof projects)[number] & { index: number }) {
  const categoryClass = accentMap[categoryColor];

  return (
    <article
      className="project-card group flex flex-col rounded-lg border border-tn-border bg-tn-bg-panel p-4 transition-all duration-300 hover:-translate-y-1.5 hover:border-tn-cyan/40 hover:shadow-[0_8px_30px_rgba(122,162,247,0.12)] sm:p-5"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="mb-4 flex items-start justify-between">
        <span
          className="text-xl transition-transform duration-300 group-hover:scale-110"
          role="img"
          aria-hidden
        >
          {icon}
        </span>
        <div className="flex items-center gap-3">
          {github && <ProjectLink href={github} label="GitHub" />}
          {live && <ProjectLink href={live} label="Live" />}
        </div>
      </div>

      {category && (
        <p
          className={`mb-2 text-[10px] font-semibold tracking-widest ${categoryClass}`}
        >
          {category}
        </p>
      )}

      <h3 className="font-[family-name:var(--font-display)] text-base font-bold uppercase tracking-wide text-tn-fg sm:text-lg">
        {title}
      </h3>

      <p className="mt-3 flex-1 font-sans text-[12px] leading-relaxed text-tn-muted">
        {description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span
            key={tech}
            className="rounded border border-tn-border bg-tn-bg px-2 py-1 text-[11px] text-tn-fg/80 transition-colors duration-300 group-hover:border-tn-muted/50"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function ProjectsView() {
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

      <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} {...project} index={index} />
        ))}
      </div>
    </section>
  );
}
