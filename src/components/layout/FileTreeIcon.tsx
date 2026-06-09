import * as simpleIcons from "simple-icons";

const fileIconMap: Record<
  string,
  { slug: string; color: string }
> = {
  "home.tsx": { slug: "react", color: "#61DAFB" },
  "about.html": { slug: "html5", color: "#E34F26" },
  "experience.ts": { slug: "python", color: "#3776AB" },
  "projects.js": { slug: "javascript", color: "#F7DF1E" },
  "skills.json": { slug: "json", color: "#F7DF1E" },
  "contact.css": { slug: "css", color: "#1572B6" },
};

const extensionFallback: Record<string, { slug: string; color: string }> = {
  tsx: { slug: "react", color: "#61DAFB" },
  html: { slug: "html5", color: "#E34F26" },
  ts: { slug: "typescript", color: "#3178C6" },
  js: { slug: "javascript", color: "#F7DF1E" },
  css: { slug: "css", color: "#1572B6" },
  py: { slug: "python", color: "#3776AB" },
  json: { slug: "json", color: "#F7DF1E" },
};

function getIcon(slug: string) {
  const key = `si${slug.charAt(0).toUpperCase()}${slug.slice(1)}` as keyof typeof simpleIcons;
  return simpleIcons[key] as { path: string } | undefined;
}

function resolveFileIcon(filename: string) {
  if (fileIconMap[filename]) return fileIconMap[filename];

  const ext = filename.split(".").pop()?.toLowerCase() ?? "";
  return extensionFallback[ext] ?? { slug: "code", color: "#C0CAF5" };
}

export default function FileTreeIcon({
  filename,
  size = 14,
}: {
  filename: string;
  size?: number;
}) {
  const { slug, color } = resolveFileIcon(filename);
  const icon = getIcon(slug);

  if (!icon?.path) {
    return (
      <span
        className="inline-flex shrink-0 items-center justify-center font-bold"
        style={{ width: size, height: size, fontSize: size * 0.65, color }}
        aria-hidden
      >
        {filename.split(".")[0]?.charAt(0)?.toUpperCase() ?? "?"}
      </span>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className="shrink-0"
      fill={color}
      aria-hidden
    >
      <path d={icon.path} />
    </svg>
  );
}
