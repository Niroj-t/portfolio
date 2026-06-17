import SkillSection from "@/components/skills/SkillSection";
import {
  alsoFamiliarWith,
  skillCategoriesLeft,
  skillCategoriesRight,
  skillsMeta,
} from "@/data/portfolio";

export default function SkillsView() {
  return (
    <section className="w-full max-w-5xl">
      <p className="text-[12px] text-tn-comment sm:text-[13px]">
        // skills.json - {skillsMeta.subtitle}
      </p>

      <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-wide text-tn-fg sm:mt-6 sm:text-4xl lg:text-5xl">
        Skills
      </h2>

      <p className="mt-2 text-[12px] sm:text-[13px]">
        <span className="text-tn-muted">{"{ "}</span>
        <span className="text-tn-purple">&quot;status&quot;</span>
        <span className="text-tn-muted">: </span>
        <span className="text-tn-green">
          &quot;{skillsMeta.status.status}&quot;
        </span>
        <span className="text-tn-muted">, </span>
        <span className="text-tn-purple">&quot;passion&quot;</span>
        <span className="text-tn-muted">: </span>
        <span className="text-tn-green">
          &quot;{skillsMeta.status.passion}&quot;
        </span>
        <span className="text-tn-muted">{" }"}</span>
      </p>

      <div className="mt-6 pb-6 grid grid-cols-1 gap-4 sm:mt-8 sm:gap-5 lg:grid-cols-2">
        <div className="flex flex-col gap-4 sm:gap-5">
          {skillCategoriesLeft.map((category) => (
            <SkillSection key={category.title} {...category} />
          ))}
        </div>
        <div className="flex flex-col gap-4 sm:gap-5">
          {skillCategoriesRight.map((category) => (
            <SkillSection key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
