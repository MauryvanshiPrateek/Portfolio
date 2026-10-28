"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { socialLinks } from "@/data/navigation";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "@/lib/LanguageContext";
import { Menu, X, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  // Nav items using translation keys
  const navItems = [
    { href: "/",           labelKey: "nav.home" },
    { href: "/projects",   labelKey: "nav.projects" },
    { href: "/experience", labelKey: "nav.experience" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled
            ? "h-16 bg-background/85 backdrop-blur-md border-b border-border shadow-sm"
            : "h-[72px] bg-transparent border-b border-transparent"
        )}
      >
        <div className="max-w-[1280px] mx-auto h-full px-5 md:px-8 lg:px-10 flex items-center justify-between">
          {/* Logo / Name */}
          <Link
            href="/"
            className="group flex items-center gap-2 font-serif text-sm tracking-[0.25em] uppercase text-text hover:text-accent transition-colors duration-200"
            aria-label="Mauryvanshi Prateek — Home"
          >
            <span>MAURYVANSHI PRATEEK</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-3 lg:gap-5">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "font-serif tracking-[0.18em] text-[12px] uppercase transition-colors duration-200",
                    isActive
                      ? "text-accent font-semibold"
                      : "text-text-secondary hover:text-text"
                  )}
                >
                  {t(item.labelKey)}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Utilities (Contact, Language Toggle, CmdK cue) */}
          <div className="hidden md:flex items-center gap-2.5">
            <Link
              href="/contact"
              className="p-2 rounded-[10px] border border-border bg-surface text-text-secondary hover:border-accent hover:text-accent transition-colors duration-200"
              aria-label="Contact Mauryvanshi Prateek"
              title="Start a conversation"
            >
              <Mail className="w-4 h-4" />
            </Link>

            <LanguageToggle />

            {/* Quick Command Key hint */}
            <button
              onClick={() => {
                const event = new KeyboardEvent("keydown", {
                  key: "k",
                  metaKey: true,
                  bubbles: true,
                });
                document.dispatchEvent(event);
              }}
              className="px-2 py-1 rounded-[6px] border border-border bg-surface text-[11px] font-mono text-text-muted hover:text-text hover:border-accent transition-colors flex items-center gap-1 cursor-pointer"
              title="Open Command Palette (Cmd/Ctrl + K)"
              aria-label="Open command palette"
            >
              <span>⌘K</span>
            </button>
          </div>

          {/* Mobile Actions: Language Toggle + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 flex items-center justify-center rounded-[10px] border border-border bg-surface text-text hover:border-accent hover:text-accent transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden pt-24 px-6 pb-10 flex flex-col justify-between animate-in fade-in duration-200">
          <div className="flex flex-col gap-3">
            <div className="text-[11px] font-mono tracking-widest text-text-muted mb-2 uppercase">
              Navigation
            </div>
            {navItems.map((item, index) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{ animationDelay: `${index * 40}ms` }}
                  className={cn(
                    "min-h-[48px] flex items-center px-4 rounded-[12px] text-lg font-medium transition-colors border",
                    isActive
                      ? "text-accent bg-surface border-accent/40"
                      : "text-text border-transparent hover:border-border hover:bg-surface"
                  )}
                >
                  <span className="font-mono text-xs text-text-muted mr-3">
                    0{index + 1}
                  </span>
                  {t(item.labelKey)}
                </Link>
              );
            })}
          </div>

          <div className="pt-6 border-t border-border flex flex-col gap-3">
            <div className="text-xs font-mono text-text-muted">
              B.Tech (Hons.) CSE — Artificial Intelligence · CSVTU
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-text-secondary">
              <a
                href={socialLinks.email}
                className="hover:text-accent transition-colors"
              >
                Email
              </a>
              <span>·</span>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition-colors"
              >
                GitHub
              </a>
              <span>·</span>
              <Link href="/resume" className="hover:text-accent transition-colors">
                {t("nav.resume")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
