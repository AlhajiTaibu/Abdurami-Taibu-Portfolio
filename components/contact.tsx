import { Mail, Github, Linkedin, Twitter, ArrowRight } from "lucide-react";

export function Contact() {
  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/AlhajiTaibu",
      icon: Github,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/abdurami-alhaji-taibu/",
      icon: Linkedin,
    },
    {
      label: "Twitter",
      href: "https://x.com/alhajiarena",
      icon: Twitter,
    },
  ];

  return (
    <section id="contact" className="py-32 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-16">
          {/* Section Header */}
          <div>
            <span className="text-sm text-accent font-bold uppercase tracking-widest">
              Get In Touch
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-balance leading-tight mt-3">
              Let&apos;s Build Something{" "}
              <span className="text-accent">Amazing</span>
            </h2>
          </div>

          {/* Email CTA Card */}
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed font-medium max-w-2xl">
              I&apos;m always interested in hearing about new projects and
              opportunities. Whether you have a specific role in mind or just
              want to chat about technology, feel free to reach out.
            </p>
            <a
              href="mailto:abdurami.taibu@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white font-bold rounded-2xl hover:scale-105 hover:shadow-lg transition-all shadow-md"
            >
              <Mail size={20} />
              <span>Send Email</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="space-y-8">
            <div>
              <span className="text-sm text-accent font-bold uppercase tracking-widest">
                Connect
              </span>
              <p className="text-foreground/70 mt-2">
                Find me on these platforms
              </p>
            </div>

            <div className="flex gap-3 flex-wrap">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 w-12 h-12 rounded-2xl bg-accent/10 text-accent hover:bg-accent hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label={label}
                  title={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
