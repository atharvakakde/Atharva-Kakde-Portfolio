import { Github, Linkedin, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/atharvakakde", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/atharva-kakde-2569b034b/", label: "LinkedIn" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
            <span className="font-bold gradient-text">Atharva Kakde</span>
            <span className="text-muted-foreground text-sm">
              © {currentYear} All rights reserved.
            </span>
          </div>

          {/* Made with love */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> in India
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
