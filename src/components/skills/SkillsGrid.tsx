"use client";

import { about, accentMap } from "@/data/portfolio";
import type { AboutSkill } from "@/data/portfolio";
import SkillIcon from "./SkillIcon";

function SkillChip({ skill, index }: { skill: AboutSkill; index: number }) {
  const colorClass = accentMap[skill.color];

  return (
    <div
      className="skill-chip group flex w-full items-center gap-2.5 rounded-lg border border-tn-border bg-tn-bg px-3 py-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-tn-cyan/40 hover:bg-tn-bg-hover hover:shadow-[0_0_20px_rgba(122,162,247,0.15)]"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <span
        className={`skill-icon flex shrink-0 items-center justify-center rounded-md bg-tn-bg-panel p-1.5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${colorClass}`}
      >
        <SkillIcon skill={skill.icon} className={colorClass} size={18} />
      </span>
      <span className={`text-[12px] font-medium ${colorClass}`}>
        {skill.name}
      </span>
    </div>
  );
}

export default function SkillsGrid() {
  return (
    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
      {about.skills.map((skill, index) => (
        <SkillChip key={skill.name} skill={skill} index={index} />
      ))}
    </div>
  );
}
