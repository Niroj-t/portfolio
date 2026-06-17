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

export default function EditorPane({ activeFile, onNavigate }: Props) {
  return (
    <main className="flex min-h-0 flex-1 overflow-hidden bg-tn-bg">
      <div className="flex min-w-0 flex-1 overflow-y-auto overscroll-y-none">
        <div className="min-w-0 flex-1 p-4 pb-8 text-[13px] leading-[1.6] sm:p-6 sm:pb-12">
          {activeFile === "home.tsx" && <HomeView onNavigate={onNavigate} />}
          {activeFile === "about.html" && <AboutView />}
          {activeFile === "experience.ts" && <ExperienceView />}
          {activeFile === "projects.js" && <ProjectsView />}
          {activeFile === "skills.json" && <SkillsView />}
          {activeFile === "contact.css" && <ContactView />}
        </div>
      </div>
    </main>
  );
}
