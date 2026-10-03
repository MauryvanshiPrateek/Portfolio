"use client";

import { useEffect } from "react";
import Link from "next/link";
import { socialLinks } from "@/data/navigation";

export function Footer() {
  useEffect(() => {
    // Easter Egg #2
    console.log("still debugging");
  }, []);

  return (
    <footer className="border-t border-border bg-background py-16 px-5 md:px-8 lg:px-10 mt-auto">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
        <div className="space-y-3">
          <div className="text-[13px] font-mono tracking-widest text-accent font-semibold uppercase">
            Mauryvanshi Prateek
          </div>
          <div className="text-xl md:text-2xl font-bold tracking-tight text-text">
            AI · DATA · SOFTWARE
          </div>
          <div className="text-sm text-text-muted font-mono">
            B.Tech (Hons.) CSE — AI · CSVTU
          </div>
        </div>

        <div className="flex flex-col md:items-end gap-4">
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-text-secondary">
            <a
              href={socialLinks.email}
              className="hover:text-accent transition-colors"
            >
              Email
            </a>
            <span className="text-border">·</span>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-border">·</span>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-colors"
            >
              GitHub
            </a>
            <span className="text-border">·</span>
            <Link href="/resume" className="hover:text-accent transition-colors">
              Résumé
            </Link>
          </div>

          <div className="text-xs text-text-muted">
            Built with curiosity, questionable amounts of debugging, and too much coffee.
          </div>
        </div>
      </div>
    </footer>
  );
}
