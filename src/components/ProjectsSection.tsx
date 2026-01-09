import { ExternalLink, Github, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import inventoryImg from "./Inventory_icon.png";
import gamesImg from "./background_2pgames.png";
import portfolioThumbnail from "./portfolio_thumbnail.png";
import airQualityImg from "./air_quality_thumbnail.png";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

const manualProjects: Project[] = [
  {
    title: "AtharvaKakde Portfolio",
    description: "My personal portfolio website featuring a modern UI, dark mode, and seamless animations. Built with React, TypeScript, and Tailwind CSS.",
    image: portfolioThumbnail,
    tags: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/atharvakakde/AtharvaKakde-Portfolio",
  },
  {
    title: "Air Quality Trends Analysis Project",
    description: "Full-stack air quality analytics platform built with FastAPI, React, and MySQL. Aggregates multi-source data to visualize trends.",
    image: airQualityImg,
    tags: ["React", "FastAPI", "MySQL", "Data Visualization"],
    github: "https://github.com/atharvakakde/Air-Quality-Trends-Analysis-Project",
  },
  {
    title: "STOP2GO AgriChain",
    description: "A blockchain-based system for agricultural supply chains, providing end-to-end transparency. Tracks produce from farm to consumer, reduces fraud, and ensures food safety.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop",
    tags: ["Blockchain", "JavaScript", "Supply Chain"],
    github: "https://github.com/atharvakakde/STOP2GO-AGRICHAIN",
  },
  {
    title: "Inventory Management System",
    description: "JavaFX application demonstrating UI design with FXML, database connectivity (JDBC), and object-oriented programming concepts.",
    image: inventoryImg,
    tags: ["Java", "JavaFX", "JDBC", "Desktop"],
    github: "https://github.com/atharvakakde/Inventory-Management-System",
  },
  {
    title: "Python Chess Game",
    description: "A desktop-based chess application with a fully functional chessboard and standard chess rules, allowing two players to play against each other.",
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=600&h=400&fit=crop",
    tags: ["Python", "Chess", "Game Dev"],
    github: "https://github.com/atharvakakde/Python-Chess-Game",
  },
  {
    title: "2 Player Games Hub",
    description: "Desktop-based Python application using Tkinter for GUI and Pillow for image handling. Combines multiple classic and interactive two-player games.",
    image: gamesImg,
    tags: ["Python", "Tkinter", "Pillow", "Game Dev"],
    github: "https://github.com/atharvakakde/2-Player-Games-Hub-Python-Tkinter",
  },
  {
    title: "Restaurant Management System",
    description: "C++ console-based system with customer ordering, staff management, reservations, and inventory tracking. Built with OOP principles.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    tags: ["C++", "OOP", "Console App"],
    github: "https://github.com/atharvakakde/Restaurant-Management-System",
  },
];

export const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>(manualProjects);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/atharvakakde/repos');
        if (!response.ok) throw new Error('Failed to fetch projects');
        
        const repos = await response.json();
        
        // Filter out profile repo and process others
        const startRepos = repos.filter((repo: any) => repo.name !== 'atharvakakde');
        
        const allProjects = startRepos.map((repo: any) => {
          // Check if we have a manual entry for this repo
          const manualMatch = manualProjects.find(
            p => p.github?.toLowerCase() === repo.html_url.toLowerCase()
          );

          if (manualMatch) return manualMatch;

          // Create new project entry for others
          return {
            title: repo.name.replace(/-/g, ' '),
            description: repo.description || "A cool project on GitHub.",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop", // Default coding image
            tags: [repo.language || "Code", "GitHub"],
            github: repo.html_url,
            demo: repo.homepage
          };
        });

        // Add any manual projects that MIGHT NOT represent a public github repo (if any) or ensure strict priority
        // Actually, just mapping the repos handles "All GitHub Projects". 
        // But what if manualProjects has something NOT on github or private? 
        // The user said "Make my github Projects all appear".
        // The current map covers all public repos. 
        // If there are manual projects that are NOT in the fetched list (e.g. different URL or private), we should keep them?
        // Let's merge: All fetched repos (using manual data if match) + any manual projects NOT in fetched list.
        
        const mergedProjects = [...allProjects];
        
        // Add manual projects that weren't found in the API response (e.g. if API missed them or they are internal)
        manualProjects.forEach(manual => {
            if (!mergedProjects.find(p => p.title === manual.title || p.github === manual.github)) {
                mergedProjects.push(manual);
            }
        });

        // Custom Reordering Logic
        const reorderedProjects = [...mergedProjects];
        
        let portfolioProject: Project | undefined;
        let stop2goProject: Project | undefined;

        // Extract specific projects
        const pIdx = reorderedProjects.findIndex(p => p.title.toLowerCase().includes("portfolio"));
        if (pIdx > -1) portfolioProject = reorderedProjects.splice(pIdx, 1)[0];

        const sIdx = reorderedProjects.findIndex(p => p.title.toLowerCase().includes("stop2go"));
        if (sIdx > -1) stop2goProject = reorderedProjects.splice(sIdx, 1)[0];

        // Insert STOP2GO at 3rd position (index 2)
        if (stop2goProject) {
            const targetIndex = Math.min(2, reorderedProjects.length);
            reorderedProjects.splice(targetIndex, 0, stop2goProject);
        }

        // Insert Portfolio at the end
        if (portfolioProject) {
            reorderedProjects.push(portfolioProject);
        }

        setProjects(reorderedProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
        // Fallback to manual list if fetch fails
        setProjects(manualProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-accent/5 rounded-full blur-3xl translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Showcasing my journey through code and creativity
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card-hover overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Links */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {project.github && (
                    <a
                      href={project.github}
                      className="p-2 rounded-lg bg-white/90 hover:bg-white text-foreground transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="p-2 rounded-lg bg-white/90 hover:bg-white text-foreground transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-accent text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="gradient" size="lg" asChild>
            <a href="https://github.com/atharvakakde" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              Check My GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
