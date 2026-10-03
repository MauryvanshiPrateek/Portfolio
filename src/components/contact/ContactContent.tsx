"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { CardSpotlight } from "@/components/ui/CardSpotlight";
import { Mail, FileText, Send, CheckCircle2 } from "lucide-react";
import { socialLinks } from "@/data/navigation";
import { ease } from "@/lib/animations";

// Inline SVG icons for brands not in this lucide-react version
const GitHubIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.66 1.66 0 1 0-.01 3.32 1.66 1.66 0 0 0 .01-3.32Z" />
  </svg>
);

const contactCards = [
  {
    id: "email",
    label: "EMAIL",
    IconComponent: Mail,
    value: "mauryvanshiprateek@gmail.com",
    href: socialLinks.email,
    cta: "Start a conversation →",
    color: "text-accent",
    borderColor: "border-accent/40",
  },
  {
    id: "linkedin",
    label: "LINKEDIN",
    IconComponent: LinkedInIcon,
    value: "TODO: Add LinkedIn URL",
    href: socialLinks.linkedin,
    cta: "View profile ↗",
    color: "text-success",
    borderColor: "border-success/40",
  },
  {
    id: "github",
    label: "GITHUB",
    IconComponent: GitHubIcon,
    value: "MauryvanshiPrateek",
    href: socialLinks.github,
    cta: "View repositories ↗",
    color: "text-text-secondary",
    borderColor: "border-border",
  },
  {
    id: "resume",
    label: "RÉSUMÉ",
    IconComponent: FileText,
    value: "Full interactive résumé",
    href: "/resume",
    cta: "Open résumé ↗",
    color: "text-warning",
    borderColor: "border-warning/40",
  },
];

export function ContactContent() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Encode as mailto until backend is set up
    const subject = encodeURIComponent(`Portfolio enquiry from ${formState.name}`);
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`);
    window.open(`mailto:mauryvanshiprateek@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
  };

  return (
    <main className="py-12 sm:py-16 lg:py-20 px-5 md:px-8 lg:px-10">
      <div className="max-w-[1280px] mx-auto space-y-16">

        {/* Header */}
        <div className="max-w-2xl space-y-4">
          <div className="font-mono text-xs text-accent uppercase tracking-widest">
            07 / CONTACT
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text leading-[0.97]">
            Let&apos;s talk.
          </h1>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            Whether it&apos;s an AI project, engineering opportunity, collaboration or something interesting — I&apos;m open to hearing from you.
          </p>
        </div>

        {/* Contact Method Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactCards.map((card, idx) => {
            const Icon = card.IconComponent;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08, ease: ease.standard }}
              >
                <a
                  href={card.href}
                  target={card.id !== "resume" ? "_blank" : undefined}
                  rel="noreferrer"
                >
                  <CardSpotlight className={`p-5 border ${card.borderColor} group cursor-pointer h-full`}>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className={`font-mono text-[11px] uppercase tracking-widest font-bold ${card.color}`}>
                          {card.label}
                        </span>
                        <span className={card.color}><Icon /></span>
                      </div>
                      <div className="text-xs text-text-secondary font-mono break-all">{card.value}</div>
                      <div className={`text-xs font-mono ${card.color} group-hover:underline`}>
                        {card.cta}
                      </div>
                    </div>
                  </CardSpotlight>
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Optional Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-t border-border pt-12">
          <div className="lg:col-span-5 space-y-3">
            <div className="font-mono text-xs text-text-muted uppercase tracking-widest">OR SEND A MESSAGE</div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text">
              Quick message
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              Drop a note and it will open your email client. I read and respond to everything relevant.
            </p>
            <div className="pt-4 font-mono text-xs text-text-muted space-y-1">
              <div>Good reasons to reach out:</div>
              <div className="text-text-secondary space-y-0.5 pl-2">
                <div>→ AI/ML engineering opportunities</div>
                <div>→ Technical project collaboration</div>
                <div>→ Internship enquiries</div>
                <div>→ Something genuinely interesting</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center gap-4 p-10 rounded-[16px] border border-success/40 bg-success/5 text-center"
              >
                <CheckCircle2 className="w-10 h-10 text-success" />
                <div className="text-lg font-bold text-text">Message prepared.</div>
                <div className="text-sm text-text-secondary">Your email client should have opened. Speak soon.</div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-text-muted uppercase tracking-wider" htmlFor="contact-name">
                      NAME
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                      placeholder="Your name"
                      className="w-full h-11 px-4 rounded-[10px] border border-border bg-surface text-text text-sm placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-text-muted uppercase tracking-wider" htmlFor="contact-email">
                      EMAIL
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                      placeholder="your@email.com"
                      className="w-full h-11 px-4 rounded-[10px] border border-border bg-surface text-text text-sm placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-text-muted uppercase tracking-wider" htmlFor="contact-message">
                    MESSAGE
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={6}
                    value={formState.message}
                    onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                    placeholder="What would you like to discuss?"
                    className="w-full px-4 py-3 rounded-[10px] border border-border bg-surface text-text text-sm placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="h-11 px-6 rounded-[10px] bg-accent text-white font-mono text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(77,141,255,0.25)] transition-all duration-200 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Prepare email</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
