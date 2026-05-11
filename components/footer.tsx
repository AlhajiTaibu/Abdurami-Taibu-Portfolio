export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/20 bg-white/50 dark:bg-card/50 backdrop-blur-sm py-16 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 pb-12 border-b border-border/20">
          {/* Branding */}
          <div className="space-y-4">
            <div className="w-10 h-10 bg-accent rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div>
              <p className="font-bold text-foreground">Abdurami Taibu</p>
              <p className="text-sm text-foreground/60">Full-stack Engineer</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <p className="text-xs font-bold text-foreground uppercase tracking-widest">
              Navigation
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="#about"
                className="text-sm text-foreground/70 hover:text-accent transition-colors font-medium"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-sm text-foreground/70 hover:text-accent transition-colors font-medium"
              >
                Projects
              </a>
              <a
                href="#experience"
                className="text-sm text-foreground/70 hover:text-accent transition-colors font-medium"
              >
                Experience
              </a>
              <a
                href="#contact"
                className="text-sm text-foreground/70 hover:text-accent transition-colors font-medium"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-4">
            <p className="text-xs font-bold text-foreground uppercase tracking-widest">
              Tech Stack
            </p>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Django, FastAPI, Spring Boot, Next.js, React, Node.js, PostgreSQL,
              Docker, AWS, and more. I&apos;m always exploring new technologies
              and staying up-to-date with the latest industry trends.
            </p>
          </div>

          {/* Status */}
          <div className="space-y-4">
            <p className="text-xs font-bold text-foreground uppercase tracking-widest">
              Status
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <p className="text-sm text-foreground/70">Available for work</p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground/50">
            © {currentYear} Abdurami Taibu. All rights reserved.
          </p>
          <p className="text-xs text-foreground/50">
            Crafted with passion • Designed to inspire
          </p>
        </div>
      </div>
    </footer>
  );
}
