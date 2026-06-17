import type { SkillCategory } from "@/data/portfolio";
import { skillCategoryAccentMap } from "@/data/portfolio";
import SkillCard from "./SkillCard";

export default function SkillSection({ title, skills }: SkillCategory) {
  const accent = skillCategoryAccentMap[title] ?? "#7aa2f7";

  return (
    <div
      className="rounded-xl border border-tn-border bg-tn-bg-panel/60 p-4 transition-colors duration-300 sm:p-5"
      style={{ borderTopColor: `${accent}66`, borderTopWidth: "2px" }}
    >
      <div className="flex items-center gap-2.5">
        <span
          className="h-2 w-2 shrink-0 rounded-full"
          style={{
            background: accent,
            boxShadow: `0 0 10px 1px ${accent}99`,
          }}
        />
        <h3 className="text-[11px] font-semibold tracking-widest uppercase sm:text-[12px]" style={{ color: accent }}>
          {title}
        </h3>
        <span className="text-[10px] text-tn-muted sm:text-[11px]">
          ({skills.length})
        </span>
        <div className="ml-auto h-px flex-1 bg-tn-border" />
      </div>
      <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="skill-chip"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <SkillCard {...skill} />
          </div>
        ))}
      </div>
    </div>
  );
}
