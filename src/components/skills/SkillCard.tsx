import type { SkillBarColor } from "@/data/portfolio";
import { skillBarColorMap } from "@/data/portfolio";
import SkillIcon from "./SkillIcon";

type Props = {
  name: string;
  color: SkillBarColor;
};

export default function SkillCard({ name, color }: Props) {
  const accent = skillBarColorMap[color];

  return (
    <div
      className="group flex items-center gap-3 rounded-lg border border-tn-border bg-tn-bg-panel px-3 py-2.5 transition-all duration-200 hover:-translate-y-0.5 sm:px-3.5 sm:py-3"
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${accent}80`;
        e.currentTarget.style.boxShadow = `0 8px 24px -8px ${accent}55`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      <span
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md transition-all duration-200 group-hover:scale-110 sm:h-9 sm:w-9"
        style={{
          color: accent,
          background: `linear-gradient(135deg, ${accent}26, ${accent}0d)`,
          boxShadow: `0 0 0 1px ${accent}33`,
        }}
      >
        <SkillIcon skill={name} size={18} />
      </span>

      <p className="truncate text-[12px] font-medium text-tn-fg sm:text-[13px]">
        {name}
      </p>
    </div>
  );
}
