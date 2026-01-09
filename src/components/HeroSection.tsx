import { ArrowDown, Eye, Mail } from "lucide-react";
import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-accent/10 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-lavender/30 rounded-full blur-3xl animate-pulse-soft" />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/80 backdrop-blur-sm border border-primary/10 mb-8 animate-fade-in-up opacity-0">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Available for Internships</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in-up opacity-0 stagger-1">
            Hi, I'm{" "}
            <span className="gradient-text">Atharva Kakde</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground font-medium mb-6 animate-fade-in-up opacity-0 stagger-2">
            Computer Science Engineer | Full-Stack Developer | AI/ML Enthusiast
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up opacity-0 stagger-3">
            Passionate about crafting innovative digital solutions that bridge the gap between 
            cutting-edge technology and real-world impact. I specialize in building scalable 
            web applications and exploring the frontiers of artificial intelligence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up opacity-0 stagger-4">
            <Button variant="hero" asChild>
              <a href="#contact">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </a>
            </Button>
            <Button variant="hero-outline" asChild>
              <a href="/Atharva_Kakde_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Eye className="w-5 h-5 mr-2" />
                Open CV
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors animate-fade-in-up opacity-0 stagger-5"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
