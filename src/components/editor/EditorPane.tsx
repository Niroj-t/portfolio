import AboutView from "./views/AboutView";
import ContactView from "./views/ContactView";
import ExperienceView from "./views/ExperienceView";
import HomeView from "./views/HomeView";
import ProjectsView from "./views/ProjectsView";
import SkillsView from "./views/SkillsView";

type Props = {
  activeFile: string;
  onNavigate: (file: string) => void;
};

function LineNumbers() {
  return (
    <div className="hidden w-8 shrink-0 select-none border-r border-tn-border bg-tn-bg py-4 pr-2 text-right text-[11px] leading-[1.6] text-tn-muted sm:block sm:w-10 sm:py-6 sm:pr-3 sm:text-[13px]">
      
    </div>
  );
}

export default function EditorPane({ activeFile, onNavigate }: Props) {
  return (
    <main className="flex min-h-0 flex-1 overflow-hidden bg-tn-bg">
      <LineNumbers />
      <div className="min-w-0 flex-1 overflow-y-auto overscroll-contain p-4 text-[13px] leading-[1.6] sm:p-6">
        {activeFile === "home.tsx" && <HomeView onNavigate={onNavigate} />}
        {activeFile === "about.html" && <AboutView />}
        {activeFile === "experience.ts" && <ExperienceView />}
        {activeFile === "projects.js" && <ProjectsView />}
        {activeFile === "skills.json" && <SkillsView />}
        {activeFile === "contact.css" && <ContactView />}
      </div>
    </main>
  );
}
