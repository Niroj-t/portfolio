export type FileNode = {
  name: string;
  type: "file" | "folder";
  children?: FileNode[];
};

export const fileTree: FileNode[] = [
  {
    name: "portfolio",
    type: "folder",
    children: [
      { name: "home.tsx", type: "file" },
      { name: "about.html", type: "file" },
      { name: "experience.ts", type: "file" },
      { name: "projects.js", type: "file" },
      { name: "skills.json", type: "file" },
      { name: "contact.css", type: "file" },
    ],
  },
];

export const bio = {
  name: "Niroj Thapa",
  roles: ["Software Developer", "QA Enthusiast"],
  tagline: "Building reliable systems with clean code.",
  body: "I'm a developer focused on full-stack web applications, developer tooling, and performance. I care about readable architecture, thoughtful UX, and shipping maintainable software.",
  stats: [
    { label: "Projects", value: "5+" },
    { label: "Curiosity", value: "∞" },
    { label: "Status", value: "Always Learning" },
  ],
};

export type AccentColor =
  | "blue"
  | "cyan"
  | "green"
  | "purple"
  | "yellow"
  | "orange"
  | "red";

export type AboutTextStyle = "default" | "highlight" | "muted" | "cyan" | "green";

export type AboutTextPart = {
  text: string;
  style?: AboutTextStyle;
};

export type AboutEducation = {
  icon: string;
  title: string;
  period: string;
  lines: AboutTextPart[];
};

export type AboutSkill = {
  name: string;
  icon: string;
  color: AccentColor;
};

export const about = {
  subtitle: "who I am · what I do · where I build",
  intro: [
    { text: "Hi! I'm ", style: "default" },
    { text: "Niroj Thapa", style: "highlight" },
    { text: ", a ", style: "default" },
    { text: "software developer", style: "highlight" },
    { text: " passionate about building modern, scalable, and user-friendly web applications ", style: "default" },
    { text: "Experienced in both ", style: "default" },
    { text: "Frontend", style: "highlight" },
    { text: ", and ", style: "default" },
    { text: "Backend", style: "highlight" },
    { text: " development. ", style: "default" },
    { text: "I build end-to-end solutions that solve real-world problems, with a strong focus on writing clean, maintainable, and scalable code.", style: "default" },
  ] satisfies AboutTextPart[],
  education: [
    {
      icon: "🎓",
      title: "Patan Multiple Campus",
      period: "2022 — Present",
      lines: [
        { text: "Tribhuvan University", style: "muted" },
        {
          text: "Bachelor in Information Technology (BIT)",
          style: "cyan",
        },
      ],
    },
  ] satisfies AboutEducation[],
  skills: [
    { name: "TypeScript", icon: "TypeScript", color: "blue" },
    { name: "Java", icon: "Java", color: "orange" },
    { name: "JavaScript", icon: "JavaScript", color: "yellow" },
    { name: "PostgreSQL", icon: "PostgreSQL", color: "cyan" },
    { name: "Python", icon: "Python", color: "blue" },
    { name: "Jira", icon: "Jira", color: "blue" },
    { name: "Node.js", icon: "Node.js", color: "green" },
    { name: "MySQL", icon: "MySQL", color: "blue" },
    { name: "Supabase", icon: "Supabase", color: "green" },
    { name: "React", icon: "React", color: "cyan" },
    { name: "Next.js", icon: "Next.js", color: "cyan" },
    { name: "Tailwind CSS", icon: "Tailwind CSS", color: "cyan" },
    { name: "Git", icon: "Git", color: "orange" },
    { name: "GitHub", icon: "GitHub", color: "purple" },
    { name: "Postman", icon: "Postman", color: "orange" },
    { name: "Selenium", icon: "Selenium", color: "green" },
  ] satisfies AboutSkill[],
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
};

export const experience: Experience[] = [
  {
    id: "exp-1",
    company: "Proshore Nepal",
    role: "Frontend Developer - Intern",
    period: "Nov.2025 — Feb.2026",
    description:
      "Contributed to the development of a poultry survey web application using Next.js, React, and TypeScript by building responsive UI components, integrating REST APIs, implementing features like image capture, editable tables, Excel export, and validation workflows, while collaborating with cross-functional teams via Jira and maintaining clean, version-controlled code with Git/GitHub",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "State Management","API Integration","SSR","Git", "GitHub","Postman","shadcn/ui"],
  },
];

export type Project = {
  id: string;
  icon: string;
  title: string;
  categoryColor: AccentColor;
  description: string;
  stack: string[];
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    id: "Resume Analyzer",
    icon: "❤️",
    title: "AI Resume Analyzer",
    categoryColor: "orange",
    description:
      "A dynamic AI Resume Analyzer that allows users to upload their resume and compare it with a job description. The tool evaluates compatibility, generates an ATS score, highlights weaknesses, and provides suggestions to improve the resume for better shortlisting chances.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini API", "Neon DB", "Prisma"],
    github: "https://github.com/Niroj-t/ai-resume-analyzer",
    live: "https://ai-resume-analyzer-w5gz.vercel.app/login",
  },
  {
    id: "dealhunt",
    icon: "⚡",
    title: "Smart Product Price Tracker",
    categoryColor: "purple",
    description:
      "It is a full-stack price tracking application that allows users to monitor products from multiple e-commerce platforms where users can add product URLs, track real-time prices, visualize price history through interactive charts,and notifies users via email when prices drop.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "shadcn/ui"],
    github: "https://github.com/Niroj-t/dealhunt",
    live: "https://dealhunt-tracker.vercel.app",
  },
  {
    id: "URL Shortener",
    icon: "🧠",
    title: "URL Shortener",
    categoryColor: "cyan",
    description:
      "A full-stack URL shortener application enabling authenticated users to create and manage short links, generate QR codes, and analyze click data through an interactive dashboard with real-time analytics and RESTful integrations.",
    stack: ["React", "JavaScript", "Tailwind CSS", "Supabase", "shadcn/ui"],
    github: "https://github.com/Niroj-t/url-shortener",
    live: "https://url-shortener-tan-gamma.vercel.app",
  },
  {
    id: "Employee Management System",
    icon: "🧠",
    title: "Employee Management System",
    categoryColor: "cyan",
    description:
      "A Simple desktop-based application designed to efficiently manage employee data within an organization. This project allows users to store, retrieve, update, and delete employee information using a structured database system..",
    stack: ["Java", "Swing", "MySQL"],
    github: "https://github.com/Niroj-t/Employee-Management-System",
  },
];

export type SocialPlatform =
  | "email"
  | "linkedin"
  | "github";

export type SocialLink = {
  id: string;
  platform: SocialPlatform;
  label: string;
  handle: string;
  url: string;
};

export const contact = {
  tagline: "open to work, collabs & good conversations",
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "",
  homeSocialOrder: [
    "github",
    "linkedin",
    "email",
  ] satisfies SocialPlatform[],
  socials: [
    {
      id: "email",
      platform: "email",
      label: "EMAIL",
      handle: "nirojthapa661@gmail.com",
      url: "mailto:nirojthapa661@gmail.com",
    },
    {
      id: "linkedin",
      platform: "linkedin",
      label: "LINKEDIN",
      handle: "linkedin.com/in/nirojthapa/",
      url: "https://linkedin.com/in/nirojthapa/",
    },
    {
      id: "github",
      platform: "github",
      label: "GITHUB",
      handle: "github.com/Niroj-t",
      url: "https://github.com/Niroj-t",
    },
  ] satisfies SocialLink[],
};

export type SkillBarColor =
  | "pink"
  | "orange"
  | "yellow"
  | "blue"
  | "cyan"
  | "purple"
  | "green"
  | "red"
  | "teal";

export type SkillItem = {
  name: string;
  level: number;
  color: SkillBarColor;
};

export type SkillCategory = {
  title: string;
  skills: SkillItem[];
};

export const skillsMeta = {
  subtitle: "tech stack & tools I actually use",
  status: { status: "always_learning", passion: "immeasurable" },
};

export const skillCategoriesLeft: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "TypeScript", level: 65, color: "blue" },
      { name: "JavaScript", level: 85, color: "yellow" },
      { name: "Java", level: 50, color: "orange" },
      { name: "Python", level: 60, color: "pink" },
      { name: "SQL", level: 80, color: "purple" },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Node.js", level: 60, color: "teal" },
      { name: "REST APIs", level: 65, color: "blue" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", level: 75, color: "blue" },
      { name: "MySQL", level: 78, color: "orange" },
      { name: "Supabase", level: 80, color: "green" },
      { name: "Neon DB", level: 74, color: "cyan" },
    ],
  },
];

export const skillCategoriesRight: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 85, color: "blue" },
      { name: "Next.js", level: 85, color: "purple" },
      { name: "Tailwind CSS", level: 80, color: "teal" },
      { name: "Responsive Design", level: 75, color: "green" },
      { name: "shadcn/ui", level: 85, color: "cyan" },
    ],
  },
  {
    title: "QA & Testing",
    skills: [
      { name: "Selenium WebDriver", level: 75, color: "green" },
      { name: "Playwright", level: 75, color: "teal" },
      { name: "Manual Testing", level: 80, color: "blue" },
      { name: "Page Object Model (POM)", level: 75, color: "blue" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git", level: 90, color: "orange" },
      { name: "GitHub", level: 88, color: "purple" },
      { name: "Postman", level: 85, color: "yellow" },
      { name: "Jira", level: 80, color: "blue" },
      { name: "Vercel", level: 78, color: "cyan" },
    ],
  },
];

export const alsoFamiliarWith = [
  "Prisma",
  "Gemini API",
  "SSR",
  "Neon DB",
  "Swing",
  "CI/CD",
  "PowerBI",
];

export const skillBarColorMap: Record<SkillBarColor, string> = {
  pink: "#f7768e",
  orange: "#ff9e64",
  yellow: "#e0af68",
  blue: "#7aa2f7",
  cyan: "#7dcfff",
  purple: "#bb9af7",
  green: "#9ece6a",
  red: "#f7768e",
  teal: "#2ac3de",
};

export const accentMap = {
  blue: "text-tn-blue",
  cyan: "text-tn-cyan",
  green: "text-tn-green",
  purple: "text-tn-purple",
  yellow: "text-tn-yellow",
  orange: "text-tn-orange",
  red: "text-tn-red",
} as const;

export function getAllFiles(nodes: FileNode[]): string[] {
  const files: string[] = [];
  for (const node of nodes) {
    if (node.type === "file") {
      files.push(node.name);
    } else if (node.children) {
      files.push(...getAllFiles(node.children));
    }
  }
  return files;
}

export const allFiles = getAllFiles(fileTree);
