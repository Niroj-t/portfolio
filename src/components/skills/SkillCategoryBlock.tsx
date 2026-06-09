import type { SkillCategory } from "@/data/portfolio";
import SkillProgressBar from "./SkillProgressBar";

export default function SkillCategoryBlock({ title, skills }: SkillCategory) {
  return (
    <div>
      <h3 className="text-[10px] font-semibold tracking-widest text-tn-yellow uppercase sm:text-[11px]">
        {title}
      </h3>
      <div className="mt-1.5 mb-3 h-px bg-tn-border" />
      <div className="space-y-2.5">
        {skills.map((skill) => (
          <SkillProgressBar key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  );
}
