import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          Work <span className="gradient-text">Experience</span>
        </h2>
        
        <div className="glass-card rounded-2xl p-8 sm:p-10 hover-lift">
          <div className="flex items-start gap-6">
            <div className="hidden sm:block p-4 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20">
              <Briefcase className="h-8 w-8 text-accent" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">Software Development Intern</h3>
              <div className="flex items-center gap-3 mb-4">
                <p className="text-accent font-semibold">KodNest Technologies</p>
                <a
                  href="https://www.kodnest.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors underline"
                >
                  Visit
                </a>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  As a Software Development Intern at KodNest Technologies, I gained hands-on 
                  experience in full-stack development, working on real-world projects that 
                  enhanced my technical skills and professional growth.
                </p>
                
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-accent mr-2 mt-1">●</span>
                    <span>Developed and maintained web applications using <strong className="text-foreground">Java</strong>, 
                    <strong className="text-foreground"> Spring Boot</strong>, and <strong className="text-foreground">React</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 mt-1">●</span>
                    <span>Designed and optimized <strong className="text-foreground">MySQL</strong> database schemas for improved performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 mt-1">●</span>
                    <span>Collaborated with cross-functional teams on <strong className="text-foreground">frontend</strong> and 
                    <strong className="text-foreground"> backend integration</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 mt-1">●</span>
                    <span>Conducted <strong className="text-foreground">manual testing</strong> to ensure high-quality deliverables</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 mt-1">●</span>
                    <span>Participated in code reviews and implemented best practices for clean, maintainable code</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
