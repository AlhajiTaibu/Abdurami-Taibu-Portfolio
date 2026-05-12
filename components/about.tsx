export function About() {
  const skills = [
    "Python",
    "Java",
    "Scala",
    "PHP",
    "Django",
    "FastAPI",
    "Spring Boot",
    "React",
    "PostgreSQL",
    "Next.js",
    "Node.js",
    "AWS",
    "Docker",
    "CI/CD",
    "System Design",
    "Test-Driven Development",
  ];

  return (
    <section id="about" className="py-32 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <span className="text-sm text-accent font-bold uppercase tracking-widest">
            About Me
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-balance leading-tight mt-3">
            Full-Stack <span className="text-accent">Engineer</span> &<br />
            Product <span className="text-accent">Innovator</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {/* Bio */}
          <div className="space-y-6">
            <p className="text-lg text-foreground/70 leading-relaxed font-medium">
              I&apos;m a full-stack engineer with 5+ years building products
              that scale. My passion lies in creating elegant solutions to
              complex problems using modern web technologies.
            </p>
            <p className="text-foreground/70 leading-relaxed font-medium">
              Proven expertise in system optimization, comprehensive testing
              implementation, and cross-functional collaboration. Track record
              of delivering enterprise solutions, e-commerce platforms, and
              improving code quality through testing strategies and mentorship
            </p>
            <p className="text-foreground/70 leading-relaxed font-medium">
              I&apos;m an advocate for clean code, and continuous learning. I
              believe the best engineering comes from collaboration and a
              genuine commitment to excellence.
            </p>
          </div>

          {/* Skills & Stats */}
          <div className="space-y-8">
            {/* Skills Grid */}
            <div>
              <h3 className="text-sm font-bold text-accent uppercase tracking-widest mb-6">
                Core Competencies
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-3 rounded-xl bg-accent/10 text-foreground font-semibold text-sm hover:bg-accent/20 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Cards */}
            <div className="space-y-4 pt-4">
              <div className="px-6 py-4 rounded-2xl bg-white/60 dark:bg-card/80 border border-border/40">
                <div className="text-4xl font-black text-accent">5+</div>
                <p className="text-sm text-foreground/60 mt-2 font-semibold">
                  Years Experience
                </p>
              </div>
              <div className="px-6 py-4 rounded-2xl bg-white/60 dark:bg-card/80 border border-border/40">
                <div className="text-4xl font-black text-accent">10+</div>
                <p className="text-sm text-foreground/60 mt-2 font-semibold">
                  Projects Built
                </p>
              </div>
              <div className="px-6 py-4 rounded-2xl bg-white/60 dark:bg-card/80 border border-border/40">
                <div className="text-4xl font-black text-accent">100K+</div>
                <p className="text-sm text-foreground/60 mt-2 font-semibold">
                  Users Reached
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
