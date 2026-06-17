import { contact } from "@/data/portfolio";
import SocialIcon, {
  socialDisplayNameMap,
  socialIconColorMap,
} from "./SocialIcon";

const socialGlowMap: Record<string, string> = {
  email: "rgba(158,206,106,0.45)",
  linkedin: "rgba(122,162,247,0.45)",
  github: "rgba(192,202,245,0.35)",
};

export default function SocialLinksBar() {
  const socials = contact.homeSocialOrder
    .map((platform) => contact.socials.find((s) => s.platform === platform))
    .filter((social): social is (typeof contact.socials)[number] => !!social);

  return (
    <div className="flex flex-wrap gap-2">
      {socials.map((social) => (
        <a
          key={social.id}
          href={social.url}
          target={social.platform === "email" ? undefined : "_blank"}
          rel={
            social.platform === "email" ? undefined : "noopener noreferrer"
          }
          aria-label={socialDisplayNameMap[social.platform]}
          className="group inline-flex items-center gap-2 rounded border border-tn-border bg-tn-bg-panel px-2.5 py-2 text-[11px] text-tn-muted transition-all duration-200 hover:-translate-y-0.5 hover:bg-tn-bg-hover hover:text-tn-fg sm:px-3 sm:text-[12px]"
          style={{ "--glow": socialGlowMap[social.platform] } as React.CSSProperties}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = `0 6px 18px -6px ${socialGlowMap[social.platform]}`;
            e.currentTarget.style.borderColor = socialGlowMap[social.platform].replace("0.45", "0.6").replace("0.35", "0.5");
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "";
            e.currentTarget.style.borderColor = "";
          }}
        >
          <SocialIcon
            platform={social.platform}
            className={`${socialIconColorMap[social.platform]} transition-transform duration-200 group-hover:scale-110`}
            size={15}
          />
          <span className="whitespace-nowrap">
            {socialDisplayNameMap[social.platform]}
          </span>
        </a>
      ))}
    </div>
  );
}
