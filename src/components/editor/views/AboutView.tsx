import SkillsGrid from "@/components/skills/SkillsGrid";
import { about, bio } from "@/data/portfolio";
import type { AboutTextPart, AboutTextStyle } from "@/data/portfolio";

const textStyleMap: Record<AboutTextStyle, string> = {
  default: "text-tn-fg/90",
  highlight: "font-medium text-tn-cyan",
  muted: "text-tn-muted",
  cyan: "text-tn-cyan",
  green: "font-medium text-tn-green",
};

function RichText({ parts }: { parts: AboutTextPart[] }) {
  return (
    <>
      {parts.map((part, i) => (
        <span key={i} className={textStyleMap[part.style ?? "default"]}>
          {part.text}
        </span>
      ))}
    </>
  );
}

function SectionHeading({ children }: { children: string }) {
  return (
    <h3 className="mb-3 text-[11px] font-semibold tracking-widest text-tn-green uppercase">
      {children}
    </h3>
  );
}

export default function AboutView() {
  return (
    <article className="w-full max-w-2xl">
      <p className="break-all text-[12px] text-tn-cyan sm:break-normal sm:text-[13px]">
        &lt;!-- about.html - {bio.name} --&gt;
      </p>

      <h2 className="mt-4 font-family-name:var(--font-display) text-3xl font-extrabold tracking-wide text-tn-fg sm:mt-6 sm:text-4xl lg:text-5xl">
        About Me
      </h2>

      <p className="mt-2 text-[13px] text-tn-muted sm:text-[15px]">
        // {about.subtitle}
      </p>

      <div className="mt-6 rounded-lg border border-tn-border bg-tn-bg-panel p-4 sm:mt-8 sm:p-5">
        <p className="font-sans text-[13px] leading-relaxed sm:text-[15px]">
          <RichText parts={about.intro} />
        </p>
      </div>

      <div className="mt-8 sm:mt-10">
        <SectionHeading>Skills</SectionHeading>
        <div className="rounded-lg border border-tn-border bg-tn-bg-panel p-4 sm:p-5">
          <SkillsGrid />
        </div>
      </div>

      <div className="mt-8 sm:mt-10">
        <SectionHeading>Education</SectionHeading>
        <div className="space-y-4">
          {about.education.map((entry) => (
            <div
              key={entry.title}
              className="rounded-lg border border-tn-border bg-tn-bg-panel p-4 sm:p-5"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <div className="flex min-w-0 items-start gap-2.5">
                  <span className="mt-0.5 shrink-0 text-base" aria-hidden>
                    {entry.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="font-family-name:var(--font-display) text-[14px] font-bold text-tn-fg sm:text-[15px]">
                      {entry.title}
                    </p>
                    <div className="mt-2 space-y-1 text-[13px] leading-relaxed">
                      {entry.lines.map((line) => (
                        <p key={line.text}>
                          <RichText parts={[line]} />
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                <time className="shrink-0 text-[11px] text-tn-muted sm:text-[12px]">
                  {entry.period}
                </time>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
