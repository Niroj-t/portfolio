"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { contact } from "@/data/portfolio";
import SocialIcon, { socialIconColorMap } from "@/components/social/SocialIcon";

function SocialRow({
  platform,
  label,
  handle,
  url,
}: (typeof contact.socials)[number]) {
  const iconColor = socialIconColorMap[platform];

  return (
    <a
      href={url}
      target={platform === "email" ? undefined : "_blank"}
      rel={platform === "email" ? undefined : "noopener noreferrer"}
      className="group flex items-center gap-3 rounded border border-tn-border bg-tn-bg-panel px-4 py-3 transition-colors hover:border-tn-muted/50 hover:bg-tn-bg-hover"
    >
      <SocialIcon platform={platform} className={`shrink-0 ${iconColor}`} />
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-semibold tracking-wider text-tn-fg">
          {label}
        </p>
        <p className="truncate text-[12px] text-tn-muted">{handle}</p>
      </div>
      <ExternalLink
        size={12}
        className="shrink-0 text-tn-muted opacity-0 transition-opacity group-hover:opacity-100"
      />
    </a>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const formspreeUrl = contact.formspreeId
    ? `https://formspree.io/f/${contact.formspreeId}`
    : null;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!formspreeUrl) {
      const name = data.get("name");
      const email = data.get("email");
      const subject = data.get("subject");
      const message = data.get("message");
      window.location.href = `mailto:${contact.socials[0].handle}?subject=${encodeURIComponent(String(subject || "Portfolio contact"))}&body=${encodeURIComponent(`From: ${name} <${email}>\n\n${message}`)}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(formspreeUrl, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="text-[12px] text-tn-comment">
          // YOUR_NAME <span className="text-tn-red">*</span>
        </label>
        <input
          name="name"
          type="text"
          required
          placeholder="string"
          className="mt-1.5 w-full rounded border border-tn-border bg-tn-bg-panel px-3 py-2.5 text-[13px] text-tn-fg outline-none placeholder:text-tn-muted/50 focus:border-tn-cyan/50"
        />
      </div>

      <div>
        <label className="text-[12px] text-tn-comment">
          // YOUR_EMAIL <span className="text-tn-red">*</span>
        </label>
        <input
          name="email"
          type="email"
          required
          placeholder="string"
          className="mt-1.5 w-full rounded border border-tn-border bg-tn-bg-panel px-3 py-2.5 text-[13px] text-tn-fg outline-none placeholder:text-tn-muted/50 focus:border-tn-cyan/50"
        />
      </div>

      <div>
        <label className="text-[12px] text-tn-comment">// SUBJECT</label>
        <input
          name="subject"
          type="text"
          placeholder="string"
          className="mt-1.5 w-full rounded border border-tn-border bg-tn-bg-panel px-3 py-2.5 text-[13px] text-tn-fg outline-none placeholder:text-tn-muted/50 focus:border-tn-cyan/50"
        />
      </div>

      <div>
        <label className="text-[12px] text-tn-comment">
          // MESSAGE <span className="text-tn-red">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="'''your message'''"
          className="mt-1.5 w-full resize-none rounded border border-tn-border bg-tn-bg-panel px-3 py-2.5 text-[13px] text-tn-fg outline-none placeholder:text-tn-muted/50 focus:border-tn-cyan/50"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded bg-tn-blue py-3 text-[13px] font-medium text-tn-bg-dark transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        * send_message()
      </button>

      {status === "sent" && (
        <p className="text-[12px] text-tn-green">// Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="text-[12px] text-tn-red">
          // Something went wrong. Try again or email directly.
        </p>
      )}

      <p className="text-[12px] text-tn-muted">
        // Powered by Formspree (lands directly in my inbox) :p
      </p>
    </form>
  );
}

export default function ContactView() {
  return (
    <section className="w-full max-w-4xl">
      <p className="text-[12px] text-tn-green sm:text-[13px]">
        /* contact.css - let&apos;s build something */
      </p>

      <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-wide text-tn-fg sm:mt-6 sm:text-4xl">
        Contact
      </h2>

      <p className="mt-2 text-[12px] text-tn-muted sm:text-[13px]">
        // {contact.tagline}
      </p>

      <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-10 sm:gap-10 lg:grid-cols-2">
        <div>
          <h3 className="mb-4 text-[11px] font-semibold tracking-widest text-tn-green">
            FIND ME ON
          </h3>
          <div className="space-y-2">
            {contact.socials.map((social) => (
              <SocialRow key={social.id} {...social} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-[11px] font-semibold tracking-widest text-tn-green">
            SEND A MESSAGE
          </h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
