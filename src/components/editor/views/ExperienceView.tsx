import { experience } from "@/data/portfolio";

function TimelineEntry({
  role,
  company,
  period,
  description,
  tech,
  isLast,
}: (typeof experience)[number] & { isLast: boolean }) {
  return (
    <article className={`relative pl-6 sm:pl-8 ${isLast ? "pb-0" : "pb-10 sm:pb-12"}`}>
      <span
        className="absolute top-1.5 left-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-tn-cyan bg-tn-bg"
        aria-hidden
      />

      <time className="text-[12px] text-tn-muted sm:text-[13px]">{period}</time>

      <h3 className="mt-2 font-family-name:var(--font-display) text-lg font-bold tracking-wide text-tn-fg sm:text-xl">
        {role}
      </h3>

      <p className="mt-1 text-[12px] text-tn-cyan sm:text-[13px]">@ {company}</p>

      <p className="mt-3 max-w-xl text-[12px] leading-relaxed text-tn-muted sm:mt-4 sm:text-[13px]">
        {description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded border border-tn-cyan/40 bg-tn-bg-panel px-2 py-0.5 text-[10px] text-tn-cyan sm:px-2.5 sm:py-1 sm:text-[11px]"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function ExperienceView() {
  return (
    <section className="w-full max-w-2xl">
      <div>
        <p className="text-[12px] text-tn-green sm:text-[13px]">
          // experience.ts - professional journey
        </p>

        <h2 className="mt-4 font-family-name:var(--font-display) text-3xl font-extrabold tracking-wide text-tn-fg sm:mt-6 sm:text-4xl lg:text-5xl">
          Experience
        </h2>

        <p className="mt-2 text-[12px] sm:text-[13px]">
          <span className="text-tn-purple">interface</span>{" "}
          <span className="text-tn-cyan">Career</span>{" "}
          <span className="text-tn-purple">extends</span>{" "}
          <span className="text-tn-cyan">Timeline</span>{" "}
          <span className="text-tn-fg">{"{}"}</span>
        </p>
      </div>

      <div className="relative mt-8 ml-0.5 border-l border-tn-muted/30 sm:mt-10 sm:ml-1">
        {experience.map((job, index) => (
          <TimelineEntry
            key={job.id}
            {...job}
            isLast={index === experience.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
