import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        
        <div className="glass-card rounded-2xl p-8 sm:p-10 hover-lift">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <div className="w-full h-64 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                <span className="text-6xl">🏨</span>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Hostel Management System</h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A comprehensive full-stack web application designed to streamline hostel operations. 
                Features include user authentication, room allocation, student records management, 
                and a responsive UI for seamless user experience.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {["Python", "Python Flask", "SQL", "React", "Tailwind CSS"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <ul className="space-y-2 mb-6 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Full-stack architecture with MySQL database
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Secure authentication and authorization
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Complete CRUD operations for all entities
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Responsive and intuitive user interface
                </li>
              </ul>
              
              <Button
                variant="outline"
                className="glass-card hover-lift group"
                asChild
              >
                <a
                  href="https://github.com/Sandythedev11/HMS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  View Code
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
