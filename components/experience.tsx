export function Experience() {
  const experiences = [
    {
      company: "4-Sure Technology Solutions Proprietary Limited",
      role: "Software Engineer",
      period: "2022 - Present",
      description:
        "Architected and delivered enhanced claims processing feature for insurance clients, reducing processing time by 30% and significantly improving operational workflow efficiency",
      technologies: ["Django", "React", "PostgreSQL", "AWS"],
    },
    {
      company: "Turntabl Ghana Limited",
      role: "Software Engineer",
      period: "2021 - 2022",
      description:
        "Deployed as contingent software engineer at Morgan Stanley, where I contributed to critical system improvements using Scala, gaining exposure to enterprise-level financial technology systems.",
      technologies: ["Scala", "Java", "MongoDB", "PostgreSQL"],
    },
    {
      company: "AmaliTech Services",
      role: "Junior Associate",
      period: "2020 - 2021",
      description:
        "Developed RESTful APIs and backend services for mobile and web applications. Designed and implemented database schemas handling millions of transactions.",
      technologies: ["Django", "PostgreSQL", "React", "Docker", "AWS"],
    },
  ];

  return (
    <section id="experience" className="py-32 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <span className="text-sm text-accent font-bold uppercase tracking-widest">
            Experience
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-balance leading-tight mt-3">
            Professional <span className="text-accent">Journey</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="group">
              {/* Card */}
              <div className="p-8 md:p-10 rounded-2xl bg-white/60 dark:bg-card/80 border border-border/40 group-hover:border-accent/50 group-hover:shadow-lg transition-all duration-300 space-y-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-black text-foreground group-hover:text-accent transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <p className="text-accent text-sm font-bold mt-2 uppercase tracking-wider">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground font-bold uppercase tracking-widest whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <p className="text-foreground/70 leading-relaxed font-medium">
                  {exp.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1.5 rounded-lg bg-accent/10 text-accent font-semibold group-hover:bg-accent/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
