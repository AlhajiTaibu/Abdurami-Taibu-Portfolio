"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
        {/* Logo - Bold rounded */}
        <Link href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-accent rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow group-hover:scale-110 transform">
            <span className="text-accent-foreground font-bold text-lg">A</span>
          </div>
          <span className="hidden sm:block font-bold text-lg group-hover:text-accent transition-colors">
            Abdurami
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-foreground/70 hover:text-accent transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-accent rounded-full group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <a
            href="/Abdurami_Taibu_CV.pdf"
            download="Abdurami_Taibu_CV.pdf"
            className="flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent font-semibold rounded-xl hover:bg-accent hover:text-white transition-all text-sm"
          >
            <Download size={16} />
            <span>CV</span>
          </a>
        </div>

        {/* Right Side - Theme Toggle + Mobile Menu */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            className="md:hidden p-2 hover:bg-muted/30 rounded-xl transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/80 dark:bg-background/80 backdrop-blur-xl border-b border-border/20 md:hidden animate-fade-in-up">
            <div className="flex flex-col gap-4 px-6 py-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-semibold text-foreground/70 hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
