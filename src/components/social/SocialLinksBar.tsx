import { contact } from "@/data/portfolio";
import SocialIcon, {
  socialDisplayNameMap,
  socialIconColorMap,
} from "./SocialIcon";

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
          className="inline-flex items-center gap-2 rounded border border-tn-border bg-tn-bg-panel px-2.5 py-2 text-[11px] text-tn-muted transition-colors hover:border-tn-muted/60 hover:bg-tn-bg-hover hover:text-tn-fg sm:px-3 sm:text-[12px]"
        >
          <SocialIcon
            platform={social.platform}
            className={socialIconColorMap[social.platform]}
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
