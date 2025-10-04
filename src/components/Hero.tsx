import { Github, Linkedin, Mail, Phone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-subtle relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-primary opacity-10 animate-pulse" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Hans Leonard
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Computer Science Student
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            3rd-year student at Binus University with a passion for building innovative web applications. 
            Proficient in modern technologies and enthusiastic about learning new skills.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="shadow-elegant hover:shadow-glow transition-all"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              asChild
            >
              <a href="/Hans_Leonard_CV.pdf" download="Hans_Leonard_CV.pdf">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center">
            <a 
              href="https://github.com/HansLeon-stack" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all shadow-md hover:shadow-elegant"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/hans-leonard-839169346/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all shadow-md hover:shadow-elegant"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:hans.leonardd@gmail.com"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all shadow-md hover:shadow-elegant"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a 
              href="tel:+6281163277666"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all shadow-md hover:shadow-elegant"
            >
              <Phone className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
