import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Job Application Tracker",
      description:
        "Job searching without a system means losing track of who you spoke to, what you sent, and when to follow up. Job Tracker is a personal API that brings structure to the chaos — application statuses that reflect reality, automatic follow-up reminders, and analytics that show you whether your CV, your targeting, or your interviews are the actual problem",
      technologies: [
        "Next.js",
        "FastAPI",
        "PostgreSQL",
        "Celery",
        "Docker",
        "Redis",
      ],
      links: {
        demo: "https://alhaji1992-job-tracker-app-celery-worker-and-beat.hf.space/docs",
        github: "https://github.com/AlhajiTaibu/job_application_tracker",
      },
    },
    {
      title: "Caixa - Bin Bags Subscription Platform",
      description:
        "Bin Bags Subscription platform - a service for managing waste collection subscriptions.",
      technologies: ["Django", "PostgreSQL", "Docker", "Github Actions"],
      links: {
        demo: "https://bin-bags-frontend-5m66.vercel.app/",
        github: "https://github.com",
      },
    },
  ];

  return (
    <section id="projects" className="py-32 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 space-y-8">
          <div>
            <span className="text-sm text-accent font-bold uppercase tracking-widest">
              Featured Projects
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-balance leading-tight mt-3">
              Selected Work & <span className="text-accent">Creations</span>
            </h2>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              {/* Floating effect on hover */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10"></div>

              {/* Card */}
              <div className="p-8 md:p-10 rounded-3xl bg-white/60 dark:bg-card/80 border border-border/40 group-hover:border-accent/50 backdrop-blur-sm transition-all duration-300 space-y-6 h-full flex flex-col">
                {/* Header */}
                <div>
                  <div className="inline-flex px-4 py-2 rounded-xl bg-accent/15 mb-4">
                    <span className="text-xs font-bold text-accent uppercase tracking-wider">
                      Case Study
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-foreground group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-foreground/70 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="space-y-3 border-t border-border/20 pt-6">
                  <span className="text-xs font-bold text-foreground/60 uppercase tracking-wider">
                    Built With
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-2">
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-3 rounded-xl bg-accent/10 text-accent font-bold hover:bg-accent hover:text-white transition-all text-center text-sm flex items-center justify-center gap-2 group/link"
                  >
                    <span>Live Demo</span>
                    <ExternalLink
                      size={16}
                      className="group-hover/link:translate-x-1 transition-transform"
                    />
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-3 rounded-xl bg-accent/10 text-accent font-bold hover:bg-accent hover:text-white transition-all text-center text-sm flex items-center justify-center gap-2 group/link"
                  >
                    <span>GitHub</span>
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
