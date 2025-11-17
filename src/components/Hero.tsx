import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
        <div className="mb-6 animate-float">
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium mb-4">
            👋 Welcome to my portfolio
          </span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Hi, I'm <span className="gradient-text">Sandeep Gouda</span>
        </h1>
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-muted-foreground">
          Full Stack Developer
        </h2>
        
        <p className="text-lg sm:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
          2025 Graduate
        </p>
        
        <p className="text-base sm:text-lg text-muted-foreground/80 mb-10 max-w-2xl mx-auto">
          Strong work ethic, adaptable, and fast learner passionate about building 
          impactful web applications
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-accent to-[hsl(217,91%,60%)] hover:opacity-90 transition-opacity group"
            asChild
          >
            <a href="/resume.pdf" download="Sandeep_Gouda_Resume.pdf">
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="glass-card hover-lift"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Mail className="mr-2 h-5 w-5" />
            Get in Touch
          </Button>
        </div>
        
        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com/Sandythedev11"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass-card hover-lift group"
          >
            <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://www.linkedin.com/in/sandeep-gouda-42b5ba299/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass-card hover-lift group"
          >
            <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
