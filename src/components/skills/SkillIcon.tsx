import * as simpleIcons from "simple-icons";

type Props = {
  skill: string;
  className?: string;
  size?: number;
};

const slugMap: Record<string, string> = {
  java: "openjdk",
  javascript: "javascript",
  python: "python",
  typescript: "typescript",
  nodejs: "nodedotjs",
  postgresql: "postgresql",
  mysql: "mysql",
  supabase: "supabase",
  react: "react",
  nextjs: "nextdotjs",
  tailwindcss: "tailwindcss",
  git: "git",
  github: "github",
  postman: "postman",
};

function normalizeSkillKey(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/\./g, "")
    .replace("/", "");
}

function getIcon(slug: string) {
  const key = `si${slug.charAt(0).toUpperCase()}${slug.slice(1)}` as keyof typeof simpleIcons;
  return simpleIcons[key] as { path: string; hex: string } | undefined;
}

export default function SkillIcon({ skill, className, size = 18 }: Props) {
  const normalized = normalizeSkillKey(skill);
  const slug = slugMap[normalized] ?? normalized;
  const icon = getIcon(slug);

  if (!icon?.path) {
    return (
      <span
        className={`inline-flex items-center justify-center font-bold ${className}`}
        style={{ width: size, height: size, fontSize: size * 0.55 }}
        aria-hidden
      >
        {skill.charAt(0)}
      </span>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d={icon.path} />
    </svg>
  );
}
