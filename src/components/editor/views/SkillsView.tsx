import SkillCategoryBlock from "@/components/skills/SkillCategoryBlock";
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

      <h2 className="mt-4 font-family-name:var(--font-display) text-3xl font-extrabold tracking-wide text-tn-fg sm:mt-6 sm:text-4xl lg:text-5xl">
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

      <div className="mt-6 grid grid-cols-1 gap-8 sm:mt-8 lg:grid-cols-2 lg:gap-x-12">
        <div className="space-y-7">
          {skillCategoriesLeft.map((category) => (
            <SkillCategoryBlock key={category.title} {...category} />
          ))}
        </div>
        <div className="space-y-7">
          {skillCategoriesRight.map((category) => (
            <SkillCategoryBlock key={category.title} {...category} />
          ))}
        </div>
      </div>

      <div className="mt-10 sm:mt-12">
        <h3 className="text-[10px] font-semibold tracking-widest text-tn-yellow uppercase sm:text-[11px]">
          Also Familiar With
        </h3>
        <div className="mt-1.5 mb-4 h-px bg-tn-border" />
        <div className="flex flex-wrap gap-2">
          {alsoFamiliarWith.map((tag) => (
            <span
              key={tag}
              className="rounded border border-tn-border bg-tn-bg-panel px-2.5 py-1 text-[10px] text-tn-fg/80 sm:text-[11px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
