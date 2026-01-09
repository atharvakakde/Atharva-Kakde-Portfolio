import { ArrowRight, Briefcase, Calendar, CheckCircle2 } from "lucide-react";

interface Internship {
  role: string;
  organization: string;
  duration: string;
  description: string;
  achievements: string[];
  skills: string[];
  type: "internship" | "simulation";
  orgLink?: string;
}

const internships: Internship[] = [
  {
    role: "UI/UX Intern",
    organization: "FirstBuy.com",
    orgLink: "https://first-buy.com",
    duration: "Aug 2025 - Feb 2026",
    description: "Designed user interfaces and improved user experience for e-commerce platform.",
    achievements: [
      "Designed intuitive user interfaces for the main e-commerce platform using Figma.",
      "Conducted user research and usability testing to improve navigation flow.",
      "Collaborated with the development team to ensure accurate design implementation."
    ],
    skills: ["Figma", "UI/UX Design", "Wireframing", "User Research"],
    type: "internship",
  },
  {
    role: "GenAI Virtual Internship",
    organization: "Google",
    duration: "Oct 2025 - Dec 2025",
    description: "Explored generative AI technologies and built practical applications.",
    achievements: [
      "Gained hands-on experience with Google's Generative AI tools and LLMs.",
      "Developed practical applications demonstrating prompt engineering techniques.",
      "Analyzed ethical considerations and best practices in AI deployment."
    ],
    skills: ["Generative AI", "LLMs", "Prompt Engineering", "Python"],
    type: "internship",
  },
];

export const InternshipsSection = () => {
  return (
    <section id="internships" className="py-20 md:py-32 relative overflow-hidden bg-gradient-soft">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Internship & Training</h2>
          <p className="section-subtitle">
            Professional experiences that shaped my career
          </p>
        </div>

        {/* Internships Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {internships.map((item, index) => (
            <div
              key={`${item.role}-${item.organization}`}
              className="glass-card p-8 group hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.role}
                  </h3>
                  {item.orgLink ? (
                    <a 
                      href={item.orgLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium gradient-text hover:underline"
                    >
                      {item.organization}
                    </a>
                  ) : (
                    <p className="text-lg font-medium gradient-text">
                      {item.organization}
                    </p>
                  )}
                </div>
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Duration & Type */}
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1.5 bg-secondary px-3 py-1 rounded-full">
                  <Calendar className="w-4 h-4" />
                  {item.duration}
                </span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                  Internship
                </span>
              </div>

              {/* Achievements */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Key Achievements</h4>
                <ul className="space-y-3">
                  {item.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-muted-foreground/90 text-sm leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-border/50">
                {item.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 text-xs font-medium rounded-md bg-accent/50 text-foreground/80">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
