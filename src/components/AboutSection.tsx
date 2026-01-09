import { Code2, Palette, Shield, Brain } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AIML & Intelligent Systems",
    description: "Developing intelligent models and leveraging machine learning to solve complex problems and automate innovations.",
  },
  {
    icon: Code2,
    title: "Web Development & UI/UX",
    description: "Building responsive, robust full-stack applications with intuitive, user-centered designs using modern frameworks.",
  },
  {
    icon: Shield,
    title: "Cybersecurity & Data",
    description: "Applying data analytics, cloud tools, and security principles for robust, scalable, and secure digital solutions.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lavender/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate developer with a vision to create impactful technology solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Passionate Developer |{" "}
              <span className="gradient-text">Designer</span> | Innovator
            </h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a B.Tech Computer Science and Engineering student with a minor in 
                Artificial Intelligence and Machine Learning. My journey in tech is driven 
                by an insatiable curiosity and a commitment to building solutions that matter.
              </p>
              <p>
                With expertise spanning full-stack development, UI/UX design, Cybersecurity, 
                and intelligent systems, I focus on creating applications that are not just 
                functional but also secure, scalable, and delightful to use. I believe great 
                technology should be accessible to everyone.
              </p>
              <p>
                Currently seeking internship opportunities where I can contribute my skills, 
                learn from industry experts, and grow as a professional developer.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center glass-card p-4">
                <div className="text-2xl md:text-3xl font-bold gradient-text">5+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center glass-card p-4">
                <div className="text-2xl md:text-3xl font-bold gradient-text">2</div>
                <div className="text-sm text-muted-foreground">Internships</div>
              </div>
              <div className="text-center glass-card p-4">
                <div className="text-2xl md:text-3xl font-bold gradient-text">40+</div>
                <div className="text-sm text-muted-foreground">Certificates</div>
              </div>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="glass-card-hover p-6 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent group-hover:bg-primary/10 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
