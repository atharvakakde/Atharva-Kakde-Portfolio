import { useState } from "react";

type SkillCategory = "All" | "Frontend" | "Backend" | "Tools";

interface Skill {
  name: string;
  level: number;
  category: SkillCategory[];
}

const skills: Skill[] = [
  { name: "HTML/CSS", level: 95, category: ["Frontend"] },
  { name: "JavaScript", level: 90, category: ["Frontend", "Backend"] },
  { name: "React", level: 88, category: ["Frontend"] },
  { name: "Tailwind CSS", level: 92, category: ["Frontend"] },
  { name: "TypeScript", level: 82, category: ["Frontend", "Backend"] },
  { name: "Node.js", level: 80, category: ["Backend"] },
  { name: "Express", level: 78, category: ["Backend"] },
  { name: "SQL/Databases", level: 85, category: ["Backend"] },
  { name: "Python", level: 85, category: ["Backend", "Tools"] },
  { name: "Git & GitHub", level: 90, category: ["Tools"] },
  { name: "Docker", level: 70, category: ["Tools"] },
  { name: "Figma", level: 85, category: ["Tools"] },
  { name: "VS Code", level: 95, category: ["Tools"] },
  { name: "AI/ML Tools", level: 75, category: ["Tools", "Backend"] },
];

const categories: SkillCategory[] = ["All", "Frontend", "Backend", "Tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("All");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category.includes(activeCategory)
  );

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden bg-gradient-soft">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-button"
                  : "bg-white/70 text-muted-foreground hover:bg-white hover:text-foreground border border-border/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass-card-hover p-5 group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {skill.name}
                </span>
                <span className="text-sm font-semibold gradient-text">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-primary progress-animate"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
