import TypingText from "@/components/TypingText";
import SocialLinksBar from "@/components/social/SocialLinksBar";
import { bio } from "@/data/portfolio";

type Props = {
  onNavigate: (file: string) => void;
};

export default function HomeView({ onNavigate }: Props) {
  return (
    <article className="w-full max-w-6xl">
      <p className="text-[12px] text-tn-comment sm:text-[13px]">
        // hello world — welcome to my portfolio
      </p>

      <h1 className="mt-4 text-2xl font-semibold sm:mt-6 sm:text-3xl">
        <span className="text-tn-green">Hello</span>{" "}
        <span className="text-tn-fg">World</span>
        <span className="text-tn-fg">;</span>
      </h1>

      <p className="mt-3 text-[14px] text-tn-cyan sm:text-[15px]">
        const developer ={" "}
        <span className="break-all text-tn-yellow sm:break-normal">
          &quot;{bio.name}&quot;
        </span>
        ;
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {bio.roles.map((role) => (
          <span
            key={role}
            className="rounded border border-tn-border bg-tn-bg-panel px-2 py-0.5 text-[11px] text-tn-purple sm:text-[12px]"
          >
            {role}
          </span>
        ))}
      </div>

      <p className="mt-5 text-[13px] leading-relaxed text-tn-fg/90 sm:mt-6 sm:text-[14px]">
        <TypingText texts={bio.roles} speed={60} pause={1800} />
      </p>

      <p className="mt-4 text-[12px] leading-relaxed text-tn-muted sm:text-[13px] whitespace-pre-line">
        {bio.body}
      </p>

      {/* CTA Buttons */}
      <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-8 sm:flex sm:flex-wrap sm:gap-3">
        {[
          { label: "Projects", file: "projects.js", icon: "📁", accent: "#7dcfff" },
          { label: "About Me", file: "about.html", icon: "👤", accent: "#9ece6a" },
          { label: "Contact", file: "contact.css", icon: "✉", accent: "#f7768e" },
        ].map((cta) => (
          <button
            key={cta.file}
            onClick={() => onNavigate(cta.file)}
            className="rounded border border-tn-border bg-tn-bg-panel px-3 py-2.5 text-[12px] font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-tn-bg-hover sm:px-4 sm:py-2 sm:text-[13px]"
            style={{ color: cta.accent }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `${cta.accent}99`;
              e.currentTarget.style.boxShadow = `0 6px 20px -6px ${cta.accent}66`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "";
              e.currentTarget.style.boxShadow = "";
            }}
          >
            {cta.icon} {cta.label}
          </button>
        ))}
      </div>

      {/* STATS SECTION (FIXED WIDTH) */}
      <div className="mt-8 w-full">
        <div className="grid w-full grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-4 sm:gap-4">
          {bio.stats.map((stat) => (
            <div
              key={stat.label}
              className="w-full rounded border border-tn-border bg-tn-bg-panel p-3 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-tn-green/50 hover:shadow-[0_8px_24px_-10px_rgba(158,206,106,0.4)] sm:p-4"
            >
              <p className="text-base font-semibold text-tn-green drop-shadow-[0_0_10px_rgba(158,206,106,0.35)] sm:text-lg">
                {stat.value}
              </p>
              <p className="text-[10px] text-tn-muted sm:text-[11px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SOCIAL LINKS */}
      <div className="mt-6 pb-6 sm:mt-8">
        <SocialLinksBar />
      </div>
    </article>
  );
}
