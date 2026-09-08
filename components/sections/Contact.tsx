"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { contact, person, social } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Hello Ali — from ${name || "your site"}`,
    );
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          index="06"
          eyebrow="contact.sh"
          title="Let’s build something complete."
          description={`${person.availability}. Based in ${contact.location}.`}
        />

        <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
          <Reveal>
            <ul className="space-y-5">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="group flex items-center gap-4"
                >
                  <Mail size={16} className="text-bronze" />
                  <span className="text-lg text-paper transition-colors group-hover:text-bronze-2">
                    {contact.email}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={contact.phoneHref}
                  className="group flex items-center gap-4"
                >
                  <Phone size={16} className="text-bronze" />
                  <span className="text-lg text-paper transition-colors group-hover:text-bronze-2">
                    {contact.phone}
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-4 text-muted">
                <MapPin size={16} className="text-bronze" />
                <span>{contact.location}</span>
              </li>
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              {social.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="border border-line px-4 py-2 text-sm text-paper transition-colors hover:border-bronze hover:text-bronze"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="border border-line bg-ink-2/50 p-6 backdrop-blur-[2px] md:p-8"
            >
              <p className="mb-6 text-sm text-muted">
                This form opens your email client. Nothing is sent from this
                site.
              </p>
              <label className="mb-4 block" htmlFor="contact-name">
                <span className="mb-2 block font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                  Your name
                </span>
                <input
                  id="contact-name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-line bg-ink px-3 py-3 text-paper outline-none focus:border-bronze"
                  autoComplete="name"
                />
              </label>
              <label className="mb-6 block" htmlFor="contact-message">
                <span className="mb-2 block font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                  Message
                </span>
                <textarea
                  id="contact-message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  className="w-full resize-y border border-line bg-ink px-3 py-3 text-paper outline-none focus:border-bronze"
                />
              </label>
              <button
                type="submit"
                className="bg-bronze px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-bronze-2"
              >
                Open email to Ali
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
