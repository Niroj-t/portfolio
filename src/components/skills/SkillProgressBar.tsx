import type { SkillBarColor } from "@/data/portfolio";
import { skillBarColorMap } from "@/data/portfolio";

type Props = {
  name: string;
  level: number;
  color: SkillBarColor;
};

export default function SkillProgressBar({ name, level, color }: Props) {
  const barColor = skillBarColorMap[color];

  return (
    <div className="flex items-center gap-2.5 sm:gap-3">
      <span className="w-24 shrink-0 truncate text-[11px] text-tn-fg sm:w-28 sm:text-[12px]">
        {name}
      </span>
      <div className="h-1 min-w-0 flex-1 overflow-hidden rounded-full bg-tn-bg-dark">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${level}%`, backgroundColor: barColor }}
        />
      </div>
      <span
        className="w-8 shrink-0 text-right text-[10px] font-medium sm:text-[11px]"
        style={{ color: barColor }}
      >
        {level}%
      </span>
    </div>
  );
}
