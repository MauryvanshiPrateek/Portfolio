"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { useTheme } from "next-themes";
import {
  FolderKanban,
  User,
  Briefcase,
  Cpu,
  Trophy,
  FileText,
  Mail,
  Download,
  SunMoon,
} from "lucide-react";
import { socialLinks } from "@/data/navigation";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        // If user is typing in an input, don't hijack unless cmd/ctrl
        if (
          e.key === "/" &&
          (e.target instanceof HTMLInputElement ||
            e.target instanceof HTMLTextAreaElement)
        ) {
          return;
        }
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-20 sm:pt-28 px-4 animate-in fade-in duration-150"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-[560px] rounded-[16px] border border-border bg-surface shadow-2xl overflow-hidden text-text"
        onClick={(e) => e.stopPropagation()}
      >
        <Command
          className="w-full flex flex-col"
          loop
        >
          <div className="flex items-center border-b border-border px-4 py-3 gap-2">
            <span className="font-mono text-xs text-text-muted">❯</span>
            <Command.Input
              autoFocus
              placeholder="Type a command or search sections..."
              className="w-full bg-transparent text-sm placeholder:text-text-muted text-text outline-none"
            />
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono border border-border rounded text-text-muted bg-surface-elevated">
              ESC
            </kbd>
          </div>

          <Command.List className="max-h-[360px] overflow-y-auto p-2">
            <Command.Empty className="py-6 text-center text-sm font-mono text-text-muted">
              No results found.
            </Command.Empty>

            <Command.Group heading="Navigation" className="text-[11px] font-mono uppercase text-text-muted px-2 py-1.5">
              <Command.Item
                onSelect={() => runCommand(() => router.push("/projects"))}
                className="flex items-center gap-3 px-3 py-2.5 rounded-[10px] text-sm text-text-secondary hover:text-text hover:bg-surface-elevated cursor-pointer transition-colors"
              >
                <FolderKanban className="w-4 h-4 text-accent" />
                <span>Work / Projects</span>
                <span className="ml-auto font-mono text-[10px] text-text-muted">/projects</span>
              </Command.Item>

              <Command.Item
                onSelect={() => runCommand(() => router.push("/about"))}
                className="flex items-center gap-3 px-3 py-2.5 rounded-[10px] text-sm text-text-secondary hover:text-text hover:bg-surface-elevated cursor-pointer transition-colors"
              >
                <User className="w-4 h-4 text-accent" />
                <span>About</span>
                <span className="ml-auto font-mono text-[10px] text-text-muted">/about</span>
              </Command.Item>

              <Command.Item
                onSelect={() => runCommand(() => router.push("/experience"))}
                className="flex items-center gap-3 px-3 py-2.5 rounded-[10px] text-sm text-text-secondary hover:text-text hover:bg-surface-elevated cursor-pointer transition-colors"
              >
                <Briefcase className="w-4 h-4 text-accent" />
                <span>Experience / TPC</span>
                <span className="ml-auto font-mono text-[10px] text-text-muted">/experience</span>
              </Command.Item>

              <Command.Item
                onSelect={() => runCommand(() => router.push("/skills"))}
                className="flex items-center gap-3 px-3 py-2.5 rounded-[10px] text-sm text-text-secondary hover:text-text hover:bg-surface-elevated cursor-pointer transition-colors"
              >
                <Cpu className="w-4 h-4 text-accent" />
                <span>Capabilities & Skills</span>
                <span className="ml-auto font-mono text-[10px] text-text-muted">/skills</span>
              </Command.Item>

              <Command.Item
                onSelect={() => runCommand(() => router.push("/achievements"))}
                className="flex items-center gap-3 px-3 py-2.5 rounded-[10px] text-sm text-text-secondary hover:text-text hover:bg-surface-elevated cursor-pointer transition-colors"
              >
                <Trophy className="w-4 h-4 text-accent" />
                <span>Achievements</span>
                <span className="ml-auto font-mono text-[10px] text-text-muted">/achievements</span>
              </Command.Item>

              <Command.Item
                onSelect={() => runCommand(() => router.push("/resume"))}
                className="flex items-center gap-3 px-3 py-2.5 rounded-[10px] text-sm text-text-secondary hover:text-text hover:bg-surface-elevated cursor-pointer transition-colors"
              >
                <FileText className="w-4 h-4 text-accent" />
                <span>Interactive Résumé</span>
                <span className="ml-auto font-mono text-[10px] text-text-muted">/resume</span>
              </Command.Item>

              <Command.Item
                onSelect={() => runCommand(() => router.push("/contact"))}
                className="flex items-center gap-3 px-3 py-2.5 rounded-[10px] text-sm text-text-secondary hover:text-text hover:bg-surface-elevated cursor-pointer transition-colors"
              >
                <Mail className="w-4 h-4 text-accent" />
                <span>Contact / Start a Conversation</span>
                <span className="ml-auto font-mono text-[10px] text-text-muted">/contact</span>
              </Command.Item>
            </Command.Group>

            <Command.Group heading="Actions" className="text-[11px] font-mono uppercase text-text-muted px-2 py-1.5 mt-2">
              <Command.Item
                onSelect={() => runCommand(() => window.open(socialLinks.resume, "_blank"))}
                className="flex items-center gap-3 px-3 py-2.5 rounded-[10px] text-sm text-text-secondary hover:text-text hover:bg-surface-elevated cursor-pointer transition-colors"
              >
                <Download className="w-4 h-4 text-text-muted" />
                <span>Download Résumé (PDF)</span>
              </Command.Item>

              <Command.Item
                onSelect={() => runCommand(() => setTheme(resolvedTheme === "dark" ? "light" : "dark"))}
                className="flex items-center gap-3 px-3 py-2.5 rounded-[10px] text-sm text-text-secondary hover:text-text hover:bg-surface-elevated cursor-pointer transition-colors"
              >
                <SunMoon className="w-4 h-4 text-text-muted" />
                <span>Toggle Light / Dark Theme</span>
              </Command.Item>
            </Command.Group>
          </Command.List>

          <div className="border-t border-border px-4 py-2 bg-surface-elevated/50 flex items-center justify-between text-[11px] font-mono text-text-muted">
            <span>Navigation: ↑ ↓ · Select: ↵</span>
            <span>Mauryvanshi Prateek</span>
          </div>
        </Command>
      </div>
    </div>
  );
}
