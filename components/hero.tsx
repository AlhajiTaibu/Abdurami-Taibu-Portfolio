import { Download } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-32 px-6 md:px-8 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl w-full space-y-10 text-center animate-fade-in-up relative z-10">
        {/* Floating Badge */}
        <div className="inline-block animate-bounce-subtle">
          <div className="px-6 py-3 rounded-full bg-accent/20 border border-accent/40 text-accent font-bold text-sm">
            ✨ Open for Opportunities
          </div>
        </div>

        {/* Main Headline - Bold & Large */}
        <div className="space-y-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-balance leading-tight">
            Full-Stack <span className="text-accent">Engineer</span> &<br />
            <span className="text-accent">Product Builder</span>
          </h1>

          <p className="text-lg md:text-2xl text-foreground/70 max-w-2xl mx-auto font-semibold leading-relaxed">
            I create beautiful, scalable digital products with 5+ years of
            experience in modern web architecture and cloud infrastructure.
          </p>
        </div>

        {/* CTA Buttons - Rounded Bold */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <a
            href="#projects"
            className="px-8 py-4 bg-accent text-white font-bold rounded-2xl hover:scale-105 hover:shadow-2xl transition-all text-base shadow-lg hover:-translate-y-1"
          >
            See My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white/60 dark:bg-card text-foreground font-bold rounded-2xl hover:scale-105 hover:shadow-lg transition-all text-base border-2 border-accent/30 hover:border-accent"
          >
            Let's Talk
          </a>
          <a
            href="/Alex_Chen_CV.txt"
            download="Alex_Chen_CV.txt"
            className="flex items-center gap-2 px-8 py-4 bg-accent/10 text-accent font-bold rounded-2xl hover:scale-105 hover:bg-accent/20 transition-all text-base border-2 border-accent/30"
          >
            <Download size={18} />
            Download CV
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-20 animate-bounce-subtle">
          <svg
            className="w-6 h-6 text-accent mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
