import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Simple Calculator",
      description: "A Simple and responsive calculator app built with React for basic calculator operations.",
      tech: ["React.js", "JavaScript"],
      github: "https://github.com/HansLeon-stack/HansLeon-stack-Simple-Calculator.git",
      featured: true
    },
    {
      title: "Willify",
      description: "Simple music player website built using HTML and CSS. Features an interactive and clean interface similar to modern music apps, focusing on responsive design and user experience.",
      tech: ["HTML", "CSS"],
      github: "#",
      featured: false
    },
    {
      title: "Pacman Game",
      description: "Classic Pacman game created using JavaScript. Players control Pacman to collect points while avoiding ghosts, offering a simple fun gameplay experience.",
      tech: ["JavaScript"],
      github: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in">
            Featured Projects
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in web development
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className={`p-6 shadow-elegant hover:shadow-glow transition-all group ${
                  project.featured ? 'md:col-span-2 lg:col-span-3' : ''
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className={project.featured ? 'md:flex gap-8' : ''}>
                  <div className={project.featured ? 'flex-1' : ''}>
                    <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={`flex gap-3 ${project.featured ? 'md:flex-col md:justify-center' : ''}`}>
                    {project.github !== "#" && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        asChild
                        className="hover:bg-primary hover:text-primary-foreground"
                      >
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="w-4 h-4" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {project.featured && (
                      <Button 
                        size="sm"
                        asChild
                        className="shadow-elegant"
                      >
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Project
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              asChild
              className="hover:bg-primary hover:text-primary-foreground"
            >
              <a 
                href="https://github.com/HansLeon-stack"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                View More on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
